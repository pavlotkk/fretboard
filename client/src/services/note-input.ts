import {alignCase, Note} from "./note"
import {ALLOWED_NOTE_SYMBOLS} from "../shared/constants"

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
function parseNoteInput(input: string, count: number = 0, strict = true): string[] {
    let notes = input.trim().split(/\s/)

    if (strict) {
        notes = notes
            .filter((n) => {
                try {
                    new Note(n)
                    return true
                } catch {
                    return false
                }
            })
            .map((n) => alignCase(n))
    } else {
        notes = notes
            .filter((n) => n.trim().length > 0)
            .map((n) => alignCase(n))
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

export default parseNoteInput
