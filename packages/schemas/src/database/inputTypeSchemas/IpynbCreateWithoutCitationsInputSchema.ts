import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbCreatecitationsListOrderInputSchema } from './IpynbCreatecitationsListOrderInputSchema.js';
import { IpynbCreateimportantValuesInputSchema } from './IpynbCreateimportantValuesInputSchema.js';
import { IpynbCreateoutgoingQuickLinksInputSchema } from './IpynbCreateoutgoingQuickLinksInputSchema.js';
import { TagCreateNestedManyWithoutIpynbNotesInputSchema } from './TagCreateNestedManyWithoutIpynbNotesInputSchema.js';
import { TopicCreateNestedManyWithoutIpynbNotesInputSchema } from './TopicCreateNestedManyWithoutIpynbNotesInputSchema.js';
import { SubjectCreateNestedManyWithoutIpynbNotesInputSchema } from './SubjectCreateNestedManyWithoutIpynbNotesInputSchema.js';
import { SequentialNoteListCreateNestedOneWithoutIpynbInputSchema } from './SequentialNoteListCreateNestedOneWithoutIpynbInputSchema.js';
import { ReadingListCreateNestedManyWithoutIpynbNotesInputSchema } from './ReadingListCreateNestedManyWithoutIpynbNotesInputSchema.js';
export const IpynbCreateWithoutCitationsInputSchema: z.ZodType<Prisma.IpynbCreateWithoutCitationsInput> = z.object({
  rootRelativePath: z.string(),
  isProtected: z.boolean().optional().nullable(),
  title: z.string(),
  latexTitle: z.string().optional().nullable(),
  citationsListOrder: z.union([ z.lazy(() => IpynbCreatecitationsListOrderInputSchema),z.string().array() ]).optional(),
  importantValues: z.union([ z.lazy(() => IpynbCreateimportantValuesInputSchema),z.number().array() ]).optional(),
  href: z.string(),
  outgoingQuickLinks: z.union([ z.lazy(() => IpynbCreateoutgoingQuickLinksInputSchema),z.string().array() ]).optional(),
  raw: z.instanceof(Buffer),
  sequentialIndex: z.number().int().optional().nullable(),
  bookmarked: z.boolean().optional(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  sequentialList: z.lazy(() => SequentialNoteListCreateNestedOneWithoutIpynbInputSchema).optional(),
  readingList: z.lazy(() => ReadingListCreateNestedManyWithoutIpynbNotesInputSchema).optional()
}).strict();
export default IpynbCreateWithoutCitationsInputSchema;