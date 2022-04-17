import React from "react";
import NoteService from "../../services/note-service";


interface LearnScalesAnswerParams {
    notes: string[]
}

function LearnScalesAnswer({notes = []}: LearnScalesAnswerParams) {
    const notesCols = notes.map((n, index) => {
        const noteService = new NoteService(n);
        return (
            <td key={index} className={"scale-note"} style={noteService.getStyle()}>{n}</td>
        )
    })

    const resultsCols = notes.map((n, index) => {
        return (
            <td key={index} className={"scale-note"}>...</td>
        )
    })

    return (
        <table className={`scale-table__layout`}>
            <tbody>
            <tr key={"notes"}>
                {notesCols}
            </tr>
            <tr key={"results"}>
                {resultsCols}
            </tr>
            </tbody>
        </table>
    )
}

export default LearnScalesAnswer;