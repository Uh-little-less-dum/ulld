import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietWhereInputSchema } from './DietWhereInputSchema.js';
export const DietListRelationFilterSchema: z.ZodType<Prisma.DietListRelationFilter> = z.object({
  every: z.lazy(() => DietWhereInputSchema).optional(),
  some: z.lazy(() => DietWhereInputSchema).optional(),
  none: z.lazy(() => DietWhereInputSchema).optional()
}).strict();
export default DietListRelationFilterSchema;