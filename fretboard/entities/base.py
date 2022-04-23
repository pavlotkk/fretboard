from datetime import datetime, timedelta

from pydantic import BaseModel


class JsonModel(BaseModel):
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {
            datetime: lambda v: v.isoformat(),
            timedelta: lambda td: str(td),
            BaseModel: lambda o: o.dict(),
        }
