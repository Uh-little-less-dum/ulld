import {
  BibEntryCreateManyBibInputSchema
} from "./chunk-67EFDVYH.js";

// src/database/inputTypeSchemas/BibEntryCreateManyBibInputEnvelopeSchema.ts
import { z } from "zod";
var BibEntryCreateManyBibInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => BibEntryCreateManyBibInputSchema), z.lazy(() => BibEntryCreateManyBibInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var BibEntryCreateManyBibInputEnvelopeSchema_default = BibEntryCreateManyBibInputEnvelopeSchema;

export {
  BibEntryCreateManyBibInputEnvelopeSchema,
  BibEntryCreateManyBibInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-JRMHY265.js.map