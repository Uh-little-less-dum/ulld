import {
  FeatureRequestCreateInputSchema
} from "./chunk-KSU4POIE.js";
import {
  FeatureRequestUncheckedCreateInputSchema
} from "./chunk-AQ7EKWED.js";
import {
  FeatureRequestUpdateInputSchema
} from "./chunk-I7KOWP6W.js";
import {
  FeatureRequestUncheckedUpdateInputSchema
} from "./chunk-MU4IHSZR.js";
import {
  FeatureRequestWhereUniqueInputSchema
} from "./chunk-RQECGBYQ.js";

// src/database/outputTypeSchemas/FeatureRequestUpsertArgsSchema.ts
import { z } from "zod";
var FeatureRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  message: z.boolean().optional(),
  category: z.boolean().optional(),
  userBase: z.boolean().optional(),
  receivedOn: z.boolean().optional()
}).strict();
var FeatureRequestUpsertArgsSchema = z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: FeatureRequestWhereUniqueInputSchema,
  create: z.union([FeatureRequestCreateInputSchema, FeatureRequestUncheckedCreateInputSchema]),
  update: z.union([FeatureRequestUpdateInputSchema, FeatureRequestUncheckedUpdateInputSchema])
}).strict();
var FeatureRequestUpsertArgsSchema_default = FeatureRequestUpsertArgsSchema;

export {
  FeatureRequestSelectSchema,
  FeatureRequestUpsertArgsSchema,
  FeatureRequestUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-GDDJE722.js.map