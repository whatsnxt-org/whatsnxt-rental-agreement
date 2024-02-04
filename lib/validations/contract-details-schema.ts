import { z } from "zod";
import { requiredIntSchema, requiredStringSchema } from "./shared";
import { isPositiveInt } from "../utils";

export const clauseSchema = z.object({ text: z.string() });
export type ClauseSchema = z.infer<typeof clauseSchema>;

export const contractDetailsSchema = z
  .object({
    startDate: z.coerce.date(),
    monthlyRent: requiredIntSchema,
    tenantCharges: z.coerce.boolean(),
    rentPaymentDate: requiredStringSchema,
    securityAmount: requiredIntSchema,
    noticePeriod: requiredStringSchema,
    increaseRent: z.boolean(),
    increaseRentPercentage: z.string(),
    clauses: z.array(clauseSchema),
  })
  .refine(
    (schema) => {
      if (!schema.increaseRent) return true;
      return isPositiveInt(schema.increaseRentPercentage);
    },
    { message: "Invalid value", path: ["increaseRentPercentage"] }
  );

export type ContractDetailsSchema = z.infer<typeof contractDetailsSchema>;
