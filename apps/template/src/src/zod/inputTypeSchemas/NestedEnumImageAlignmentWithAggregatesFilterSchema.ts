import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageAlignmentSchema } from './ImageAlignmentSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumImageAlignmentFilterSchema } from './NestedEnumImageAlignmentFilterSchema';

export const NestedEnumImageAlignmentWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumImageAlignmentWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ImageAlignmentSchema).optional(),
  in: z.lazy(() => ImageAlignmentSchema).array().optional(),
  notIn: z.lazy(() => ImageAlignmentSchema).array().optional(),
  not: z.union([ z.lazy(() => ImageAlignmentSchema),z.lazy(() => NestedEnumImageAlignmentWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumImageAlignmentFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumImageAlignmentFilterSchema).optional()
}).strict();

export default NestedEnumImageAlignmentWithAggregatesFilterSchema;
