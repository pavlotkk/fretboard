from kivy import utils as kivy_utils

black = kivy_utils.get_color_from_hex("#000000")
white = kivy_utils.get_color_from_hex("#FFFFFF")
pink = kivy_utils.get_color_from_hex("#DEDEFF")
purple = kivy_utils.get_color_from_hex("#E08FFF")
red = kivy_utils.get_color_from_hex("#FF8F8F")
yellow = kivy_utils.get_color_from_hex("#FFE342")
grey = kivy_utils.get_color_from_hex("#979EA8")
green = kivy_utils.get_color_from_hex("#54C45E")
blue = kivy_utils.get_color_from_hex("#6DB1FF")

note_color_map = {
    "C": red,
    "D": yellow,
    "E": grey,
    "F": green,
    "G": blue,
    "A": pink,
    "B": purple,
}


def for_note(note) -> list:
    from fretboard.music_theory import Note

    if isinstance(note, str):
        note = Note(note)

    if not isinstance(note, Note):
        raise ValueError(f"Invalid note instance, {note}")

    return note_color_map[str(note.root)]
