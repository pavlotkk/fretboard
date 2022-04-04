from enum import Enum
from typing import Set


class StrEnum(str, Enum):
    @classmethod
    def all(cls) -> Set[str]:
        return {e.value for e in cls}


class ToggleButtonState(StrEnum):
    """
    Represents toggle button states:
        - down: user clicked on it (active)
        - normal: default state (not active)
    """

    Normal = "normal"
    Down = "down"
