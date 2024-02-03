"use client";

import { TenantSchema } from "@/lib/validations/tenant-details-schema";
import { TSet } from "./form-store";

export type TenantDetails = TenantSchema & {
  updateForm: (data: TenantSchema) => void;
};

const defaultTenant = {
  fullname: "",
  parentName: "",
  phoneNo: "",
  permenantAddress: "",
  email: "",
  panNo: "",
};

const tenantDetailsStore = (set: TSet) => ({
  ...defaultTenant,
  updateForm: (tenant: Partial<TenantSchema>) =>
    set((prev) => ({
      ...prev,
      tenantDetails: { ...prev.tenantDetails, ...tenant },
    })),
});

export default tenantDetailsStore;
