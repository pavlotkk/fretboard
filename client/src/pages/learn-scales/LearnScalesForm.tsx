import React from "react";
import RadioButtonGroup from "../../components/RadioButtonGroup";
import {CHROMATIC_SCALE, PITCHES} from "../../shared/constants";
import ScaleKeyDropdown from "../../components/ScaleKeyDropdown";

export interface LearnScaleFormSubmitData {
    note: string | null,
    pitch: string | null,
    key: string | null
}

interface LearnScaleFormData {
    note: string,
    pitch: string,
    key: string
}

interface LearnScaleFormParams {
    onSubmit: (data: LearnScaleFormSubmitData) => void,
    onReset: () => void,
}

const ANY_VALUE = "_"

function LearnScaleForm({onSubmit, onReset}: LearnScaleFormParams) {
    const [data, setData] = React.useState<LearnScaleFormData>({
        note: '',
        pitch: '',
        key: ANY_VALUE,
    })

    const disabled = (data.note == null || data.note.length === 0) && (data.pitch != null && data.pitch.length > 0);

    const resetForm = () => {
        setData({note: '', pitch: '', key: ANY_VALUE})
    }

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault();
        onSubmit({
            note: data.note || null,
            pitch: data.pitch || null,
            key: data.key === ANY_VALUE ? null : data.key
        } as LearnScaleFormSubmitData);
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
                    <RadioButtonGroup
                        options={CHROMATIC_SCALE}
                        selectedValue={data.note}
                        name={"note"}
                        onChange={(value) => setData({...data, note: value})}
                    />
                    <RadioButtonGroup
                        options={PITCHES}
                        name={"pitch"}
                        selectedValue={data.pitch}
                        onChange={(value) => setData({...data, pitch: value})}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Key:</label>
                <div className="col-sm-10">
                    <ScaleKeyDropdown
                        preloadOptions={[{text: "Any", value: ANY_VALUE}]}
                        selectedValue={data.key}
                        onChange={(value) => setData({...data, key: value})}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary" disabled={disabled}>Learn</button>
            <button
                type="button" className="btn btn-link"
                onClick={clearForm}>Clear
            </button>
        </form>
    )
}

export default LearnScaleForm;