"use client"
import React from 'react'
import CopyContextMenu from '../../landing/hero/util/copyContextMenu'


interface MathContextMenuProps {
    children: React.ReactNode
    latex: string
}


const MathContextMenu = ({ children, latex }: MathContextMenuProps) => {
    return (
        <CopyContextMenu btnLabel="Copy Latex" content={latex} >
            {children}
        </CopyContextMenu>
    )
}


MathContextMenu.displayName = "MathContextMenu"


export default MathContextMenu;
