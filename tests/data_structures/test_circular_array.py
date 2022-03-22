import pytest

from fretboard.data_structures import CircularArray


@pytest.mark.parametrize(
    "args,expected",
    [
        (([1, 2, 3],), CircularArray([1, 2, 3])),
        (([1, 2, 3], 1), CircularArray([1, 2, 3], 1)),
        (([1, 2, 3], 0, 2), CircularArray([1, 2, 3], start_value=2)),
    ],
)
def test__circular_array__create(args, expected):
    actual = CircularArray(*args)
    assert actual == expected


@pytest.mark.parametrize(
    "args",
    [
        ([1, 2, 3], -1),
    ],
)
def test__circular_array__create_exception(args):
    with pytest.raises(ValueError):
        CircularArray(*args)


@pytest.mark.parametrize(
    "args,index,expected",
    [
        ((["a", "b", "c"],), 0, "a"),
        ((["a", "b", "c"],), 3, "a"),
        ((["a", "b", "c"],), -3, "a"),
        # custom start index
        ((["a", "b", "c"], 1), 0, "b"),
        ((["a", "b", "c"], 1), 3, "b"),
        ((["a", "b", "c"], 1), -3, "b"),
    ],
)
def test__circular_array__get_index_value(args, index, expected):
    array = CircularArray(*args)
    actual = array[index]
    assert actual == expected
