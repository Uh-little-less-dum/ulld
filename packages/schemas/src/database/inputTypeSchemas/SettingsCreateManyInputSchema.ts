import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ImageAlignmentSchema } from './ImageAlignmentSchema.js';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema.js';
import { InputJsonValueSchema } from './InputJsonValueSchema.js';
export const SettingsCreateManyInputSchema: z.ZodType<Prisma.SettingsCreateManyInput> = z.object({
  id: z.number().int().optional(),
  tooltips: z.boolean().optional(),
  title: z.string().optional(),
  summary_showCitations: z.boolean().optional(),
  summary_showTags: z.boolean().optional(),
  landingImageAlign: z.lazy(() => ImageAlignmentSchema).optional(),
  lockedLandingImage: z.string().optional().nullable(),
  cleanOnSync: z.boolean().optional(),
  plotTheme: z.string().optional().nullable(),
  pluginSettings: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional()
}).strict();
export default SettingsCreateManyInputSchema;