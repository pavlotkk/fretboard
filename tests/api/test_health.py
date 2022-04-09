from fastapi.testclient import TestClient

from fretboard.api.routes import HealthResponse


def test__api_health__ok(test_client: TestClient):
    json_resp = test_client.get("/health").json()
    response = HealthResponse(**json_resp)
    assert response.status == "ok"
