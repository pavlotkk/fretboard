import React from 'react';
import {toTextValue} from "../shared/converters";
import {TextValue} from "../interfaces/textvalue";


interface DropdownParams {
    options: object[] | TextValue[] | string[] | number[],
    defaultValue: string,
    onChange?: ((value: string) => void) | null
}

function Dropdown({options, defaultValue = '', onChange = null}: DropdownParams) {
    options = options.map(toTextValue);

    const noOptions = options && options.length === 0

    const _onChange = function (e: any){
        const newValue = e.target.value
        if(onChange){
            onChange(newValue)
        }
    }

    return (
        <select className="form-select" value={defaultValue} onChange={_onChange} disabled={noOptions ? true : undefined}>
            {(options as TextValue[]).map((op: TextValue) => {
                return <option key={op.value} value={op.value}>{op.text}</option>
            })}
        </select>
    )
}

export default Dropdown;