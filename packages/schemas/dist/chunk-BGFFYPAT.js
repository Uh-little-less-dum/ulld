import {
  SettingsAppendixWhereInputSchema
} from "./chunk-KMSRH34U.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  BytesFilterSchema
} from "./chunk-CGUG7AXK.js";

// src/database/inputTypeSchemas/SettingsAppendixWhereUniqueInputSchema.ts
import { z } from "zod";
var SettingsAppendixWhereUniqueInputSchema = z.object({
  id: z.string()
}).and(z.object({
  id: z.string().optional(),
  AND: z.union([z.lazy(() => SettingsAppendixWhereInputSchema), z.lazy(() => SettingsAppendixWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => SettingsAppendixWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SettingsAppendixWhereInputSchema), z.lazy(() => SettingsAppendixWhereInputSchema).array()]).optional(),
  data: z.union([z.lazy(() => BytesFilterSchema), z.instanceof(Buffer)]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict());
var SettingsAppendixWhereUniqueInputSchema_default = SettingsAppendixWhereUniqueInputSchema;

export {
  SettingsAppendixWhereUniqueInputSchema,
  SettingsAppendixWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-BGFFYPAT.js.map