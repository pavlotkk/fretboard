import {TextValue} from "../interfaces/textvalue";

function toTextValue(value: object | TextValue | string | number): TextValue {
    if (typeof value === "object") {
        return value as TextValue
    } else {
        return {value: value, text: value} as TextValue
    }
}

export {toTextValue};