"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunkZSO5RIVNcjs = require('./chunk-ZSO5RIVN.cjs');


var _chunkPCMP4RYYcjs = require('./chunk-PCMP4RYY.cjs');


var _chunkQURZBTO7cjs = require('./chunk-QURZBTO7.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunk46TJSZ52cjs = require('./chunk-46TJSZ52.cjs');


var _chunkPALRL6S5cjs = require('./chunk-PALRL6S5.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/ToDoUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var ToDoUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  task: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  dueAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunkQURZBTO7cjs.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  parentId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunk46TJSZ52cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema), _zod.z.lazy(() => _chunkZSO5RIVNcjs.NullableEnumTaskCategoryFieldUpdateOperationsInputSchema)]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  status: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  priority: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  toDoListId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunk46TJSZ52cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  completedOn: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunkQURZBTO7cjs.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  associatedNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.MdxNoteUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk642YCHOVcjs.TagUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk642YCHOVcjs.TopicUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk642YCHOVcjs.SubjectUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  child: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoUncheckedUpdateManyWithoutParentNestedInputSchema).optional()
}).strict();
var ToDoUncheckedUpdateInputSchema_default = ToDoUncheckedUpdateInputSchema;




exports.ToDoUncheckedUpdateInputSchema = ToDoUncheckedUpdateInputSchema; exports.ToDoUncheckedUpdateInputSchema_default = ToDoUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-5EXBJ3NH.cjs.map