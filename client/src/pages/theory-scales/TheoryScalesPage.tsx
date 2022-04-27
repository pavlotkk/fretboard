import React from "react"
import TheoryScalesTable from "./TheoryScalesTable"
import Api from "../../services/api"
import {Scale} from "../../interfaces/music"
import TheoryScaleForm, {FormSubmitData as TheoryScaleFormSubmitData} from "./TheoryScalesForm"
import "./../../styles/scale.scss"

function TheoryScalesPage() {
    const [scales, setScales] = React.useState<Scale[]>([])
    const [loading, setLoading] = React.useState<boolean>(false)

    const onSubmitHandler = (data: TheoryScaleFormSubmitData) => {
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
