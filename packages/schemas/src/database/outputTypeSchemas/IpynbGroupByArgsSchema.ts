import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { IpynbWhereInputSchema } from '../inputTypeSchemas/IpynbWhereInputSchema.js'
import { IpynbOrderByWithAggregationInputSchema } from '../inputTypeSchemas/IpynbOrderByWithAggregationInputSchema.js'
import { IpynbScalarFieldEnumSchema } from '../inputTypeSchemas/IpynbScalarFieldEnumSchema.js'
import { IpynbScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/IpynbScalarWhereWithAggregatesInputSchema.js'
export const IpynbGroupByArgsSchema: z.ZodType<Prisma.IpynbGroupByArgs> = z.object({
  where: IpynbWhereInputSchema.optional(),
  orderBy: z.union([ IpynbOrderByWithAggregationInputSchema.array(),IpynbOrderByWithAggregationInputSchema ]).optional(),
  by: IpynbScalarFieldEnumSchema.array(),
  having: IpynbScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default IpynbGroupByArgsSchema;