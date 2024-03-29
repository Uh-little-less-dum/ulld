"use client"
import { BadgeProps, Badge } from '@ulld/tailwind/badge';
import { makeHref, withForwardSlash } from '@ulld/utilities/fsUtils';
import clsx from 'clsx';
import { Route } from 'next';
import React from 'react'



interface EquationDisplayBadgeProps extends BadgeProps {
    children: React.ReactNode
    href: Route
    isModal: boolean
}

export const EquationDisplayBadge = ({ children, href, isModal, ...props }: EquationDisplayBadgeProps) => {

    const handleClick = () => {
        window.location.href = makeHref(`${window.location.host}${withForwardSlash(href)}`)
    }

    return (
        <Badge {...props} className={clsx("cursor-pointer", props.className)} onClick={handleClick}>
            {children}
        </Badge>
    )
}


EquationDisplayBadge.displayName = "EquationDisplayBadge"
