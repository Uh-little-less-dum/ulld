import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DefinitionWhereInputSchema } from './DefinitionWhereInputSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { IntNullableFilterSchema } from './IntNullableFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
import { MdxNoteNullableRelationFilterSchema } from './MdxNoteNullableRelationFilterSchema.js';
import { MdxNoteWhereInputSchema } from './MdxNoteWhereInputSchema.js';
export const DefinitionWhereUniqueInputSchema: z.ZodType<Prisma.DefinitionWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => DefinitionWhereInputSchema),z.lazy(() => DefinitionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DefinitionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DefinitionWhereInputSchema),z.lazy(() => DefinitionWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  alphabeticalLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mdxNoteId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mdxNote: z.union([ z.lazy(() => MdxNoteNullableRelationFilterSchema),z.lazy(() => MdxNoteWhereInputSchema) ]).optional().nullable(),
}).strict());
export default DefinitionWhereUniqueInputSchema;