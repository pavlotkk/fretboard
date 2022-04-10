import {GetNoteStyle} from "../shared/styles";
import React from "react";

function ScaleTable({scales = []}) {
    const rows = scales.map((scale) => {
        const cols = scale.notes.map((n) => {
            return <td key={n} className={"ScaleNote"} style={GetNoteStyle(n)}>{n}</td>
        });

        let desc = ""
        if(scale.sharps_count > 0){
            desc = `${scale.sharps_count} #`
        } else if (scale.flats_count > 0){
            desc = `${scale.flats_count} b`
        } else if (scale.sharps_count === 0 && scale.flats_count === 0){
            desc = "0"
        }

        return (
            <React.Fragment key={scale.id}>
                <tr>
                    <td className={scale.name != null && scale.name !== "" ? "ScaleNote-Before" : ""}>{scale.name || ""}</td>
                    {cols}
                    <td className={desc ? "ScaleNote-After" : ""}>{desc}</td>
                </tr>
            </React.Fragment>
        )
    })

    return (
        <table className={`ScaleTable-Layout`}>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}

export default ScaleTable;