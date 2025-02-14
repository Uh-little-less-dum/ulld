// src/zod/ui/textConfig.ts
import { z } from "zod";
var fontWeightSchema = z.union([
  z.literal("100"),
  z.literal("200"),
  z.literal("300"),
  z.literal("400"),
  z.literal("500"),
  z.literal("600"),
  z.literal("700"),
  z.literal("800"),
  z.literal("900")
]);
var fontStyleSchema = z.union([
  z.literal("italic"),
  z.literal("bold"),
  z.literal("normal")
]);
var fontConfigSchema = z.object({
  path: z.string().describe("Should be an absolute path. As this is only required at build time, it is not necessary for this path to be a child of the fsRoot directory."),
  weight: fontWeightSchema,
  style: fontStyleSchema
});
var fontPathFieldSchema = z.union([
  fontConfigSchema.array(),
  z.literal("default")
  // change this to accept multiple fonts as a string and automate the layout file write accordingly.
]);
var textConfigSchema = z.object({
  blockQuoteItalic: z.boolean().default(false).describe("Whether or not to italicize block quote text."),
  fontPaths: fontPathFieldSchema.default("default").describe("An array of font config objects to be bundled during the build.")
}).default({});
var textConfigSchemaOutput = z.object({
  blockQuoteItalic: z.boolean(),
  fontPaths: fontPathFieldSchema
});

export {
  fontConfigSchema,
  textConfigSchema,
  textConfigSchemaOutput
};
//# sourceMappingURL=chunk-F4OWPLKE.mjs.map