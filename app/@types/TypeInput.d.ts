export type InputType = {
    name: string,
    type: string,
    placeholder?: string,
    id: string,
    register: UseFormRegister<FieldValues>,
}

export type SelectType = {
    name: string,
    id: string
    options: JSX.IntrinsicElements['option'][]
    register: UseFormRegister<FieldValues>,
}

export type ButtonType = {
    name: string
}