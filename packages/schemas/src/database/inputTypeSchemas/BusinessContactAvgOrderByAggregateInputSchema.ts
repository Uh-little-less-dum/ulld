import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const BusinessContactAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessContactAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default BusinessContactAvgOrderByAggregateInputSchema;