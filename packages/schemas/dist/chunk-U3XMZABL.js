import {
  InputJsonValueSchema
} from "./chunk-T77FYKUT.js";

// src/database/inputTypeSchemas/NestedJsonFilterSchema.ts
import { z } from "zod";
var NestedJsonFilterSchema = z.object({
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
  not: InputJsonValueSchema.optional()
}).strict();
var NestedJsonFilterSchema_default = NestedJsonFilterSchema;

export {
  NestedJsonFilterSchema,
  NestedJsonFilterSchema_default
};
//# sourceMappingURL=chunk-U3XMZABL.js.map