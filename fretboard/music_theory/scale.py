from enum import Enum

from fretboard.data_structures import CircularArray


class Key(Enum):
    Minor = "minor"
    Major = "major"


class Scale:
    def __init__(self, notes: tuple):
        self._notes = CircularArray(notes)

    def __getitem__(self, index):
        return self._notes[index]

    def __str__(self):
        return str(self._notes)

    def __repr__(self):
        return repr(self._notes)
