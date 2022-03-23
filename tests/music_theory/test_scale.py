import pytest

from fretboard.music_theory import Note, Scale


@pytest.mark.parametrize(
    "args,expected",
    [(([Note("A"), Note("B"), Note("C")],), Scale([Note("A"), Note("B"), Note("C")]))],
)
def test__scale__create(args, expected):
    actual = Scale(*args)
    assert actual == expected
