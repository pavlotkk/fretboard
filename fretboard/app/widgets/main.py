from kivy.uix.boxlayout import BoxLayout
from kivy.uix.gridlayout import GridLayout
from kivy.uix.widget import Widget

from fretboard.app.widgets.note import NoteLabel, InfoNoteLabel
from fretboard.music_theory import Key, Scale, Pitch


class MainWidget(Widget):
    def __init__(self, **kwargs):
        super(MainWidget, self).__init__(**kwargs)

        self.add_scale(Scale("C", Key.Major))
        self.add_scale(Scale("G", Key.Major))
        self.add_scale(Scale("F", Key.Major))

    def add_scale(self, scale: Scale):
        scale_layout: GridLayout = self.ids.scale_layout

        # scale root note
        scale_layout.add_widget(InfoNoteLabel(text=str(scale[0])))

        # scale notes
        for note in scale:
            scale_layout.add_widget(NoteLabel.from_note(note))

        # sharps/flats count
        if scale.flats_count:
            scale_layout.add_widget(InfoNoteLabel(text=f"{scale.flats_count}{Pitch.Flat.value}"))
        elif scale.sharps_count:
            scale_layout.add_widget(InfoNoteLabel(text=f"{scale.sharps_count}{Pitch.Sharp.value}"))
        else:
            scale_layout.add_widget(InfoNoteLabel(text=f"0"))
