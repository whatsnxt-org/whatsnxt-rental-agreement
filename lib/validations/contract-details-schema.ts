import { z } from "zod";
import { requiredIntSchema, requiredStringSchema } from "./shared";

export const clauseSchema = z.object({ text: z.string() });
export type ClauseSchema = z.infer<typeof clauseSchema>;

export const contractDetailsSchema = z.object({
  startDate: z.coerce.date(),
  monthlyRent: requiredIntSchema,
  tenantCharges: z.coerce.boolean(),
  state: requiredStringSchema,
  securityAmount: requiredIntSchema,
  increaseRent: z.boolean(),
  increaseRentPercentage: requiredIntSchema.optional(),
  clauses: z.array(clauseSchema),
});

export type ContractDetailsSchema = z.infer<typeof contractDetailsSchema>;
