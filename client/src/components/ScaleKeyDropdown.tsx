import Dropdown from "./Dropdown"
import React from "react"
import {TextValue} from "../interfaces/textvalue"
import Api from "../services/api"
import {Scale} from "../interfaces/music"

interface ScaleKeyDropdownParams {
    preloadOptions?: TextValue[]
    value: string
    onChange: (value: string) => void
}

export default function ScaleKeyDropdown({preloadOptions = [], value = "", onChange}: ScaleKeyDropdownParams) {
    const [loading, setLoading] = React.useState<boolean>(true)
    const [options, setOptions] = React.useState<TextValue[]>(preloadOptions)

    React.useEffect(() => {
        new Api().getSupportedScales(true).then((resp) => {
            let supportedScaleKeys = resp.map((item: Scale) => {
                return {value: item.id, text: item.name}
            })
            supportedScaleKeys = [...options, ...supportedScaleKeys]

            // auto select first item if other wasn't provided
            if (value === "") {
                const firstKey = supportedScaleKeys.length > 0 ? supportedScaleKeys[0].value : ""
                setOptions(supportedScaleKeys)
                if (onChange) {
                    onChange(firstKey)
                }
            } else {
                setOptions(supportedScaleKeys)
            }

            setLoading(false)
        })
        // eslint-disable-next-line
    }, [])

    return <Dropdown disabled={loading} options={options} value={value} onChange={onChange} />
}
