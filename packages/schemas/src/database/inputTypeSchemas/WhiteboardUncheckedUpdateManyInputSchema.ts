import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { BytesFieldUpdateOperationsInputSchema } from './BytesFieldUpdateOperationsInputSchema.js';
export const WhiteboardUncheckedUpdateManyInputSchema: z.ZodType<Prisma.WhiteboardUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.instanceof(Buffer),z.lazy(() => BytesFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();
export default WhiteboardUncheckedUpdateManyInputSchema;