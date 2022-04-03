from typing import Literal, Optional

from kivy.uix.button import Button
from kivy.uix.togglebutton import ToggleButton
from kivy.uix.widget import Widget

from fretboard.app.widgets.scale_grid_layout import ScaleGridlayout
from fretboard.music_theory import Key, Note


class MainWidget(Widget):
    def __init__(self, **kwargs):
        super(MainWidget, self).__init__(**kwargs)

        self.btn_add: Button = self.ids.btn_add
        self.scale_grid_layout: ScaleGridlayout = self.ids.scale_layout
        self.selected_note_btn: Optional[ToggleButton] = None
        self.selected_pitch_btn: Optional[ToggleButton] = None
        self.selected_key: Optional[Key] = None

    def on_add_scale(self):
        note = self.get_selected_note()

        if note:
            self.scale_grid_layout.add_scale(note, self.selected_key)

        self.reset_note_btn_state()
        self.reset_pitch_btn_state()

    def on_clear(self):
        self.reset_note_btn_state()
        self.reset_pitch_btn_state()
        self.scale_grid_layout.clear()

    def on_selected_note(
        self, note_btn: ToggleButton, state_value: Literal["down", "normal"]
    ):
        if state_value == "normal":
            self.selected_note_btn = None
        else:
            self.selected_note_btn = note_btn

        self.update_add_btn_state()

    def on_selected_pitch(
        self, pitch_btn: ToggleButton, state_value: Literal["down", "normal"]
    ):
        if state_value == "normal":
            self.selected_pitch_btn = None
        else:
            self.selected_pitch_btn = pitch_btn

        self.update_add_btn_state()

    def on_selected_key(self, str_key: Literal["major", "minor"]):
        self.selected_key = Key(str_key)

        self.update_add_btn_state()

    def update_add_btn_state(self):
        note_not_selected = self.selected_note_btn is None
        key_not_selected = self.selected_key is None
        self.btn_add.disabled = note_not_selected or key_not_selected

    def reset_note_btn_state(self):
        if self.selected_note_btn:
            self.selected_note_btn.state = "normal"
            self.selected_note_btn = None
        self.update_add_btn_state()

    def reset_pitch_btn_state(self):
        if self.selected_pitch_btn:
            self.selected_pitch_btn.state = "normal"
            self.selected_pitch_btn = None
        self.update_add_btn_state()

    def get_selected_note(self) -> Optional[Note]:
        if not self.selected_note_btn:
            return None

        str_note = self.selected_note_btn.text
        str_pitch = self.selected_pitch_btn.text if self.selected_pitch_btn else ""
        str_note = f"{str_note}{str_pitch}".strip()
        return Note(str_note)
