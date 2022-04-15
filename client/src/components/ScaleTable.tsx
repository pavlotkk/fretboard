import {GetNoteStyle} from "../shared/styles";
import React from "react";
import classNames from "classnames";
import {Scale} from "../interfaces/music";

interface ScaleTableParams {
    scales: Scale[]
}

function ScaleTable({scales = []}: ScaleTableParams) {
    function getScaleDesc(scale: Scale) {
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

    const rows = scales.map((scale: Scale) => {
        const cols = scale.notes.map((n) => {
            return <td key={n} className={"scale-note"} style={GetNoteStyle(n)}>{n}</td>
        });

        let desc = getScaleDesc(scale)
        const beforeClass = classNames({
            "scale-note-before": scale.name != null && scale.name !== ""
        })
        const afterClass = classNames({
            "scale-note-after": desc
        })

        return (
            <tr key={scale.id}>
                <td className={beforeClass}>{scale.name || ""}</td>
                {cols}
                <td className={afterClass}>{desc}</td>
            </tr>
        )
    })

    return (
        <table className={`scale-table__layout`}>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}

export default ScaleTable;