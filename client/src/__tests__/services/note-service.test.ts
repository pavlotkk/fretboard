import NoteService from "../../services/note-service"

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
        const actual = NoteService.parse(note_input, len)

        expect(actual).toEqual(expected)
    })

    it.each([
        ["hello", false],
        ["c", true],
        ["c#", true],
        ["cb", true],
        ["cbb", true],
        ["c##", true],
        ["c#b", true],
        ["cb#", true],
        ["cc", false],
    ])("%p is valid = %p", (note_input: string, expected: boolean) => {
        const service = new NoteService(note_input)

        expect(service.isValid()).toEqual(expected)
    })

    it.each([
        ["", false, false, false],
        ["c", false, false, false],
        ["c#", true, true, false],
        ["cb", true, false, true],
        ["cH", false, false, false],
    ])(
        "%p hasPitch=%p, isSharp=%p, isFlat=%p",
        (note_input: string, hasPitch: boolean, isSharp: boolean, isFlat: boolean) => {
            const service = new NoteService(note_input)

            expect(service.hasPitch()).toEqual(hasPitch)
            expect(service.isSharp()).toEqual(isSharp)
            expect(service.isFlat()).toEqual(isFlat)
        }
    )

    it.each([["c#d", "C#"]])("non strict parsing %p to %p", (input: string, expected: string) => {
        let actual = NoteService.parse(input, 0, false).join("")

        expect(actual).toEqual(expected)
    })
})
