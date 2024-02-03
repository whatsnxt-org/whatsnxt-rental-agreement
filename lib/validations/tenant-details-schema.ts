import { z } from "zod";
import {
  requiredEmailSchema,
  requiredPhoneNoSchema,
  requiredStringSchema,
} from "./shared";

export const tenantSchema = z.object({
  fullname: requiredStringSchema,
  parentName: requiredStringSchema,
  email: requiredEmailSchema,
  phoneNo: requiredPhoneNoSchema,
  permenantAddress: requiredStringSchema,
  panNo: z.string().optional(),
});
export type TenantSchema = z.infer<typeof tenantSchema>;
