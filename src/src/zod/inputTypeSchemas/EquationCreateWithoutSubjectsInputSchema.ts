import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { EquationCreatevariablesInputSchema } from './EquationCreatevariablesInputSchema';
import { EquationCreatekeywordsInputSchema } from './EquationCreatekeywordsInputSchema';
import { RelatedValuesCreateNestedManyWithoutEquationsInputSchema } from './RelatedValuesCreateNestedManyWithoutEquationsInputSchema';
import { TagCreateNestedManyWithoutEquationsInputSchema } from './TagCreateNestedManyWithoutEquationsInputSchema';
import { TopicCreateNestedManyWithoutEquationsInputSchema } from './TopicCreateNestedManyWithoutEquationsInputSchema';
import { MdxNoteCreateNestedManyWithoutEquationsInputSchema } from './MdxNoteCreateNestedManyWithoutEquationsInputSchema';

export const EquationCreateWithoutSubjectsInputSchema: z.ZodType<Prisma.EquationCreateWithoutSubjectsInput> = z.object({
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
  tags: z.lazy(() => TagCreateNestedManyWithoutEquationsInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutEquationsInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutEquationsInputSchema).optional()
}).strict();

export default EquationCreateWithoutSubjectsInputSchema;