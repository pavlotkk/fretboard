from typing import Union

import pytest

from fretboard.music_theory import Interval


@pytest.mark.parametrize(
    "args,expected",
    [
        ((0,), (0, "P1", "Unison")),
        ((1,), (1, "m2", "Minor second")),
        ((12,), (12, "P8", "Octave")),
        ((24,), (24, "?", "?")),
        (("Tritone",), (6, "TT", "Tritone")),
        (("P8",), (12, "P8", "Octave")),
        ((None,), (0, "P1", "Unison")),
    ],
)
def test__interval__create(args: tuple, expected: tuple):
    semitones, short_name, full_name = expected
    actual = Interval(*args)

    assert actual.semitones == semitones
    assert actual.short_name == short_name
    assert actual.name == full_name


@pytest.mark.parametrize(
    "args,expected",
    [
        ((0,), (0, "P1", "Unison")),
        ((1,), (1, "m2", "Minor second")),
        ((12,), (12, "P8", "Octave")),
        ((24,), (24, "?", "?")),
        (("Tritone",), (6, "TT", "Tritone")),
        (("P8",), (12, "P8", "Octave")),
        ((None,), (0, "P1", "Unison")),
    ],
)
def test__interval__create_builder(args: tuple, expected: tuple):
    semitones, short_name, full_name = expected
    actual = Interval(*args)

    assert actual.semitones == semitones
    assert actual.short_name == short_name
    assert actual.name == full_name


@pytest.mark.parametrize(
    "args",
    [
        ("Custom name",),
    ],
)
def test__interval__create_exception(args: tuple):
    with pytest.raises(ValueError):
        Interval(*args)


@pytest.mark.parametrize(
    "left,right,expected",
    [
        (Interval(), Interval(2), (2, "M2", "Major second")),
        (Interval(1), 8, (9, "M6", "Major sixth")),
        (Interval(1), "m6", (9, "M6", "Major sixth")),
        (Interval(1), "Minor sixth", (9, "M6", "Major sixth")),
    ],
)
def test__interval__add(left: Interval, right: Union[Interval, int], expected: tuple):
    semitones, short_name, full_name = expected

    actual = left + right
    assert actual.semitones == semitones
    assert actual.short_name == short_name
    assert actual.name == full_name


@pytest.mark.parametrize(
    "left,right",
    [
        (Interval(), "one"),
    ],
)
def test__interval__add_exception(left: Interval, right: Union[Interval, int]):
    with pytest.raises(ValueError):
        left + right


@pytest.mark.parametrize(
    "left,right,expected",
    [
        (Interval(), Interval(2), (2, "M2", "Major second")),
        (Interval(1), 8, (9, "M6", "Major sixth")),
        (Interval(1), "m6", (9, "M6", "Major sixth")),
        (Interval(1), "Minor sixth", (9, "M6", "Major sixth")),
    ],
)
def test__interval__iadd(
    left: Interval, right: Union[Interval, int], expected: Interval
):
    semitones, short_name, full_name = expected

    left += right

    assert left.semitones == semitones
    assert left.short_name == short_name
    assert left.name == full_name


@pytest.mark.parametrize(
    "left,right",
    [
        (Interval(), "one"),
    ],
)
def test__interval__iadd_exception(left: Interval, right: Union[Interval, int]):
    with pytest.raises(ValueError):
        left += right


@pytest.mark.parametrize(
    "left,right,expected",
    [
        (Interval(), Interval(2), (-2, "?", "?")),
        (Interval(9), 6, (3, "m3", "Minor third")),
        (Interval(9), "TT", (3, "m3", "Minor third")),
        (Interval(9), "Tritone", (3, "m3", "Minor third")),
    ],
)
def test__interval__sub(left: Interval, right: Union[Interval, int], expected: tuple):
    semitones, short_name, full_name = expected

    actual = left - right

    assert actual.semitones == semitones
    assert actual.short_name == short_name
    assert actual.name == full_name


@pytest.mark.parametrize(
    "left,right",
    [
        (Interval(), "one"),
    ],
)
def test__interval__sub_exception(left: Interval, right: Union[Interval, int]):
    with pytest.raises(ValueError):
        left - right


@pytest.mark.parametrize(
    "left,right,expected",
    [
        (Interval(), Interval(2), (-2, "?", "?")),
        (Interval(9), 6, (3, "m3", "Minor third")),
        (Interval(9), "TT", (3, "m3", "Minor third")),
        (Interval(9), "Tritone", (3, "m3", "Minor third")),
    ],
)
def test__interval__isub(
    left: Interval, right: Union[Interval, int], expected: Interval
):
    semitones, short_name, full_name = expected

    left -= right

    assert left.semitones == semitones
    assert left.short_name == short_name
    assert left.name == full_name


@pytest.mark.parametrize(
    "left,right",
    [
        (Interval(), "one"),
    ],
)
def test__interval__isub_exception(left: Interval, right: Union[Interval, int]):
    with pytest.raises(ValueError):
        left -= right
