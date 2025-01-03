import { z } from 'zod';
import type { TagWithRelations } from './TagSchema.js'
import type { TagPartialWithRelations } from './TagSchema.js'
import type { TopicWithRelations } from './TopicSchema.js'
import type { TopicPartialWithRelations } from './TopicSchema.js'
import type { SubjectWithRelations } from './SubjectSchema.js'
import type { SubjectPartialWithRelations } from './SubjectSchema.js'
import type { PracticeExamWithRelations } from './PracticeExamSchema.js'
import type { PracticeExamPartialWithRelations } from './PracticeExamSchema.js'
import { TagWithRelationsSchema } from './TagSchema.js'
import { TagPartialWithRelationsSchema } from './TagSchema.js'
import { TopicWithRelationsSchema } from './TopicSchema.js'
import { TopicPartialWithRelationsSchema } from './TopicSchema.js'
import { SubjectWithRelationsSchema } from './SubjectSchema.js'
import { SubjectPartialWithRelationsSchema } from './SubjectSchema.js'
import { PracticeExamWithRelationsSchema } from './PracticeExamSchema.js'
import { PracticeExamPartialWithRelationsSchema } from './PracticeExamSchema.js'
/////////////////////////////////////////
// QA PAIR SCHEMA
/////////////////////////////////////////
export const QAPairSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  description: z.string().nullable(),
  secondaryLabel: z.string().nullable(),
  correctCount: z.number().int(),
  inCorrectCount: z.number().int(),
})
export type QAPair = z.infer<typeof QAPairSchema>
/////////////////////////////////////////
// QA PAIR PARTIAL SCHEMA
/////////////////////////////////////////
export const QAPairPartialSchema = QAPairSchema.partial()
export type QAPairPartial = z.infer<typeof QAPairPartialSchema>
/////////////////////////////////////////
// QA PAIR RELATION SCHEMA
/////////////////////////////////////////
export type QAPairRelations = {
  tags: TagWithRelations[];
  topics: TopicWithRelations[];
  subjects: SubjectWithRelations[];
  practiceExam: PracticeExamWithRelations[];
};
export type QAPairWithRelations = z.infer<typeof QAPairSchema> & QAPairRelations
export const QAPairWithRelationsSchema: z.ZodType<QAPairWithRelations> = QAPairSchema.merge(z.object({
  tags: z.lazy(() => TagWithRelationsSchema).array(),
  topics: z.lazy(() => TopicWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
  practiceExam: z.lazy(() => PracticeExamWithRelationsSchema).array(),
}))
/////////////////////////////////////////
// QA PAIR PARTIAL RELATION SCHEMA
/////////////////////////////////////////
export type QAPairPartialRelations = {
  tags?: TagPartialWithRelations[];
  topics?: TopicPartialWithRelations[];
  subjects?: SubjectPartialWithRelations[];
  practiceExam?: PracticeExamPartialWithRelations[];
};
export type QAPairPartialWithRelations = z.infer<typeof QAPairPartialSchema> & QAPairPartialRelations
export const QAPairPartialWithRelationsSchema: z.ZodType<QAPairPartialWithRelations> = QAPairPartialSchema.merge(z.object({
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
})).partial()
export type QAPairWithPartialRelations = z.infer<typeof QAPairSchema> & QAPairPartialRelations
export const QAPairWithPartialRelationsSchema: z.ZodType<QAPairWithPartialRelations> = QAPairSchema.merge(z.object({
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
}).partial())
export default QAPairSchema;