import pytest

from fretboard.music_theory import Note
from fretboard.music_theory.note import Pitch, parse_note


@pytest.mark.parametrize(
    "note,expected",
    [
        ("a#", ("A", Pitch.Sharp)),
        ("bb", ("B", Pitch.Flat)),
        ("GB", ("G", Pitch.Flat)),
        ("F", ("F", Pitch.No)),
        ("Fb", ("F", Pitch.Flat)),
        ("Cb", ("C", Pitch.Flat)),
        ("B#", ("B", Pitch.Sharp)),
        ("E#", ("E", Pitch.Sharp)),
        ("E##", ("E#", Pitch.Sharp)),
    ],
)
def test__parse_note(note: str, expected):
    actual = parse_note(note)

    assert actual == expected


@pytest.mark.parametrize(
    "note",
    [
        "",
        None,
        "H",
        "Gg",
        "F#g",
    ],
)
def test__parse_note__value_error(note):
    with pytest.raises(ValueError):
        parse_note(note)


@pytest.mark.parametrize(
    "note_args,expected_str",
    [
        (("C",), "C"),
        (("A#",), "A#"),
        (("Bb",), "Bb"),
        (("A#",), "A#"),
        (("Fb",), "Fb"),
        (("Cb",), "Cb"),
        (("B#",), "B#"),
        (("E#",), "E#"),
    ],
)
def test__note__create(note_args: tuple, expected_str: str):
    actual = Note(*note_args)
    assert str(actual) == expected_str
