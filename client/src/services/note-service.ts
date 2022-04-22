import {ALLOWED_NOTE_SYMBOLS, ALLOWED_PITCH_SYMBOLS} from "../shared/constants";

const NoteColor = {
    C: "#FF8F8F",
    D: "#FFE342",
    E: "#979EA8",
    F: "#54C45E",
    G: "#6DB1FF",
    A: "#DEDEFF",
    B: "#E08FFF",
}

function isValidNote(note: string): boolean {
    // empty string is not valid value
    if (note.length === 0) {
        return false
    }

    // check first change (note name)
    if (!ALLOWED_NOTE_SYMBOLS.includes(note[0])) {
        return false
    }

    // no pitch, no need any other checks
    if (note.length === 1) {
        return true
    }

    // all pitches symbols should be allowed chars
    return Array.from(note.slice(1)).every(ch => ALLOWED_PITCH_SYMBOLS.includes(ch))
}

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

class NoteService {
    private readonly note: string

    constructor(note: string) {
        const notes = NoteService.parse(note.trim(), 1)
        this.note = notes.length > 0 ? notes[0] : ""
    }

    getColor(): string {
        if (!this.isValid()) {
            return 'white';
        }
        return (NoteColor as any)[this.note[0]]
    }

    hasPitch(): boolean {
        if (!this.isValid()) {
            return false
        }
        return this.note.length > 1
    }

    isSharp(): boolean {
        if (!this.isValid()) {
            return false
        }
        if (this.note.length <= 1) {
            return false
        }
        return this.note[1] === "#"
    }

    isFlat(): boolean {
        if (!this.isValid()) {
            return false
        }
        if (this.note.length <= 1) {
            return false
        }
        return this.note[1].toLowerCase() === "b"
    }

    isValid(): boolean {
        return this.note.length > 0
    }

    getStyle() {
        const color = this.getColor();

        if (!this.isValid()) {
            return {
                border: `5px solid black`,
                borderRadius: "50%",
                backgroundColor: color
            }
        } else if (!this.hasPitch()) {
            return {
                border: `5px solid ${color}`,
                borderRadius: "50%",
                backgroundColor: color
            }
        } else if (this.isSharp()) {
            return {
                border: `5px solid ${color}`,
                borderRadius: "50%",
            }
        } else if (this.isFlat()) {
            return {
                border: `5px double ${color}`,
                borderRadius: "50%",
            }
        }
    }

    /**
     * Parse notes string input
     * @param input notes value
     * @param length required amount of parsed notes, 0 - ignore
     * @param strict true - strict note validation, false - try to guess valid value
     */
    static parse(input: string, length: number = 0, strict = true): string[] {
        let notes = input.trim().split(/\s/)

        if (strict) {
            notes = notes.filter(n => isValidNote(n)).map(n => formatNote(n))
        } else {
            notes = notes.filter(n => n.trim().length > 0).map(n => formatNote(n)).map(n => {

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
            }).filter(n => n.trim().length > 0)
        }

        // align result to the required length
        if (length > 0) {
            if (length <= notes.length) {
                return notes.slice(0, length)
            } else {
                const extendedNotes = new Array(length).fill("")
                for (let i = 0; i < notes.length; i++) {
                    extendedNotes[i] = notes[i]
                }
                return extendedNotes
            }
        }

        return notes
    }
}

export default NoteService;