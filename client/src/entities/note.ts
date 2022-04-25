import {ALLOWED_NOTE_SYMBOLS, ALLOWED_PITCH_SYMBOLS} from "../shared/constants"

enum Pitch {
    Sharp = "#",
    Flat = "b",
    No = "",
}

class Note {
    readonly name: string
    readonly pitch: Pitch

    constructor(name: string) {
        ;[this.name, this.pitch] = this.parse(name)
    }

    toString(): string {
        return `${this.name}${this.pitch}`
    }

    private parse(name: string): [string, Pitch] {
        const parsedNote = parseNotes(name, 1, true)[0]
        validateNote(parsedNote)
        return [parsedNote[0], parsedNote.slice(-1) as Pitch]
    }
}

/**
 * Validate input note. Throws an Error if note is invalid
 * @param note note value
 * @throws Error
 */
function validateNote(note: string) {
    note = note.trim()

    // empty string is not valid value
    if (note.length === 0) {
        throw new Error(`Invalid note value: note value can not be empty.`)
    }

    // check first change (note name)
    if (!ALLOWED_NOTE_SYMBOLS.includes(note[0])) {
        throw new Error(`Invalid note name: '${note[0]}'`)
    }

    // no pitch, no need any other checks
    if (note.length === 1) {
        return
    }

    // all pitches symbols should be allowed chars
    const pitchValueValid = Array.from(note.slice(1)).every((ch) => ALLOWED_PITCH_SYMBOLS.includes(ch))
    if (!pitchValueValid) {
        throw new Error(`Invalid pitch value: '${note.slice(1)}'`)
    }
}

/**
 * Check if input note is valid
 * @param note input note
 */
function isValidNote(note: string): boolean {
    try {
        validateNote(note)
        return true
    } catch (e) {
        return false
    }
}

/**
 * Format note value
 * @example
 *   >>> formatNote("c#")
 *   >>> "C#"
 * @param note
 */
function formatNote(note: string): string {
    switch (note.length) {
        case 0:
            return note
        case 1:
            return note.toUpperCase()
        default:
            return note[0].toUpperCase() + note.slice(1).toLowerCase()
    }
}

/**
 * Parse notes from input string
 * @param input input strict
 * @param count amount of notes to parse, 0 - no limits
 * @param strict true - ignore invalid note, false - soft note parsing
 * @example
 *  >>> parseNotes("c# d BB")
 *  >>> ["C#", "D", "Bb"]
 *
 *  >>> parseNotes("c# d BB", 1)
 *  >>> ["C#"]
 *
 *  >>> parseNotes("c# d BB", 5)
 *  >>> ["C#", "D", "Bb", "", ""]
 *
 *  >>> parseNotes("Cb#sdfbsdf", 0, false)
 *  >>> ["Cb"]
 */
function parseNotes(input: string, count: number = 0, strict = true): string[] {
    let notes = input.trim().split(/\s/)

    if (strict) {
        notes = notes.filter((n) => isValidNote(n)).map((n) => formatNote(n))
    } else {
        notes = notes
            .filter((n) => n.trim().length > 0)
            .map((n) => formatNote(n))
            .map((n) => {
                // check first change (note name)
                if (!ALLOWED_NOTE_SYMBOLS.includes(n[0])) {
                    return ""
                }

                // no pitch, no need any other checks
                if (n.length === 1) {
                    return n
                }

                // remove invalid chars from pitch
                return n[0] + n.slice(1).replace(/[^b#]/, "")
            })
            .filter((n) => n.trim().length > 0)
    }

    // align result to the required length
    if (count > 0) {
        if (count <= notes.length) {
            return notes.slice(0, count)
        } else {
            const extendedNotes = new Array(count).fill("")
            for (let i = 0; i < notes.length; i++) {
                extendedNotes[i] = notes[i]
            }
            return extendedNotes
        }
    }

    return notes
}

export {Note, Pitch, validateNote, isValidNote, parseNotes}
