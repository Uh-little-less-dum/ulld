import { zodMdxBlockStringSchema, zodMdxInlineStringSchema } from "@ulld/parsers/math/zodMathSchemas"
import { z } from "zod"
import { serverClient } from "../../trpc/serverClient"



export const qaInputSchema = z.object({
    question: zodMdxBlockStringSchema,
    answer: zodMdxBlockStringSchema,
    description: zodMdxInlineStringSchema,
    tags: z.string().array().default([]),
    topics: z.string().array().default([]),
    subjects: z.string().array().default([]),
    id: z.string().optional()
})

export const qaInputSchemaTrpc = qaInputSchema.merge(z.object({
    question: z.string(),
    answer: z.string(),
    description: z.string().optional()
}))

export type QAPairInput = z.input<typeof qaInputSchema>
export type QAPairOutput = z.output<typeof qaInputSchema>

export type FlipCardReturnItem = Awaited<ReturnType<typeof serverClient.qa.getSpecificQA>>
