import {convertPrimitiveToOptionObject} from "../shared/converters";

import React from "react";

function RadioButtonGroup({options, name, selectedValue = null, onChange = null, ...props}) {
    options = options.map(convertPrimitiveToOptionObject);

    let [value, setValue] = React.useState(selectedValue);
    if(value !== selectedValue){
        setValue(selectedValue)
    }

    const _onChange = (newValue) => {
        if (value === newValue){
            newValue = null;
        }
        setValue(newValue)
        onChange(newValue)
    };

    const optionItem = options.map(op => {
        const elementId = `rbg-${op.value.toLowerCase()}-${new Date().getTime()}`;
        return (
            <React.Fragment key={op.value}>
                <input type="radio" className="btn-check" name={name} id={elementId} value={op.value} autoComplete="off" checked={op.value === value} onChange={() => {}} />
                <label className="btn btn-outline-primary" htmlFor={elementId} onClick={() => _onChange(op.value)}>{op.text}</label>
            </React.Fragment>
        )
    })

    return (
        <div className="btn-group" role="group" {...props}>
            {optionItem}
        </div>
    )
}

export default RadioButtonGroup;