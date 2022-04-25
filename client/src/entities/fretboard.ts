class Fretboard {
    readonly strings: number
    readonly tuning: string[]
    readonly frets: number

    constructor(tuning: string[], frets: number = 12) {
        this.strings = tuning.length
        this.tuning = tuning
        this.frets = frets
    }

    static standardSixStringsGuitar(): Fretboard {
        return new Fretboard(["E", "B", "G", "D", "A", "E"])
    }

    static getDefault(): Fretboard {
        return Fretboard.standardSixStringsGuitar()
    }
}

export default Fretboard
