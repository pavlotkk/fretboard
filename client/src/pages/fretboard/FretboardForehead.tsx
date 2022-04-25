import React from "react"
import Fretboard from "../../entities/fretboard"

interface Params {
    fretboard: Fretboard
}

export default function FretboardForehead({fretboard}: Params) {
    const rows = fretboard.tuning.map((rootNote, stringNum) => {
        return (
            <tr key={`${stringNum}-${rootNote}`} className={"fretboard__frets"}>
                {new Array(fretboard.frets + 1).fill("").map((_, fretNum) => {
                    return (
                        <td key={fretNum} className={"fretboard__frets--fret"}>
                            {fretNum === 0 ? (
                                <span className={`fret fret__0 note__${rootNote.toLowerCase()}`}>{rootNote}</span>
                            ) : (
                                <span className={"fret"}>&nbsp;</span>
                            )}
                        </td>
                    )
                })}
            </tr>
        )
    })

    return (
        <table className={"fretboard__forehead"}>
            <tbody>{rows}</tbody>
        </table>
    )
}
