import uvicorn as uvicorn
from dotenv import load_dotenv

from fretboard.api.settings import Settings

load_dotenv()

if __name__ == "__main__":
    settings = Settings()

    uvicorn.run(
        "fretboard.api.app:create_app",
        host=settings.api_host,
        port=settings.api_port,
        log_level=settings.api_log_level,
        debug=settings.api_debug,
        reload=settings.api_debug,
    )
