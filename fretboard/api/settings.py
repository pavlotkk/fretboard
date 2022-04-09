from pydantic import BaseSettings


class Settings(BaseSettings):
    api_host: str
    api_port: int
    api_debug: bool
    api_log_level: str

    @property
    def api_log_level(self) -> str:
        if self.api_debug:
            return "debug"
        return "info"
