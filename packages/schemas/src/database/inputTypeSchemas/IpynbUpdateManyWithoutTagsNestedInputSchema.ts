import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbCreateWithoutTagsInputSchema } from './IpynbCreateWithoutTagsInputSchema.js';
import { IpynbUncheckedCreateWithoutTagsInputSchema } from './IpynbUncheckedCreateWithoutTagsInputSchema.js';
import { IpynbCreateOrConnectWithoutTagsInputSchema } from './IpynbCreateOrConnectWithoutTagsInputSchema.js';
import { IpynbUpsertWithWhereUniqueWithoutTagsInputSchema } from './IpynbUpsertWithWhereUniqueWithoutTagsInputSchema.js';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithWhereUniqueWithoutTagsInputSchema } from './IpynbUpdateWithWhereUniqueWithoutTagsInputSchema.js';
import { IpynbUpdateManyWithWhereWithoutTagsInputSchema } from './IpynbUpdateManyWithWhereWithoutTagsInputSchema.js';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema.js';
export const IpynbUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutTagsInputSchema),z.lazy(() => IpynbCreateWithoutTagsInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutTagsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutTagsInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IpynbUpsertWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => IpynbUpsertWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IpynbUpdateWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => IpynbUpdateWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IpynbUpdateManyWithWhereWithoutTagsInputSchema),z.lazy(() => IpynbUpdateManyWithWhereWithoutTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IpynbScalarWhereInputSchema),z.lazy(() => IpynbScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default IpynbUpdateManyWithoutTagsNestedInputSchema;