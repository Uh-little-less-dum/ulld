import {
  NestedJsonFilterSchema
} from "./chunk-U3XMZABL.js";
import {
  InputJsonValueSchema
} from "./chunk-T77FYKUT.js";
import {
  NestedIntFilterSchema
} from "./chunk-IIKKCTNR.js";

// src/database/inputTypeSchemas/JsonWithAggregatesFilterSchema.ts
import { z } from "zod";
var JsonWithAggregatesFilterSchema = z.object({
  equals: InputJsonValueSchema.optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValueSchema.optional().nullable(),
  array_starts_with: InputJsonValueSchema.optional().nullable(),
  array_ends_with: InputJsonValueSchema.optional().nullable(),
  lt: InputJsonValueSchema.optional(),
  lte: InputJsonValueSchema.optional(),
  gt: InputJsonValueSchema.optional(),
  gte: InputJsonValueSchema.optional(),
  not: InputJsonValueSchema.optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedJsonFilterSchema).optional(),
  _max: z.lazy(() => NestedJsonFilterSchema).optional()
}).strict();
var JsonWithAggregatesFilterSchema_default = JsonWithAggregatesFilterSchema;

export {
  JsonWithAggregatesFilterSchema,
  JsonWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-OSEN3URL.js.map