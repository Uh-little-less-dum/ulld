import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { GoogleCalendarAuthCreateManyInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthCreateManyInputSchema.js'
export const GoogleCalendarAuthCreateManyAndReturnArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthCreateManyAndReturnArgs> = z.object({
  data: z.union([ GoogleCalendarAuthCreateManyInputSchema,GoogleCalendarAuthCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default GoogleCalendarAuthCreateManyAndReturnArgsSchema;