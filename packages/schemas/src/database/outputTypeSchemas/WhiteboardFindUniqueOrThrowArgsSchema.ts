import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { WhiteboardWhereUniqueInputSchema } from '../inputTypeSchemas/WhiteboardWhereUniqueInputSchema.js'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WhiteboardSelectSchema: z.ZodType<Prisma.WhiteboardSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()
export const WhiteboardFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WhiteboardFindUniqueOrThrowArgs> = z.object({
  select: WhiteboardSelectSchema.optional(),
  where: WhiteboardWhereUniqueInputSchema,
}).strict() ;
export default WhiteboardFindUniqueOrThrowArgsSchema;