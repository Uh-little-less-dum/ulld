import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const KanBanListCreateManyKanbanInputSchema: z.ZodType<Prisma.KanBanListCreateManyKanbanInput> = z.object({
  id: z.number().int().optional(),
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable()
}).strict();
export default KanBanListCreateManyKanbanInputSchema;