import type data from "./constants.json"
export type UserProvidedConstant = {
    name: string
    value: number
    unit?: string
}


export type ConstantVariable = {
    variable: string
    constant: keyof typeof data["constants"]
}

export type PosThree = [number, number, number]
export type PosFour = [number, number, number]