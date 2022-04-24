import React from "react";

export default function FretboardPage() {
    return (
        <main className="container">
            <div className="bg-light p-5 rounded">
                <input type="text" className={"form-control form-control-lg"}/>
                <ul className={"note-suggestions"}>
                    <li className={"note-suggestions__item"}>
                        <button className={"btn btn-link"}>A</button>
                    </li>
                    <li className={"note-suggestions__item"}>
                        <button className={"btn btn-link"}>B</button>
                    </li>
                    <li className={"note-suggestions__item"}>
                        <button className={"btn btn-link"}>C</button>
                    </li>
                    <li className={"note-suggestions__item"}>
                        <button className={"btn btn-link"}>D</button>
                    </li>
                    <li className={"note-suggestions__item"}>
                        <button className={"btn btn-link"}>E</button>
                    </li>
                    <li className={"note-suggestions__item"}>
                        <button className={"btn btn-link"}>F</button>
                    </li>
                    <li className={"note-suggestions__item"}>
                        <button className={"btn btn-link"}>G</button>
                    </li>
                    <li className={"note-suggestions__item"}>
                        <button className={"btn btn-link"}>A major scale</button>
                    </li>
                    <li className={"note-suggestions__item"}>
                        <button className={"btn btn-link"}>D minor scale</button>
                    </li>
                </ul>
            </div>
            <div className={"fretboard-layout"}>
                <table className={"fretboard__canvas"}>
                    <tbody>
                    <tr className={"fretboard__canvas--frets"}>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                    </tr>
                    <tr className={"fretboard__canvas--frets"}>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                    </tr>
                    <tr className={"fretboard__canvas--frets"}>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                    </tr>
                    <tr className={"fretboard__canvas--frets"}>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                    </tr>
                    <tr className={"fretboard__canvas--frets"}>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                        <td className={"fretboard__canvas--fret"}><span className={"fret fret--placeholder"}>&nbsp;</span></td>
                    </tr>
                    </tbody>
                </table>
                <table className={"fretboard-layout__notes"}>
                    <tbody>
                    <tr className={"fretboard-layout__notes--frets"}>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret fret__0 note__e"}>E</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret note__f"}>F</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret note__g note__pitch"}>Gb</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret note__g"}>G</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                    </tr>
                    <tr className={"fretboard-layout__notes--frets"}>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret fret__0 note__b"}>B</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                    </tr>
                    <tr className={"fretboard-layout__notes--frets"}>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret fret__0 note__g"}>G</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                    </tr>
                    <tr className={"fretboard-layout__notes--frets"}>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret fret__0 note__d"}>D</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                    </tr>
                    <tr className={"fretboard-layout__notes--frets"}>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret fret__0 note__a"}>A</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                    </tr>
                    <tr className={"fretboard-layout__notes--frets"}>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret fret__0 note__e"}>E</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                        <td className={"fretboard-layout__notes--fret"}><span className={"fret"}>&nbsp;</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}