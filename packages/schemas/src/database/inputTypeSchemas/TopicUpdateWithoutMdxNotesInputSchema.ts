import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { IpynbUpdateManyWithoutTopicsNestedInputSchema } from './IpynbUpdateManyWithoutTopicsNestedInputSchema.js';
import { QAPairUpdateManyWithoutTopicsNestedInputSchema } from './QAPairUpdateManyWithoutTopicsNestedInputSchema.js';
import { PracticeExamUpdateManyWithoutTopicsNestedInputSchema } from './PracticeExamUpdateManyWithoutTopicsNestedInputSchema.js';
import { ToDoUpdateManyWithoutTopicsNestedInputSchema } from './ToDoUpdateManyWithoutTopicsNestedInputSchema.js';
import { KanbanUpdateOneWithoutTopicsNestedInputSchema } from './KanbanUpdateOneWithoutTopicsNestedInputSchema.js';
import { ToDoListUpdateManyWithoutTopicsNestedInputSchema } from './ToDoListUpdateManyWithoutTopicsNestedInputSchema.js';
import { BibEntryUpdateManyWithoutTopicsNestedInputSchema } from './BibEntryUpdateManyWithoutTopicsNestedInputSchema.js';
import { EquationUpdateManyWithoutTopicsNestedInputSchema } from './EquationUpdateManyWithoutTopicsNestedInputSchema.js';
export const TopicUpdateWithoutMdxNotesInputSchema: z.ZodType<Prisma.TopicUpdateWithoutMdxNotesInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipynbNotes: z.lazy(() => IpynbUpdateManyWithoutTopicsNestedInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUpdateManyWithoutTopicsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUpdateManyWithoutTopicsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUpdateManyWithoutTopicsNestedInputSchema).optional(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutTopicsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUpdateManyWithoutTopicsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUpdateManyWithoutTopicsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutTopicsNestedInputSchema).optional()
}).strict();
export default TopicUpdateWithoutMdxNotesInputSchema;