"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ToDoCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ToDoCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  task: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dueAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  details: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  parentId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  category: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  bookmarked: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  status: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  priority: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  toDoListId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  completedOn: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ToDoCountOrderByAggregateInputSchema_default = ToDoCountOrderByAggregateInputSchema;




exports.ToDoCountOrderByAggregateInputSchema = ToDoCountOrderByAggregateInputSchema; exports.ToDoCountOrderByAggregateInputSchema_default = ToDoCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-BNFARKC6.cjs.map