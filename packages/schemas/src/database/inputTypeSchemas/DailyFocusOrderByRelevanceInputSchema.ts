import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DailyFocusOrderByRelevanceFieldEnumSchema } from './DailyFocusOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DailyFocusOrderByRelevanceInputSchema: z.ZodType<Prisma.DailyFocusOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DailyFocusOrderByRelevanceFieldEnumSchema),z.lazy(() => DailyFocusOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default DailyFocusOrderByRelevanceInputSchema;