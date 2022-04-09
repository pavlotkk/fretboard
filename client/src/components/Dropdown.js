import React from 'react';
import {convertPrimitiveToOptionObject} from "../shared/converters";

function Dropdown({options, selectedItem = null, onChange = null}) {
    options = options.map(convertPrimitiveToOptionObject);
    const value = selectedItem === null ? options[0].value : selectedItem;

    React.useEffect(() => {
        if (value !== selectedItem) {
            onChange(value)
        }
    }, [value, selectedItem])

    return (
        <select className="form-select" value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map(op => {
                return <option key={op.value} value={op.value}>{op.text}</option>
            })}
        </select>
    )
}

export default Dropdown;