import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { GoogleCalendarAuthWhereUniqueInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema.js'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const GoogleCalendarAuthSelectSchema: z.ZodType<Prisma.GoogleCalendarAuthSelect> = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional(),
}).strict()
export const GoogleCalendarAuthFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthFindUniqueOrThrowArgs> = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: GoogleCalendarAuthWhereUniqueInputSchema,
}).strict() ;
export default GoogleCalendarAuthFindUniqueOrThrowArgsSchema;