import { z } from "zod";
import {
  panNoSchema,
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
  panNo: panNoSchema,
});
export type TenantSchema = z.infer<typeof tenantSchema>;

export const tenantsSchema = z.object({
  tenants: z.array(tenantSchema),
});
export type TenantsSchema = z.infer<typeof tenantsSchema>;
