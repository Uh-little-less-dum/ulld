import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema.js';
import { InputJsonValueSchema } from './InputJsonValueSchema.js';
import { EquationCreatevariablesInputSchema } from './EquationCreatevariablesInputSchema.js';
import { EquationCreatekeywordsInputSchema } from './EquationCreatekeywordsInputSchema.js';
import { RelatedValuesCreateNestedManyWithoutEquationsInputSchema } from './RelatedValuesCreateNestedManyWithoutEquationsInputSchema.js';
import { TopicCreateNestedManyWithoutEquationsInputSchema } from './TopicCreateNestedManyWithoutEquationsInputSchema.js';
import { SubjectCreateNestedManyWithoutEquationsInputSchema } from './SubjectCreateNestedManyWithoutEquationsInputSchema.js';
import { MdxNoteCreateNestedManyWithoutEquationsInputSchema } from './MdxNoteCreateNestedManyWithoutEquationsInputSchema.js';
export const EquationCreateWithoutTagsInputSchema: z.ZodType<Prisma.EquationCreateWithoutTagsInput> = z.object({
  equationId: z.string().optional().nullable(),
  title: z.string(),
  desc: z.string().optional().nullable(),
  content: z.string(),
  asPython: z.string().optional().nullable(),
  variableLegend: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  variables: z.union([ z.lazy(() => EquationCreatevariablesInputSchema),z.string().array() ]).optional(),
  keywords: z.union([ z.lazy(() => EquationCreatekeywordsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  relatedValues: z.lazy(() => RelatedValuesCreateNestedManyWithoutEquationsInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutEquationsInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutEquationsInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutEquationsInputSchema).optional()
}).strict();
export default EquationCreateWithoutTagsInputSchema;