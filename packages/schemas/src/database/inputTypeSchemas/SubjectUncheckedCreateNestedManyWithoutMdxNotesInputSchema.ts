import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectCreateWithoutMdxNotesInputSchema } from './SubjectCreateWithoutMdxNotesInputSchema.js';
import { SubjectUncheckedCreateWithoutMdxNotesInputSchema } from './SubjectUncheckedCreateWithoutMdxNotesInputSchema.js';
import { SubjectCreateOrConnectWithoutMdxNotesInputSchema } from './SubjectCreateOrConnectWithoutMdxNotesInputSchema.js';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
export const SubjectUncheckedCreateNestedManyWithoutMdxNotesInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateNestedManyWithoutMdxNotesInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutMdxNotesInputSchema),z.lazy(() => SubjectCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default SubjectUncheckedCreateNestedManyWithoutMdxNotesInputSchema;