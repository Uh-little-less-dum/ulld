import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema.js';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema.js';
import { TagUncheckedUpdateManyWithoutEquationsInputSchema } from './TagUncheckedUpdateManyWithoutEquationsInputSchema.js';
export const TagUpdateManyWithWhereWithoutEquationsInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutEquationsInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutEquationsInputSchema) ]),
}).strict();
export default TagUpdateManyWithWhereWithoutEquationsInputSchema;