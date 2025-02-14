import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietCreateNestedManyWithoutItemsInputSchema } from './DietCreateNestedManyWithoutItemsInputSchema.js';
import { ServingCreateNestedManyWithoutItemInputSchema } from './ServingCreateNestedManyWithoutItemInputSchema.js';
export const DietaryItemCreateInputSchema: z.ZodType<Prisma.DietaryItemCreateInput> = z.object({
  name: z.string(),
  barcode: z.string().optional().nullable(),
  gi: z.number().int().optional().nullable(),
  calsPerOz: z.number().optional().nullable(),
  glutenFree: z.boolean().optional(),
  minimalFructose: z.boolean().optional(),
  natural: z.boolean().optional(),
  organic: z.boolean().optional(),
  impactScore: z.number().optional(),
  Diet: z.lazy(() => DietCreateNestedManyWithoutItemsInputSchema).optional(),
  Serving: z.lazy(() => ServingCreateNestedManyWithoutItemInputSchema).optional()
}).strict();
export default DietaryItemCreateInputSchema;