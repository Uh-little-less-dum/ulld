import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema.js';
import { NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema } from './NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema.js';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema.js';
import { NestedEnumQUANTITY_GUESSNullableFilterSchema } from './NestedEnumQUANTITY_GUESSNullableFilterSchema.js';
export const EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumQUANTITY_GUESSNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable(),
  in: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => QUANTITY_GUESSSchema),z.lazy(() => NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumQUANTITY_GUESSNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumQUANTITY_GUESSNullableFilterSchema).optional()
}).strict();
export default EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema;