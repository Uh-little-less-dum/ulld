import {
    rehypeCode,
    rehypeCodeDefaultOptions,
    remarkGfm,
    remarkHeading,
    remarkStructure,
} from "fumadocs-core/mdx-plugins";
import { transformerTwoslash } from "fumadocs-twoslash";
import {
    transformerMetaHighlight,
    transformerNotationWordHighlight,
} from "@shikijs/transformers";
import rehypeImgSize from "rehype-img-size";
// import * as t from "@fumadocs/content-collections/configuration"
// t.transformMDX
// import rehypeVideo from "rehype-video";
import { compileMDX as baseCompileMDX } from "@content-collections/mdx";
import remarkEmoji from "remark-emoji";
import { Document, Context } from "@content-collections/core";
import remarkMath from "remark-math";
import {
    remarkDocGen,
    remarkInstall,
    fileGenerator,
    typescriptGenerator,
} from "fumadocs-docgen";

import mdOpts from "@ulld/utilities/defaults/markdown.json" with { type: "json" };
import rehypeMathJaxCHtml from "rehype-mathjax/chtml";
import * as F from "@fumadocs/content-collections/configuration"


export const transformMDX: typeof F.transformMDX = (document: Document, context: Context) => {
    return context.cache(
        {
            type: "fumadocs",
            document,
        },
        async () => {
            let data: any = {};
            const body = await baseCompileMDX(
                {
                    ...context,
                    cache: async (input: any, fn: any) => fn(input),
                },
                document as any,
                {
                    cwd: process.cwd(),
                    remarkPlugins: [
                        remarkMath as any,
                        remarkGfm,
                        remarkHeading,
                        [
                            remarkInstall as any,
                            {
                                Tags: "InstallTabs",
                            },
                        ],
                        [
                            remarkDocGen,
                            {
                                generators: [fileGenerator(), typescriptGenerator()],
                            },
                        ],
                        remarkStructure,
                        remarkEmoji,
                        () => {
                            return (_: any, file: { data: any; value: any }) => {
                                // console.log("file.value: ", file.value) // raw content
                                // if (file.includes("$$")) {
                                //   debugger;
                                // }
                                data = file.data;
                            };
                        },
                    ],
                    rehypePlugins: [
                        [rehypeMathJaxCHtml, mdOpts.math],
                        [
                            rehypeCode,
                            {
                                defaultLanguage: "tsx",
                                transformers: [
                                    ...(rehypeCodeDefaultOptions.transformers as any[]),
                                    transformerTwoslash(),
                                    transformerNotationWordHighlight(),
                                    transformerMetaHighlight(),
                                ],
                                themes: {
                                    light: "github-light",
                                    dark: "aurora-x",
                                },
                            },
                        ],
                        [rehypeImgSize, { dir: "./public" }],
                    ],
                },
            );
            return {
                ...document,
                ...data,
                body,
            };
        },
    )
};
