import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BytesFieldUpdateOperationsInputSchema } from './BytesFieldUpdateOperationsInputSchema';

export const DJTUpdateManyMutationInputSchema: z.ZodType<Prisma.DJTUpdateManyMutationInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.instanceof(Buffer),z.lazy(() => BytesFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default DJTUpdateManyMutationInputSchema;