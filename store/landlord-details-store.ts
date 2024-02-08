"use client";

import { LandLordSchema } from "@/lib/validations/landlord-details-schema";
import { TSet } from "./form-store";

export type LandlordDetails = {
  landlords: LandLordSchema[];
  updateForm: (landlords: LandLordSchema[]) => void;
  reset: () => void;
  addOwner: () => void;
  removeOwner: (index: number) => void;
};

export const defaultLandlord = {
  fullname: "",
  parentName: "",
  phoneNo: "",
  permenantAddress: "",
  email: "",
  panNo: "",
};

const landlordDetailsStore = (set: TSet): LandlordDetails => ({
  landlords: [defaultLandlord],
  updateForm: (landlords: LandLordSchema[]) =>
    set((prev) => ({
      ...prev,
      landlordDetails: { ...prev.landlordDetails, landlords },
    })),
  reset: () =>
    set((prev) => ({
      ...prev,
      landlordDetails: {
        ...prev.landlordDetails,
        landlords: [defaultLandlord],
      },
    })),
  addOwner: () => {
    set((prev) => ({
      ...prev,
      landlordDetails: {
        ...prev.landlordDetails,
        landlords: [...prev.landlordDetails.landlords, defaultLandlord],
      },
    }));
  },

  removeOwner: (index: number) =>
    set((prev) => {
      const newLandlordsArr = [...prev.landlordDetails.landlords];
      newLandlordsArr.splice(index, 1);
      return {
        ...prev,
        landlordDetails: {
          ...prev.landlordDetails,
          landlords: newLandlordsArr,
        },
      };
    }),
});

export default landlordDetailsStore;
