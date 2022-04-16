const NoteColor = {
    C: "#FF8F8F",
    D: "#FFE342",
    E: "#979EA8",
    F: "#54C45E",
    G: "#6DB1FF",
    A: "#DEDEFF",
    B: "#E08FFF",

    get: function (value: string): string {
        return (this as any)[value[0].toUpperCase()]
    }
}

class NoteService {
    note: string

    constructor(note: string) {
        this.note = note;
    }

    hasPitch(): boolean {
        return this.note.length === 1
    }

    isSharp(): boolean {
        return this.note[1] === "#"
    }

    isFlat(): boolean {
        return this.note[1].toLowerCase() === "b"
    }

    getStyle() {
        const color = NoteColor.get(this.note);

        if (this.hasPitch()) {
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
        } else {
            return {}
        }
    }
}

export default NoteService;