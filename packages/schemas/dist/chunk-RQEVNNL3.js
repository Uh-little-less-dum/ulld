import {
  MdxNoteCountOrderByAggregateInputSchema
} from "./chunk-PQUAVL35.js";
import {
  MdxNoteAvgOrderByAggregateInputSchema
} from "./chunk-NSPZ3NUO.js";
import {
  MdxNoteMinOrderByAggregateInputSchema
} from "./chunk-WIZWA5YL.js";
import {
  MdxNoteMaxOrderByAggregateInputSchema
} from "./chunk-CSDGRFJZ.js";
import {
  MdxNoteSumOrderByAggregateInputSchema
} from "./chunk-MYFAFH3Y.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/MdxNoteOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var MdxNoteOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  isProtected: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  dietSummaryKey: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  latexTitle: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  rootRelativePath: z.lazy(() => SortOrderSchema).optional(),
  noteType: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  formatted: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  summary: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  citationsListOrder: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  imageSrc: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  sequentialKey: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  sequentialIndex: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  floatImages: z.lazy(() => SortOrderSchema).optional(),
  remoteUrl: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  trackRemote: z.lazy(() => SortOrderSchema).optional(),
  outgoingQuickLinks: z.lazy(() => SortOrderSchema).optional(),
  quickLink: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
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
var MdxNoteOrderByWithAggregationInputSchema_default = MdxNoteOrderByWithAggregationInputSchema;

export {
  MdxNoteOrderByWithAggregationInputSchema,
  MdxNoteOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-RQEVNNL3.js.map