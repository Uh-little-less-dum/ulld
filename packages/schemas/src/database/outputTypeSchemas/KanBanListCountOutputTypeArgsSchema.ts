import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { KanBanListCountOutputTypeSelectSchema } from './KanBanListCountOutputTypeSelectSchema.js';
export const KanBanListCountOutputTypeArgsSchema: z.ZodType<Prisma.KanBanListCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => KanBanListCountOutputTypeSelectSchema).nullish(),
}).strict();
export default KanBanListCountOutputTypeSelectSchema;