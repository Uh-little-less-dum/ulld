import Image from 'next/image';
import React from 'react';
import logo from './defaultLogo.png';


const Logo = (props: any) => {
    return (
        <Image src={logo} {...props} alt="logo" />
    )
}




Logo.displayName = "Logo"


export default Logo;
