import {useEffect, useState} from "react";

export default function useLocalStorage(key: string, initialValue: any){
    const [value, setValue] = useState(() => {
        let savedValue = null;

        try {
            savedValue = window.localStorage.getItem(key)
            savedValue = savedValue ? JSON.parse(savedValue) : null
        } catch (error) {
            console.error(error)
            savedValue = null
        }

        if(savedValue){
            return savedValue
        }

        if(initialValue instanceof Function){
            return initialValue()
        }

        return initialValue
    })

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }, [key, value])

    return [value, setValue]
}