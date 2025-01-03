import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RandomImageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RandomImageMaxOrderByAggregateInput> = z.object({
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RandomImageMaxOrderByAggregateInputSchema;
