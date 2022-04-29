import {Note} from "./note"

const CHROMATIC_SCALE: Note[][] = "B#/C, C#/Db, D, D#/Eb, E/Fb, E#/F, F#/Gb, G, G#/Ab, A, A#/Bb, B/Cb"
    .split(", ")
    .map((notes) => notes.split("/").map((n) => new Note(n)))

const ALPHABET_NOTES: Note[] = "A, B, C, D, E, F, G".split(", ").map((n) => new Note(n))

export {CHROMATIC_SCALE, ALPHABET_NOTES}
