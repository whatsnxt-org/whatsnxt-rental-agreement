"use client";

import { ContractDetailsSchema } from "@/lib/validations/contract-details-schema";
import { TSet } from "./form-store";

export type ContractDetails = ContractDetailsSchema & {
  updateForm: (data: Partial<ContractDetailsSchema>) => void;
  addClause: () => void;
};

const defaultContractDetails = {
  startDate: new Date(),
  monthlyRent: "",
  tenantCharges: false,
  state: "",
  securityAmount: "",
  increaseRent: false,
  increaseRentPercentage: "",
  clauses: [{ text: "" }],
};

const contractDetailsStore = (set: TSet) => ({
  ...defaultContractDetails,
  updateForm: (data: Partial<ContractDetailsSchema>) =>
    set((prev) => ({
      ...prev,
      contractDetails: { ...prev.contractDetails, ...data },
    })),

  addClause: () =>
    set((prev) => ({
      ...prev,
      contractDetails: {
        ...prev.contractDetails,
        clauses: [...prev.contractDetails.clauses, { text: "" }],
      },
    })),
});

export default contractDetailsStore;
