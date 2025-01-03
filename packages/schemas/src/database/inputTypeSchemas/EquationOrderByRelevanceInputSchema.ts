import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationOrderByRelevanceFieldEnumSchema } from './EquationOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const EquationOrderByRelevanceInputSchema: z.ZodType<Prisma.EquationOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => EquationOrderByRelevanceFieldEnumSchema),z.lazy(() => EquationOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default EquationOrderByRelevanceInputSchema;