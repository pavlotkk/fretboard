import uuid
from datetime import datetime
from typing import Optional

from pydantic import Field

from fretboard.entities.base import JsonModel
from fretboard.music_theory import Scale


class LearningScaleData(JsonModel):
    scales: list[Scale]
    cursor: int = Field(0)

    def next_scale(self) -> Optional[Scale]:
        if not self.scales:
            return None
        if self.cursor >= len(self.scales):
            self.cursor = 0

        scale = self.scales[self.cursor]

        self.cursor += 1

        return scale


class User(JsonModel):
    id: str = Field(default_factory=lambda: uuid.uuid4().hex)
    last_activity: datetime = Field(default_factory=datetime.utcnow)
    scale_learning_session: dict[str, LearningScaleData] = Field(default_factory=dict)
