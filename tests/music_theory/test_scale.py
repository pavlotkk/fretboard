import pytest

from fretboard.music_theory import Scale


@pytest.mark.parametrize(
    "root_note,key,expected",
    [
        # major
        ("C", "major", "C D E F G A B"),
        ("D", "major", "D E F# G A B C#"),
        ("E", "major", "E F# G# A B C# D#"),
        ("F", "major", "F G A Bb C D E"),
        ("G", "major", "G A B C D E F#"),
        ("A", "major", "A B C# D E F# G#"),
        ("B", "major", "B C# D# E F# G# A#"),
        # major: sharps (some of them is theoretically scales due to complicity of building, e.g. B#)
        ("C#", "major", "C# D# E# F# G# A# B#"),
        ("D#", "major", "D# E# F## G# A# B# C##"),
        ("E#", "major", "E# F## G## A# B# C## D##"),
        ("F#", "major", "F# G# A# B C# D# E#"),
        ("G#", "major", "G# A# B# C# D# E# F##"),
        ("A#", "major", "A# B# C## D# E# F## G##"),
        ("B#", "major", "B# C## D## E# F## G## A##"),
        # major: flats (some of them is theoretically scales due to complicity of building, e.g. Fb)
        ("Cb", "major", "Cb Db Eb Fb Gb Ab Bb"),
        ("Db", "major", "Db Eb F Gb Ab Bb C"),
        ("Eb", "major", "Eb F G Ab Bb C D"),
        ("Fb", "major", "Fb Gb Ab Bbb Cb Db Eb"),
        ("Gb", "major", "Gb Ab Bb Cb Db Eb F"),
        ("Ab", "major", "Ab Bb C Db Eb F G"),
        ("Bb", "major", "Bb C D Eb F G A"),
        # minor
        ("C", "minor", "C D Eb F G Ab Bb"),
        ("D", "minor", "D E F G A Bb C"),
        ("E", "minor", "E F# G A B C D"),
        ("F", "minor", "F G Ab Bb C Db Eb"),
        ("G", "minor", "G A Bb C D Eb F"),
        ("A", "minor", "A B C D E F G"),
        ("B", "minor", "B C# D E F# G A"),
        # harmonic minor
        ("A", "harmonic_minor", "A B C D E F G#"),
        # asc melodic minor
        ("A", "asc_melodic_minor", "A B C D E F# G#"),
    ],
)
def test__scale__create_builder(root_note, key, expected):
    actual = Scale(root_note, key)
    assert str(actual) == "".join(expected.split())
