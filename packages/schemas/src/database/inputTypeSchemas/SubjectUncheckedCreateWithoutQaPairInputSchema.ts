import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema';
import { IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema';
import { PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema';
import { ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema';
import { ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema';
import { BibEntryUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './BibEntryUncheckedCreateNestedManyWithoutSubjectsInputSchema';
import { EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema';

export const SubjectUncheckedCreateWithoutQaPairInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateWithoutQaPairInput> = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  IpynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional()
}).strict();

export default SubjectUncheckedCreateWithoutQaPairInputSchema;