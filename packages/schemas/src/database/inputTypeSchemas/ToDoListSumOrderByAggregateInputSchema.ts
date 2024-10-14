import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ToDoListSumOrderByAggregateInputSchema: z.ZodType<Prisma.ToDoListSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ToDoListSumOrderByAggregateInputSchema;
