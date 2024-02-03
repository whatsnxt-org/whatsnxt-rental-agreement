"use client";

import { LandLordSchema } from "@/lib/validations/landlord-details-schema";
import { TSet } from "./form-store";

export type LandlordDetails = {
  landlords: LandLordSchema[];
  updateForm: LandlordDetailsUpdate;
  addOwner: () => void;
};

type LandlordDetailsUpdate = (
  index: number,
  landlords: Partial<LandLordSchema>
) => void;

const defaultLandlord = {
  fullname: "",
  parentName: "",
  phoneNo: "",
  permenantAddress: "",
  email: "",
  panNo: "",
};

const landlordDetailsStore = (set: TSet) => ({
  landlords: [defaultLandlord],
  updateForm: (index: number, landlord: Partial<LandLordSchema>) =>
    set((prev) => {
      const newLandlords = [...prev.landlordDetails.landlords];
      newLandlords[index] = { ...newLandlords[index], ...landlord };
      return {
        ...prev,
        landlordDetails: { ...prev.landlordDetails, landlords: newLandlords },
      };
    }),

  addOwner: () => {
    console.log("add owner");
    set((prev) => ({
      ...prev,
      landlordDetails: {
        ...prev.landlordDetails,
        landlords: [...prev.landlordDetails.landlords, defaultLandlord],
      },
    }));
  },
});

export default landlordDetailsStore;
