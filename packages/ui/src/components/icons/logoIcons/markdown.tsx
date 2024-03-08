import React from 'react'
import { IoLogoMarkdown } from 'react-icons/io5';
import { IconProps } from '../../../types';



const MarkdownLogo = (props: IconProps) => {
    return (
        <IoLogoMarkdown {...props} />
    )
}


MarkdownLogo.displayName = "MarkdownLogo"


export default MarkdownLogo;
