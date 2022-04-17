import {TextValue} from "../../interfaces/textvalue";
import React from "react";
import Api from "../../shared/api";
import {Scale} from "../../interfaces/music";
import RadioButtonGroup from "../../components/RadioButtonGroup";
import {CHROMATIC_SCALE, PITCHES} from "../../shared/constants";
import Dropdown from "../../components/Dropdown";

export interface LearnScaleFormSubmitData {
    note: string,
    pitch: string,
    key: string
}

interface LearnScaleFormData extends LearnScaleFormSubmitData{
    supportedScaleKeys: TextValue[]
}


interface LearnScaleFormParams {
    onSubmit: (data: LearnScaleFormSubmitData) => void,
    onReset: () => void,
}

function LearnScaleForm({onSubmit, onReset}: LearnScaleFormParams) {
    const [data, setData] = React.useState<LearnScaleFormData>({
        note: '',
        pitch: '',
        key: '',
        supportedScaleKeys: [{text: "Any", value: ""}]
    })

    const disabled = !data.note || !data.key

    React.useEffect(() => {
        new Api().getSupportedScales().then(resp => {
            let supportedScaleKeys = resp.map((item: Scale) => {
                return {value: item.id, text: item.name}
            })
            supportedScaleKeys = [...data.supportedScaleKeys, ...supportedScaleKeys];
            const firstKey = supportedScaleKeys.length > 0 ? supportedScaleKeys[0].value : ''
            setData({...data, supportedScaleKeys: supportedScaleKeys, key: firstKey})
        })
    }, [])

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
                    <Dropdown
                        options={data.supportedScaleKeys}
                        defaultValue={data.key}
                        onChange={(value) => setData({...data, key: value})}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary" disabled={disabled}>Learn</button>
            <button
                type="button" className="btn btn-link"
                onClick={clearForm}>Clear</button>
        </form>
    )
}

export default LearnScaleForm;