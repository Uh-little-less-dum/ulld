"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXG4JZKGDcjs = require('./chunk-XG4JZKGD.cjs');


var _chunkPF6MTGUHcjs = require('./chunk-PF6MTGUH.cjs');


var _chunkKDIXAJ23cjs = require('./chunk-KDIXAJ23.cjs');


var _chunkXLAXCJDHcjs = require('./chunk-XLAXCJDH.cjs');


var _chunkFSP2XQSCcjs = require('./chunk-FSP2XQSC.cjs');

// src/database/inputTypeSchemas/TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkKDIXAJ23cjs.TimePeriodCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkKDIXAJ23cjs.TimePeriodCreateWithoutDietInputSchema).array(), _zod.z.lazy(() => _chunkXLAXCJDHcjs.TimePeriodUncheckedCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkXLAXCJDHcjs.TimePeriodUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkPF6MTGUHcjs.TimePeriodCreateOrConnectWithoutDietInputSchema), _zod.z.lazy(() => _chunkPF6MTGUHcjs.TimePeriodCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkXG4JZKGDcjs.TimePeriodCreateManyDietInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema), _zod.z.lazy(() => _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema).array()]).optional()
}).strict();
var TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema_default = TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema;




exports.TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema = TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema; exports.TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema_default = TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-6B2EZ4UU.cjs.map