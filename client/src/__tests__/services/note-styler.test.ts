import NoteStyler from "../../services/note-styler"

describe("Test note styler", () => {
    it.each([[""], [null], ["h"], ["a"], ["Bb"], ["c#"]])("%p has a defined style object", (note) => {
        expect(NoteStyler.get(note as string)).not.toBeNull()
    })
})
