import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const BibMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BibMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default BibMaxOrderByAggregateInputSchema;