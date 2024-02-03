"use client";

import { create } from "zustand";
import basicDetailsStore, { TBasicDetailsStore } from "./basic-details-store";
import stepsStore, { StepsStore } from "./steps-store";
import landlordDetailsStore, {
  LandlordDetails,
} from "./landlord-details-store";
import tenantDetailsStore, { TenantDetails } from "./tenant-details-store";

export type FormStore = {
  steps: StepsStore;
  basicDetails: TBasicDetailsStore;
  landlordDetails: LandlordDetails;
  tenantDetails: TenantDetails;
};

export type TSet = (
  partial:
    | FormStore
    | Partial<FormStore>
    | ((state: FormStore) => FormStore | Partial<FormStore>),
  replace?: boolean | undefined
) => void;

const useFormStore = create<FormStore>((set) => ({
  steps: stepsStore(set),
  basicDetails: basicDetailsStore(set),
  landlordDetails: landlordDetailsStore(set),
  tenantDetails: tenantDetailsStore(set),
}));

export default useFormStore;
