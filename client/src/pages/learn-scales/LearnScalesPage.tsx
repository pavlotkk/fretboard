import React from "react";
import LearnScaleForm, {LearnScaleFormSubmitData} from "./LearnScalesForm";
import Api from "../../shared/api";
import classNames from "classnames";


interface LearnScalesPageState {
    scale_id: string | null,
    scale_name: string | null
    answer?: string
}

interface ScaleToLearn {
    id: string,
    name: string
}


function LearnScalesPage() {
    const [state, setState] = React.useState<LearnScalesPageState>({
        scale_id: null,
        scale_name: null,
        answer: ''
    })
    const onScaleSelectedHandler = (data: LearnScaleFormSubmitData) => {
        new Api().getScaleToLearn(`${data.note || ''}${data.pitch || ''}`, data.key).then((resp: ScaleToLearn) => {
            setState({...state, scale_id: resp.id, scale_name: resp.name})
        })
    }

    const onResetHandler = () => {

    }

    const onSubmitAnswer = (event: React.SyntheticEvent) => {
        event.preventDefault()
    }

    const onAnswerChanged = (event: any) => {
        const answer = event.target.value
        setState({...state, answer: answer})
    }

    const formClasses = classNames({
        "bg-light": true,
        "p-5": true,
        "justify-content-center": true,
        "hide": state.scale_id == null
    })

    return (
        <main className="container">
            <div className="bg-light p-5 rounded">
                <h1>Select scale to learn</h1>
                <LearnScaleForm onSubmit={onScaleSelectedHandler} onReset={onResetHandler}/>
            </div>
            <div className={formClasses} style={{marginTop: "10px"}}>
                <form className={"row g-3"} onSubmit={onSubmitAnswer}>
                    <h1 style={{textAlign: "center"}}>{state.scale_name}</h1>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder={"Type scale notes here.."}
                            onChange={onAnswerChanged}
                            value={state.answer}
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Next</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default LearnScalesPage;