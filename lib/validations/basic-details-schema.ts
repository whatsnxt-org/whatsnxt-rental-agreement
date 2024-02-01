import { z } from "zod";
import { requiredStringSchema } from "./shared";
import { RentType } from "@/hooks/use-form-data";

export const basicDetailsSchema = z.object({
  fullname: z.string().min(1, "Required"),
  email: z.string().email("Invalid Email Format"),
  phoneNo: z.coerce.string(),
  city: requiredStringSchema,
  state: requiredStringSchema,
  type: z.nativeEnum(RentType),
});

export type BasicDetailsSchema = z.infer<typeof basicDetailsSchema>;
