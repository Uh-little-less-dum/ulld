import {
  DietCreateNestedOneWithoutPeriodsFollowedInputSchema
} from "./chunk-DEQKY6M5.js";

// src/database/inputTypeSchemas/TimePeriodCreateInputSchema.ts
import { z } from "zod";
var TimePeriodCreateInputSchema = z.object({
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable(),
  Diet: z.lazy(() => DietCreateNestedOneWithoutPeriodsFollowedInputSchema).optional()
}).strict();
var TimePeriodCreateInputSchema_default = TimePeriodCreateInputSchema;

export {
  TimePeriodCreateInputSchema,
  TimePeriodCreateInputSchema_default
};
//# sourceMappingURL=chunk-OO2THCBC.js.map