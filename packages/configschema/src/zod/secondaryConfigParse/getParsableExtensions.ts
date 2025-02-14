import { replaceRecursively } from "@ulld/utilities/utils/general";
import type { AppConfigSchemaOutput } from "../main.js";
import { z } from 'zod'

export const markdownExtensions = z.union([
    z.literal(".mdx"),
    z.literal(".md"),
])

export const defaultParsableFileExtensions = z.union([
    z.literal(".mdx"),
    z.literal(".md"),
    z.literal(".ipynb"),
])


export const parsableFileExtensions = z.union([
    z.literal(".csv"),
    z.literal(".tsv"),
    z.literal(".excel"),
    z.literal(".numpy"),
    z.literal(".html"),
    z.literal(".pickle"),
    z.literal(".db"),
    z.literal(".sql"),
    z.literal(".pdf"),
    z.literal(".json"),
    z.literal(".tex"),
    z.literal(".hdf5"),
])


export const currentParsableExtensions = defaultParsableFileExtensions

export const allParsableFileExtensionSchema = z.union([
    defaultParsableFileExtensions,
    parsableFileExtensions
])


export type ParsableExtensionsSchema = z.input<typeof defaultParsableFileExtensions> | z.input<typeof parsableFileExtensions>

export type MarkdownFileExtensions = z.input<typeof markdownExtensions>


export type ActiveParsableExtensions = z.input<typeof currentParsableExtensions>


export const getParsableExtensions = (config: AppConfigSchemaOutput): (z.input<typeof defaultParsableFileExtensions> | z.input<typeof parsableFileExtensions>)[] => {
    let parsable: (z.input<typeof defaultParsableFileExtensions> | z.input<typeof parsableFileExtensions>)[] = [
        ".mdx",
        ".ipynb"
    ]
    // Extra logic here to make more file extensions become available based on either internal progress or through configured plugins.
    return parsable
}

export const getFileTypeAppendices = (parsableExtensions: ReturnType<typeof getParsableExtensions>) => {
    let ext: Record<ParsableExtensionsSchema, string> = {} as Record<ParsableExtensionsSchema, string>
    for (const k of parsableExtensions) {
        ext[k] = replaceRecursively(k, /\./gmi, "")
    }
    return ext
}

