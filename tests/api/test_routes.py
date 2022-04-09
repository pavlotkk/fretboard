from fastapi.testclient import TestClient

from fretboard.api.routes import HealthResponse, SupportedScalesResponse


def test__api_health__ok(test_client: TestClient):
    resp = test_client.get("/health")
    assert resp.status_code == 200, resp.text

    data = HealthResponse(**resp.json())
    assert data.status == "ok"


def test__api_supported_scales__ok(test_client: TestClient):
    resp = test_client.get("/supported-scales")
    assert resp.status_code == 200, resp.text

    data = SupportedScalesResponse(**resp.json())
    assert len(data.data)
