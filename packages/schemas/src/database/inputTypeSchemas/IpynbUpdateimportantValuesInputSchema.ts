import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const IpynbUpdateimportantValuesInputSchema: z.ZodType<Prisma.IpynbUpdateimportantValuesInput> = z.object({
  set: z.number().array().optional(),
  push: z.union([ z.number(),z.number().array() ]).optional(),
}).strict();
export default IpynbUpdateimportantValuesInputSchema;