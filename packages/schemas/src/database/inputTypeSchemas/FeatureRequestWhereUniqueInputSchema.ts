import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FeatureRequestWhereInputSchema } from './FeatureRequestWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const FeatureRequestWhereUniqueInputSchema: z.ZodType<Prisma.FeatureRequestWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => FeatureRequestWhereInputSchema),z.lazy(() => FeatureRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FeatureRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FeatureRequestWhereInputSchema),z.lazy(() => FeatureRequestWhereInputSchema).array() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  category: z.lazy(() => StringNullableListFilterSchema).optional(),
  userBase: z.lazy(() => StringNullableListFilterSchema).optional(),
  receivedOn: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default FeatureRequestWhereUniqueInputSchema;