import {
  MdxNoteCreateNestedManyWithoutEquationsInputSchema,
  SubjectCreateNestedManyWithoutEquationsInputSchema,
  TagCreateNestedManyWithoutEquationsInputSchema,
  TopicCreateNestedManyWithoutEquationsInputSchema
} from "./chunk-5QJWIG3K.js";
import {
  RelatedValuesCreateNestedManyWithoutEquationsInputSchema
} from "./chunk-ZBT5Y35K.js";
import {
  EquationCreatevariablesInputSchema
} from "./chunk-P65CY5HZ.js";
import {
  EquationCreatekeywordsInputSchema
} from "./chunk-L5R5LLYC.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ZXTFXMHW.js";
import {
  InputJsonValueSchema
} from "./chunk-T77FYKUT.js";

// src/database/inputTypeSchemas/EquationCreateInputSchema.ts
import { z } from "zod";
var EquationCreateInputSchema = z.object({
  equationId: z.string().optional().nullable(),
  title: z.string(),
  desc: z.string().optional().nullable(),
  content: z.string(),
  asPython: z.string().optional().nullable(),
  variableLegend: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  variables: z.union([z.lazy(() => EquationCreatevariablesInputSchema), z.string().array()]).optional(),
  keywords: z.union([z.lazy(() => EquationCreatekeywordsInputSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  relatedValues: z.lazy(() => RelatedValuesCreateNestedManyWithoutEquationsInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutEquationsInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutEquationsInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutEquationsInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutEquationsInputSchema).optional()
}).strict();
var EquationCreateInputSchema_default = EquationCreateInputSchema;

export {
  EquationCreateInputSchema,
  EquationCreateInputSchema_default
};
//# sourceMappingURL=chunk-ELLHYHGA.js.map