import Dropdown from "./Dropdown";
import React from "react";
import {TextValue} from "../interfaces/textvalue";
import Api from "../services/api";
import {Scale} from "../interfaces/music";

interface ScaleKeyDropdownParams {
    preloadOptions?: TextValue[],
    selectedValue: string,
    onChange?: ((value: string) => void) | null
}

interface ScaleKeyDropdownData {
    options: TextValue[]
}


export default function ScaleKeyDropdown(
    {
        preloadOptions = [],
        selectedValue = '',
        onChange = null
    }: ScaleKeyDropdownParams) {
    const [data, setData] = React.useState<ScaleKeyDropdownData>({
        options: preloadOptions,
    })

    React.useEffect(() => {
        new Api().getSupportedScales(true).then(resp => {
            let supportedScaleKeys = resp.map((item: Scale) => {
                return {value: item.id, text: item.name}
            })
            supportedScaleKeys = [...data.options, ...supportedScaleKeys];

            // auto select first item if other wasn't provided
            if (selectedValue === '') {
                const firstKey = supportedScaleKeys.length > 0 ? supportedScaleKeys[0].value : ''
                setData({...data, options: supportedScaleKeys})
                if (onChange) {
                    onChange(firstKey)
                }
            } else {
                setData({...data, options: supportedScaleKeys})
            }
        })
    }, [])

    const onChangeHandler = (value: string) => {
        setData({...data})
        if (onChange) {
            onChange(value)
        }
    }

    return (
        <Dropdown
            options={data.options}
            defaultValue={selectedValue}
            onChange={onChangeHandler}
        />
    )
}