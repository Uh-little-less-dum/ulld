import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { KanBanListWhereInputSchema } from '../inputTypeSchemas/KanBanListWhereInputSchema.js'
import { KanBanListOrderByWithAggregationInputSchema } from '../inputTypeSchemas/KanBanListOrderByWithAggregationInputSchema.js'
import { KanBanListScalarFieldEnumSchema } from '../inputTypeSchemas/KanBanListScalarFieldEnumSchema.js'
import { KanBanListScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/KanBanListScalarWhereWithAggregatesInputSchema.js'
export const KanBanListGroupByArgsSchema: z.ZodType<Prisma.KanBanListGroupByArgs> = z.object({
  where: KanBanListWhereInputSchema.optional(),
  orderBy: z.union([ KanBanListOrderByWithAggregationInputSchema.array(),KanBanListOrderByWithAggregationInputSchema ]).optional(),
  by: KanBanListScalarFieldEnumSchema.array(),
  having: KanBanListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default KanBanListGroupByArgsSchema;