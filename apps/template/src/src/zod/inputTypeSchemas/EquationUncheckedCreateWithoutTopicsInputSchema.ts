import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { EquationCreatevariablesInputSchema } from './EquationCreatevariablesInputSchema';
import { EquationCreatekeywordsInputSchema } from './EquationCreatekeywordsInputSchema';
import { RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema } from './RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema';
import { TagUncheckedCreateNestedManyWithoutEquationsInputSchema } from './TagUncheckedCreateNestedManyWithoutEquationsInputSchema';
import { SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema } from './SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema';
import { MdxNoteUncheckedCreateNestedManyWithoutEquationsInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutEquationsInputSchema';

export const EquationUncheckedCreateWithoutTopicsInputSchema: z.ZodType<Prisma.EquationUncheckedCreateWithoutTopicsInput> = z.object({
  id: z.number().int().optional(),
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
  relatedValues: z.lazy(() => RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutEquationsInputSchema).optional()
}).strict();

export default EquationUncheckedCreateWithoutTopicsInputSchema;
