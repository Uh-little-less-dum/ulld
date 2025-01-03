import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { RelatedValuesUpdateManyMutationInputSchema } from '../inputTypeSchemas/RelatedValuesUpdateManyMutationInputSchema.js'
import { RelatedValuesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RelatedValuesUncheckedUpdateManyInputSchema.js'
import { RelatedValuesWhereInputSchema } from '../inputTypeSchemas/RelatedValuesWhereInputSchema.js'
export const RelatedValuesUpdateManyArgsSchema: z.ZodType<Prisma.RelatedValuesUpdateManyArgs> = z.object({
  data: z.union([ RelatedValuesUpdateManyMutationInputSchema,RelatedValuesUncheckedUpdateManyInputSchema ]),
  where: RelatedValuesWhereInputSchema.optional(),
}).strict() ;
export default RelatedValuesUpdateManyArgsSchema;