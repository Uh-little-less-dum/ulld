"use strict";Object.defineProperty(exports, "__esModule", {value: true});











var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');

// src/database/inputTypeSchemas/TagWhereUniqueInputSchema.ts
var _zod = require('zod');
var TagWhereUniqueInputSchema = _zod.z.object({
  value: _zod.z.string()
}).and(_zod.z.object({
  value: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.TagWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.TagWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TagWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.TagWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.TagWhereInputSchema).array()]).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteListRelationFilterSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibEntryListRelationFilterSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkUNUMUJ42cjs.IpynbListRelationFilterSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunkUNUMUJ42cjs.QAPairListRelationFilterSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkUNUMUJ42cjs.PracticeExamListRelationFilterSchema).optional(),
  equations: _zod.z.lazy(() => _chunkUNUMUJ42cjs.EquationListRelationFilterSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoListRelationFilterSchema).optional(),
  Kanban: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.KanbanNullableRelationFilterSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanbanWhereInputSchema)]).optional().nullable(),
  todoList: _zod.z.lazy(() => _chunkUNUMUJ42cjs.ToDoListListRelationFilterSchema).optional()
}).strict());
var TagWhereUniqueInputSchema_default = TagWhereUniqueInputSchema;




exports.TagWhereUniqueInputSchema = TagWhereUniqueInputSchema; exports.TagWhereUniqueInputSchema_default = TagWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-JJWTT57I.cjs.map