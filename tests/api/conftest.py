import pytest
from fastapi.testclient import TestClient

from fretboard.api.app import create_app


@pytest.fixture
def test_client() -> TestClient:
    app = create_app()
    yield TestClient(app)
