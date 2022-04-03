from typing import Literal, Optional

from kivy.uix.button import Button
from kivy.uix.gridlayout import GridLayout
from kivy.uix.togglebutton import ToggleButton
from kivy.uix.widget import Widget

from fretboard.app.widgets.note import InfoNoteLabel, NoteLabel
from fretboard.app.widgets.spacer import HorizontalSpacer
from fretboard.music_theory import Key, Note, Pitch, Scale


class MainWidget(Widget):
    def __init__(self, **kwargs):
        super(MainWidget, self).__init__(**kwargs)

        self.btn_add: Button = self.ids.btn_add
        self.selected_note_btn: Optional[ToggleButton] = None
        self.selected_pitch_btn: Optional[ToggleButton] = None

    def on_add_scale(self):
        note = self.get_selected_note()
        if note:
            self.add_scale(Scale(note, Key.Major))
        self.reset_note_btn_state()
        self.reset_pitch_btn_state()

    def on_clear(self):
        self.reset_note_btn_state()
        self.reset_pitch_btn_state()

        scale_layout: GridLayout = self.ids.scale_layout
        for w in [w for w in scale_layout.children]:
            scale_layout.remove_widget(w)

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

    def update_add_btn_state(self):
        self.btn_add.disabled = self.selected_note_btn is None

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

    def add_scale(self, scale: Scale):
        scale_layout: GridLayout = self.ids.scale_layout

        # left spacer
        scale_layout.add_widget(HorizontalSpacer())

        # scale root note
        scale_layout.add_widget(InfoNoteLabel(text=str(scale[0])))

        # scale notes
        for note in scale:
            scale_layout.add_widget(NoteLabel.from_note(note))

        # sharps/flats count
        if scale.flats_count:
            scale_layout.add_widget(
                InfoNoteLabel(text=f"{scale.flats_count}{Pitch.Flat.value}")
            )
        elif scale.sharps_count:
            scale_layout.add_widget(
                InfoNoteLabel(text=f"{scale.sharps_count}{Pitch.Sharp.value}")
            )
        else:
            scale_layout.add_widget(InfoNoteLabel(text="0"))

        # right spacer
        scale_layout.add_widget(HorizontalSpacer())
