import useFormStore from "@/store/form-store";

export const useStore = useFormStore;
export const useSteps = () => useStore((state) => state.steps);
export const useBasicDetails = () => useStore((state) => state.basicDetails);
export const useLandlordDetails = () =>
  useStore((state) => state.landlordDetails);
export const useTenantDetails = () => useStore((state) => state.tenantDetails);
export const usePropertyDetails = () =>
  useStore((state) => state.propertyDetails);
export const useContractDetails = () =>
  useStore((state) => state.contractDetails);
export const useItemsList = () => useStore((state) => state.itemsList);
