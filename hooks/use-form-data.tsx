"use client";

import { create } from "zustand";

export enum RentType {
  Tenant = "Tenant",
  LandLord = "LandLord",
  Agent = "Agent",
}

export type FormInputs = {
  fullname: string;
  phoneNo: string;
  email: string;
  state: string;
  city: string;
  type: RentType;
  stamp: string;
};

export type FormData = FormInputs & {
  updateForm: (data: Partial<FormInputs>) => void;
};

const useFormData = create<FormData>((set) => ({
  city: "",
  email: "",
  fullname: "",
  phoneNo: "",
  state: "",
  type: RentType.Tenant,
  stamp: "₹ 100",
  updateForm: (data) => set((prev) => ({ ...prev, data })),
}));

export default useFormData;
