import { z } from "zod";

export const propertyDetailsSchema = z
  .object({
    space: z.coerce.string(),
    sameLandlordAddress: z.coerce.boolean(),
    houseNo: z.coerce.string(),
    address: z.coerce.string(),
    locality: z.coerce.string(),
    pincode: z.coerce.string(),
    city: z.coerce.string(),
  })
  .refine((schema) => {
    if (schema.sameLandlordAddress) return true;
    return (
      schema.houseNo !== "" &&
      schema.address !== "" &&
      schema.locality !== "" &&
      schema.pincode !== "" &&
      schema.city !== ""
    );
  });

export type PropertyDetailsSchema = z.infer<typeof propertyDetailsSchema>;
