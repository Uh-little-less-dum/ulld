import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const EquationCreatevariablesInputSchema: z.ZodType<Prisma.EquationCreatevariablesInput> = z.object({
  set: z.string().array()
}).strict();
export default EquationCreatevariablesInputSchema;