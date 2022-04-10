from typing import Union

IntervalSemitonesMap = {
    0: ("P1", "unison"),
    1: ("m2", "minor second"),
    2: ("M2", "major second"),
    3: ("m3", "minor third"),
    4: ("M3", "major third"),
    5: ("P4", "perfect fourth"),
    6: ("TT", "tritone"),
    7: ("P5", "perfect fifth"),
    8: ("m6", "minor sixth"),
    9: ("M6", "major sixth"),
    10: ("m7", "minor seventh"),
    11: ("M7", "major seventh"),
    12: ("P8", "octave"),
}

IntervalShortNameMap = {
    "P1": (0, "unison"),
    "m2": (1, "minor second"),
    "M2": (2, "major second"),
    "m3": (3, "minor third"),
    "M3": (4, "major third"),
    "P4": (5, "perfect fourth"),
    "TT": (6, "tritone"),
    "P5": (7, "perfect fifth"),
    "m6": (8, "minor sixth"),
    "M6": (9, "major sixth"),
    "m7": (10, "minor seventh"),
    "M7": (11, "major seventh"),
    "P8": (12, "octave"),
}

# TOTO: convert full names to lowercase
IntervalNameMap = {
    "unison": (0, "P1"),
    "minor second": (1, "m2"),
    "major second": (2, "M2"),
    "minor third": (3, "m3"),
    "major third": (4, "M3"),
    "perfect fourth": (5, "P4"),
    "tritone": (6, "TT"),
    "perfect fifth": (7, "P5"),
    "minor sixth": (8, "m6"),
    "major sixth": (9, "M6"),
    "minor seventh": (10, "m7"),
    "major seventh": (11, "M7"),
    "octave": (12, "P8"),
}


MajorScaleIntervals = ("M2", "M2", "m2", "M2", "M2", "M2", "m2")
MinorScaleIntervals = ("M2", "m2", "M2", "M2", "m2", "M2", "m2")
HarmonicMinorScaleIntervals = ("M2", "m2", "M2", "M2", "m2", "m3", "m2")
AscMelodicMinorScaleIntervals = ("M2", "m2", "M2", "M2", "M2", "M2", "m2")
DescMelodicMinorScaleIntervals = ("M2", "M2", "m2", "M2", "M2", "m2", "M2")


class Interval:
    """
    Represents amount of semitones
    """

    def __init__(self, name_or_semitones: Union[int, str] = 0):
        # set default value
        if name_or_semitones is None:
            name_or_semitones = 0

        self._semitones = None

        if isinstance(name_or_semitones, str):
            name_or_semitones = name_or_semitones.strip()
            if len(name_or_semitones) > 2:
                name_or_semitones = name_or_semitones.lower()

        # validate int argument
        if isinstance(name_or_semitones, int):
            self._semitones = name_or_semitones

        # validate string argument
        for name_map in (IntervalShortNameMap, IntervalNameMap):
            try:
                self._semitones = name_map[name_or_semitones][0]
                break
            except KeyError:
                pass

        # raise the exception if neither validation passed
        if self._semitones is None:
            raise ValueError(f"Invalid interval {name_or_semitones}")

    @property
    def semitones(self) -> int:
        return self._semitones

    @property
    def short_name(self) -> str:
        try:
            short_name, _ = IntervalSemitonesMap[self._semitones]
            return short_name
        except KeyError:
            return "?"

    @property
    def name(self) -> str:
        try:
            _, name = IntervalSemitonesMap[self._semitones]
            return name.capitalize()
        except KeyError:
            return "?"

    def __hash__(self):
        return hash(self.semitones)

    def __eq__(self, other):
        if other is None:
            return False
        if not isinstance(other, Interval):
            return False

        return self.semitones == other.semitones

    def __str__(self):
        return str(self.semitones)

    def __repr__(self):
        return f"{self.semitones} - {self.name}"

    def __int__(self):
        return self.semitones

    def __add__(self, other: Union[int, str, "Interval"]):
        if isinstance(other, int):
            return Interval(self.semitones + other)
        elif isinstance(other, str):
            return Interval(self.semitones + Interval(other).semitones)
        elif isinstance(other, Interval):
            return Interval(self.semitones + other.semitones)
        else:
            raise ValueError(f"Invalid `add` operation between {self} and {other}")

    def __iadd__(self, other: Union[int, str, "Interval"]):
        if isinstance(other, int):
            self._semitones = self._semitones + other
            return self
        elif isinstance(other, str):
            self._semitones = self._semitones + Interval(other).semitones
            return self
        elif isinstance(other, Interval):
            self._semitones = self._semitones + other.semitones
            return self
        else:
            raise ValueError(f"Invalid `add` operation between {self} and {other}")

    def __sub__(self, other: Union[int, str, "Interval"]):
        if isinstance(other, int):
            return Interval(self.semitones - other)
        elif isinstance(other, str):
            return Interval(self.semitones - Interval(other).semitones)
        elif isinstance(other, Interval):
            return Interval(self.semitones - other.semitones)
        else:
            raise ValueError(f"Invalid `sub` operation between {self} and {other}")

    def __isub__(self, other: Union[int, str, "Interval"]):
        if isinstance(other, int):
            self._semitones = self._semitones - other
            return self
        elif isinstance(other, str):
            self._semitones = self._semitones - Interval(other).semitones
            return self
        elif isinstance(other, Interval):
            self._semitones = self._semitones - other.semitones
            return self
        else:
            raise ValueError(f"Invalid `sub` operation between {self} and {other}")
