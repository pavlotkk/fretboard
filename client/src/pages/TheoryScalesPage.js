import React from "react";
import Dropdown from "../components/Dropdown";
import RadioButtonGroup from "../components/RadioButtonGroup";
import ScaleTable from "../components/ScaleTable";
import {CHROMATIC_SCALE, PITCHES} from "../shared/constants";
import Api from "../shared/api";

function TheoryScaleForm({onSubmit, onReset}) {
    const [scaleKeys, setScaleKeys] = React.useState([])

    const [data, setData] = React.useState({
        note: '',
        pitch: '',
        key: ''
    })

    const disabled = !data.note || !data.key

    React.useEffect(() => {
        if (scaleKeys.length > 0) {
            return
        }

        new Api().getSupportedScales().then(resp => {
            const supportedScaleKeys = resp.map((item) => {
                return {value: item.id, text: item.name}
            })
            const firstKey = supportedScaleKeys.length > 0 ? supportedScaleKeys[0].value : ''

            setScaleKeys(supportedScaleKeys)
            setData({...data, key: firstKey})
        })
    }, [scaleKeys])

    const _onSubmit = (event) => {
        event.preventDefault();
        onSubmit(data);
        _onClear()
    }

    const _onClear = () => {
        setData({...data, note: '', pitch: ''})
        onReset()
    }

    const _onScaleKeyChange = (value) => {
        setData({...data, key: value})
    }

    const _onNoteChange = (value) => {
        setData({...data, note: value})
    }

    const _onPitchChange = (value) => {
        setData({...data, pitch: value})
    }

    return (
        <form onSubmit={_onSubmit}>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Root note:</label>
                <div className="col-sm-10 d-flex justify-content-between">
                    <RadioButtonGroup options={CHROMATIC_SCALE} selectedValue={data.note} name={"note"}
                                      onChange={_onNoteChange}/>
                    <RadioButtonGroup options={PITCHES} name={"pitch"} selectedValue={data.pitch}
                                      onChange={_onPitchChange}/>
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Key:</label>
                <div className="col-sm-10">
                    <Dropdown options={scaleKeys} defaultValue={data.key} onChange={_onScaleKeyChange}/>
                </div>
            </div>

            <button type="submit" className="btn btn-primary" disabled={disabled}>Add</button>
            <button type="button" className="btn btn-link" onClick={_onClear}>Clear</button>
        </form>
    )
}


function TheoryScalesPage() {
    const [scales, setScales] = React.useState([])

    const onSubmitHandler = (data) => {
        // console.log(scale)
        new Api().getScale(`${data.note}${data.pitch}`.trim(), data.key).then(newScale => {
            setScales([...scales, newScale])
        })
    }

    const onResetHandler = () => {
        setScales([])
    }

    return (
        <main className="container">
            <div className="bg-light p-5 rounded">
                <h1>Scales</h1>
                <TheoryScaleForm onSubmit={onSubmitHandler} onReset={onResetHandler}/>
            </div>
            <div className={"d-flex justify-content-center"}>
                <ScaleTable scales={scales}/>
            </div>
        </main>
    )
}


export default TheoryScalesPage;