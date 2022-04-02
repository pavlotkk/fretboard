from kivy.properties import ListProperty
from kivy.uix.label import Label

from fretboard.app.styles import colors
from fretboard.music_theory import Note


class NoteLabel(Label):
    bg_color = ListProperty(None)

    @classmethod
    def from_note(cls, note: Note) -> "NoteLabel":
        kwargs = {"text": str(note), "bg_color": colors.for_note(note)}

        if not note.has_pitch:
            return NoPitchNoteLabel(**kwargs)
        elif note.is_sharp:
            return SharpNoteLabel(**kwargs)
        elif note.is_flat:
            return FlatNoteLabel(**kwargs)
        else:
            return InfoNoteLabel(**kwargs)


class InfoNoteLabel(NoteLabel):
    pass


class NoPitchNoteLabel(NoteLabel):
    pass


class SharpNoteLabel(NoteLabel):
    pass


class FlatNoteLabel(NoteLabel):
    pass
