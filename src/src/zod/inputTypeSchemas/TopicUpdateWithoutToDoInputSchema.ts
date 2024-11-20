import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MdxNoteUpdateManyWithoutTopicsNestedInputSchema } from './MdxNoteUpdateManyWithoutTopicsNestedInputSchema';
import { IpynbUpdateManyWithoutTopicsNestedInputSchema } from './IpynbUpdateManyWithoutTopicsNestedInputSchema';
import { QAPairUpdateManyWithoutTopicsNestedInputSchema } from './QAPairUpdateManyWithoutTopicsNestedInputSchema';
import { PracticeExamUpdateManyWithoutTopicsNestedInputSchema } from './PracticeExamUpdateManyWithoutTopicsNestedInputSchema';
import { KanbanUpdateOneWithoutTopicsNestedInputSchema } from './KanbanUpdateOneWithoutTopicsNestedInputSchema';
import { ToDoListUpdateManyWithoutTopicsNestedInputSchema } from './ToDoListUpdateManyWithoutTopicsNestedInputSchema';
import { BibEntryUpdateManyWithoutTopicsNestedInputSchema } from './BibEntryUpdateManyWithoutTopicsNestedInputSchema';
import { EquationUpdateManyWithoutTopicsNestedInputSchema } from './EquationUpdateManyWithoutTopicsNestedInputSchema';

export const TopicUpdateWithoutToDoInputSchema: z.ZodType<Prisma.TopicUpdateWithoutToDoInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutTopicsNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUpdateManyWithoutTopicsNestedInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUpdateManyWithoutTopicsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUpdateManyWithoutTopicsNestedInputSchema).optional(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutTopicsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUpdateManyWithoutTopicsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUpdateManyWithoutTopicsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutTopicsNestedInputSchema).optional()
}).strict();

export default TopicUpdateWithoutToDoInputSchema;