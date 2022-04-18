import React from "react";
import TheoryScalesTable from "./TheoryScalesTable";
import Api from "../../services/api";
import {Scale} from "../../interfaces/music";
import TheoryScaleForm, {TheoryScaleFormSubmitData} from "./TheoryScalesForm";


function TheoryScalesPage() {
    const [scales, setScales] = React.useState<Scale[]>([])

    const onSubmitHandler = (data: TheoryScaleFormSubmitData) => {
        new Api().getScale(`${data.note}${data.pitch || ''}`.trim(), data.key).then(newScale => {
            setScales([...scales, newScale])
        })
    }

    return (
        <main className="container">
            <div className="bg-light p-5 rounded">
                <h1>Scales</h1>
                <TheoryScaleForm
                    onSubmit={onSubmitHandler}
                    onReset={() => setScales([])}
                />
            </div>
            <div className={"d-flex justify-content-center"}>
                <TheoryScalesTable scales={scales}/>
            </div>
        </main>
    )
}


export default TheoryScalesPage;