import React, {useState} from "react"
import "./../../styles/fretboard.scss"
import FretboardHotKeys, {HotKey} from "./FretboadHotKeys"
import {CHROMATIC_SCALE} from "../../shared/constants"
import Fretboard from "../../entities/fretboard"
import FretboardLayout from "./FretboardLayout"

export default function FretboardPage() {
    const [hotKeyNames, setHotKeyNames] = useState<string[]>([])
    const [fretboard] = useState<Fretboard>(Fretboard.standardSixStringsGuitar())

    const allHotKeys = CHROMATIC_SCALE.map((note) => {
        return {name: note, values: [note]} as HotKey
    })

    return (
        <main className="container">
            <div className="bg-light p-4 rounded">
                <FretboardHotKeys hotKeys={allHotKeys} selectedNames={hotKeyNames} selectHotKeyName={setHotKeyNames} />
            </div>
            <FretboardLayout fretboard={fretboard} />
        </main>
    )
}
