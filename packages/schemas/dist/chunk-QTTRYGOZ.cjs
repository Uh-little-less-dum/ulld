"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDX2TZXTHcjs = require('./chunk-DX2TZXTH.cjs');

// src/database/inputTypeSchemas/AutoSettingCreateManyInputSchema.ts
var _zod = require('zod');
var AutoSettingCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  type: _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema),
  glob: _zod.z.string(),
  value: _zod.z.string()
}).strict();
var AutoSettingCreateManyInputSchema_default = AutoSettingCreateManyInputSchema;




exports.AutoSettingCreateManyInputSchema = AutoSettingCreateManyInputSchema; exports.AutoSettingCreateManyInputSchema_default = AutoSettingCreateManyInputSchema_default;
//# sourceMappingURL=chunk-QTTRYGOZ.cjs.map