import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { HealthReportOrderByRelevanceFieldEnumSchema } from './HealthReportOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const HealthReportOrderByRelevanceInputSchema: z.ZodType<Prisma.HealthReportOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => HealthReportOrderByRelevanceFieldEnumSchema),z.lazy(() => HealthReportOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default HealthReportOrderByRelevanceInputSchema;