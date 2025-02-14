import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const BibSumOrderByAggregateInputSchema: z.ZodType<Prisma.BibSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default BibSumOrderByAggregateInputSchema;