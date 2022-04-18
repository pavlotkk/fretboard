import {TextValue} from "../interfaces/textvalue";
import {toTextValue} from "../shared/converters";
import React from "react";


interface SingleToggleParams {
    name: string,
    items: TextValue[] | string[]
    label?: string
    value: string
    onChange: (value: string) => void
}

function SingleToggle({name, items, onChange, value = "", label = ""}: SingleToggleParams) {
    items = items.map(toTextValue)

    const onChangeHandler = (e: any) => {
        const currentValue = e.target.value;
        if (currentValue === value) {
            onChange("")
        } else {
            onChange(currentValue)
        }
    }

    const checkboxes = items.map((v, i) => {
        const id = `btccheck ${name}-${v.value.toString().toLowerCase()}`
        return (
            <React.Fragment key={v.value}>
                <input
                    type="checkbox"
                    className="btn-check"
                    autoComplete="off"
                    id={id}
                    checked={v.value === value}
                    value={v.value}
                    onChange={onChangeHandler}
                />
                <label className="btn btn-outline-primary" htmlFor={id}>{v.text}</label>
            </React.Fragment>
        )
    })

    return (
        <div className="btn-group" role="group" aria-label={label}>
            {checkboxes}
        </div>
    )
}

interface MultiToggleParams {
    name: string,
    items: TextValue[] | string[] | any[]
    label?: string
    values: string[]
    onChange: (value: string[]) => void
}


function MultiToggle({name, items, onChange, values = [], label = ""}: MultiToggleParams) {
    items = items.map(toTextValue)

    const onChangeHandler = (e: any) => {
        const currentValue = e.target.value;
        let selectedValues: string[] = []
        let found = false

        for (let v of values) {
            if (v === currentValue) {
                found = true;
                continue
            }
            selectedValues.push(v)
        }

        if (!found) {
            selectedValues.push(currentValue)
        }

        onChange(selectedValues)
    }

    const checkboxes = items.map((item) => {
        const id = `btccheck-${name}-${item.value.toString().toLowerCase()}`
        return (
            <React.Fragment key={item.value}>
                <input
                    type="checkbox"
                    className="btn-check"
                    autoComplete="off"
                    id={id}
                    checked={values.some((v) => v === item.value)}
                    value={item.value}
                    onChange={onChangeHandler}
                />
                <label className="btn btn-outline-primary" htmlFor={id}>{item.text}</label>
            </React.Fragment>
        )
    })

    return (
        <div className="btn-group" role="group" aria-label={label}>
            {checkboxes}
        </div>
    )
}


export {SingleToggle, MultiToggle}