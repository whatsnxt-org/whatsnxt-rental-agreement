"use client";

import { create } from "zustand";
import basicDetailsStore, { TBasicDetailsStore } from "./basic-details-store";
import stepsStore, { StepsStore } from "./steps-store";
import landlordDetailsStore, {
  LandlordDetails,
} from "./landlord-details-store";
import tenantDetailsStore, { TenantDetails } from "./tenant-details-store";
import propertyDetailsStore, {
  PropertyDetails,
} from "./property-details-store";
import contractDetailsStore, {
  ContractDetails,
} from "./contract-details-store";
import itemsListStore, { ItemsListStore } from "./items-list-store";

export type FormStore = {
  steps: StepsStore;
  basicDetails: TBasicDetailsStore;
  landlordDetails: LandlordDetails;
  tenantDetails: TenantDetails;
  propertyDetails: PropertyDetails;
  contractDetails: ContractDetails;
  itemsList: ItemsListStore;
  photocopy: boolean;
  photoCopyValue: number;
  updatePhotocopy: (data: { state: boolean; value: number }) => void;
};

export type TSet = (
  partial:
    | FormStore
    | Partial<FormStore>
    | ((state: FormStore) => FormStore | Partial<FormStore>),
  replace?: boolean | undefined
) => void;

const useFormStore = create<FormStore>((set) => ({
  photocopy: false,
  photoCopyValue: 0,
  updatePhotocopy: ({ state, value }) =>
    set((prev) => ({ ...prev, photocopy: state, photoCopyValue: value })),
  steps: stepsStore(set),
  basicDetails: basicDetailsStore(set),
  landlordDetails: landlordDetailsStore(set),
  tenantDetails: tenantDetailsStore(set),
  propertyDetails: propertyDetailsStore(set),
  contractDetails: contractDetailsStore(set),
  itemsList: itemsListStore(set),
}));

export default useFormStore;
