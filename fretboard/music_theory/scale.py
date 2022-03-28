from enum import Enum
from typing import Union

from fretboard.data_structures import CircularArray


class Key(Enum):
    Minor = "minor"
    Major = "major"


class Scale:
    def __init__(self, notes: Union[tuple, list]):
        self._notes = CircularArray(notes)

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
