from typing import Union

import pytest

from fretboard.music_theory.interval import Interval


@pytest.mark.parametrize(
    "args,expected",
    [
        # from semitones
        ((0,), Interval(0)),
        ((1,), Interval(1)),
        ((12,), Interval(12)),
        ((24,), Interval(24)),
        (("Tritone",), Interval(6)),
        (("P8",), Interval(12)),
        ((None,), Interval(0)),
    ],
)
def test__interval__create(args: tuple, expected: Interval):
    actual = Interval(*args)

    assert actual == expected


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
        (Interval(), Interval(2), Interval(2)),
        (Interval(1), 8, Interval(9)),
        (Interval(1), "m6", Interval(9)),
        (Interval(1), "Minor sixth", Interval(9)),
    ],
)
def test__interval__add(
    left: Interval, right: Union[Interval, int], expected: Interval
):
    actual = left + right
    assert actual == expected


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
        (Interval(), Interval(2), Interval(2)),
        (Interval(1), 8, Interval(9)),
        (Interval(1), "m6", Interval(9)),
        (Interval(1), "Minor sixth", Interval(9)),
    ],
)
def test__interval__iadd(
    left: Interval, right: Union[Interval, int], expected: Interval
):
    left += right
    assert left == expected


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
        (Interval(), Interval(2), Interval(-2)),
        (Interval(9), 6, Interval(3)),
        (Interval(9), "TT", Interval(3)),
        (Interval(9), "Tritone", Interval(3)),
    ],
)
def test__interval__sub(
    left: Interval, right: Union[Interval, int], expected: Interval
):
    actual = left - right
    assert actual == expected


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
        (Interval(), Interval(2), Interval(-2)),
        (Interval(9), 6, Interval(3)),
        (Interval(9), "TT", Interval(3)),
        (Interval(9), "Tritone", Interval(3)),
    ],
)
def test__interval__isub(
    left: Interval, right: Union[Interval, int], expected: Interval
):
    left -= right
    assert left == expected


@pytest.mark.parametrize(
    "left,right",
    [
        (Interval(), "one"),
    ],
)
def test__interval__isub_exception(left: Interval, right: Union[Interval, int]):
    with pytest.raises(ValueError):
        left -= right
