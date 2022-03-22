import pytest

from fretboard.models.note import Note, Sharp, parse_note


@pytest.mark.parametrize(
    "note,expected",
    [
        ("a#", ("A", "#")),
        ("bb", ("B", "b")),
        ("GB", ("G", "b")),
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
        (("A", Sharp), Note("A#")),
    ],
)
def test__note(note_args: tuple, expected: Note):
    actual = Note(*note_args)
    assert actual == expected
