import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { MdxNoteCountOrderByAggregateInputSchema } from './MdxNoteCountOrderByAggregateInputSchema.js';
import { MdxNoteAvgOrderByAggregateInputSchema } from './MdxNoteAvgOrderByAggregateInputSchema.js';
import { MdxNoteMaxOrderByAggregateInputSchema } from './MdxNoteMaxOrderByAggregateInputSchema.js';
import { MdxNoteMinOrderByAggregateInputSchema } from './MdxNoteMinOrderByAggregateInputSchema.js';
import { MdxNoteSumOrderByAggregateInputSchema } from './MdxNoteSumOrderByAggregateInputSchema.js';
export const MdxNoteOrderByWithAggregationInputSchema: z.ZodType<Prisma.MdxNoteOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  isProtected: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dietSummaryKey: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  latexTitle: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rootRelativePath: z.lazy(() => SortOrderSchema).optional(),
  noteType: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  formatted: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  summary: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  citationsListOrder: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  imageSrc: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  sequentialKey: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sequentialIndex: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  floatImages: z.lazy(() => SortOrderSchema).optional(),
  remoteUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  trackRemote: z.lazy(() => SortOrderSchema).optional(),
  outgoingQuickLinks: z.lazy(() => SortOrderSchema).optional(),
  quickLink: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MdxNoteCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MdxNoteAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MdxNoteMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MdxNoteMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MdxNoteSumOrderByAggregateInputSchema).optional()
}).strict();
export default MdxNoteOrderByWithAggregationInputSchema;