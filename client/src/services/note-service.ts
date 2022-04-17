const NoteColor = {
    C: "#FF8F8F",
    D: "#FFE342",
    E: "#979EA8",
    F: "#54C45E",
    G: "#6DB1FF",
    A: "#DEDEFF",
    B: "#E08FFF",
}

class NoteService {
    note: string

    constructor(note: string) {
        this.note = NoteService.parse(note.trim(), 1)[0]
    }

    getColor(): string {
        if (!this.isValid()) {
            return 'white';
        }
        return (NoteColor as any)[this.note[0]]
    }

    hasPitch(): boolean {
        if(!this.isValid()){
            return false
        }
        return this.note.length > 1
    }

    isSharp(): boolean {
        if(!this.isValid()){
            return false
        }
        if (this.note.length <= 1) {
            return false
        }
        return this.note[1] === "#"
    }

    isFlat(): boolean {
        if(!this.isValid()){
            return false
        }
        if (this.note.length <= 1) {
            return false
        }
        return this.note[1].toLowerCase() === "b"
    }

    isValid(): boolean {
        if (this.note.length === 0) {
            return false
        }

        if (!NoteColor.hasOwnProperty(this.note[0])) {
            return false
        }

        if(this.note.length === 1){
            return true
        }

        let pitches = new Set(this.note.slice(1))
        if (pitches.size > 1) {
            return false
        }

        return pitches.has("#") || pitches.has("b");
    }

    getStyle() {
        const color = this.getColor();

        if(!this.isValid()) {
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

    static parse(input: string, length: number = 0): string[] {
        let notes = input.trim().split(/\s/)
        if (length > 0) {
            notes = notes.slice(0, length)
        }

        const result = new Array(length > 0 ? length : notes.length).fill("")

        for (let i = 0; i < notes.length; i++) {
            result[i] = notes[i].slice(0, 1).toUpperCase() + notes[i].slice(1).toLowerCase()
        }

        return result
    }
}

export default NoteService;