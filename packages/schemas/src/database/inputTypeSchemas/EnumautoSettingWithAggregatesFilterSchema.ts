import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { autoSettingSchema } from './autoSettingSchema.js';
import { NestedEnumautoSettingWithAggregatesFilterSchema } from './NestedEnumautoSettingWithAggregatesFilterSchema.js';
import { NestedIntFilterSchema } from './NestedIntFilterSchema.js';
import { NestedEnumautoSettingFilterSchema } from './NestedEnumautoSettingFilterSchema.js';
export const EnumautoSettingWithAggregatesFilterSchema: z.ZodType<Prisma.EnumautoSettingWithAggregatesFilter> = z.object({
  equals: z.lazy(() => autoSettingSchema).optional(),
  in: z.lazy(() => autoSettingSchema).array().optional(),
  notIn: z.lazy(() => autoSettingSchema).array().optional(),
  not: z.union([ z.lazy(() => autoSettingSchema),z.lazy(() => NestedEnumautoSettingWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumautoSettingFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumautoSettingFilterSchema).optional()
}).strict();
export default EnumautoSettingWithAggregatesFilterSchema;