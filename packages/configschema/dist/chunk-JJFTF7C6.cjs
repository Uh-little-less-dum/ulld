"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkO2IRHEV3cjs = require('./chunk-O2IRHEV3.cjs');


var _chunkNLQB6CMGcjs = require('./chunk-NLQB6CMG.cjs');


var _chunk4FERMM63cjs = require('./chunk-4FERMM63.cjs');


var _chunk7FRG3H7Vcjs = require('./chunk-7FRG3H7V.cjs');


var _chunkCBXEQXAZcjs = require('./chunk-CBXEQXAZ.cjs');


var _chunk72Y3KRUFcjs = require('./chunk-72Y3KRUF.cjs');


var _chunkNHF4VEGDcjs = require('./chunk-NHF4VEGD.cjs');


var _chunk55E5WCQQcjs = require('./chunk-55E5WCQQ.cjs');


var _chunkZ4N77LBIcjs = require('./chunk-Z4N77LBI.cjs');


var _chunkUW7M2UHZcjs = require('./chunk-UW7M2UHZ.cjs');


var _chunkAVWYTCDLcjs = require('./chunk-AVWYTCDL.cjs');

// src/developer/main.ts
var _zod = require('zod');
var _transformExportString = require('@ulld/utilities/transformExportString');
var defaultPluginId = "THIS IS AUTOMATICALLY GENERATED. Do not apply this key yourself. It will be overwritten.";
var _developerConfigSchema = _zod.z.object({
  pluginName: _zod.z.string(),
  label: _zod.z.string().describe(
    "For display purposes. Does not need to match npm the way pluginName does."
  ),
  pluginId: _zod.z.string().default(defaultPluginId),
  slot: _chunkNHF4VEGDcjs.slotKeySchema.optional(),
  components: _chunkCBXEQXAZcjs.componentConfigSchema.array().default([]),
  parsers: _chunk4FERMM63cjs.pluginParserMap.default({}),
  additionalImports: _chunkO2IRHEV3cjs.additionalImportsConfigSchema.optional(),
  trpc: _chunkUW7M2UHZcjs.trpcConfigSchema.optional(),
  settings: _chunk55E5WCQQcjs.pluginSettingsSchema.optional(),
  pages: _chunkZ4N77LBIcjs.pluginAdditionalPageSchema.array().default([]),
  events: _chunkNLQB6CMGcjs.pluginEventsSchema.default({}),
  navigationLinks: _chunk7FRG3H7Vcjs.navigationLinkSchema.array().default([]),
  commandPalette: _chunk72Y3KRUFcjs.pluginCommandPaletteSchema.default([]),
  tailwind: _chunkAVWYTCDLcjs.tailwindPluginConfig.default({}),
  documentation: _zod.z.string().optional().describe("An optional export of an mdx file that describes the use of your plugin.").transform(_transformExportString.transformExportStringOptional),
  styles: _zod.z.object({
    root: _zod.z.string().optional().describe("Optional export of a scss file that should be imported to all pages."),
    mdx: _zod.z.string().optional().describe("Optional export of a scss file that should be imported to pages with mdx content only.")
  }).default({})
});
var developerConfigSchema = _developerConfigSchema.transform(
  (data) => {
    if (data.settings && !data.settings.title) {
      data.settings.title = data.pluginName;
    }
    return data;
  }
);
var internalBuildDeveloperConfigSchema = _developerConfigSchema.extend(
  {
    pluginId: _zod.z.string().refine((s) => s !== defaultPluginId)
  }
);






exports.defaultPluginId = defaultPluginId; exports._developerConfigSchema = _developerConfigSchema; exports.developerConfigSchema = developerConfigSchema; exports.internalBuildDeveloperConfigSchema = internalBuildDeveloperConfigSchema;
//# sourceMappingURL=chunk-JJFTF7C6.cjs.map