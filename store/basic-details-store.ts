"use client";

import { TSet } from "./form-store";

export enum RentType {
  Tenant = "Tenant",
  LandLord = "LandLord",
  Agent = "Agent",
}

export type BasicDetailsInputs = {
  fullname: string;
  phoneNo: string;
  email: string;
  state: string;
  city: string;
  type: RentType;
  stamp: string;
};

export type TBasicDetailsStore = BasicDetailsInputs & {
  updateForm: (data: Partial<BasicDetailsInputs>) => void;
};

const basicDetailsStore = (set: TSet) => ({
  city: "",
  email: "",
  fullname: "",
  phoneNo: "",
  state: "",
  type: RentType.LandLord,
  stamp: "₹ 100",
  updateForm: (data: Partial<BasicDetailsInputs>) => {
    set((prev) => ({
      ...prev,
      basicDetails: { ...prev.basicDetails, ...data },
    }));
  },
});

export default basicDetailsStore;
