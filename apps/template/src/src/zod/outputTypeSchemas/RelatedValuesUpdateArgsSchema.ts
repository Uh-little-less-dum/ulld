import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RelatedValuesIncludeSchema } from '../inputTypeSchemas/RelatedValuesIncludeSchema'
import { RelatedValuesUpdateInputSchema } from '../inputTypeSchemas/RelatedValuesUpdateInputSchema'
import { RelatedValuesUncheckedUpdateInputSchema } from '../inputTypeSchemas/RelatedValuesUncheckedUpdateInputSchema'
import { RelatedValuesWhereUniqueInputSchema } from '../inputTypeSchemas/RelatedValuesWhereUniqueInputSchema'
import { EquationFindManyArgsSchema } from "../outputTypeSchemas/EquationFindManyArgsSchema"
import { RelatedValuesCountOutputTypeArgsSchema } from "../outputTypeSchemas/RelatedValuesCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RelatedValuesSelectSchema: z.ZodType<Prisma.RelatedValuesSelect> = z.object({
  id: z.boolean().optional(),
  input: z.boolean().optional(),
  output: z.boolean().optional(),
  equationId: z.boolean().optional(),
  equations: z.union([z.boolean(),z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RelatedValuesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RelatedValuesUpdateArgsSchema: z.ZodType<Prisma.RelatedValuesUpdateArgs> = z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: RelatedValuesIncludeSchema.optional(),
  data: z.union([ RelatedValuesUpdateInputSchema,RelatedValuesUncheckedUpdateInputSchema ]),
  where: RelatedValuesWhereUniqueInputSchema,
}).strict() ;

export default RelatedValuesUpdateArgsSchema;