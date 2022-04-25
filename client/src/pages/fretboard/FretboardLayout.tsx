import React from "react"
import FretboardCanvas from "./FretboardCanvas"
import FretboardForehead from "./FretboardForehead"

interface Params {
    tuning: string[]
    frets: number
}

export default function FretboardLayout({tuning, frets = 12}: Params) {
    return (
        <div className={"fretboard"}>
            <FretboardCanvas tuning={tuning} frets={frets} />
            <FretboardForehead tuning={tuning} frets={frets} />
        </div>
    )
}
