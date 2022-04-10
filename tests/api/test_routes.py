from fastapi.testclient import TestClient

from fretboard.api.routes import (
    HealthResponse,
    ScaleResponse,
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
