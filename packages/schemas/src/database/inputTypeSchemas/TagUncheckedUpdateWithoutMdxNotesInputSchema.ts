import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutTagsNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutTagsNestedInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutTagsNestedInputSchema } from './IpynbUncheckedUpdateManyWithoutTagsNestedInputSchema.js';
import { QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema } from './QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema.js';
import { PracticeExamUncheckedUpdateManyWithoutTagsNestedInputSchema } from './PracticeExamUncheckedUpdateManyWithoutTagsNestedInputSchema.js';
import { EquationUncheckedUpdateManyWithoutTagsNestedInputSchema } from './EquationUncheckedUpdateManyWithoutTagsNestedInputSchema.js';
import { ToDoUncheckedUpdateManyWithoutTagsNestedInputSchema } from './ToDoUncheckedUpdateManyWithoutTagsNestedInputSchema.js';
import { ToDoListUncheckedUpdateManyWithoutTagsNestedInputSchema } from './ToDoListUncheckedUpdateManyWithoutTagsNestedInputSchema.js';
export const TagUncheckedUpdateWithoutMdxNotesInputSchema: z.ZodType<Prisma.TagUncheckedUpdateWithoutMdxNotesInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kanbanId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();
export default TagUncheckedUpdateWithoutMdxNotesInputSchema;