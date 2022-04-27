import parseNoteInput from "../../services/note-input"

describe("Note Service", () => {
    it.each([
        ["", [], 0],
        ["c       d", ["C", "D"], 0],
        ["hello", [], 0],
        ["C#", ["C#"], 0],
        ["C#", ["C#"], 1],
        ["c", ["C"], 1],
        ["c d# eB", ["C", "D#", "Eb"], 3],
        ["c d# eB", ["C"], 1],
        ["c d# eB", ["C", "D#", "Eb", ""], 4],
    ])("parse %p as %p with len %p", (note_input: string, expected: string[], len: number) => {
        const actual = parseNoteInput(note_input, len)

        expect(actual).toEqual(expected)
    })

    it.each([["c#d", "C#"]])("non strict parsing %p to %p", (input: string, expected: string) => {
        let actual = parseNoteInput(input, 0, false).join("")

        expect(actual).toEqual(expected)
    })
})
