import React from "react"
import "./../../styles/fretboard-hot-keys.scss"
import {ButtonClickEvent, SetStateFunc} from "../../interfaces/react"

export interface HotKey {
    name: string
    values: string[]
}

interface HotKeyParams {
    hotKeys: HotKey[]
    selectedNames: string[]
    selectHotKeyName: SetStateFunc<string[]>
}

export default function FretboardHotKeys({hotKeys = [], selectedNames = [], selectHotKeyName}: HotKeyParams) {
    function handleSelect(e: ButtonClickEvent) {
        const selectedName = (e.target as HTMLButtonElement).textContent as string
        if (selectedNames.includes(selectedName)) {
            selectHotKeyName(selectedNames.filter((item) => item !== selectedName).sort())
        } else {
            selectHotKeyName([...selectedNames, selectedName].sort())
        }
    }

    return (
        <ul className={"fretboard__hot-keys"}>
            {hotKeys.map((k) => {
                return (
                    <li key={k.name} className={"fretboard__hot-keys__item"}>
                        <button
                            className={`btn ${selectedNames.includes(k.name) ? "btn-primary" : "btn-link"}`}
                            onClick={handleSelect}>
                            {k.name}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}
