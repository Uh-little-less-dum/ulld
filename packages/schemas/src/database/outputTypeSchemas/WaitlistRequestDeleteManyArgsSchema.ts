import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { WaitlistRequestWhereInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereInputSchema.js'
export const WaitlistRequestDeleteManyArgsSchema: z.ZodType<Prisma.WaitlistRequestDeleteManyArgs> = z.object({
  where: WaitlistRequestWhereInputSchema.optional(),
}).strict() ;
export default WaitlistRequestDeleteManyArgsSchema;