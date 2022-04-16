import random
from typing import Optional

from fretboard.music_theory import Key, Scale
from fretboard.music_theory.note import Note, Notes, Pitch


class LearningService:
    def get_all_scales_to_learn(self) -> list[Scale]:
        learning_scales = []

        for note_name in Notes:
            for pitch_name in {"", *Pitch.all()}:
                for scale_key_name in Key.all():
                    note = Note(note_name + pitch_name)
                    scale = Scale(note, scale_key_name)
                    learning_scales.append(scale)

        return learning_scales

    def get_scale_to_learn(
        self, note: Optional[Note] = None, key: Optional[Key] = None
    ) -> Scale:
        all_scales = self.get_all_scales_to_learn()

        if note:
            all_scales = [scale for scale in all_scales if scale.root_note == note]

        if key:
            all_scales = [scale for scale in all_scales if scale.key == key]

        # skip theoretical scales if note wasn't provided intentionally
        all_scales = [scale for scale in all_scales if not scale.is_theoretical]

        return random.choice(all_scales)
