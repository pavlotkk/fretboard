import {ALLOWED_NOTE_SYMBOLS, ALLOWED_PITCH_SYMBOLS} from "../shared/constants"

/**
 * Align note case to <UPPER_NOTE><lower_pitch>
 * @example
 *   >>> formatNote("c#")
 *   >>> "C#"
 * @param note
 */
function alignCase(note: string): string {
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
 * Parse single note
 * @param note note value
 * @return parsed and formatted value
 */
function parse(note: string): string {
    if (note == null) {
        throw new Error("note value is required")
    }

    note = note.trim()

    // empty string is not valid value
    if (note.length === 0) {
        throw new Error("note value can not be empty")
    }

    // check first change (note name)
    if (!ALLOWED_NOTE_SYMBOLS.includes(note[0])) {
        throw new Error(`Invalid note name: '${note[0]}'`)
    }

    // all pitches symbols should be allowed chars
    if (note.length > 1) {
        const pitchValueValid = Array.from(note.slice(1)).every((ch) => ALLOWED_PITCH_SYMBOLS.includes(ch))
        if (!pitchValueValid) {
            throw new Error(`Invalid pitch value: '${note.slice(1)}'`)
        }
    }

    return alignCase(note)
}

enum Pitch {
    Sharp = "#",
    Flat = "b",
    No = "",
}

class Note {
    readonly value: string

    constructor(note: string) {
        this.value = parse(note)
    }

    /**
     * Get Note without last pitch
     */
    sub(): Note {
        if (this.hasPitch()) {
            return new Note(this.value.slice(0, -1))
        }
        return new Note(this.value)
    }

    /**
     * Get note name, without any pitches
     */
    name(): string {
        return this.value[0]
    }

    isSharp(): boolean {
        if (!this.hasPitch()) {
            return false
        }
        return this.value.slice(-1) === Pitch.Sharp
    }

    isFlat(): boolean {
        if (!this.hasPitch()) {
            return false
        }
        return this.value.slice(-1) === Pitch.Flat
    }

    isEqual(note: Note | string) {
        if (note == null) {
            return false
        }
        if (typeof note === "string") {
            // don't care about correctness of compared note,
            // just align the case
            note = alignCase(note)
        }
        return this.value === note.toString()
    }

    toString(): string {
        return this.value
    }

    hasPitch(): boolean {
        return this.value.length > 1
    }
}

export {Note, Pitch, parse, alignCase}
