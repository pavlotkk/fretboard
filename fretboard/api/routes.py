import logging
from datetime import datetime

from fastapi import APIRouter
from pydantic import BaseModel

from fretboard.music_theory import Key

router = APIRouter()

logger = logging.getLogger(__name__)

app_start_dts = datetime.now()


class ApiResponse(BaseModel):
    pass


class HealthResponse(ApiResponse):
    status: str
    up_time: str


@router.get("/health", response_model=HealthResponse)
async def api_health():
    now = datetime.now()
    up_time_total_seconds = (now - app_start_dts).total_seconds()

    days = up_time_total_seconds // (24 * 3600)
    up_time_total_seconds = up_time_total_seconds % (24 * 3600)
    hours = up_time_total_seconds // 3600
    up_time_total_seconds %= 3600
    minutes = up_time_total_seconds // 60
    up_time_total_seconds %= 60
    seconds = up_time_total_seconds

    return HealthResponse(
        status="ok",
        up_time=f"{int(days)} days : {int(hours)} hours : {int(minutes)} minutes : {int(seconds)} seconds",
    )


class ScaleResponse(ApiResponse):
    id: str
    name: str


class SupportedScalesResponse(ApiResponse):
    data: list[ScaleResponse]


@router.get("/supported-scales", response_model=SupportedScalesResponse)
async def api_get_supported_scales():
    return SupportedScalesResponse(
        data=[
            ScaleResponse(id=Key.Major.value, name="Major"),
        ]
    )
