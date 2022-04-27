import React from "react"
import classNames from "classnames"
import {Scale} from "../../interfaces/music"
import ScaleService from "../../services/scale-service"
import NoteStyler from "../../services/note-styler"

interface ScaleTableParams {
    scales: Scale[]
}

function TheoryScalesTable({scales = []}: ScaleTableParams) {
    const rows = scales.map((scale: Scale) => {
        const scaleService = new ScaleService(scale)

        const cols = scale.notes.map((n) => {
            return (
                <td key={n} className={`scale-note ${NoteStyler.get(n)}`}>
                    {n}
                </td>
            )
        })

        const scaleNameClass = classNames({
            "scale-desc": scale.name,
        })
        const scaleSharpsFlatsCountClass = classNames({
            "scale-desc": scaleService.desc,
        })

        return (
            <tr key={scale.id}>
                <td className={scaleNameClass}>{scale.name || ""}</td>
                {cols}
                <td className={scaleSharpsFlatsCountClass}>{scaleService.desc}</td>
            </tr>
        )
    })

    return (
        <table className={`scale-table__layout`}>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default TheoryScalesTable
