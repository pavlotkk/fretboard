import logging
from datetime import datetime

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from fretboard.music_theory import Key, Note, Scale

router = APIRouter()

logger = logging.getLogger(__name__)

app_start_dts = datetime.now()


class ApiResponse(BaseModel):
    pass


class HealthResponse(ApiResponse):
    status: str
    up_time: str


@router.get("/health", response_model=HealthResponse)
@router.get("/api/health", response_model=HealthResponse)
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


class ScaleKeyResponse(ApiResponse):
    id: str
    name: str


class SupportedScaleKeysResponse(ApiResponse):
    data: list[ScaleKeyResponse]


@router.get("/api/supported-scale-keys", response_model=SupportedScaleKeysResponse)
async def api_get_supported_scale_keys():
    return SupportedScaleKeysResponse(
        data=[ScaleKeyResponse(id=k.value, name=k.desc) for k in Key]
    )


class ScaleResponse(ApiResponse):
    id: str
    name: str
    notes: list[str]
    flats_count: int
    sharps_count: int


@router.get("/api/scale", response_model=ScaleResponse)
async def api_get_scale(note: str, key: str):
    try:
        note = Note(note)
        key = Key(key.lower())
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    scale = Scale(note, key)

    return ScaleResponse(
        id=scale.id,
        name=scale.name,
        notes=[str(n) for n in scale],
        flats_count=scale.flats_count,
        sharps_count=scale.sharps_count,
    )
