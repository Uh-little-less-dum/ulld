"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPCMP4RYYcjs = require('./chunk-PCMP4RYY.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/QuoteUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var QuoteUncheckedUpdateManyInputSchema = _zod.z.object({
  body: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  author: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  source: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  pinned: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var QuoteUncheckedUpdateManyInputSchema_default = QuoteUncheckedUpdateManyInputSchema;




exports.QuoteUncheckedUpdateManyInputSchema = QuoteUncheckedUpdateManyInputSchema; exports.QuoteUncheckedUpdateManyInputSchema_default = QuoteUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-AEVB5URN.cjs.map