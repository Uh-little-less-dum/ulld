import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema.js';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema.js';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema.js';
export const QAPairScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.QAPairScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema),z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema),z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  question: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  answer: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  secondaryLabel: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  correctCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  inCorrectCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();
export default QAPairScalarWhereWithAggregatesInputSchema;