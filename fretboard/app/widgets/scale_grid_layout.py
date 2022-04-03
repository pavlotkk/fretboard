from kivy.uix.gridlayout import GridLayout

from fretboard.app.widgets.note import InfoNoteLabel, NoteLabel
from fretboard.app.widgets.spacer import HorizontalSpacer
from fretboard.music_theory import Key, Note, Pitch, Scale


class ScaleGridlayout(GridLayout):
    def add_scale(self, note: Note, key: Key):
        scale = Scale(note, key)

        # left spacer
        self.add_widget(HorizontalSpacer())

        # scale root note
        self.add_widget(InfoNoteLabel(text=str(scale[0])))

        # scale notes
        for note in scale:
            self.add_widget(NoteLabel.from_note(note))

        # sharps/flats count
        if scale.flats_count:
            self.add_widget(
                InfoNoteLabel(text=f"{scale.flats_count}{Pitch.Flat.value}")
            )
        elif scale.sharps_count:
            self.add_widget(
                InfoNoteLabel(text=f"{scale.sharps_count}{Pitch.Sharp.value}")
            )
        else:
            self.add_widget(InfoNoteLabel(text="0"))

        # right spacer
        self.add_widget(HorizontalSpacer())

    def clear(self):
        for w in [w for w in self.children]:
            self.remove_widget(w)
