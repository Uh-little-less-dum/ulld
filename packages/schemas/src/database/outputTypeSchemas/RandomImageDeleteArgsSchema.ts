import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { RandomImageWhereUniqueInputSchema } from '../inputTypeSchemas/RandomImageWhereUniqueInputSchema.js'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const RandomImageSelectSchema: z.ZodType<Prisma.RandomImageSelect> = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()
export const RandomImageDeleteArgsSchema: z.ZodType<Prisma.RandomImageDeleteArgs> = z.object({
  select: RandomImageSelectSchema.optional(),
  where: RandomImageWhereUniqueInputSchema,
}).strict() ;
export default RandomImageDeleteArgsSchema;