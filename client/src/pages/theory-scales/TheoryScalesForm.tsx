import React from "react";
import {CHROMATIC_SCALE, PITCHES} from "../../shared/constants";
import ScaleKeyDropdown from "../../components/ScaleKeyDropdown";
import {SingleToggle} from "../../components/Toggles";

export interface TheoryScaleFormSubmitData {
    note: string,
    pitch: string,
    key: string
}

interface TheoryScaleFormData extends TheoryScaleFormSubmitData{

}

interface TheoryScaleFormParams {
    onSubmit: (data: TheoryScaleFormSubmitData) => void,
    onReset: () => void,
    disabled?: boolean
}

function TheoryScaleForm({onSubmit, onReset, disabled = false}: TheoryScaleFormParams) {
    const [data, setData] = React.useState<TheoryScaleFormData>({
        note: '',
        pitch: '',
        key: '',
    })

    const resetForm = () => {
        setData({...data, note: '', pitch: ''})
    }

    const submitForm = (event: React.SyntheticEvent ) => {
        event.preventDefault();
        onSubmit(data);
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
                        items={CHROMATIC_SCALE}
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
                    <ScaleKeyDropdown
                        value={data.key}
                        onChange={(value) => setData({...data, key: value})}
                    />
                </div>
            </div>

            <button
                type="submit"
                className="btn btn-primary"
                disabled={disabled || !data.note || !data.key}>Add</button>
            <button
                type="button" className="btn btn-link"
                onClick={clearForm}>Clear</button>
        </form>
    )
}

export default TheoryScaleForm;