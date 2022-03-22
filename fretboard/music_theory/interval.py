from typing import Union

IntervalSemitonesMap = {
    0: ("P1", "Unison"),
    1: ("m2", "Minor second"),
    2: ("M2", "Major second"),
    3: ("m3", "Minor third"),
    4: ("M3", "Major third"),
    5: ("P4", "Perfect fourth"),
    6: ("TT", "Tritone"),
    7: ("P5", "Perfect fifth"),
    8: ("m6", "Minor sixth"),
    9: ("M6", "Major sixth"),
    10: ("m7", "Minor seventh"),
    11: ("M7", "Major seventh"),
    12: ("P8", "Octave"),
}

IntervalShortNameMap = {
    "P1": (0, "Unison"),
    "m2": (1, "Minor second"),
    "M2": (2, "Major second"),
    "m3": (3, "Minor third"),
    "M3": (4, "Major third"),
    "P4": (5, "Perfect fourth"),
    "TT": (6, "Tritone"),
    "P5": (7, "Perfect fifth"),
    "m6": (8, "Minor sixth"),
    "M6": (9, "Major sixth"),
    "m7": (10, "Minor seventh"),
    "M7": (11, "Major seventh"),
    "P8": (12, "Octave"),
}

IntervalNameMap = {
    "Unison": (0, "P1"),
    "Minor second": (1, "m2"),
    "Major second": (2, "M2"),
    "Minor third": (3, "m3"),
    "Major third": (4, "M3"),
    "Perfect fourth": (5, "P4"),
    "Tritone": (6, "TT"),
    "Perfect fifth": (7, "P5"),
    "Minor sixth": (8, "m6"),
    "Major sixth": (9, "M6"),
    "Minor seventh": (10, "m7"),
    "Major seventh": (11, "M7"),
    "Octave": (12, "P8"),
}


class Interval:
    """
    Represents amount of semitones
    """

    def __init__(self, name_or_semitones: Union[int, str] = 0):
        # set default value
        if name_or_semitones is None:
            name_or_semitones = 0

        self._semitones = None

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
            return name
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

    def __add__(self, other):
        if isinstance(other, int):
            return Interval(self.semitones + other)
        elif isinstance(other, Interval):
            return Interval(self.semitones + other.semitones)
        else:
            raise ValueError(f"Invalid `add` operation between {self} and {other}")

    def __iadd__(self, other):
        if isinstance(other, int):
            self._semitones = self._semitones + other
            return self
        elif isinstance(other, Interval):
            self._semitones = self._semitones + other.semitones
            return self
        else:
            raise ValueError(f"Invalid `add` operation between {self} and {other}")

    def __sub__(self, other):
        if isinstance(other, int):
            return Interval(self.semitones - other)
        elif isinstance(other, Interval):
            return Interval(self.semitones - other.semitones)
        else:
            raise ValueError(f"Invalid `sub` operation between {self} and {other}")

    def __isub__(self, other):
        if isinstance(other, int):
            self._semitones = self._semitones - other
            return self
        elif isinstance(other, Interval):
            self._semitones = self._semitones - other.semitones
            return self
        else:
            raise ValueError(f"Invalid `sub` operation between {self} and {other}")
