import {
  DietArgsSchema,
  HealthReportIncludeSchema
} from "./chunk-KDYZAD52.js";
import {
  HealthReportWhereUniqueInputSchema
} from "./chunk-LZNACEQH.js";

// src/database/outputTypeSchemas/HealthReportFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var HealthReportSelectSchema = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  summary: z.boolean().optional(),
  overall: z.boolean().optional(),
  skin: z.boolean().optional(),
  bloat: z.boolean().optional(),
  weight_feeling: z.boolean().optional(),
  fullness: z.boolean().optional(),
  weight: z.boolean().optional(),
  cardiacCapacity: z.boolean().optional(),
  jawLine: z.boolean().optional(),
  joints: z.boolean().optional(),
  flexibility: z.boolean().optional(),
  anxiety: z.boolean().optional(),
  anxiety_desc: z.boolean().optional(),
  mood_desc: z.boolean().optional(),
  mood: z.boolean().optional(),
  sexDrive: z.boolean().optional(),
  intruisiveThoughts: z.boolean().optional(),
  caffeineIntake: z.boolean().optional(),
  glutenIntake: z.boolean().optional(),
  sugarIntake: z.boolean().optional(),
  artificialSweetenerIntake: z.boolean().optional(),
  artificalDyes: z.boolean().optional(),
  sleepQuality: z.boolean().optional(),
  hydration: z.boolean().optional(),
  twitching: z.boolean().optional(),
  sleepHours: z.boolean().optional(),
  calorie_est: z.boolean().optional(),
  times_meals_more_than_gap_apart: z.boolean().optional(),
  estHoursInExcessFast: z.boolean().optional(),
  dietId: z.boolean().optional(),
  created: z.boolean().optional(),
  currentDiet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var HealthReportFindUniqueOrThrowArgsSchema = z.object({
  select: HealthReportSelectSchema.optional(),
  include: HealthReportIncludeSchema.optional(),
  where: HealthReportWhereUniqueInputSchema
}).strict();
var HealthReportFindUniqueOrThrowArgsSchema_default = HealthReportFindUniqueOrThrowArgsSchema;

export {
  HealthReportSelectSchema,
  HealthReportFindUniqueOrThrowArgsSchema,
  HealthReportFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-L6W6FKBS.js.map