import React, {useState} from "react"
import "./../../styles/fretboard.scss"
import FretboardHotKeys from "./FretboadHotKeys"
import {CHROMATIC_SCALE} from "../../shared/constants"

export default function FretboardPage() {
    const [hotKeys, setHotKeys] = useState<string[]>([])

    return (
        <main className="container">
            <div className="bg-light p-4 rounded">
                <FretboardHotKeys keys={CHROMATIC_SCALE} selectedKeys={hotKeys} selectKey={setHotKeys} />
            </div>
            <div className={"fretboard-layout"}>
                <table className={"fretboard__canvas"}>
                    <tbody>
                        <tr className={"fretboard__frets"}>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                        </tr>
                        <tr className={"fretboard__frets"}>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                        </tr>
                        <tr className={"fretboard__frets"}>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                        </tr>
                        <tr className={"fretboard__frets"}>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                        </tr>
                        <tr className={"fretboard__frets"}>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret--placeholder"}>&nbsp;</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className={"fretboard"}>
                    <tbody>
                        <tr className={"fretboard__frets"}>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret__0 note__e"}>E</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret note__f"}>F</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret note__g note__pitch"}>Gb</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret note__g"}>G</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                        </tr>
                        <tr className={"fretboard__frets"}>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret__0 note__b"}>B</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                        </tr>
                        <tr className={"fretboard__frets"}>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret__0 note__g"}>G</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                        </tr>
                        <tr className={"fretboard__frets"}>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret__0 note__d"}>D</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                        </tr>
                        <tr className={"fretboard__frets"}>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret__0 note__a"}>A</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                        </tr>
                        <tr className={"fretboard__frets"}>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret fret__0 note__e"}>E</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                            <td className={"fretboard__frets--fret"}>
                                <span className={"fret"}>&nbsp;</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}
