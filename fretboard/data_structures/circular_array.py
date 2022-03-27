from typing import Optional, Union


class CircularArray:
    def __init__(
        self,
        array: Union[tuple, list],
        start_index: int = 0,
        start_value: Optional = None,
    ):
        array = tuple(array)

        self._array = array
        self._length = len(self._array)

        if start_index < 0:
            raise ValueError(f"Invalid index value {start_index}")

        if start_index >= self._length:
            start_index = start_index % self._length

        self._start_index = start_index

        if start_value is not None:
            self._start_index = array.index(start_value)

    def index(self, value) -> int:
        return next(i for i in range(self._length) if self[i] == value)

    def __hash__(self):
        return hash(self._array)

    def __eq__(self, other):
        if other is None:
            return False
        if not isinstance(other, CircularArray):
            return False
        return self._array == other._array

    def __str__(self):
        return "".join([str(i) for i in self._array])

    def __repr__(self):
        return " - ".join([repr(i) for i in self._array])

    def __getitem__(self, index):
        if not isinstance(index, int):
            raise ValueError("Index value should be int type")

        while index < 0:
            index += self._length

        index += self._start_index

        if index >= self._length:
            index = index % self._length

        return self._array[index]
