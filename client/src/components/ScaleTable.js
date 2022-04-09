import {GetNoteStyle} from "../shared/styles";
import React from "react";

function ScaleTable({scales = []}) {
    const rows = scales.map((scale) => {
        const cols = scale.notes.map((n) => {
            return <td key={n} className={"ScaleNote"} style={GetNoteStyle(n)}>{n}</td>
        });

        return (
            <React.Fragment key={scale.id}>
                <tr>
                    <td className={scale.name !== null && scale.name !== "" ? "ScaleNote-Before" : ""}>{scale.name || ""}</td>
                    {cols}
                    <td className={scale.desc !== null && scale.desc !== "" ? "ScaleNote-After" : ""}>{scale.desc || ""}</td>
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