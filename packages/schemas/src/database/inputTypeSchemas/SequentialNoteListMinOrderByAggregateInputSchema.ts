import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const SequentialNoteListMinOrderByAggregateInputSchema: z.ZodType<Prisma.SequentialNoteListMinOrderByAggregateInput> = z.object({
  sequentialKey: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SequentialNoteListMinOrderByAggregateInputSchema;