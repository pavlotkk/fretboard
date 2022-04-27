import {alignCase as alignNoteCase, Note, parse as parseNote} from "../../services/note"

describe("Test Note parser", () => {
    it.each([
        [undefined, "note value is required"],
        [null, "note value is required"],
        ["", "note value can not be empty"],
        ["k", "Invalid note name: 'k'"],
        ["Ck", "Invalid pitch value: 'k'"],
    ])("%p throws %p Error", (inputNote, expectedError: string) => {
        expect(() => {
            parseNote(inputNote as string)
        }).toThrowError(expectedError)
    })

    it.each([
        ["ab", "Ab"],
        ["D", "D"],
        ["e#", "E#"],
        ["F#", "F#"],
        ["GB", "Gb"],
    ])("parse %p to %p", (inputNote, expected) => {
        expect(parseNote(inputNote)).toEqual(expected)
    })
})

describe("Test note formatter", () => {
    it.each([
        ["c#", "C#"],
        ["d", "D"],
        ["eB", "Eb"],
        ["ab", "Ab"],
    ])("%p format to %p", (inputNote, expected) => {
        expect(alignNoteCase(inputNote)).toEqual(expected)
    })
})

describe("Test Note methods", () => {
    it.each([
        ["C", false],
        ["Db", true],
        ["G#", true],
        ["F##", true],
    ])("%p has/hasn't pitch = %p", (note: string, expected: boolean) => {
        expect(new Note(note).hasPitch()).toEqual(expected)
    })

    it.each([
        ["C", "C"],
        ["D#", "D"],
        ["F##", "F#"],
    ])("for %p sub note is %p", (note, expected) => {
        expect(new Note(note).sub().value).toEqual(expected)
    })

    it.each([
        ["C", "C"],
        ["D#", "D"],
        ["F##", "F"],
    ])("name of %p note is %p", (note, expected) => {
        expect(new Note(note).name()).toEqual(expected)
    })

    it.each([
        ["C", "C"],
        ["D#", "D#"],
        ["F##", "F##"],
    ])("%p toString is %p", (note, expected) => {
        expect(new Note(note).toString()).toEqual(expected)
    })

    it.each([
        ["C", false],
        ["Db", false],
        ["G#", true],
        ["F##", true],
    ])("%p is sharp = %p", (note: string, expected: boolean) => {
        expect(new Note(note).isSharp()).toEqual(expected)
    })

    it.each([
        ["C", false],
        ["Db", true],
        ["G#", false],
        ["Fbb", true],
    ])("%p is flat = %p", (note: string, expected: boolean) => {
        expect(new Note(note).isFlat()).toEqual(expected)
    })

    it.each([
        ["C", null, false],
        ["C", "", false],
        ["C", "c", true],
        ["Db", "D#", false],
        ["G#", new Note("B"), false],
        ["Fbb", new Note("Fbb"), true],
    ])("%p is equals to = %p", (note: string, compareWith, expected: boolean) => {
        expect(new Note(note).isEqual(compareWith as string)).toEqual(expected)
    })
})
