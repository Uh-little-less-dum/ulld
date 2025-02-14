import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbCreateWithoutSequentialListInputSchema } from './IpynbCreateWithoutSequentialListInputSchema.js';
import { IpynbUncheckedCreateWithoutSequentialListInputSchema } from './IpynbUncheckedCreateWithoutSequentialListInputSchema.js';
export const IpynbCreateOrConnectWithoutSequentialListInputSchema: z.ZodType<Prisma.IpynbCreateOrConnectWithoutSequentialListInput> = z.object({
  where: z.lazy(() => IpynbWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IpynbCreateWithoutSequentialListInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutSequentialListInputSchema) ]),
}).strict();
export default IpynbCreateOrConnectWithoutSequentialListInputSchema;