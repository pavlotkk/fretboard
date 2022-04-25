import React from "react"
import FretboardCanvas from "./FretboardCanvas"
import FretboardForehead from "./FretboardForehead"
import Fretboard from "../../entities/fretboard"

interface Params {
    fretboard: Fretboard
}

export default function FretboardLayout({fretboard}: Params) {
    return (
        <div className={"fretboard"}>
            <FretboardCanvas fretboard={fretboard} />
            <FretboardForehead fretboard={fretboard} />
        </div>
    )
}
