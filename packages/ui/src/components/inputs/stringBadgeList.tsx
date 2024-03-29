"use client"
import React from 'react'
import clsx from 'clsx'
import { BadgeProps, Badge } from '@ulld/tailwind/badge'
import { H4 } from '../text/heading'



interface StringBadgeListProps {
    onClick?: (s: string, i: number) => void
    label: string
    badgeProps?: BadgeProps
    items: string[]
    uniqueKeyPrefix: string
    hideIfNone?: boolean
}


const StringBadgeList = ({ label, hideIfNone, uniqueKeyPrefix, items, onClick, badgeProps }: StringBadgeListProps) => {
    if (items.length === 0 && hideIfNone) return null
    return (
        <div>
            <H4>{label}</H4>
            <div className={"flex flex-row justify-start items-center gap-2 flex-wrap"}>
                {items.map((s, i) => <Badge
                    {...badgeProps}
                    onClick={() => {
                        if (onClick) {
                            onClick(s, i)
                        }
                    }} key={`${uniqueKeyPrefix}-${s}`}
                    className={clsx(onClick ? "cursor-pointer" : "cursor-default", badgeProps?.className && badgeProps.className)}
                >{s}</Badge>)}
            </div>
        </div>
    )
}


StringBadgeList.displayName = "StringBadgeList"


export default StringBadgeList;
