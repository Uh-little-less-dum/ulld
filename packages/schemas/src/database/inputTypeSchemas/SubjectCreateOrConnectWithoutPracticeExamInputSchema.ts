import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectCreateWithoutPracticeExamInputSchema } from './SubjectCreateWithoutPracticeExamInputSchema.js';
import { SubjectUncheckedCreateWithoutPracticeExamInputSchema } from './SubjectUncheckedCreateWithoutPracticeExamInputSchema.js';
export const SubjectCreateOrConnectWithoutPracticeExamInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutPracticeExamInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();
export default SubjectCreateOrConnectWithoutPracticeExamInputSchema;