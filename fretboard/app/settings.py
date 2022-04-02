from os import listdir
from pathlib import Path

from kivy.lang import Builder

kv_dir = "fretboard/app/uix"


def get_ui_path(filename: str) -> str:
    """
    Get relative path to kv uix file
    Args:
        filename: target filename

    Returns:
        relative path to filename
    """
    path = f"{kv_dir}/{filename}"

    if not Path(path).exists():
        raise FileNotFoundError(f"{filename} does not exists")

    return path


def load_ui():
    """
    Load all *.kv files
    """

    for kv in listdir(kv_dir):
        Builder.load_file(get_ui_path(kv))
