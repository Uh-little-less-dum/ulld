import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { NoteTypeWhereUniqueInputSchema } from '../inputTypeSchemas/NoteTypeWhereUniqueInputSchema.js'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const NoteTypeSelectSchema: z.ZodType<Prisma.NoteTypeSelect> = z.object({
  name: z.boolean().optional(),
}).strict()
export const NoteTypeDeleteArgsSchema: z.ZodType<Prisma.NoteTypeDeleteArgs> = z.object({
  select: NoteTypeSelectSchema.optional(),
  where: NoteTypeWhereUniqueInputSchema,
}).strict() ;
export default NoteTypeDeleteArgsSchema;