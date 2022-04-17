import React from "react";
import LearnScaleForm, {LearnScaleFormSubmitData} from "./LearnScalesForm";
import Api from "../../shared/api";


interface LearnScalesPageData {
    scale_id: string | null,
    scale_name: string | null
}

interface ScaleToLearn {
    id: string,
    name: string
}


function LearnScalesPage() {
    const [data, setData] = React.useState<LearnScalesPageData>({
        scale_id: null,
        scale_name: null
    })
    const onScaleSelectedHandler = (data: LearnScaleFormSubmitData) => {
        new Api().getScaleToLearn(`${data.note || ''}${data.pitch || ''}`, data.key).then((data: ScaleToLearn) => {
            setData({...data, scale_id: data.id, scale_name: data.name})
        })
    }

    const onResetHandler = () => {

    }

    return (
        <main className="container">
            <div className="bg-light p-5 rounded">
                <h1>Select scale to learn</h1>
                <LearnScaleForm onSubmit={onScaleSelectedHandler} onReset={onResetHandler}/>
            </div>
            <div className={"d-flex justify-content-center"}>
                <h1>{data.scale_name || ''}</h1>
            </div>
        </main>
    )
}

export default LearnScalesPage;