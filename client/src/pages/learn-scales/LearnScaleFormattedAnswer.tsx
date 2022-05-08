import NoteStyler from "../../services/note-styler"
import React from "react"

interface FormattedAnswerParams {
    actual_notes: string[]
    expected_notes: string[]
}

export default function FormattedAnswer({actual_notes = [], expected_notes = []}: FormattedAnswerParams) {
    const actualNotesCols = actual_notes.map((n, index) => {
        return (
            <td key={index} className={`scale-note ${NoteStyler.get(n)}`}>
                {n}
            </td>
        )
    })

    const expectedNotesCols = expected_notes.map((n, index) => {
        let value: string
        if (actual_notes.some((v) => v === "")) {
            value = "..."
        } else if (n === actual_notes[index]) {
            value = "✅"
        } else {
            value = "❌"
        }
        return (
            <td key={index} className={"scale-note"}>
                {value}
            </td>
        )
    })

    return (
        <table className={`scale-table__layout`}>
            <tbody>
                <tr key={"actual_notes"}>{actualNotesCols}</tr>
                <tr key={"expected_notes"}>{expectedNotesCols}</tr>
            </tbody>
        </table>
    )
}
