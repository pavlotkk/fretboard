from typing import Optional

from kivy.uix.boxlayout import BoxLayout
from kivy.uix.button import Button
from kivy.uix.spinner import Spinner
from kivy.uix.togglebutton import ToggleButton
from kivy.uix.widget import Widget

from fretboard.app.widgets.scale_grid_layout import ScaleGridlayout
from fretboard.music_theory import Key, Note, Pitch


class MainWidget(Widget):
    def __init__(self, **kwargs):
        super(MainWidget, self).__init__(**kwargs)

    @property
    def add_btn(self) -> Button:
        return self.ids.add_btn

    @property
    def scale_grid_layout(self) -> ScaleGridlayout:
        return self.ids.scale_layout

    @property
    def scale_note_layout(self) -> BoxLayout:
        return self.ids.scale_note_layout

    @property
    def pitch_layout(self) -> BoxLayout:
        return self.ids.pitch_layout

    @property
    def key_dropdown(self) -> Spinner:
        return self.ids.key_dropdown

    def get_selected_note_btn(self) -> Optional[ToggleButton]:
        return next(
            (
                btn
                for btn in self.scale_note_layout.children
                if isinstance(btn, ToggleButton) and btn.state == "down"
            ),
            None,
        )

    def get_selected_pitch_btn(self) -> Optional[ToggleButton]:
        return next(
            (
                btn
                for btn in self.pitch_layout.children
                if isinstance(btn, ToggleButton) and btn.state == "down"
            ),
            None,
        )

    @property
    def selected_note(self) -> Optional[Note]:
        note_btn = self.get_selected_note_btn()
        if not note_btn:
            return None

        note_str = note_btn.text.upper()

        pitch_btn = self.get_selected_pitch_btn()
        if pitch_btn:
            note_str = f"{note_str}{pitch_btn.text.lower()}"

        return Note(note_str)

    @property
    def selected_pitch(self) -> Optional[Pitch]:
        btn = self.get_selected_pitch_btn()
        if not btn:
            return None

        return Pitch(btn.text.lower())

    @property
    def selected_key(self) -> Optional[Key]:
        try:
            return Key(self.key_dropdown.text.lower())
        except ValueError:
            return None

    def on_add_scale(self):
        note = self.selected_note

        if note:
            self.scale_grid_layout.add_scale(note, self.selected_key)

        self.reset_selected_note()
        self.reset_selected_pitch()

    def on_clear(self):
        self.reset_selected_note()
        self.reset_selected_pitch()
        self.scale_grid_layout.clear()

    def update_add_btn_state(self):
        self.add_btn.disabled = (self.selected_note is None) or (
            self.selected_key is None
        )

    def reset_selected_note(self):
        btn = self.get_selected_note_btn()
        if btn:
            btn.state = "normal"

        self.update_add_btn_state()

    def reset_selected_pitch(self):
        btn = self.get_selected_pitch_btn()
        if btn:
            btn.state = "normal"

        self.update_add_btn_state()
