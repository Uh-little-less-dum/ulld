import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateNestedManyWithoutQAPairInputSchema } from './TagCreateNestedManyWithoutQAPairInputSchema';
import { TopicCreateNestedManyWithoutQAPairInputSchema } from './TopicCreateNestedManyWithoutQAPairInputSchema';
import { PracticeExamCreateNestedManyWithoutQuestionsInputSchema } from './PracticeExamCreateNestedManyWithoutQuestionsInputSchema';

export const QAPairCreateWithoutSubjectsInputSchema: z.ZodType<Prisma.QAPairCreateWithoutSubjectsInput> = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  description: z.string().optional().nullable(),
  secondaryLabel: z.string().optional().nullable(),
  correctCount: z.number().int().optional(),
  inCorrectCount: z.number().int().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutQAPairInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutQAPairInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutQuestionsInputSchema).optional()
}).strict();

export default QAPairCreateWithoutSubjectsInputSchema;