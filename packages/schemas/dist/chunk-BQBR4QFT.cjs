"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkG2MANDRCcjs = require('./chunk-G2MANDRC.cjs');


var _chunkITJOPFCNcjs = require('./chunk-ITJOPFCN.cjs');











var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkJJWTT57Icjs = require('./chunk-JJWTT57I.cjs');


var _chunkIUZEYFDJcjs = require('./chunk-IUZEYFDJ.cjs');

// src/database/outputTypeSchemas/TagUpdateArgsSchema.ts
var _zod = require('zod');
var TagSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  kanbanId: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  MdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  bibEntries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  ipynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.IpynbFindManyArgsSchema)]).optional(),
  QAPair: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.QAPairFindManyArgsSchema)]).optional(),
  practiceExam: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.PracticeExamFindManyArgsSchema)]).optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.EquationFindManyArgsSchema)]).optional(),
  toDo: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ToDoFindManyArgsSchema)]).optional(),
  Kanban: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanbanArgsSchema)]).optional(),
  todoList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ToDoListFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkIUZEYFDJcjs.TagCountOutputTypeArgsSchema)]).optional()
}).strict();
var TagUpdateArgsSchema = _zod.z.object({
  select: TagSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.TagIncludeSchema.optional(),
  data: _zod.z.union([_chunkITJOPFCNcjs.TagUpdateInputSchema, _chunkG2MANDRCcjs.TagUncheckedUpdateInputSchema]),
  where: _chunkJJWTT57Icjs.TagWhereUniqueInputSchema
}).strict();
var TagUpdateArgsSchema_default = TagUpdateArgsSchema;





exports.TagSelectSchema = TagSelectSchema; exports.TagUpdateArgsSchema = TagUpdateArgsSchema; exports.TagUpdateArgsSchema_default = TagUpdateArgsSchema_default;
//# sourceMappingURL=chunk-BQBR4QFT.cjs.map