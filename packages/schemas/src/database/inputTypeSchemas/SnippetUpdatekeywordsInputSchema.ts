import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const SnippetUpdatekeywordsInputSchema: z.ZodType<Prisma.SnippetUpdatekeywordsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();
export default SnippetUpdatekeywordsInputSchema;