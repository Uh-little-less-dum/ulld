import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BusinessContactOrderByRelevanceInputSchema } from './BusinessContactOrderByRelevanceInputSchema';

export const BusinessContactOrderByWithRelationInputSchema: z.ZodType<Prisma.BusinessContactOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  contactName: z.lazy(() => SortOrderSchema).optional(),
  contactPreference: z.lazy(() => SortOrderSchema).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  phone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  purpose: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _relevance: z.lazy(() => BusinessContactOrderByRelevanceInputSchema).optional()
}).strict();

export default BusinessContactOrderByWithRelationInputSchema;