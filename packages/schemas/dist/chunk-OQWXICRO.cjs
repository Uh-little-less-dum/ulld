"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TagMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TagMaxOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var TagMaxOrderByAggregateInputSchema_default = TagMaxOrderByAggregateInputSchema;




exports.TagMaxOrderByAggregateInputSchema = TagMaxOrderByAggregateInputSchema; exports.TagMaxOrderByAggregateInputSchema_default = TagMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-OQWXICRO.cjs.map