import { z } from "zod";
import {
  requiredEmailSchema,
  requiredPhoneNoSchema,
  requiredStringSchema,
} from "./shared";
import { RentType } from "@/store/basic-details-store";

export const basicDetailsSchema = z.object({
  fullname: z.string().min(1, "Required"),
  email: requiredEmailSchema,
  phoneNo: requiredPhoneNoSchema,
  city: requiredStringSchema,
  state: requiredStringSchema,
  type: z.nativeEnum(RentType),
  stamp: requiredStringSchema,
});

export type BasicDetailsSchema = z.infer<typeof basicDetailsSchema>;
