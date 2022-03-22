import pytest

from fretboard.music_theory.note import Note, Pitch, parse_note


@pytest.mark.parametrize(
    "note,expected",
    [
        ("a#", ("A", Pitch.Sharp)),
        ("bb", ("B", Pitch.Flat)),
        ("GB", ("G", Pitch.Flat)),
        ("F", ("F", None)),
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
        "Fb",
        "Cb",
        "B#",
        "E#",
    ],
)
def test__parse_note__value_error(note):
    with pytest.raises(ValueError):
        parse_note(note)


@pytest.mark.parametrize(
    "note_args,expected",
    [
        (("A#",), Note("A#")),
        (("A", Pitch.Sharp), Note("A#")),
    ],
)
def test__note(note_args: tuple, expected: Note):
    actual = Note(*note_args)
    assert actual == expected
