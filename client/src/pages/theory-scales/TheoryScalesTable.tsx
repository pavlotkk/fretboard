import React from "react"
import classNames from "classnames"
import {ApiScale} from "../../interfaces/api"
import NoteStyler from "../../services/note-styler"

interface ScaleTableParams {
    scales: ApiScale[]
}

function getScaleDesc(scale: ApiScale): string {
    let desc = ""
    if (scale.sharps_count > 0) {
        desc = `${scale.sharps_count} #`
    } else if (scale.flats_count > 0) {
        desc = `${scale.flats_count} b`
    } else if (scale.sharps_count === 0 && scale.flats_count === 0) {
        desc = "0"
    }
    return desc
}

function TheoryScalesTable({scales = []}: ScaleTableParams) {
    const rows = scales.map((scale: ApiScale) => {
        const scaleDesc = getScaleDesc(scale)

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
            "scale-desc": scaleDesc,
        }

        return (
            <tr key={scale.id}>
                <td className={scaleNameClass}>{scale.name || ""}</td>
                {cols}
                <td className={scaleSharpsFlatsCountClass}>{scaleDesc}</td>
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
