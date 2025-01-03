import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const NoteTypeCreateManyInputSchema: z.ZodType<Prisma.NoteTypeCreateManyInput> = z.object({
  name: z.string()
}).strict();
export default NoteTypeCreateManyInputSchema;