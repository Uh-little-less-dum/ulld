import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListCreateNestedOneWithoutCardsInputSchema } from './KanBanListCreateNestedOneWithoutCardsInputSchema.js';
export const KanBanCardCreateInputSchema: z.ZodType<Prisma.KanBanCardCreateInput> = z.object({
  indexWithinList: z.number().int(),
  label: z.string().optional().nullable(),
  details: z.string().optional().nullable(),
  KanBanList: z.lazy(() => KanBanListCreateNestedOneWithoutCardsInputSchema).optional()
}).strict();
export default KanBanCardCreateInputSchema;