"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVB5SDYGQcjs = require('./chunk-VB5SDYGQ.cjs');


var _chunkRMHWQG5Ocjs = require('./chunk-RMHWQG5O.cjs');


var _chunkCUJGY6WBcjs = require('./chunk-CUJGY6WB.cjs');


var _chunkEEBSLQOJcjs = require('./chunk-EEBSLQOJ.cjs');

// src/database/outputTypeSchemas/DailyFocusFindFirstArgsSchema.ts
var _zod = require('zod');
var DailyFocusSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var DailyFocusFindFirstArgsSchema = _zod.z.object({
  select: DailyFocusSelectSchema.optional(),
  where: _chunkEEBSLQOJcjs.DailyFocusWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkVB5SDYGQcjs.DailyFocusOrderByWithRelationInputSchema.array(), _chunkVB5SDYGQcjs.DailyFocusOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkCUJGY6WBcjs.DailyFocusWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkRMHWQG5Ocjs.DailyFocusScalarFieldEnumSchema, _chunkRMHWQG5Ocjs.DailyFocusScalarFieldEnumSchema.array()]).optional()
}).strict();
var DailyFocusFindFirstArgsSchema_default = DailyFocusFindFirstArgsSchema;





exports.DailyFocusSelectSchema = DailyFocusSelectSchema; exports.DailyFocusFindFirstArgsSchema = DailyFocusFindFirstArgsSchema; exports.DailyFocusFindFirstArgsSchema_default = DailyFocusFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-5JATN6MB.cjs.map