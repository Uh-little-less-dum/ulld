import { Button } from '@ulld/tailwind/button'
import { Form } from '@ulld/tailwind/form'
import React, { MouseEvent } from 'react'
import { UseFormReturn } from 'react-hook-form'


interface SideFormContainerProps<T> {
    children: React.ReactNode
    form: T
    onSubmit: (e: MouseEvent<HTMLButtonElement>) => void
    submitBtnText?: string
    onBackClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const SideFormContainer = <T extends UseFormReturn<any>>({ children, onBackClick, submitBtnText, form, onSubmit }: SideFormContainerProps<T>) => {
    return (
        <div className={"text-card-foreground px-5 py-6 flex flex-col w-full h-fit"}>
            <Form {...form}>
                <form className={"space-y-8"}>
                    {children}
                    <div className={"flex flex-row justify-between items-center gap-3 !mt-10"}>
                        <Button variant="destructive" onClick={() => {
                            form.reset()
                        }}>
                            Reset
                        </Button>
                        <div className={"flex flex-row justify-center items-center gap-2"}>
                            {onBackClick && <Button variant="outline" onClick={onBackClick}>Back</Button>}
                            <Button
                                onClick={onSubmit}
                            >
                                {submitBtnText || "Submit"}
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}


SideFormContainer.displayName = "SideFormContainer"


export default SideFormContainer;
