from typing import Optional, Union

from fretboard.core.collections import StrEnum
from fretboard.data_structures import CircularArray
from fretboard.music_theory.interval import (
    AscMelodicMinorScaleIntervals,
    DescMelodicMinorScaleIntervals,
    HarmonicMinorScaleIntervals,
    Interval,
    MajorScaleIntervals,
    MinorScaleIntervals,
)
from fretboard.music_theory.note import Note


class Key(StrEnum):
    Major = "major"
    Minor = "minor"
    HarmonicMinor = "harmonic_minor"
    AscMelodicMinor = "asc_melodic_minor"
    DescMelodicMinor = "desc_melodic_minor"

    @property
    def desc(self) -> str:
        if self == Key.HarmonicMinor:
            return "Harmonic Minor"
        elif self == Key.AscMelodicMinor:
            return "Melodic Minor ⬆️"
        elif self == Key.DescMelodicMinor:
            return "Melodic Minor ⬇️️"

        return self.name


_FullChromaticScale = tuple(
    [
        tuple([Note(n) for n in str_n.split("/")])
        for str_n in "B#/C, C#/Db, D, D#/Eb, E/Fb, E#/F, F#/Gb, G, G#/Ab, A, A#/Bb, B/Cb".split(
            ", "
        )
    ]
)

_ChromaticNotes: tuple = tuple([Note(n) for n in "C, D, E, F, G, A, B".split(", ")])


_ScaleKeyMap = {
    Key.Major: MajorScaleIntervals,
    Key.Minor: MinorScaleIntervals,
    Key.HarmonicMinor: HarmonicMinorScaleIntervals,
    Key.AscMelodicMinor: AscMelodicMinorScaleIntervals,
    Key.DescMelodicMinor: DescMelodicMinorScaleIntervals,
}


class Scale:
    def __init__(self, root_note: Union[str, Note], key: Union[str, Key]):
        """
        Create a scale
        Args:
            root_note: the root note
            key: scale key

        Examples:
            >>> Scale("c", "major")
            >>> "C - D - E - F - G - A - B"

        Returns: scale

        """

        # cast note
        if isinstance(root_note, str):
            root_note = Note(root_note)

        # cast key
        if isinstance(key, str):
            try:
                key = Key(key.lower())
            except ValueError:
                raise ValueError(f"Invalid key value, {key}")

        self.root_note: Note = root_note
        self.key: Key = key

        # exception for descending minor scale, it's same as natural minor
        # but due to complicity of generation, I've decided to implement
        # such shortcut :)
        if self.key == Key.DescMelodicMinor:
            key = Key.Minor

        # find a formula to build a target scale
        try:
            scale_intervals = _ScaleKeyMap[key]
        except KeyError:
            raise ValueError(f"{key.value} is not supported scale key")

        if root_note.has_pitch:
            note_without_pitch = root_note.root
            new_scale = self._scale(note_without_pitch, scale_intervals)

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
            new_scale = new_scale_notes

        else:
            new_scale = self._scale(root_note, scale_intervals)

        self._notes = CircularArray(new_scale)

        # desc melodic minor is same as desc natural minor
        if self.key == Key.DescMelodicMinor:
            new_scale = [new_scale[0]] + list(reversed(new_scale[1:]))
            self._notes = CircularArray(new_scale)

    def __getitem__(self, index):
        return self._notes[index]

    def __hash__(self):
        return hash(self._notes)

    def __eq__(self, other):
        if other is None:
            return False
        if not isinstance(other, Scale):
            return False
        return self._notes == other._notes

    def __iter__(self):
        return (self._notes[i] for i in range(self._notes.size))

    def __str__(self):
        return str(self._notes)

    def __repr__(self):
        return repr(self._notes)

    def _scale(self, root_note: Note, scale_intervals: tuple) -> list[Note]:
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
        current_interval = Interval()
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

        return scale_notes

    @property
    def id(self) -> str:
        return self.name.lower().replace(" ", "_")

    @property
    def name(self) -> str:
        """
        Human readable scale name
        Returns:
            scale name
        """
        return f"{str(self.root_note)} {self.key.desc}"

    @property
    def flats_count(self) -> int:
        return sum((len(str(n)) - 1 for n in self if n.is_flat))

    @property
    def sharps_count(self) -> int:
        return sum((len(str(n)) - 1 for n in self if n.is_sharp))

    @property
    def is_theoretical(self) -> bool:
        """
        Scales that have more than 7 pitches - are theoretical.
        E.g. D# has 9 sharps.
        Returns:
            True or False
        """
        return self.sharps_count > 7 or self.flats_count > 7
