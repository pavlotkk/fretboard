from typing import Optional, Tuple

Sharp = "#"
Flat = "b"
Notes = {"A", "B", "C", "D", "E", "F", "G"}
Pitches = {Sharp, Flat}


def parse_note(note: str) -> Tuple[str, Optional[str]]:
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

    note_name = note[0].upper()

    if note_name not in Notes:
        raise ValueError(f"Invalid note {note}")

    if len(note) == 1:
        return note_name, None
    elif len(note) == 2:
        note_pitch = note[1].lower()

        if note_pitch not in Pitches:
            raise ValueError(f"Invalid note {note}")

        # Exception for notes that can't have flats
        if note_name in {"F", "C"} and note_pitch == Flat:
            raise ValueError(f"Invalid note {note}")

        # Exception for notes that can't have sharps
        if note_name in {"B", "E"} and note_pitch == Sharp:
            raise ValueError(f"Invalid note {note}")

        return note_name, note_pitch
    else:
        raise ValueError(f"Invalid note {note}")


class Note:
    """
    Represents a musical note
    """

    def __init__(self, name: str, pitch: Optional[str] = None):
        self._name, self._pitch = parse_note(name)

        if not pitch:
            self._pitch = pitch

    def __eq__(self, other):
        if not other:
            return False

        if not isinstance(other, Note):
            return False

        return self._name == other._name and self._pitch == other._pitch

    def __hash__(self):
        return hash((self._name, self._pitch))

    def __str__(self):
        return f"{self._name}{self._pitch or ''}"

    def __repr__(self):
        return f"{self._name}{self._pitch or ''}"
