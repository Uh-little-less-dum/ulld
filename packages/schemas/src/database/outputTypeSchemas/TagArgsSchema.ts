import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { TagSelectSchema } from '../inputTypeSchemas/TagSelectSchema.js';
import { TagIncludeSchema } from '../inputTypeSchemas/TagIncludeSchema.js';
export const TagArgsSchema: z.ZodType<Prisma.TagDefaultArgs> = z.object({
  select: z.lazy(() => TagSelectSchema).optional(),
  include: z.lazy(() => TagIncludeSchema).optional(),
}).strict();
export default TagArgsSchema;