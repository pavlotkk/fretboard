import React from "react"
import {toTextValue} from "../shared/converters"
import {TextValue} from "../interfaces/textvalue"

interface DropdownParams {
    options: TextValue[] | any[]
    value: any
    onChange: (value: string) => void
    disabled?: boolean
}

function Dropdown({options, onChange, value = "", disabled = false}: DropdownParams) {
    options = options.map(toTextValue)

    const noOptions = options && options.length === 0

    const onChangeHandler = function (e: any) {
        onChange(e.target.value)
    }

    return (
        <select
            className="form-select"
            value={value}
            onChange={onChangeHandler}
            disabled={disabled || noOptions ? true : undefined}>
            {(options as TextValue[]).map((op: TextValue) => {
                return (
                    <option key={op.value} value={op.value}>
                        {op.text}
                    </option>
                )
            })}
        </select>
    )
}

export default Dropdown
