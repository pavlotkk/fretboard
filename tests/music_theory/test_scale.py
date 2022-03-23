import pytest

from fretboard.music_theory import Note, Scale, scale


@pytest.mark.parametrize(
    "args,expected",
    [(([Note("A"), Note("B"), Note("C")],), "ABC")],
)
def test__scale__create(args, expected):
    actual = Scale(*args)
    assert str(actual) == expected


@pytest.mark.parametrize("root_note,key,expected", [
    ("C", "major", "C D E F G A B"),
    ("C#", "major", "C# D# F F# G# A# C"),
])
def test__scale__create_builder(root_note, key, expected):
    actual = scale(root_note, key)
    assert str(actual) == "".join(expected.split())
