from typing import Optional, Union

from fretboard.data_structures import CircularArray
from fretboard.music_theory.interval import Interval, MajorScaleIntervals
from fretboard.music_theory.note import Note, Pitch
from fretboard.music_theory.scale import Key, Scale

_FullChromaticScale = tuple(
    [
        tuple([Note(n) for n in str_n.split("/")])
        for str_n in "B#/C, C#/Db, D, D#/Eb, E/Fb, E#/F, F#/Gb, G, G#/Ab, A, A#/Bb, B/Cb".split(
            ", "
        )
    ]
)

_ChromaticNotes: tuple = tuple([Note(n) for n in "C, D, E, F, G, A, B".split(", ")])


_ScaleKeyMap = {Key.Major: MajorScaleIntervals}


def note(name: str) -> Note:
    """
    Create a note
    Args:
        name: note name, could be A, or with pitch like A#
        pitch: separate pitch value, could be string or Pitch enum

    Returns: note instance
    """
    return Note(name)


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


def _scale(root_note: Note, key: Key, scale_intervals: tuple) -> Scale:
    # use chromatic scale as a source
    start_note = None
    for ch_notes in _FullChromaticScale:
        if root_note in ch_notes:
            start_note = ch_notes
            break
    chromatic_scale = CircularArray(_FullChromaticScale, start_value=start_note)
    chromatic_notes_order = CircularArray(_ChromaticNotes)

    # apply scale formula
    scale_notes: list[Note] = []
    current_interval = interval()
    for interval_name in scale_intervals:
        notes_in_interval: tuple[Note, Optional[Note]] = chromatic_scale[
            current_interval.semitones
        ]
        try:
            target_root_note = chromatic_notes_order[
                chromatic_notes_order.index(scale_notes[-1].root) + 1
            ]
        except IndexError:
            target_root_note = root_note
        scale_notes.append(
            next(n for n in notes_in_interval if n.root == target_root_note)
        )
        current_interval += interval_name

    return Scale(scale_notes)


def scale(root_note: Union[str, Note], key: Union[str, Key]) -> Scale:
    """
    Create a scale
    Args:
        root_note: the root note
        key: scale key

    Examples:
        >>> scale("c", "major")
        >>> "C - D - E - F - G - A - B"

    Returns: scale

    """

    # cast note
    if isinstance(root_note, str):
        root_note = note(root_note)

    # cast key
    if isinstance(key, str):
        try:
            key = Key(key.lower())
        except ValueError:
            raise ValueError(f"Invalid key value, {key}")

    # find a formula to build a target scale
    try:
        scale_intervals = _ScaleKeyMap[key]
    except KeyError:
        raise ValueError(f"{key.value} is not supported scale key")

    if root_note.has_pitch:
        note_without_pitch = root_note.root
        new_scale = _scale(note_without_pitch, key, scale_intervals)

        # pitched scales created with adding pitch to each note to "original" scale,
        # e.g. C# scale created by adding sharp to all notes in C scale.
        new_scale_notes = []
        for note_in_scale in new_scale:  # type: Note
            no_pitch = not note_in_scale.has_pitch
            same_pitch = note_in_scale.pitch == root_note.pitch

            if no_pitch or same_pitch:
                new_scale_notes.append(
                    Note(f"{str(note_in_scale)}{root_note.pitch.value}")
                )
            else:
                new_scale_notes.append(note_in_scale.root)
        new_scale = Scale(new_scale_notes)

    else:
        new_scale = _scale(root_note, key, scale_intervals)

    return new_scale


__all__ = [
    "Pitch",
    "Note",
    "Interval",
    "Key",
    "MajorScaleIntervals",
    "Scale",
    "note",
    "interval",
    "scale",
]
