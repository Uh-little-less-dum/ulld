import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
export const ReadingListScalarWhereInputSchema: z.ZodType<Prisma.ReadingListScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReadingListScalarWhereInputSchema),z.lazy(() => ReadingListScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReadingListScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReadingListScalarWhereInputSchema),z.lazy(() => ReadingListScalarWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastUpdate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();
export default ReadingListScalarWhereInputSchema;