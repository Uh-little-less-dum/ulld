import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const KanBanListUncheckedCreateWithoutCardsInputSchema: z.ZodType<Prisma.KanBanListUncheckedCreateWithoutCardsInput> = z.object({
  id: z.number().int().optional(),
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  boardId: z.number().int().optional().nullable()
}).strict();
export default KanBanListUncheckedCreateWithoutCardsInputSchema;