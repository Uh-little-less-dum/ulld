import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const QuoteCountOrderByAggregateInputSchema: z.ZodType<Prisma.QuoteCountOrderByAggregateInput> = z.object({
  body: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  pinned: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default QuoteCountOrderByAggregateInputSchema;