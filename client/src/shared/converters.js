function convertPrimitiveToOptionObject(value) {
    if (typeof value === "object") {
        return value
    } else {
        return {value: value, text: value}
    }
}

export {convertPrimitiveToOptionObject};