import {Note} from "./note"

class Fretboard {
    readonly strings: number
    readonly tuning: string[]
    readonly frets: number
    readonly notes: Note[][][]

    constructor(tuning: string[], frets: number = 12) {
        this.strings = tuning.length
        this.tuning = tuning
        this.frets = frets
        this.notes = [
            [
                [new Note("E")],
                [new Note("F")],
                [new Note("F#"), new Note("Gb")],
                [new Note("G")],
                [new Note("G#"), new Note("Ab")],
                [new Note("A")],
                [new Note("A#"), new Note("Bb")],
                [new Note("B")],
                [new Note("C")],
                [new Note("C#"), new Note("Db")],
                [new Note("D")],
                [new Note("D#"), new Note("Eb")],
                [new Note("E")],
            ],
        ]
    }

    isNoteAt(note: string | Note, stringNum: number, fretNum: number): boolean {
        if (typeof note === "string") {
            note = new Note(note)
        }

        for (let row of this.notes) {
            for (let fret of row) {
                if (fret.some((n) => n.isEqual(note as Note))) {
                    return true
                }
            }
        }

        return false
    }

    static standardSixStringsGuitar(): Fretboard {
        return new Fretboard(["E", "B", "G", "D", "A", "E"])
    }

    static getDefault(): Fretboard {
        return Fretboard.standardSixStringsGuitar()
    }
}

export default Fretboard
