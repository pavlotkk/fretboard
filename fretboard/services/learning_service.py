import random
from typing import Optional

from fretboard.entities.user import User
from fretboard.music_theory import Key, Scale
from fretboard.music_theory.note import Note, Notes, Pitch
from fretboard.repositories.users import UserRepository


def scale_learn_session_id(
    notes: Optional[list[Note]] = None,
    pitches: Optional[list[Pitch]] = None,
    keys: Optional[list[Key]] = None,
) -> str:
    session_id = ""

    if notes:
        session_id += "".join([str(n) for n in notes])
    if pitches:
        session_id += "".join([p for p in pitches])
    if keys:
        session_id += "".join([k for k in keys])

    return session_id


class LearningService:
    def __init__(self, user: Optional[User] = None):
        self._user = user

    def get_all_scales_to_learn(self) -> list[Scale]:
        learning_scales = []

        for note_name in Notes:
            for pitch_name in Pitch.all():
                for scale_key_name in Key.all():
                    note = Note(note_name + pitch_name)
                    scale = Scale(note, scale_key_name)
                    learning_scales.append(scale)

        return learning_scales

    def get_scale_to_learn(
        self,
        notes: Optional[list[Note]] = None,
        pitches: Optional[list[Pitch]] = None,
        keys: Optional[list[Key]] = None,
    ) -> Scale:
        users_db = UserRepository()
        session_id = scale_learn_session_id(notes, pitches, keys)

        # get scales from user learning session
        if self._user:
            next_scale = users_db.get_next_learning_scale(self._user, session_id)
            if next_scale:
                return next_scale

        all_scales = self.get_all_scales_to_learn()

        # skip theoretical scales if note wasn't provided intentionally
        all_scales = [scale for scale in all_scales if not scale.is_theoretical]

        if notes:
            all_scales = [
                scale for scale in all_scales if scale.root_note.root in notes
            ]

        if pitches:
            all_scales = [
                scale for scale in all_scales if scale.root_note.pitch in pitches
            ]

        if keys:
            all_scales = [scale for scale in all_scales if scale.key in keys]

        random.shuffle(all_scales)

        # save scales into user's learning session
        if self._user:
            users_db.set_learning_scales(self._user, session_id, all_scales)
            return users_db.get_next_learning_scale(self._user, session_id)

        return all_scales[0]
