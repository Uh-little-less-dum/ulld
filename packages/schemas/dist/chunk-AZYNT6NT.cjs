"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUBZQMVTYcjs = require('./chunk-UBZQMVTY.cjs');


var _chunk36DIEZ4Ncjs = require('./chunk-36DIEZ4N.cjs');


var _chunkETRZB726cjs = require('./chunk-ETRZB726.cjs');


var _chunkRT3WXQAZcjs = require('./chunk-RT3WXQAZ.cjs');

// src/database/outputTypeSchemas/WhiteboardFindFirstArgsSchema.ts
var _zod = require('zod');
var WhiteboardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var WhiteboardFindFirstArgsSchema = _zod.z.object({
  select: WhiteboardSelectSchema.optional(),
  where: _chunkRT3WXQAZcjs.WhiteboardWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkUBZQMVTYcjs.WhiteboardOrderByWithRelationInputSchema.array(), _chunkUBZQMVTYcjs.WhiteboardOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkETRZB726cjs.WhiteboardWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk36DIEZ4Ncjs.WhiteboardScalarFieldEnumSchema, _chunk36DIEZ4Ncjs.WhiteboardScalarFieldEnumSchema.array()]).optional()
}).strict();
var WhiteboardFindFirstArgsSchema_default = WhiteboardFindFirstArgsSchema;





exports.WhiteboardSelectSchema = WhiteboardSelectSchema; exports.WhiteboardFindFirstArgsSchema = WhiteboardFindFirstArgsSchema; exports.WhiteboardFindFirstArgsSchema_default = WhiteboardFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-AZYNT6NT.cjs.map