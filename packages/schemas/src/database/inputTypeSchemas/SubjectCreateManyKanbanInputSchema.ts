import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const SubjectCreateManyKanbanInputSchema: z.ZodType<Prisma.SubjectCreateManyKanbanInput> = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
export default SubjectCreateManyKanbanInputSchema;