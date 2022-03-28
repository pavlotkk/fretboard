from enum import Enum
from typing import Optional, Tuple, Union

Notes = {"A", "B", "C", "D", "E", "F", "G"}


class Pitch(Enum):
    Sharp = "#"
    Flat = "b"


def parse_note(note: str) -> Tuple[str, Optional[Pitch]]:
    """
    Parse note form string source, fixing case

    Examples:
        >>> parse_note("a#")
        >>> ("A", "#")
        >>> parse_note("bb")
        >>> ("B", "b")
        >>> parse_note("G")
        >>> ("G", None)

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
        return note_name, None
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

    def __init__(self, name: str, pitch: Optional[Union[str, Pitch]] = None):
        self._name, self._pitch = parse_note(name)

        if pitch:
            if isinstance(pitch, str):
                try:
                    self._pitch = Pitch(pitch)
                except ValueError:
                    raise ValueError(f"Invalid pitch value: {pitch}")

            self._pitch = pitch

    @property
    def root(self) -> "Note":
        """
        Get root note without flat or sharp sign
        Returns:

        """
        return Note(self._name)

    def __eq__(self, other):
        if not other:
            return False

        if not isinstance(other, Note):
            return False

        return self._name == other._name and self._pitch == other._pitch

    def __hash__(self):
        return hash((self._name, self._pitch.value))

    def __str__(self):
        return f"{self._name}{self._pitch.value if self._pitch else ''}"

    def __repr__(self):
        return f"{self._name}{self._pitch.value if self._pitch else ''}"
