import React, {useMemo, useState} from "react"
import "./../../styles/fretboard.scss"
import FretboardHotKeys, {HotKey} from "./FretboadHotKeys"
import {CHROMATIC_SCALE} from "../../shared/constants"
import Fretboard from "../../services/fretboard"
import FretboardLayout from "./FretboardLayout"

function getAllHotKeys(): HotKey[] {
    return CHROMATIC_SCALE.map((note) => {
        return {name: note, values: [note]} as HotKey
    })
}

export default function FretboardPage() {
    const [hotKeyNames, setHotKeyNames] = useState<string[]>([])
    const [fretboard] = useState<Fretboard>(Fretboard.standardSixStringsGuitar())

    const allHotKeys = useMemo<HotKey[]>(getAllHotKeys, [])
    const selectedNotes: string[] = useMemo<string[]>(() => {
        return allHotKeys
            .filter((hk) => hotKeyNames.includes(hk.name))
            .map((hk) => hk.values)
            .flat()
        // eslint-disable-next-line
    }, [hotKeyNames])

    return (
        <main className="container">
            <div className="bg-light p-4 rounded">
                <FretboardHotKeys hotKeys={allHotKeys} selectedNames={hotKeyNames} selectHotKeyName={setHotKeyNames} />
            </div>
            <FretboardLayout fretboard={fretboard} showNotes={selectedNotes} />
        </main>
    )
}
