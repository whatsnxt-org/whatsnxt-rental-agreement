import { z } from "zod";
import { isPositiveInt } from "../utils";
import { requiredStringSchema } from "./shared";

export const propertyDetailsSchema = z.object({
  floor: requiredStringSchema,
  space: requiredStringSchema,
  sameLandlordAddress: z.coerce.boolean(),
  houseNo: requiredStringSchema,
  address: requiredStringSchema,
  locality: requiredStringSchema,
  pincode: z.coerce
    .string()
    .min(6, "Invalid pincode")
    .max(6, "Invalid pincode")
    .refine((value) => isPositiveInt(value), "Invalid pincode"),
  city: z.coerce.string(),
});

export type PropertyDetailsSchema = z.infer<typeof propertyDetailsSchema>;
