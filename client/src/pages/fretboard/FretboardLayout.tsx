import React from "react"
import FretboardCanvas from "./FretboardCanvas"
import FretboardForehead from "./FretboardForehead"
import Fretboard from "../../services/fretboard"

interface Params {
    fretboard: Fretboard
    showNotes: string[]
}

export default function FretboardLayout({fretboard, showNotes}: Params) {
    return (
        <div className={"fretboard"}>
            <FretboardCanvas fretboard={fretboard} />
            <FretboardForehead fretboard={fretboard} showNotes={showNotes} />
        </div>
    )
}
