import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { RelatedValuesWhereUniqueInputSchema } from './RelatedValuesWhereUniqueInputSchema.js';
import { RelatedValuesCreateWithoutEquationsInputSchema } from './RelatedValuesCreateWithoutEquationsInputSchema.js';
import { RelatedValuesUncheckedCreateWithoutEquationsInputSchema } from './RelatedValuesUncheckedCreateWithoutEquationsInputSchema.js';
export const RelatedValuesCreateOrConnectWithoutEquationsInputSchema: z.ZodType<Prisma.RelatedValuesCreateOrConnectWithoutEquationsInput> = z.object({
  where: z.lazy(() => RelatedValuesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema),z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();
export default RelatedValuesCreateOrConnectWithoutEquationsInputSchema;