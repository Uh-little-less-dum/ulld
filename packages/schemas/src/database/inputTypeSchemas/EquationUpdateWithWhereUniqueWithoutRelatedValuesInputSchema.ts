import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
import { EquationUpdateWithoutRelatedValuesInputSchema } from './EquationUpdateWithoutRelatedValuesInputSchema.js';
import { EquationUncheckedUpdateWithoutRelatedValuesInputSchema } from './EquationUncheckedUpdateWithoutRelatedValuesInputSchema.js';
export const EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema: z.ZodType<Prisma.EquationUpdateWithWhereUniqueWithoutRelatedValuesInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateWithoutRelatedValuesInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutRelatedValuesInputSchema) ]),
}).strict();
export default EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema;