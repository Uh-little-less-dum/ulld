import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const CitationsGroupCreateWithoutEntriesInputSchema: z.ZodType<Prisma.CitationsGroupCreateWithoutEntriesInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();
export default CitationsGroupCreateWithoutEntriesInputSchema;