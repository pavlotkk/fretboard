import {parseNotes} from "../entities/note"

// TODO: use scss for notes on scale page

const NoteColor = {
    C: "#FF8F8F",
    D: "#FFE342",
    E: "#979EA8",
    F: "#54C45E",
    G: "#6DB1FF",
    A: "#DEDEFF",
    B: "#E08FFF",
}

// TODO: get rid of service, use `Note` instead

class UserInputNoteService {
    private readonly note: string

    constructor(note: string) {
        const notes = UserInputNoteService.parse(note.trim(), 1)
        this.note = notes.length > 0 ? notes[0] : ""
    }

    static parse(input: string, length: number = 0, strict = true): string[] {
        return parseNotes(input, length, strict)
    }

    getColor(): string {
        if (!this.isValid()) {
            return "white"
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
        const color = this.getColor()

        if (!this.isValid()) {
            return {
                border: `5px solid black`,
                borderRadius: "50%",
                backgroundColor: color,
            }
        } else if (!this.hasPitch()) {
            return {
                border: `5px solid ${color}`,
                borderRadius: "50%",
                backgroundColor: color,
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
}

export default UserInputNoteService
