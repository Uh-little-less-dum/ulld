import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BusinessContactCreateManyInputSchema } from '../inputTypeSchemas/BusinessContactCreateManyInputSchema.js'
export const BusinessContactCreateManyArgsSchema: z.ZodType<Prisma.BusinessContactCreateManyArgs> = z.object({
  data: z.union([ BusinessContactCreateManyInputSchema,BusinessContactCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default BusinessContactCreateManyArgsSchema;