import React from 'react'
import { IoLogoYoutube } from 'react-icons/io5';
import { IconProps } from '../../../types';



const YoutubeIcon = (props: IconProps) => {
    return (
        <IoLogoYoutube {...props} />
    )
}


YoutubeIcon.displayName = "YoutubeIcon"


export default YoutubeIcon;
