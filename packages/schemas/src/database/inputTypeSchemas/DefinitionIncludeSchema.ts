import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { MdxNoteArgsSchema } from "../outputTypeSchemas/MdxNoteArgsSchema"
export const DefinitionIncludeSchema: z.ZodType<Prisma.DefinitionInclude> = z.object({
  mdxNote: z.union([z.boolean(),z.lazy(() => MdxNoteArgsSchema)]).optional(),
}).strict()
export default DefinitionIncludeSchema;