import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-7KFMTKWN.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/SubjectUncheckedUpdateManyWithoutToDoInputSchema.ts
import { z } from "zod";
var SubjectUncheckedUpdateManyWithoutToDoInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SubjectUncheckedUpdateManyWithoutToDoInputSchema_default = SubjectUncheckedUpdateManyWithoutToDoInputSchema;

export {
  SubjectUncheckedUpdateManyWithoutToDoInputSchema,
  SubjectUncheckedUpdateManyWithoutToDoInputSchema_default
};
//# sourceMappingURL=chunk-HVKAOCQX.js.map