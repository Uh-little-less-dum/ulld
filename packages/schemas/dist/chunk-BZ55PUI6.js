import {
  NestedStringNullableWithAggregatesFilterSchema
} from "./chunk-VFKLP7TG.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-45PPNBUK.js";
import {
  NestedStringNullableFilterSchema
} from "./chunk-RQEVSJX3.js";
import {
  QueryModeSchema
} from "./chunk-5V6JEXGU.js";

// src/database/inputTypeSchemas/StringNullableWithAggregatesFilterSchema.ts
import { z } from "zod";
var StringNullableWithAggregatesFilterSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();
var StringNullableWithAggregatesFilterSchema_default = StringNullableWithAggregatesFilterSchema;

export {
  StringNullableWithAggregatesFilterSchema,
  StringNullableWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-BZ55PUI6.js.map