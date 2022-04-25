import React from "react"
import UserInputNoteService from "../../services/user-input-note-service"

interface LearnScalesAnswerParams {
    actual_notes: string[]
    expected_notes: string[]
}

function LearnScalesAnswer({actual_notes = [], expected_notes = []}: LearnScalesAnswerParams) {
    const actualNotesCols = actual_notes.map((n, index) => {
        const noteService = new UserInputNoteService(n)
        return (
            <td key={index} className={"scale-note"} style={noteService.getStyle()}>
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

export default LearnScalesAnswer
