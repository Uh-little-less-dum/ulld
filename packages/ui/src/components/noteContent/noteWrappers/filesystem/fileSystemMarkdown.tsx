import { serverClient } from '@ulld/api/serverClient'
import React from 'react'
import { ReduxProvider } from '@ulld/state/reduxProvider'
import { LazyMdx } from '../../lazyMdx'
import { NoteDetailsSheet } from '../../../toc/noteDetailsSheet'
import { MarkdownFileExtensions } from '@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions'
import { NotePageProps } from '../../../../utilityFunctions/formatting/formatNoteProps'



interface FileSystemMdProps extends NotePageProps {
    rootRelativeWithExtension: string
    absolutePath: string
    rootRelativePath: string
    extension: MarkdownFileExtensions
}


const FileSystemMarkdown = async (props: FileSystemMdProps) => {
    let data = await serverClient.mdx.getFsMdx({
        rootRelativePath: props.rootRelativePath,
        extension: props.extension
    })
    return (
        <>
            <LazyMdx
                markdown={data}
                slug={props.slug}
                docType={props.docType}
                fs={true}
            />
            {data && <ReduxProvider>
                <NoteDetailsSheet
                    noteId={props.slug}
                />
            </ReduxProvider>}
        </>
    )
}


FileSystemMarkdown.displayName = "FileSystemMd"


export default FileSystemMarkdown;
