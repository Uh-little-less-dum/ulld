import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { IpynbCreateManyInputSchema } from '../inputTypeSchemas/IpynbCreateManyInputSchema.js'
export const IpynbCreateManyAndReturnArgsSchema: z.ZodType<Prisma.IpynbCreateManyAndReturnArgs> = z.object({
  data: z.union([ IpynbCreateManyInputSchema,IpynbCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default IpynbCreateManyAndReturnArgsSchema;