import React from "react";
import LearnScaleForm, {LearnScaleFormSubmitData} from "./LearnScalesForm";
import Api from "../../services/api";
import classNames from "classnames";
import LearnScalesAnswer from "./LearnScalesAnswer";
import NoteService from "../../services/note-service";
import {NOTES_COUNT} from "../../shared/constants";


interface FormState {
    form_last_notes: string[]
    form_last_pitches: string[]
    form_last_key: string
}

interface ScaleState {
    scale_id: string | null,
    scale_name: string | null
    scale_notes: string[],
}

interface ScaleResponse {
    id: string,
    name: string
    notes: string[]
}


function LearnScalesPage() {
    const [answer, setAnswer] = React.useState<string>("")
    const [scale, setScale] = React.useState<ScaleState>({
        scale_id: null,
        scale_name: null,
        scale_notes: new Array(NOTES_COUNT).fill(""),
    })
    const [form, setForm] = React.useState<FormState>({
        form_last_notes: [],
        form_last_pitches: [],
        form_last_key: ""
    })

    const getScaleToLearn = (notes: string[], pitches: string[], key: string) => {
        new Api().getScaleToLearn(notes, pitches, [key]).then((resp: ScaleResponse) => {
            setScale({
                scale_id: resp.id,
                scale_name: resp.name,
                scale_notes: resp.notes,
            })
        })
    }

    const onScaleSelectedHandler = (data: LearnScaleFormSubmitData) => {
        setAnswer("")
        setForm({form_last_notes: data.notes, form_last_pitches: data.pitches, form_last_key: data.key})
        getScaleToLearn(data.notes, data.pitches, data.key)
    }

    const onResetHandler = () => {
        setAnswer("")
        setScale({
            scale_id: null,
            scale_name: null,
            scale_notes: new Array(NOTES_COUNT).fill(""),
        })
        setForm({
            form_last_notes: [],
            form_last_pitches: [],
            form_last_key: ""
        })
    }

    const onSubmitAnswer = (event: React.SyntheticEvent) => {
        event.preventDefault()
        setAnswer("")
        getScaleToLearn(form.form_last_notes, form.form_last_pitches, form.form_last_key)
    }

    const onAnswerChanged = (event: any) => {
        const answer = event.target.value
        setAnswer(answer)
    }

    const onSkipHandler = () => {
        setAnswer("")
        getScaleToLearn(form.form_last_notes, form.form_last_pitches, form.form_last_key)
    }

    const formClasses = classNames({
        "bg-light": true,
        "p-5": true,
        "justify-content-center": true,
        "hide": scale.scale_id == null
    })

    let answerNotes = NoteService.parse(answer || '', NOTES_COUNT)
    let nextAvailable: boolean
    if (answerNotes.length !== NOTES_COUNT) {
        nextAvailable = false
    } else {
        nextAvailable = answerNotes.every((v, i) => v === scale.scale_notes[i])
    }

    return (
        <main className="container">
            <div className="bg-light p-5 rounded">
                <h1>Select scale to learn</h1>
                <LearnScaleForm onSubmit={onScaleSelectedHandler} onReset={onResetHandler}/>
            </div>
            <div className={formClasses} style={{marginTop: "10px"}}>
                <h1 style={{textAlign: "center"}}>{scale.scale_name}</h1>

                <div className={"d-flex justify-content-center"}>
                    <LearnScalesAnswer
                        actual_notes={answerNotes}
                        expected_notes={scale.scale_notes}
                    />
                </div>

                <form className={"row g-3"} onSubmit={onSubmitAnswer}>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder={"Type scale notes here.."}
                            onChange={onAnswerChanged}
                            value={answer}
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" disabled={!nextAvailable}>Next</button>
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