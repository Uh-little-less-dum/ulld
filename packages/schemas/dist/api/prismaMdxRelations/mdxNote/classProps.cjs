"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkO3XXJGKHcjs = require('../../../chunk-O3XXJGKH.cjs');
require('../../../chunk-EVVC275F.cjs');


var _chunkULOPMKTGcjs = require('../../../chunk-ULOPMKTG.cjs');
require('../../../chunk-RYYQDYYZ.cjs');


var _chunkZVLC4XKLcjs = require('../../../chunk-ZVLC4XKL.cjs');
require('../../../chunk-5WBGMMOX.cjs');
require('../../../chunk-4U2KQM45.cjs');


var _chunkHFGI5CVIcjs = require('../../../chunk-HFGI5CVI.cjs');

// src/api/prismaMdxRelations/mdxNote/classProps.ts
var _zod = require('zod');
var _fsUtils = require('@ulld/utilities/fsUtils');
var _generalPrismaSchemas = require('@ulld/api/generalPrismaSchemas');


var _identity = require('@ulld/utilities/utils/identity');
var mdxNotePropsSchema = _zod.z.object({
  content: _zod.z.string().nullish(),
  id: _zod.z.number().nullish(),
  title: _zod.z.string().nullish(),
  latexTitle: _zod.z.string().nullish(),
  raw: _zod.z.string(),
  floatImages: _zod.z.boolean().default(false),
  formatted: _zod.z.string().nullish(),
  citations: _chunkO3XXJGKHcjs.bibEntryPropsSchema.array().default([]),
  importantValues: _zod.z.number().array().default([]),
  bookmarked: _zod.z.boolean().default(false),
  quickLinkId: _zod.z.string().nullish(),
  href: _zod.z.string().nullish(),
  citationsListOrder: _zod.z.string().array().default([]),
  outgoingQuickLinks: _zod.z.string().array().default([]),
  rootRelativePath: _zod.z.string().nullish().transform((a) => typeof a === "string" ? _fsUtils.withForwardSlash.call(void 0, a) : a),
  equationIds: _zod.z.string().array().default([]),
  isProtected: _zod.z.boolean().nullish().default(false),
  sequentialKey: _zod.z.string().nullish(),
  sequentialIndex: _zod.z.number().nullish(),
  sequentialList: _generalPrismaSchemas.sequentialListPropsSchema.optional(),
  remoteUrl: _zod.z.string().nullish(),
  noLog: _zod.z.boolean().default(true),
  saveFormatted: _zod.z.boolean().default(true),
  noteType: _zod.z.string().transform(_identity.makeValidIdOnlyLetters),
  trackRemote: _zod.z.boolean().default(false),
  toDo: _chunkULOPMKTGcjs.todoTaskZodObject.array().default([]),
  summary: _zod.z.string().nullish(),
  firstSync: _zod.z.union([
    _zod.z.string().datetime().transform((a) => new Date(a)),
    _zod.z.date()
  ]).nullish().transform(_chunkHFGI5CVIcjs.dateTimeStringTransform),
  lastSync: _zod.z.union([
    _zod.z.string().datetime().transform((a) => new Date(a)),
    _zod.z.date()
  ]).nullish().transform(_chunkHFGI5CVIcjs.dateTimeStringTransform)
}).merge(_chunkZVLC4XKLcjs.taggableFields);


exports.mdxNotePropsSchema = mdxNotePropsSchema;
//# sourceMappingURL=classProps.cjs.map