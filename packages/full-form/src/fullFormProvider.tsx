"use client"
import React, { useReducer } from 'react'
import { FullFormContext, FullFormContextSchema, FullFormDispatchContext, fullFormReducer } from './fullFormContext'



interface FullFormProviderProps {
    children: React.ReactNode
    initialValues?: FullFormContextSchema
}

export const Provider = ({ children, initialValues }: FullFormProviderProps) => {

    const [state, dispatch] = useReducer(fullFormReducer, initialValues || {})

    return (
        <FullFormContext.Provider value={state}>
            <FullFormDispatchContext.Provider value={dispatch}>
                {children}
            </FullFormDispatchContext.Provider>
        </FullFormContext.Provider>
    )
}


Provider.displayName = "FullFormProvider"

