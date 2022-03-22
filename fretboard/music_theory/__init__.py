from typing import Optional, Union

from fretboard.data_structures import CircularArray
from fretboard.music_theory.interval import Interval, MajorScaleIntervals
from fretboard.music_theory.note import Note, Pitch
from fretboard.music_theory.scale import Key, Scale

ChromaticNotes = tuple(
    [Note(n) for n in "C, C#, D, D#, E, F, F#, G, G#, A, A#, B".split(", ")]
)


ScaleKeyMap = {Key.Major: MajorScaleIntervals}


def note(name: str, pitch: Optional[Union[str, Pitch]] = None) -> Note:
    """
    Create a note
    Args:
        name: note name, could be A, or with pitch like A#
        pitch: separate pitch value, could be string or Pitch enum

    Returns: note instance
    """
    return Note(name, pitch)


def interval(name_or_semitones: Union[int, str] = 0) -> Interval:
    """
    Create interval between notes
    Args:
        name_or_semitones: interval name or semitones amount

    Examples:
        >>> interval("Perfect fourth") == interval(5) == interval("P4")
        >>> True

    Returns: interval instance
    """
    return Interval(name_or_semitones)


def scale(root_note: Union[str, Note], key: Union[str, Key]) -> Scale:
    """
    Create a scale
    Args:
        root_note: the root note
        key: scale key

    Returns: scale

    """
    if isinstance(root_note, str):
        root_note = note(root_note)

    if isinstance(key, str):
        try:
            key = Key(key)
        except ValueError:
            raise ValueError(f"Invalid key value, {key}")

    chromatic_scale = CircularArray(ChromaticNotes, start_value=root_note)
    try:
        scale_intervals = ScaleKeyMap[key]
    except KeyError:
        raise ValueError(f"{key.value} is not supported scale key")

    scale_notes = []
    current_interval = interval()
    for interval_name in scale_intervals:
        scale_notes.append(chromatic_scale[current_interval.semitones])
        current_interval += interval_name

    return Scale(tuple(scale_notes))


__all__ = [
    "Pitch",
    "Note",
    "Interval",
    "Key",
    "ChromaticNotes",
    "MajorScaleIntervals",
    "Scale",
    "note",
    "interval",
]
