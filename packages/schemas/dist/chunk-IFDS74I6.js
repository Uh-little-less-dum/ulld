import {
  BibEntryFindManyArgsSchema,
  CitationsGroupIncludeSchema
} from "./chunk-JV52BDQC.js";
import {
  CitationsGroupCountOutputTypeArgsSchema
} from "./chunk-LZDVJHQX.js";
import {
  CitationsGroupOrderByWithRelationInputSchema
} from "./chunk-BGPJ5GX2.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-GY5DALUC.js";
import {
  CitationsGroupScalarFieldEnumSchema
} from "./chunk-NYWQP4PE.js";
import {
  CitationsGroupWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/CitationsGroupFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var CitationsGroupSelectSchema = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupFindFirstOrThrowArgsSchema = z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: CitationsGroupIncludeSchema.optional(),
  where: CitationsGroupWhereInputSchema.optional(),
  orderBy: z.union([CitationsGroupOrderByWithRelationInputSchema.array(), CitationsGroupOrderByWithRelationInputSchema]).optional(),
  cursor: CitationsGroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([CitationsGroupScalarFieldEnumSchema, CitationsGroupScalarFieldEnumSchema.array()]).optional()
}).strict();
var CitationsGroupFindFirstOrThrowArgsSchema_default = CitationsGroupFindFirstOrThrowArgsSchema;

export {
  CitationsGroupSelectSchema,
  CitationsGroupFindFirstOrThrowArgsSchema,
  CitationsGroupFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-IFDS74I6.js.map