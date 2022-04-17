import React from "react";
import LearnScaleForm, {LearnScaleFormSubmitData} from "./LearnScalesForm";
import Api from "../../shared/api";
import classNames from "classnames";
import LearnScalesAnswer from "./LearnScalesAnswer";
import NoteService from "../../services/note-service";


interface LearnScalesPageState {
    scale_id: string | null,
    scale_name: string | null
    answer?: string
    form_last_note: string | null
    form_last_key: string | null
}

interface ScaleToLearn {
    id: string,
    name: string
}


function LearnScalesPage() {
    const [state, setState] = React.useState<LearnScalesPageState>({
        scale_id: null,
        scale_name: null,
        answer: "",
        form_last_note: null,
        form_last_key: null
    })

    const getScaleToLearn = (note: string | null, key: string | null) => {
        new Api().getScaleToLearn(note, key).then((resp: ScaleToLearn) => {
            setState({
                ...state,
                scale_id: resp.id,
                scale_name: resp.name,
                form_last_note: note,
                form_last_key: key
            })
        })
    }

    const onScaleSelectedHandler = (data: LearnScaleFormSubmitData) => {
        getScaleToLearn(`${data.note || ''}${data.pitch || ''}`, data.key)
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

    const onSkipHandler = () => {
        setState({...state, answer: ""})
        getScaleToLearn(state.form_last_note, state.form_last_key)
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
                <h1 style={{textAlign: "center"}}>{state.scale_name}</h1>

                <div className={"d-flex justify-content-center"}>
                    <LearnScalesAnswer notes={NoteService.parse(state.answer || '', 7)}/>
                </div>

                <form className={"row g-3"} onSubmit={onSubmitAnswer}>
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
                        <button
                            type="button" className="btn btn-link"
                            onClick={onSkipHandler}>Skip
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default LearnScalesPage;