import { getConditionalClientComponents, ConditionalComponentProps } from "./conditionalComponents";
import { A } from "@ulld/embeddable-components/components/a";
import { Li } from "@ulld/embeddable-components/components/li";
import { Hr } from "@ulld/embeddable-components/components/hr";
import { Ol } from "@ulld/embeddable-components/components/ol";
import { TableWrapper } from "@ulld/embeddable-components/components/tableWrapper";
import Ul from "@ulld/embeddable-components/components/ul";
import type { MDXComponents } from 'mdx/types'
import { MdxInput } from "@ulld/embeddable-components/components/mdxInput";
import BlockQuote from "@ulld/embeddable-components/components/blockQuote";
import { Highlight } from "@ulld/embeddable-components/components/client/hl";
import { ImgComponent } from "@ulld/embeddable-components/components/img";
import { InternalMermaid } from "@ulld/embeddable-components/components/internalMermaid";
import { H1, H2, H3, H4, H5, H6 } from "@ulld/embeddable-components/components/heading";



export const components: MDXComponents = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    hr: Hr,
    a: A,
    ol: Ol,
    ul: Ul,
    li: Li,
    input: MdxInput,
    table: TableWrapper,
    blockquote: BlockQuote,
    mark: Highlight,
    img: ImgComponent,
    Mermaid: InternalMermaid,
}


export const getComponentMap = (content: string, opts?: ConditionalComponentProps) => {
     if (opts?.requiredOnly) {
        return components satisfies MDXComponents
     }
     return {
         ...components,
         ...getConditionalClientComponents(content, {
             all: false,
             ...opts
         })
     } satisfies MDXComponents
}
