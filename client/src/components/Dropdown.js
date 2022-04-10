import React from 'react';
import {convertPrimitiveToOptionObject} from "../shared/converters";

function Dropdown({options, defaultValue = '', onChange = null}) {
    options = options.map(convertPrimitiveToOptionObject);

    const noOptions = options && options.length === 0

    const _onChange = function (e){
        const newValue = e.target.value
        if(onChange){
            onChange(newValue)
        }
    }

    return (
        <select className="form-select" value={defaultValue} onChange={_onChange} disabled={noOptions ? true : null}>
            {options.map(op => {
                return <option key={op.value} value={op.value}>{op.text}</option>
            })}
        </select>
    )
}

export default Dropdown;