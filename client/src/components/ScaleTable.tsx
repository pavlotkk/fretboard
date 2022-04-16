import React from "react";
import classNames from "classnames";
import {Scale} from "../interfaces/music";
import ScaleService from "../services/scale-service";
import NoteService from "../services/note-service";

interface ScaleTableParams {
    scales: Scale[]
}

function ScaleTable({scales = []}: ScaleTableParams) {
    const rows = scales.map((scale: Scale) => {
        const scaleService = new ScaleService(scale);

        const cols = scale.notes.map((n) => {
            const noteService = new NoteService(n);
            return <td key={n} className={"scale-note"} style={noteService.getStyle()}>{n}</td>
        });

        const scaleNameClass = classNames({
            "scale-note__desc": scale.name,
            "scale-note__name": scale.name
        })
        const scaleSharpsFlatsCountClass = classNames({
            "scale-note__desc": scaleService.desc,
            "scale-note__sharps_flats_count": scaleService.desc
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
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}

export default ScaleTable;