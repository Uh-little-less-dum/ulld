import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicCreateManyKanbanInputSchema } from './TopicCreateManyKanbanInputSchema.js';
export const TopicCreateManyKanbanInputEnvelopeSchema: z.ZodType<Prisma.TopicCreateManyKanbanInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TopicCreateManyKanbanInputSchema),z.lazy(() => TopicCreateManyKanbanInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();
export default TopicCreateManyKanbanInputEnvelopeSchema;