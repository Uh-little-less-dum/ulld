import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { FeatureRequestOrderByRelevanceInputSchema } from './FeatureRequestOrderByRelevanceInputSchema.js';
export const FeatureRequestOrderByWithRelationInputSchema: z.ZodType<Prisma.FeatureRequestOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  userBase: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => FeatureRequestOrderByRelevanceInputSchema).optional()
}).strict();
export default FeatureRequestOrderByWithRelationInputSchema;