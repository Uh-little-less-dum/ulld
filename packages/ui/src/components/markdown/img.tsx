import { getInternalConfig } from '@ulld/configschema/zod/getInternalConfig';
import { fileExtension } from '@ulld/utilities/fsUtils';
import Image from 'next/image';
import React, { ImgHTMLAttributes } from 'react'
import { imageToBase64Url } from "@ulld/state/formatting/getLocalImageAsString"




export const isRemote = (p: string, imageRemoteTest?: RegExp[]) => {
    let remoteTest: RegExp[] = [
        /^(http(s?)\:\/\/|www\.)/gm,
        /\.(com|gov|edu|app|io|dev|net|org|us|ai|gg|education|info|xyz|ly|site|me)/gm,
    ]
    if (imageRemoteTest) {
        remoteTest = remoteTest.concat(imageRemoteTest)
    }
    return remoteTest.some((t) => t.test(p))
}


export const ImgComponent = async (props: ImgHTMLAttributes<HTMLImageElement>) => {
    const config = getInternalConfig()
    let internalProps: ImgHTMLAttributes<HTMLImageElement> = {
        className: "h-auto w-full max-h-screen max-w-full md:w-fit md:max-w-[768px] sm:max-h-[60vh] max-h-[90vh] object-contain m-4 group-[.floatImages]/mdxNote:float-right"
    }
    if (props.title) {
        internalProps.title = props.title
    }
    if (!props.src) return
    let remote = isRemote(props.src, config.UI.media.imageRemoteTest)
    let src: string | undefined = undefined
    if (!remote) {
        if (props.src.startsWith('imageMap-')) {
            src = await import(`${config.UI.media.imageMap[props.src.split("imageMap-")[1] as keyof typeof config.UI.media.imageMap]}`)
            return (
                <div className={"w-full flex flex-col justify-center items-center h-fit md:w-fit md:inline-block md:float-left"}
                >
                    <img
                        src={src}
                        alt={props.alt || "Embedded Mdx Image"}
                        {...internalProps}
                    />
                </div>
            )
        } else {
            src = await imageToBase64Url(props.src, config.fsRoot)
        }
    }

    if (!remote) {
        if (!src) return null
        return (
            // eslint-disable-next-line
            <img
                src={`data:image/${fileExtension(props.src)};base64, ${src}`}
                alt={props.alt || "Embedded Mdx Image"}
                {...internalProps}
            />
        )
    }

    return (
        <Image
            src={props.src}
            alt={props.alt || "Embedded Mdx Image"}
            width={768}
            height={768}
            className={internalProps.className}
        />
    )
}


ImgComponent.displayName = "ImgComponent"
