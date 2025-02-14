import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SequentialNoteListIncludeSchema } from '../inputTypeSchemas/SequentialNoteListIncludeSchema.js'
import { SequentialNoteListWhereInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereInputSchema.js'
import { SequentialNoteListOrderByWithRelationInputSchema } from '../inputTypeSchemas/SequentialNoteListOrderByWithRelationInputSchema.js'
import { SequentialNoteListWhereUniqueInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereUniqueInputSchema.js'
import { SequentialNoteListScalarFieldEnumSchema } from '../inputTypeSchemas/SequentialNoteListScalarFieldEnumSchema.js'
import { MdxNoteFindManyArgsSchema } from "../outputTypeSchemas/MdxNoteFindManyArgsSchema"
import { IpynbFindManyArgsSchema } from "../outputTypeSchemas/IpynbFindManyArgsSchema"
import { SequentialNoteListCountOutputTypeArgsSchema } from "../outputTypeSchemas/SequentialNoteListCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const SequentialNoteListSelectSchema: z.ZodType<Prisma.SequentialNoteListSelect> = z.object({
  sequentialKey: z.boolean().optional(),
  MdxNote: z.union([z.boolean(),z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: z.union([z.boolean(),z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SequentialNoteListCountOutputTypeArgsSchema)]).optional(),
}).strict()
export const SequentialNoteListFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SequentialNoteListFindFirstOrThrowArgs> = z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: SequentialNoteListIncludeSchema.optional(),
  where: SequentialNoteListWhereInputSchema.optional(),
  orderBy: z.union([ SequentialNoteListOrderByWithRelationInputSchema.array(),SequentialNoteListOrderByWithRelationInputSchema ]).optional(),
  cursor: SequentialNoteListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SequentialNoteListScalarFieldEnumSchema,SequentialNoteListScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default SequentialNoteListFindFirstOrThrowArgsSchema;