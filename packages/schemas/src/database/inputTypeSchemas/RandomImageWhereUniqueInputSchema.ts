import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { RandomImageWhereInputSchema } from './RandomImageWhereInputSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
export const RandomImageWhereUniqueInputSchema: z.ZodType<Prisma.RandomImageWhereUniqueInput> = z.object({
  path: z.string()
})
.and(z.object({
  path: z.string().optional(),
  AND: z.union([ z.lazy(() => RandomImageWhereInputSchema),z.lazy(() => RandomImageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RandomImageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RandomImageWhereInputSchema),z.lazy(() => RandomImageWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());
export default RandomImageWhereUniqueInputSchema;