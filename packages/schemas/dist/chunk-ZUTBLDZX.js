import {
  WhiteboardOrderByWithRelationInputSchema
} from "./chunk-XZRW5BDB.js";
import {
  WhiteboardScalarFieldEnumSchema
} from "./chunk-GX5DG2BL.js";
import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-AJO3CL4P.js";
import {
  WhiteboardWhereInputSchema
} from "./chunk-ZAT5W63Y.js";

// src/database/outputTypeSchemas/WhiteboardFindFirstArgsSchema.ts
import { z } from "zod";
var WhiteboardSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var WhiteboardFindFirstArgsSchema = z.object({
  select: WhiteboardSelectSchema.optional(),
  where: WhiteboardWhereInputSchema.optional(),
  orderBy: z.union([WhiteboardOrderByWithRelationInputSchema.array(), WhiteboardOrderByWithRelationInputSchema]).optional(),
  cursor: WhiteboardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([WhiteboardScalarFieldEnumSchema, WhiteboardScalarFieldEnumSchema.array()]).optional()
}).strict();
var WhiteboardFindFirstArgsSchema_default = WhiteboardFindFirstArgsSchema;

export {
  WhiteboardSelectSchema,
  WhiteboardFindFirstArgsSchema,
  WhiteboardFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-ZUTBLDZX.js.map