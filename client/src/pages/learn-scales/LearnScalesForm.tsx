import React from "react"
import {CHROMATIC_SCALE, PITCHES} from "../../shared/constants"
import ScaleKeyDropdown from "../../components/ScaleKeyDropdown"
import {MultiToggle} from "../../components/Toggles"
import {TextValue} from "../../interfaces/textvalue"

export interface FormSubmitData {
    notes: string[]
    pitches: string[]
    key: string
}

interface FormData {
    notes: string[]
    pitches: string[]
    key: string
}

interface FormParams {
    onSubmit: (data: FormSubmitData) => void
    onReset: () => void
    disabled?: boolean
}

const ANY_KEY_VALUE = "_"
const NO_PITCH_VALUE = ""

function LearnScaleForm({onSubmit, onReset, disabled = false}: FormParams) {
    const [data, setData] = React.useState<FormData>({
        notes: [],
        pitches: [NO_PITCH_VALUE],
        key: ANY_KEY_VALUE,
    })

    const resetForm = () => {
        setData({notes: [], pitches: [NO_PITCH_VALUE], key: ANY_KEY_VALUE})
    }

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault()
        onSubmit({
            notes: data.notes,
            pitches: data.pitches,
            key: data.key === ANY_KEY_VALUE ? "" : data.key,
        } as FormSubmitData)
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
                    <MultiToggle
                        name={"note"}
                        items={CHROMATIC_SCALE}
                        values={data.notes}
                        onChange={(value) => setData({...data, notes: value})}
                    />
                    <MultiToggle
                        name={"pitch"}
                        items={[{text: "No", value: NO_PITCH_VALUE} as TextValue, ...PITCHES]}
                        values={data.pitches}
                        onChange={(value) => setData({...data, pitches: value})}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Key:</label>
                <div className="col-sm-10">
                    <ScaleKeyDropdown
                        preloadOptions={[{text: "Any", value: ANY_KEY_VALUE}]}
                        value={data.key}
                        onChange={(value) => setData({...data, key: value})}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary" disabled={disabled}>
                Apply
            </button>
            <button type="button" className="btn btn-link" onClick={clearForm}>
                Clear
            </button>
        </form>
    )
}

export default LearnScaleForm
