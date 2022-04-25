import React, {Dispatch, SetStateAction} from "react"

export type InputEvent = React.ChangeEvent<HTMLInputElement>
export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement>

export type SetStateFunc<T> = Dispatch<SetStateAction<T>>
