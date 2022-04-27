import React from "react"
import Fretboard from "../../services/fretboard"

interface Params {
    fretboard: Fretboard
    showNotes: string[]
}

export default function FretboardForehead({fretboard, showNotes}: Params) {
    const fretNote = function (stringNum: number, fretNum: number) {
        let notesOnFret = fretboard.getNotesAt(stringNum, fretNum)
        for (let note of notesOnFret) {
            if (showNotes.includes(note.toString())) {
                return (
                    <span className={`fret note__${note.value.toLowerCase()}${note.hasPitch() ? " note__pitch" : ""}`}>
                        {note.toString()}
                    </span>
                )
            }
        }
        return <span className={"fret"}>&nbsp;</span>
    }

    const rows = fretboard.tuning.map((rootNote, stringNum) => {
        return (
            <tr key={`${stringNum}-${rootNote}`} className={"fretboard__frets"}>
                {new Array(fretboard.frets + 1).fill("").map((_, fretNum) => {
                    return (
                        <td key={fretNum} className={"fretboard__frets--fret"}>
                            {fretNum === 0 ? (
                                <span className={`fret fret__0 note__${rootNote.toLowerCase()}`}>{rootNote}</span>
                            ) : (
                                fretNote(stringNum, fretNum)
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
