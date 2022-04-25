import React, {useState} from "react"
import "./../../styles/fretboard.scss"
import FretboardHotKeys from "./FretboadHotKeys"
import {CHROMATIC_SCALE} from "../../shared/constants"
import Fretboard from "../../entities/fretboard"
import FretboardLayout from "./FretboardLayout"

export default function FretboardPage() {
    const [hotKeys, setHotKeys] = useState<string[]>([])
    const fretboard = Fretboard.standardSixStringsGuitar()

    return (
        <main className="container">
            <div className="bg-light p-4 rounded">
                <FretboardHotKeys keys={CHROMATIC_SCALE} selectedKeys={hotKeys} selectKey={setHotKeys} />
            </div>
            <FretboardLayout tuning={fretboard.tuning} frets={fretboard.frets} />
        </main>
    )
}
