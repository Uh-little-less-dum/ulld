import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { KanBanListIncludeSchema } from '../inputTypeSchemas/KanBanListIncludeSchema.js'
import { KanBanListWhereUniqueInputSchema } from '../inputTypeSchemas/KanBanListWhereUniqueInputSchema.js'
import { KanBanListCreateInputSchema } from '../inputTypeSchemas/KanBanListCreateInputSchema.js'
import { KanBanListUncheckedCreateInputSchema } from '../inputTypeSchemas/KanBanListUncheckedCreateInputSchema.js'
import { KanBanListUpdateInputSchema } from '../inputTypeSchemas/KanBanListUpdateInputSchema.js'
import { KanBanListUncheckedUpdateInputSchema } from '../inputTypeSchemas/KanBanListUncheckedUpdateInputSchema.js'
import { KanBanCardFindManyArgsSchema } from "../outputTypeSchemas/KanBanCardFindManyArgsSchema"
import { KanbanArgsSchema } from "../outputTypeSchemas/KanbanArgsSchema"
import { KanBanListCountOutputTypeArgsSchema } from "../outputTypeSchemas/KanBanListCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const KanBanListSelectSchema: z.ZodType<Prisma.KanBanListSelect> = z.object({
  id: z.boolean().optional(),
  indexWithinBoard: z.boolean().optional(),
  title: z.boolean().optional(),
  boardId: z.boolean().optional(),
  cards: z.union([z.boolean(),z.lazy(() => KanBanCardFindManyArgsSchema)]).optional(),
  Kanban: z.union([z.boolean(),z.lazy(() => KanbanArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => KanBanListCountOutputTypeArgsSchema)]).optional(),
}).strict()
export const KanBanListUpsertArgsSchema: z.ZodType<Prisma.KanBanListUpsertArgs> = z.object({
  select: KanBanListSelectSchema.optional(),
  include: KanBanListIncludeSchema.optional(),
  where: KanBanListWhereUniqueInputSchema,
  create: z.union([ KanBanListCreateInputSchema,KanBanListUncheckedCreateInputSchema ]),
  update: z.union([ KanBanListUpdateInputSchema,KanBanListUncheckedUpdateInputSchema ]),
}).strict() ;
export default KanBanListUpsertArgsSchema;