import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateNestedOneWithoutDefinitionsInputSchema } from './MdxNoteCreateNestedOneWithoutDefinitionsInputSchema.js';
export const DefinitionCreateInputSchema: z.ZodType<Prisma.DefinitionCreateInput> = z.object({
  id: z.string(),
  label: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  alphabeticalLabel: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  mdxNote: z.lazy(() => MdxNoteCreateNestedOneWithoutDefinitionsInputSchema).optional()
}).strict();
export default DefinitionCreateInputSchema;