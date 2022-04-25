import React from "react"

interface Params {
    tuning: string[]
    frets: number
}

export default function FretboardCanvas({tuning, frets = 12}: Params) {
    return (
        <table className={"fretboard__canvas"}>
            <tbody>
                {new Array(tuning.length - 1).fill("").map((v, index) => {
                    return (
                        <tr key={index} className={"fretboard__frets"}>
                            {new Array(frets).fill("").map((v, index) => {
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
