import {
  DietCreateInputSchema
} from "./chunk-ZTCBO5DW.js";
import {
  DietUncheckedCreateInputSchema
} from "./chunk-CGFANPHK.js";
import {
  DietIncludeSchema,
  DietaryItemFindManyArgsSchema,
  HealthReportFindManyArgsSchema,
  TimePeriodFindManyArgsSchema
} from "./chunk-KDYZAD52.js";
import {
  DietCountOutputTypeArgsSchema
} from "./chunk-F7WREYKP.js";

// src/database/outputTypeSchemas/DietCreateArgsSchema.ts
import { z } from "zod";
var DietSelectSchema = z.object({
  name: z.boolean().optional(),
  summary: z.boolean().optional(),
  activelyFollowing: z.boolean().optional(),
  gf: z.boolean().optional(),
  vegan: z.boolean().optional(),
  pescatarian: z.boolean().optional(),
  vegetarian: z.boolean().optional(),
  fasting: z.boolean().optional(),
  cardioTraining: z.boolean().optional(),
  weightTraining: z.boolean().optional(),
  carb: z.boolean().optional(),
  pro: z.boolean().optional(),
  fat: z.boolean().optional(),
  goals: z.boolean().optional(),
  created: z.boolean().optional(),
  lastUpdate: z.boolean().optional(),
  items: z.union([z.boolean(), z.lazy(() => DietaryItemFindManyArgsSchema)]).optional(),
  periodsFollowed: z.union([z.boolean(), z.lazy(() => TimePeriodFindManyArgsSchema)]).optional(),
  HealthReport: z.union([z.boolean(), z.lazy(() => HealthReportFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DietCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietCreateArgsSchema = z.object({
  select: DietSelectSchema.optional(),
  include: DietIncludeSchema.optional(),
  data: z.union([DietCreateInputSchema, DietUncheckedCreateInputSchema])
}).strict();
var DietCreateArgsSchema_default = DietCreateArgsSchema;

export {
  DietSelectSchema,
  DietCreateArgsSchema,
  DietCreateArgsSchema_default
};
//# sourceMappingURL=chunk-HP7NGOUK.js.map