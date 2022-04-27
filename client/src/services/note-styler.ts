import {Note} from "./note"

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

class NoteStyler {
    static get(n: string) {
        // validate input note
        let note: Note | null = null
        try {
            note = new Note(n)
        } catch {}

        // get note color
        let noteColor = note == null ? "white" : (NoteColor as any)[note.name()]

        if (note == null) {
            return {
                border: `5px solid black`,
                borderRadius: "50%",
                backgroundColor: noteColor,
            }
        } else if (!note.hasPitch()) {
            return {
                border: `5px solid ${noteColor}`,
                borderRadius: "50%",
                backgroundColor: noteColor,
            }
        } else if (note.isSharp()) {
            return {
                border: `5px solid ${noteColor}`,
                borderRadius: "50%",
            }
        } else if (note.isFlat()) {
            return {
                border: `5px double ${noteColor}`,
                borderRadius: "50%",
            }
        }
    }
}

export default NoteStyler
