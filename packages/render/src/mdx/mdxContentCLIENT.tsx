import React, {useEffect, useState} from 'react'
import type { MdxContentSERVERProps } from './mdxContentSERVER'
import { useDebounceMdxParse } from '@ulld/hooks/useDebounceMdxParse'
import { autoWrapMath } from "@ulld/utilities/latexUtils"
import { getMdxClassnames } from './getMdxClassnames';



interface MdxContentClientSideProps extends MdxContentSERVERProps {
    stylesId?: string
    applyUserStyles?: boolean
    debounceTimeout?: number
    onReady?: () => void
}



export const MdxContentCLIENT = (props: MdxContentClientSideProps) => {
    console.log("props: ", props)
    const {value, setValue, Component, isReady } = useDebounceMdxParse(props.content, props.debounceTimeout || 350, {
        bareAss: props.bareAss === false ? false : true
    })
    const [hasSetReady, setHasSetReady] = useState(false)

    useEffect(() => {
       if(!hasSetReady && isReady && props.onReady){
           props.onReady()
            setHasSetReady(true)
        } 
    }, [Component])

    useEffect(() => {
       setValue(props.content ? props.autoWrap ? autoWrapMath(props.content, Boolean(props.inline === false || props.display)) : props.content : "") 
    }, [props.content])

    return (
        <div
            className={getMdxClassnames(props)}
        >
            <Component />
        </div>
    )
}


MdxContentCLIENT.displayName = "MdxContentClientSide"
