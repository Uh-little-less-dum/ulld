import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbCreatecitationsListOrderInputSchema } from './IpynbCreatecitationsListOrderInputSchema.js';
import { IpynbCreateimportantValuesInputSchema } from './IpynbCreateimportantValuesInputSchema.js';
import { IpynbCreateoutgoingQuickLinksInputSchema } from './IpynbCreateoutgoingQuickLinksInputSchema.js';
import { TagUncheckedCreateNestedManyWithoutIpynbNotesInputSchema } from './TagUncheckedCreateNestedManyWithoutIpynbNotesInputSchema.js';
import { TopicUncheckedCreateNestedManyWithoutIpynbNotesInputSchema } from './TopicUncheckedCreateNestedManyWithoutIpynbNotesInputSchema.js';
import { SubjectUncheckedCreateNestedManyWithoutIpynbNotesInputSchema } from './SubjectUncheckedCreateNestedManyWithoutIpynbNotesInputSchema.js';
import { BibEntryUncheckedCreateNestedManyWithoutIpynbNotesInputSchema } from './BibEntryUncheckedCreateNestedManyWithoutIpynbNotesInputSchema.js';
import { ReadingListUncheckedCreateNestedManyWithoutIpynbNotesInputSchema } from './ReadingListUncheckedCreateNestedManyWithoutIpynbNotesInputSchema.js';
export const IpynbUncheckedCreateWithoutSequentialListInputSchema: z.ZodType<Prisma.IpynbUncheckedCreateWithoutSequentialListInput> = z.object({
  id: z.number().int().optional(),
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
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  citations: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  readingList: z.lazy(() => ReadingListUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional()
}).strict();
export default IpynbUncheckedCreateWithoutSequentialListInputSchema;