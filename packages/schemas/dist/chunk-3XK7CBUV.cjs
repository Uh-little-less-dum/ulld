"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkT67QX5PGcjs = require('./chunk-T67QX5PG.cjs');


var _chunkE6WNRJ6Fcjs = require('./chunk-E6WNRJ6F.cjs');


var _chunkPCMP4RYYcjs = require('./chunk-PCMP4RYY.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunk46TJSZ52cjs = require('./chunk-46TJSZ52.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/DietaryItemUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var DietaryItemUpdateManyMutationInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  barcode: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  gi: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunk46TJSZ52cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  calsPerOz: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkE6WNRJ6Fcjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  glutenFree: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  minimalFructose: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  natural: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  organic: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  impactScore: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DietaryItemUpdateManyMutationInputSchema_default = DietaryItemUpdateManyMutationInputSchema;




exports.DietaryItemUpdateManyMutationInputSchema = DietaryItemUpdateManyMutationInputSchema; exports.DietaryItemUpdateManyMutationInputSchema_default = DietaryItemUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-3XK7CBUV.cjs.map