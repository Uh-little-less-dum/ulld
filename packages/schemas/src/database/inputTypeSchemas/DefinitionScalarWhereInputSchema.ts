import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { IntNullableFilterSchema } from './IntNullableFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
export const DefinitionScalarWhereInputSchema: z.ZodType<Prisma.DefinitionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DefinitionScalarWhereInputSchema),z.lazy(() => DefinitionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DefinitionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DefinitionScalarWhereInputSchema),z.lazy(() => DefinitionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  alphabeticalLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mdxNoteId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();
export default DefinitionScalarWhereInputSchema;