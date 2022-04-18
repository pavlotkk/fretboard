import React from "react";
import {CHROMATIC_SCALE, PITCHES} from "../../shared/constants";
import ScaleKeyDropdown from "../../components/ScaleKeyDropdown";
import {MultiToggle} from "../../components/Toggles";

export interface LearnScaleFormSubmitData {
    note: string | null,
    pitch: string | null,
    key: string | null
}

interface LearnScaleFormData {
    notes: string[],
    pitches: string[],
    key: string
}

interface LearnScaleFormParams {
    onSubmit: (data: LearnScaleFormSubmitData) => void,
    onReset: () => void,
}

const ANY_VALUE = "_"

function LearnScaleForm({onSubmit, onReset}: LearnScaleFormParams) {
    const [data, setData] = React.useState<LearnScaleFormData>({
        notes: [],
        pitches: [],
        key: ANY_VALUE,
    })

    const disabled = (data.notes.length === 0) && (data.pitches.length > 0);

    const resetForm = () => {
        setData({notes: [], pitches: [], key: ANY_VALUE})
    }

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault();
        onSubmit({
            note: data.notes.join(",") || null,
            pitch: data.pitches.join(",") || null,
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
                    <MultiToggle
                        name={"note"}
                        items={CHROMATIC_SCALE}
                        values={data.notes}
                        onChange={(value) => setData({...data, notes: value})}
                    />
                    <MultiToggle
                        name={"pitch"}
                        items={["No", ...PITCHES]}
                        values={data.pitches}
                        onChange={(value) => setData({...data, pitches: value})}
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