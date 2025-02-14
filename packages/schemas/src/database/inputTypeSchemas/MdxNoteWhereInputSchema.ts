import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema.js';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { StringFilterSchema } from './StringFilterSchema.js';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema.js';
import { FloatNullableListFilterSchema } from './FloatNullableListFilterSchema.js';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema.js';
import { BoolFilterSchema } from './BoolFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema.js';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema.js';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema.js';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema.js';
import { SequentialNoteListNullableRelationFilterSchema } from './SequentialNoteListNullableRelationFilterSchema.js';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema.js';
import { ReadingListListRelationFilterSchema } from './ReadingListListRelationFilterSchema.js';
import { EquationListRelationFilterSchema } from './EquationListRelationFilterSchema.js';
import { DefinitionListRelationFilterSchema } from './DefinitionListRelationFilterSchema.js';
import { ToDoListRelationFilterSchema } from './ToDoListRelationFilterSchema.js';
export const MdxNoteWhereInputSchema: z.ZodType<Prisma.MdxNoteWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MdxNoteWhereInputSchema),z.lazy(() => MdxNoteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MdxNoteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MdxNoteWhereInputSchema),z.lazy(() => MdxNoteWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  isProtected: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  dietSummaryKey: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  latexTitle: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rootRelativePath: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noteType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  formatted: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  summary: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  citationsListOrder: z.lazy(() => StringNullableListFilterSchema).optional(),
  importantValues: z.lazy(() => FloatNullableListFilterSchema).optional(),
  imageSrc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  href: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sequentialKey: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sequentialIndex: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  floatImages: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  remoteUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  trackRemote: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  outgoingQuickLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  quickLink: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  bookmarked: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  firstSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  citations: z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  sequentialList: z.union([ z.lazy(() => SequentialNoteListNullableRelationFilterSchema),z.lazy(() => SequentialNoteListWhereInputSchema) ]).optional().nullable(),
  ReadingList: z.lazy(() => ReadingListListRelationFilterSchema).optional(),
  equations: z.lazy(() => EquationListRelationFilterSchema).optional(),
  definitions: z.lazy(() => DefinitionListRelationFilterSchema).optional(),
  toDo: z.lazy(() => ToDoListRelationFilterSchema).optional()
}).strict();
export default MdxNoteWhereInputSchema;