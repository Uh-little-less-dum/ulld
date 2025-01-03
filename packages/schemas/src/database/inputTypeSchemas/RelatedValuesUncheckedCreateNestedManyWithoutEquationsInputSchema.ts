import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { RelatedValuesCreateWithoutEquationsInputSchema } from './RelatedValuesCreateWithoutEquationsInputSchema.js';
import { RelatedValuesUncheckedCreateWithoutEquationsInputSchema } from './RelatedValuesUncheckedCreateWithoutEquationsInputSchema.js';
import { RelatedValuesCreateOrConnectWithoutEquationsInputSchema } from './RelatedValuesCreateOrConnectWithoutEquationsInputSchema.js';
import { RelatedValuesWhereUniqueInputSchema } from './RelatedValuesWhereUniqueInputSchema.js';
export const RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema: z.ZodType<Prisma.RelatedValuesUncheckedCreateNestedManyWithoutEquationsInput> = z.object({
  create: z.union([ z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema),z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema).array(),z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema),z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RelatedValuesCreateOrConnectWithoutEquationsInputSchema),z.lazy(() => RelatedValuesCreateOrConnectWithoutEquationsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RelatedValuesWhereUniqueInputSchema),z.lazy(() => RelatedValuesWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema;