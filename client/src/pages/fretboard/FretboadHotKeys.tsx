import React from "react"
import "./../../styles/fretboard-hot-keys.scss"
import {ButtonClickEvent, SetStateFunc} from "../../interfaces/react"

interface Config {
    keys: string[]
    selectedKeys: string[]
    selectKey: SetStateFunc<string[]>
}

export default function FretboardHotKeys({keys = [], selectedKeys = [], selectKey}: Config) {
    function handleSelect(e: ButtonClickEvent) {
        const value = (e.target as HTMLButtonElement).textContent as string
        if (selectedKeys.includes(value)) {
            selectKey(selectedKeys.filter((k) => k !== value).sort())
        } else {
            selectKey([...selectedKeys, value].sort())
        }
    }

    return (
        <ul className={"fretboard__hot-keys"}>
            {keys.map((k) => {
                return (
                    <li key={k} className={"fretboard__hot-keys__item"}>
                        <button
                            className={`btn ${selectedKeys.includes(k) ? "btn-primary" : "btn-link"}`}
                            onClick={handleSelect}>
                            {k}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}
