import pytest
from fastapi.testclient import TestClient

from fretboard.api.app import create_app
from fretboard.storage.db import Db


@pytest.fixture
def test_client() -> TestClient:
    app = create_app()
    yield TestClient(app)


@pytest.fixture
def db():
    Db._sessions = {}
    yield Db()
