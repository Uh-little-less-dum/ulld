"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/MdxNoteCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var MdxNoteCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  isProtected: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dietSummaryKey: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  latexTitle: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  rootRelativePath: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  noteType: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  formatted: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  summary: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  citationsListOrder: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  imageSrc: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  href: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sequentialKey: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sequentialIndex: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  floatImages: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  remoteUrl: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  trackRemote: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  quickLink: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  bookmarked: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var MdxNoteCountOrderByAggregateInputSchema_default = MdxNoteCountOrderByAggregateInputSchema;




exports.MdxNoteCountOrderByAggregateInputSchema = MdxNoteCountOrderByAggregateInputSchema; exports.MdxNoteCountOrderByAggregateInputSchema_default = MdxNoteCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-LWO3KDB5.cjs.map