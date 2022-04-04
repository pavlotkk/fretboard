from enum import Enum
from typing import Set


class StrEnum(str, Enum):
    @classmethod
    def all(cls) -> Set[str]:
        return {e.value for e in cls}
