import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const SettingsAppendixUncheckedCreateInputSchema: z.ZodType<Prisma.SettingsAppendixUncheckedCreateInput> = z.object({
  id: z.string(),
  data: z.instanceof(Buffer),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export default SettingsAppendixUncheckedCreateInputSchema;