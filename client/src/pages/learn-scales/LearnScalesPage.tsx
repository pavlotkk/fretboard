import React from "react"
import LearnScaleForm, {FormSubmitData as LearnScaleFormSubmitData} from "./LearnScalesForm"
import Api from "../../services/api"
import LearnScalesAnswer from "./LearnScalesAnswer"
import {NOTES_COUNT} from "../../shared/constants"
import useCurrentUser from "../../hooks/useCurrectUser"
import "./../../styles/scale.scss"

interface FormState {
    form_last_notes: string[]
    form_last_pitches: string[]
    form_last_key: string
}

interface ScaleResponse {
    id: string | null
    name: string | null
    notes: string[]
}

function LearnScalesPage() {
    const currentUserId = useCurrentUser()

    const [answer, setAnswer] = React.useState<string>("")
    const [scale, setScale] = React.useState<ScaleResponse>({
        id: null,
        name: null,
        notes: new Array(NOTES_COUNT).fill(""),
    })
    const [form, setForm] = React.useState<FormState>({
        form_last_notes: [],
        form_last_pitches: [],
        form_last_key: "",
    })
    const [loading, setLoading] = React.useState<boolean>(false)

    const getScaleToLearn = (notes: string[], pitches: string[], key: string) => {
        setLoading(true)
        new Api()
            .withUser(currentUserId)
            .getScaleToLearn(notes, pitches, key ? [key] : null)
            .then((resp: ScaleResponse) => {
                setScale(resp)
                setLoading(false)
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
            id: null,
            name: null,
            notes: new Array(NOTES_COUNT).fill(""),
        })
        setForm({
            form_last_notes: [],
            form_last_pitches: [],
            form_last_key: "",
        })
    }

    const onSubmitAnswer = () => {
        setAnswer("")
        getScaleToLearn(form.form_last_notes, form.form_last_pitches, form.form_last_key)
    }

    const onSkipAnswer = () => {
        setAnswer("")
        getScaleToLearn(form.form_last_notes, form.form_last_pitches, form.form_last_key)
    }

    return (
        <main className="container">
            <div className="bg-light p-5 rounded">
                <h1>Select scale to learn</h1>
                <LearnScaleForm onSubmit={onScaleSelectedHandler} onReset={onResetHandler} disabled={loading} />
            </div>
            <LearnScalesAnswer
                scale={scale}
                loading={loading}
                onSubmit={onSubmitAnswer}
                onSkip={onSkipAnswer}
                answer={answer}
                onAnswerChanged={setAnswer}
            />
        </main>
    )
}

export default LearnScalesPage
