import pytest
from fastapi.testclient import TestClient

from fretboard.api.routes import (
    HealthResponse,
    ScaleResponse,
    ScaleToLearnResponse,
    SupportedScaleKeysResponse,
)
from fretboard.music_theory import Key


def test__api_health__ok(test_client: TestClient):
    resp = test_client.get("/health")
    assert resp.status_code == 200, resp.text

    data = HealthResponse(**resp.json())
    assert data.status == "ok"


def test__api_supported_scales__ok(test_client: TestClient):
    resp = test_client.get("/api/supported-scale-keys")
    assert resp.status_code == 200, resp.text

    data = SupportedScaleKeysResponse(**resp.json())
    assert len(data.data)


def test__api_get_scale__ok(test_client: TestClient):
    resp = test_client.get("/api/scale", params={"note": "C", "key": Key.Major.value})
    assert resp.status_code == 200, resp.text

    data = ScaleResponse(**resp.json())
    assert data.id == "c_major"
    assert data.name == "C Major"
    assert data.flats_count == 0
    assert data.sharps_count == 0
    assert len(data.notes) == 7


def test__api_get_scale_to_learn__get_any(test_client: TestClient):
    resp = test_client.get("/api/learn/scale")
    assert resp.status_code == 200, resp.text

    data = ScaleToLearnResponse(**resp.json())
    assert data


@pytest.mark.parametrize(
    "notes,pitches",
    [
        ("C", ""),
        ("C", "#"),
        ("D", "#"),
    ],
)
def test__api_get_scale_to_learn__for_note_any_key(
    test_client: TestClient, notes: str, pitches: str
):
    resp = test_client.get(
        "/api/learn/scale", params={"notes": notes, "pitches": pitches}
    )
    assert resp.status_code == 200, resp.text

    data = ScaleToLearnResponse(**resp.json())
    assert data
    assert data.name.startswith(notes), data


@pytest.mark.parametrize("key", list(Key.all()))
def test__api_get_scale_to_learn__for_key_any_note(test_client: TestClient, key: str):
    resp = test_client.get("/api/learn/scale", params={"keys": key})
    assert resp.status_code == 200, resp.text

    data = ScaleToLearnResponse(**resp.json())
    assert data
    assert Key(key).desc in data.name


@pytest.mark.parametrize("note,key", [("C", Key.Major.value)])
def test__api_get_scale_to_learn__for_note_key(
    test_client: TestClient, note: str, key: str
):
    resp = test_client.get(
        "/api/learn/scale", params={"notes": note, "pitches": "", "keys": key}
    )
    assert resp.status_code == 200, resp.text

    data = ScaleToLearnResponse(**resp.json())
    assert data
    assert data.name == f"{note} {Key(key).desc}"


def test__api_get_stats(test_client: TestClient):
    resp = test_client.get("/api/stats")
    assert resp.status_code == 200, resp.text
