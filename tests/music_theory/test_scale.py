import pytest

from fretboard.music_theory import Scale


@pytest.mark.parametrize(
    "root_note,key,expected",
    [
        ("C", "major", "C D E F G A B"),
        ("D", "major", "D E F# G A B C#"),
        ("E", "major", "E F# G# A B C# D#"),
        ("F", "major", "F G A Bb C D E"),
        ("G", "major", "G A B C D E F#"),
        ("A", "major", "A B C# D E F# G#"),
        ("B", "major", "B C# D# E F# G# A#"),
        # sharps (some of them is theoretically scales due to complicity of building, e.g. B#)
        ("C#", "major", "C# D# E# F# G# A# B#"),
        ("D#", "major", "D# E# F## G# A# B# C##"),
        ("E#", "major", "E# F## G## A# B# C## D##"),
        ("F#", "major", "F# G# A# B C# D# E#"),
        ("G#", "major", "G# A# B# C# D# E# F##"),
        ("A#", "major", "A# B# C## D# E# F## G##"),
        ("B#", "major", "B# C## D## E# F## G## A##"),
        # flats (some of them is theoretically scales due to complicity of building, e.g. Fb)
        ("Cb", "major", "Cb Db Eb Fb Gb Ab Bb"),
        ("Db", "major", "Db Eb F Gb Ab Bb C"),
        ("Eb", "major", "Eb F G Ab Bb C D"),
        ("Fb", "major", "Fb Gb Ab Bbb Cb Db Eb"),
        ("Gb", "major", "Gb Ab Bb Cb Db Eb F"),
        ("Ab", "major", "Ab Bb C Db Eb F G"),
        ("Bb", "major", "Bb C D Eb F G A"),
    ],
)
def test__scale__create_builder(root_note, key, expected):
    actual = Scale(root_note, key)
    assert str(actual) == "".join(expected.split())
