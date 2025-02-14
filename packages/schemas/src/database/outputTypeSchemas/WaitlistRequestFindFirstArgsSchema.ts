import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { WaitlistRequestWhereInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereInputSchema.js'
import { WaitlistRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/WaitlistRequestOrderByWithRelationInputSchema.js'
import { WaitlistRequestWhereUniqueInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema.js'
import { WaitlistRequestScalarFieldEnumSchema } from '../inputTypeSchemas/WaitlistRequestScalarFieldEnumSchema.js'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WaitlistRequestSelectSchema: z.ZodType<Prisma.WaitlistRequestSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional(),
}).strict()
export const WaitlistRequestFindFirstArgsSchema: z.ZodType<Prisma.WaitlistRequestFindFirstArgs> = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: WaitlistRequestWhereInputSchema.optional(),
  orderBy: z.union([ WaitlistRequestOrderByWithRelationInputSchema.array(),WaitlistRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: WaitlistRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WaitlistRequestScalarFieldEnumSchema,WaitlistRequestScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default WaitlistRequestFindFirstArgsSchema;