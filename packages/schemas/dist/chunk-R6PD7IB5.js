import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-BZ55PUI6.js";
import {
  IntNullableWithAggregatesFilterSchema
} from "./chunk-VKTRMAGB.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";

// src/database/inputTypeSchemas/KanBanListScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var KanBanListScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema), z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema), z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  indexWithinBoard: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  boardId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable()
}).strict();
var KanBanListScalarWhereWithAggregatesInputSchema_default = KanBanListScalarWhereWithAggregatesInputSchema;

export {
  KanBanListScalarWhereWithAggregatesInputSchema,
  KanBanListScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-R6PD7IB5.js.map