from kivy.app import App
from kivy.core.window import Window

from fretboard.app.settings import get_ui_path, load_ui
from fretboard.app.styles import colors as ui_colors
from fretboard.app.widgets.main import MainWidget


class AppStyles:
    color = ui_colors


# load *.kv files
load_ui()


Window.minimum_width, Window.minimum_height = 700, 400
Window.size = Window.minimum_width, Window.minimum_height


class FretboardApp(App):
    kv_file = get_ui_path("main.kv")

    # utils to use in *.kv files as app.style.*
    style = AppStyles()

    def build(self):
        return MainWidget()
