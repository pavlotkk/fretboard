from typing import Tuple

from fretboard.core.collections import StrEnum

Notes = {"A", "B", "C", "D", "E", "F", "G"}


class Pitch(StrEnum):
    Sharp = "#"
    Flat = "b"
    No = ""


def parse_note(note: str) -> Tuple[str, Pitch]:
    """
    Parse note form string source, fixing case

    Examples:
        >>> parse_note("a#")
        >>> ("A", "#")
        >>> parse_note("bb")
        >>> ("B", "b")
        >>> parse_note("G")
        >>> ("G", "")

    Args:
        note: note name, e.g. G, A#, Bb

    Returns: Separated note and pitch
    """
    if not note:
        raise ValueError(f"Invalid note {note}")

    # fix case
    note = note[0].upper() + note[1:].lower()

    if note[0] not in Notes:
        raise ValueError(f"Invalid note {note}")

    # note could have double sharps, e.g. C##. So note name is all chars except last one
    note_name = note[:-1] if len(note) > 1 else note

    if len(note) == 1:
        return note_name, Pitch.No.value
    else:
        note_pitch = note[-1]

        try:
            note_pitch = Pitch(note_pitch)
        except ValueError:
            raise ValueError(f"Invalid note {note}")

        return note_name, note_pitch


class Note:
    """
    Represents a musical note
    """

    def __init__(self, name: str):
        _name, _pitch = parse_note(name)
        self._name, self._pitch = _name, Pitch(_pitch)

    @property
    def root(self) -> "Note":
        """
        Get root note without flat or sharp sign
        Returns:

        """
        return Note(self._name)

    @property
    def has_pitch(self) -> bool:
        return self._pitch != Pitch.No

    @property
    def pitch(self) -> Pitch:
        return self._pitch

    @property
    def is_sharp(self) -> bool:
        return self._pitch == Pitch.Sharp

    @property
    def is_flat(self) -> bool:
        return self._pitch == Pitch.Flat

    def __eq__(self, other):
        if not other:
            return False

        if isinstance(other, str):
            return str(self) == other

        if isinstance(other, Note):
            return self._name == other._name and self._pitch == other._pitch

        return False

    def __hash__(self):
        return hash((self._name, self._pitch.value))

    def __str__(self):
        return f"{self._name}{self._pitch.value}"

    def __repr__(self):
        return f"{self._name}{self._pitch.value}"
