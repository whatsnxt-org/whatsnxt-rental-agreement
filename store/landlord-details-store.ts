"use client";

import { LandLordSchema } from "@/lib/validations/landlord-details-schema";
import { TSet } from "./form-store";

export type LandlordDetails = {
  landlords: LandLordSchema[];
  updateForm: LandlordDetailsUpdate;
  reset: () => void;
  addOwner: () => void;
  removeOwner: (index: number) => void;
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

const landlordDetailsStore = (set: TSet): LandlordDetails => ({
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
