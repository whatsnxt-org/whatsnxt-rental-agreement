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
  .refine(
    (schema) => (schema.sameLandlordAddress ? true : schema.houseNo !== ""),
    { message: "Required", path: ["houseNo"] }
  )
  .refine(
    (schema) => (schema.sameLandlordAddress ? true : schema.address !== ""),
    { message: "Required", path: ["address"] }
  )
  .refine(
    (schema) => (schema.sameLandlordAddress ? true : schema.locality !== ""),
    { message: "Required", path: ["locality"] }
  )
  .refine(
    (schema) => (schema.sameLandlordAddress ? true : schema.pincode !== ""),
    { message: "Required", path: ["pincode"] }
  )
  .refine(
    (schema) => (schema.sameLandlordAddress ? true : schema.city !== ""),
    { message: "Required", path: ["city"] }
  );

export type PropertyDetailsSchema = z.infer<typeof propertyDetailsSchema>;
