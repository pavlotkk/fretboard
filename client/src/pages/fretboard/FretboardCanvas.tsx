import React from "react"
import Fretboard from "../../services/fretboard"

interface Params {
    fretboard: Fretboard
}

export default function FretboardCanvas({fretboard}: Params) {
    return (
        <table className={"fretboard__canvas"}>
            <tbody>
                {new Array(fretboard.tuning.length - 1).fill("").map((v, index) => {
                    return (
                        <tr key={index} className={"fretboard__frets"}>
                            {new Array(fretboard.frets).fill("").map((v, index) => {
                                return (
                                    <td key={index} className={"fretboard__frets--fret"}>
                                        <span className={"fret fret--placeholder"}>&nbsp;</span>
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
