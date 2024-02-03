"use client";

import { PropertyDetailsSchema } from "@/lib/validations/property-details-schema";
import { TSet } from "./form-store";

export type PropertyDetails = PropertyDetailsSchema & {
  updateForm: (data: PropertyDetailsSchema) => void;
};

const defaultProperty = {
  space: "1BHK",
  sameLandlordAddress: false,
  houseNo: "",
  address: "",
  locality: "",
  pincode: "",
  city: "",
};

const propertyDetailsStore = (set: TSet) => ({
  ...defaultProperty,
  updateForm: (property: Partial<PropertyDetailsSchema>) =>
    set((prev) => ({
      ...prev,
      propertyDetails: { ...prev.propertyDetails, ...property },
    })),
});

export default propertyDetailsStore;
