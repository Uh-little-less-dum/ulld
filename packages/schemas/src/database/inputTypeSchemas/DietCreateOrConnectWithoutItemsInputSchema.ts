import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema.js';
import { DietCreateWithoutItemsInputSchema } from './DietCreateWithoutItemsInputSchema.js';
import { DietUncheckedCreateWithoutItemsInputSchema } from './DietUncheckedCreateWithoutItemsInputSchema.js';
export const DietCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.DietCreateOrConnectWithoutItemsInput> = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DietCreateWithoutItemsInputSchema),z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();
export default DietCreateOrConnectWithoutItemsInputSchema;