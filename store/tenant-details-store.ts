"use client";

import { TenantSchema } from "@/lib/validations/tenant-details-schema";
import { TSet } from "./form-store";

export type TenantDetails = {
  tenants: TenantSchema[];
  updateForm: (tenants: TenantSchema[]) => void;
  reset: () => void;
  addTenant: () => void;
  removeTenant: (index: number) => void;
};

export const defaultTenant: TenantSchema = {
  fullname: "",
  parentName: "",
  phoneNo: "",
  permenantAddress: "",
  email: "",
  panNo: "",
};

const tenantDetailsStore = (set: TSet): TenantDetails => ({
  tenants: [defaultTenant],
  updateForm: (tenants: TenantSchema[]) =>
    set((prev) => ({
      ...prev,
      tenantDetails: { ...prev.tenantDetails, tenants },
    })),
  reset: () =>
    set((prev) => ({
      ...prev,
      tenantDetails: { ...prev.tenantDetails, tenants: [defaultTenant] },
    })),

  addTenant: () => {
    set((prev) => ({
      ...prev,
      tenantDetails: {
        ...prev.tenantDetails,
        tenants: [...prev.tenantDetails.tenants, defaultTenant],
      },
    }));
  },

  removeTenant: (index: number) =>
    set((prev) => {
      const newTenantsArr = [...prev.tenantDetails.tenants];
      newTenantsArr.splice(index, 1);
      return {
        ...prev,
        tenantDetails: {
          ...prev.tenantDetails,
          tenants: newTenantsArr,
        },
      };
    }),
});

export default tenantDetailsStore;
