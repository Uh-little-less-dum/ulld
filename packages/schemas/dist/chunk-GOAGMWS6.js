import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-BZ55PUI6.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/QAPairScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var QAPairScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema), z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema), z.lazy(() => QAPairScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  question: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  answer: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  secondaryLabel: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  correctCount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  inCorrectCount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional()
}).strict();
var QAPairScalarWhereWithAggregatesInputSchema_default = QAPairScalarWhereWithAggregatesInputSchema;

export {
  QAPairScalarWhereWithAggregatesInputSchema,
  QAPairScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-GOAGMWS6.js.map