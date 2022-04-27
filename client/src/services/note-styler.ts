import {Note} from "./note"

class NoteStyler {
    static get(n: string): string {
        let note: Note | null = null
        try {
            note = new Note(n)
        } catch {
            return "note__none"
        }

        let classNames: string[] = [`note__${note.name().toLowerCase()}`]
        if (note.hasPitch()) {
            classNames.push("note__pitch")
        }
        if (note.isSharp()) {
            classNames.push("note__sharp")
        }
        if (note.isFlat()) {
            classNames.push("note__flat")
        }

        return classNames.join(" ")
    }
}

export default NoteStyler
