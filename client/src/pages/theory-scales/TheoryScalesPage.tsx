import React from "react"
import TheoryScalesTable from "./TheoryScalesTable"
import Api from "../../services/api"
import {ApiScale} from "../../interfaces/api"
import TheoryScaleForm, {FormSubmitData as TheoryScaleFormSubmitData} from "./TheoryScalesForm"
import "./../../styles/scale.scss"

function TheoryScalesPage() {
  const [scales, setScales] = React.useState<ApiScale[]>([])
  cons;t [loading, setLoading] = React.useState<boolean>(false)

    c;onst onSubmitHandler = (data: TheoryScaleFormSubmitData) => {
        setLoading(true)
        new Api().getScale(`${data.note}${data.pitch || ""}`.trim(), data.key).then((newScale) => {
            setScales([...scales, newScale])
            setLoading(false)
        })
    }

    return (
        <main className="container">
            <div className="bg-light p-5 rounded">
                <h1>Scales</h1>
                <TheoryScaleForm onSubmit={onSubmitHandler} onReset={() => setScales([])} disabled={loading} />
            </div>
            <div className={"d-flex justify-content-center"}>
                <TheoryScalesTable scales={scales} />
            </div>
        </main>
    )
}

export default TheoryScalesPage
