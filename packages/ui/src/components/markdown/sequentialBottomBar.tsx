import { Route } from 'next'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '@ulld/tailwind/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@ulld/tailwind/tooltip'
import { serverClient } from '@ulld/api/serverClient'
import { MathDisplaySERVER } from '../math/equation/mathDisplay_server'



interface SequentialNoteBottomBarProps {
    sequentialIndex?: number
    sequentialId?: string
}


export const SequentialNoteBottomBar = async ({ sequentialId, sequentialIndex }: SequentialNoteBottomBarProps) => {
    if (!sequentialId || typeof sequentialIndex !== "number") return null
    let noteList = await serverClient.search.getSequentialIdListByKey(sequentialId)
    console.log("noteList: ", noteList)
    let params = new URLSearchParams()
    params.set("sequentialId", sequentialId)
    const thisIndex = noteList.map((n) => n.sequentialIndex).indexOf(sequentialIndex)
    console.log("thisIndex: ", thisIndex)


    return (
        <TooltipProvider>
            <div className={"w-full mt-12 flex flex-row justify-between items-center"}>
                <div className={""}>
                    {thisIndex > 0 && <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={noteList[thisIndex - 1].href as Route}
                                className={buttonVariants({ variant: "secondary" })}
                            >Back</Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <MathDisplaySERVER
                                content={noteList[thisIndex - 1].title}
                                element="div"
                            />
                        </TooltipContent>
                    </Tooltip>}
                </div>
                <Link
                    href={`/searchAll?${params.toString()}`}
                    className={buttonVariants({ variant: "secondary" })}
                >List</Link>
                <div className={""}>
                    {thisIndex < noteList.length - 1 && <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={noteList[thisIndex + 1].href as Route}
                                className={buttonVariants({ variant: "secondary" })}
                            >Next</Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <MathDisplaySERVER
                                content={noteList[thisIndex + 1].title}
                                element="div"
                            />
                        </TooltipContent>
                    </Tooltip>}
                </div>
            </div>
        </TooltipProvider>
    )
}


SequentialNoteBottomBar.displayName = "SequentialNoteBottomBar"
