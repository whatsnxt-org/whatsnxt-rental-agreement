import { z } from "zod";
import {
  panNoSchema,
  requiredEmailSchema,
  requiredPhoneNoSchema,
  requiredStringSchema,
} from "./shared";
import { isUniqueValue } from "../utils";

export const landlordSchema = z.object({
  fullname: requiredStringSchema,
  parentName: requiredStringSchema,
  email: requiredEmailSchema,
  phoneNo: requiredPhoneNoSchema,
  permenantAddress: requiredStringSchema,
  panNo: panNoSchema,
});
export type LandLordSchema = z.infer<typeof landlordSchema>;

export const landlordsSchema = z.object({
  landlords: z.array(landlordSchema),
});
export type LandlordsSchema = z.infer<typeof landlordsSchema>;
