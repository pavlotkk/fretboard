import React from "react"
import {MUSICAL_ALPHABET, PITCHES} from "../../shared/constants"
import ScaleKeyDropdown from "../../components/ScaleKeyDropdown"
import {SingleToggle} from "../../components/Toggles"

export interface FormSubmitData {
    note: string
    pitch: string
    key: string
}

interface FormData extends FormSubmitData {}

interface FormParams {
    onSubmit: (data: FormSubmitData) => void
    onReset: () => void
    disabled?: boolean
}

function TheoryScaleForm({onSubmit, onReset, disabled = false}: FormParams) {
    const [data, setData] = React.useState<FormData>({
        note: "",
        pitch: "",
        key: "",
    })

    const resetForm = () => {
        setData({...data, note: "", pitch: ""})
    }

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault()
        onSubmit(data)
        resetForm()
    }

    const clearForm = () => {
        resetForm()
        onReset()
    }

    return (
        <form onSubmit={submitForm}>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Root note:</label>
                <div className="col-sm-10 d-flex justify-content-between">
                    <SingleToggle
                        name={"note"}
                        items={MUSICAL_ALPHABET}
                        value={data.note}
                        onChange={(value) => setData({...data, note: value as string})}
                    />
                    <SingleToggle
                        name={"pitch"}
                        items={PITCHES}
                        value={data.pitch}
                        onChange={(value) => setData({...data, pitch: value as string})}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Key:</label>
                <div className="col-sm-10">
                    <ScaleKeyDropdown value={data.key} onChange={(value) => setData({...data, key: value})} />
                </div>
            </div>

            <button type="submit" className="btn btn-primary" disabled={disabled || !data.note || !data.key}>
                Add
            </button>
            <button type="button" className="btn btn-link" onClick={clearForm}>
                Clear
            </button>
        </form>
    )
}

export default TheoryScaleForm
