import React from "react";
import Dropdown from "../components/Dropdown";
import RadioButtonGroup from "../components/RadioButtonGroup";
import ScaleTable from "../components/ScaleTable";

function TheoryScaleForm({onSubmit}) {
    const notes = ["C", "D", "E", "F", "G", "A", "B"]
    const pitches = ["#", "b"]
    const scales = ["Major", "Minor"]

    const [data, setData] = React.useState({
        note: null,
        pitch: null,
        scale: null
    })

    const _onSubmit = (event) => {
        event.preventDefault();
        onSubmit(data);
        _onClear()
    }

    const _onClear = () => {
        setData({note: null, pitch: null, scale: null})
    }

    const _onScaleChange = (value) => {
        setData({...data, scale: value})
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
                    <RadioButtonGroup options={notes} selectedValue={data.note} name={"note"} onChange={_onNoteChange}/>
                    <RadioButtonGroup options={pitches} name={"pitch"} selectedValue={data.pitch} onChange={_onPitchChange}/>
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Scale:</label>
                <div className="col-sm-10">
                    <Dropdown options={scales} selectedItem={data.scale} onChange={_onScaleChange}/>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Add</button>
            <button type="button" className="btn btn-link" onClick={_onClear}>Clear</button>
        </form>
    )
}


function TheoryScalesPage() {
    const scales = [
        {
            "id": "c_major",
            "name": "C Major",
            "desc": "0",
            "notes": ["C", "D", "E", "F", "G", "A", "B"]
        }
    ]

    const onSubmitHandler = (note) => {
        console.log(note);
    }

    return (
        <>
            <div className="bg-light p-5 rounded">
                <h1>Scales</h1>
                <TheoryScaleForm onSubmit={onSubmitHandler}/>
            </div>
            <div className={"d-flex justify-content-center"}>
                <ScaleTable scales={scales}/>
            </div>
        </>

    )
}


export default TheoryScalesPage;