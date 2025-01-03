"use client"
import { openDrawer } from "#/state/slices/core";
import store from "#/state/store";
import { MenuIcon } from "lucide-react";
import React from "react";
import {RootState} from '#/state/store';
import {connect} from 'react-redux';
import { useMediaQuery } from "react-responsive";

const connector = connect((state: RootState, props: any) => ({
    breakpoint: state.core.drawer.breakpoint,
    props: props
}))

interface NavbarDrawerToggleProps { 
    breakpoint: RootState["core"]["drawer"]["breakpoint"]
}

const NavbarDrawerToggle = connector(({breakpoint}: NavbarDrawerToggleProps) => {
    const bp = useMediaQuery({
        minWidth: breakpoint
    })
    if(bp) {
        return null
    }
    return (
        <MenuIcon
            role="button"
            className={"inline-block navbarFull:hidden"}
            onClick={() => {
                store.dispatch(openDrawer({}));
            }}
        />
    );
});

NavbarDrawerToggle.displayName = "NavbarDrawerToggle";

export default NavbarDrawerToggle;
