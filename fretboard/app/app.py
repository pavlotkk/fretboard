from kivy.app import App
from kivy.uix.widget import Widget


class MainWidget(Widget):
    pass


class FretboardApp(App):
    def build(self):
        return MainWidget()
