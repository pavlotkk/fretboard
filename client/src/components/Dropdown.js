import React from 'react';
import {convertPrimitiveToOptionObject} from "../shared/converters";

function Dropdown({options, selectedItem = '', onChange = null}) {
    options = options.map(convertPrimitiveToOptionObject);
    if(!selectedItem){
        selectedItem = ''
    }

    const noOptions = options && options.length === 0
    const firstItem = noOptions ? '' : options[0].value
    const value = selectedItem.length > 0 ? firstItem : selectedItem;

    React.useEffect(() => {
        if (value !== selectedItem) {
            onChange(value)
        }
    }, [value, selectedItem])

    return (
        <select className="form-select" value={value} onChange={(e) => onChange(e.target.value)} disabled={noOptions ? true : null}>
            {options.map(op => {
                return <option key={op.value} value={op.value}>{op.text}</option>
            })}
        </select>
    )
}

export default Dropdown;