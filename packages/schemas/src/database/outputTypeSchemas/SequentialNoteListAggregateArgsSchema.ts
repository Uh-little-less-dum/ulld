import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SequentialNoteListWhereInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereInputSchema.js'
import { SequentialNoteListOrderByWithRelationInputSchema } from '../inputTypeSchemas/SequentialNoteListOrderByWithRelationInputSchema.js'
import { SequentialNoteListWhereUniqueInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereUniqueInputSchema.js'
export const SequentialNoteListAggregateArgsSchema: z.ZodType<Prisma.SequentialNoteListAggregateArgs> = z.object({
  where: SequentialNoteListWhereInputSchema.optional(),
  orderBy: z.union([ SequentialNoteListOrderByWithRelationInputSchema.array(),SequentialNoteListOrderByWithRelationInputSchema ]).optional(),
  cursor: SequentialNoteListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SequentialNoteListAggregateArgsSchema;