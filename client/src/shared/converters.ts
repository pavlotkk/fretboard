function convertPrimitiveToOptionObject(value: object | string | number) {
    if (typeof value === "object") {
        return value
    } else {
        return {value: value, text: value}
    }
}

export {convertPrimitiveToOptionObject};