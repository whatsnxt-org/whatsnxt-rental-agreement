import useFormStore from "@/store/form-store";

export const useStore = useFormStore;
export const useSteps = () => useStore((state) => state.steps);
export const useBasicDetails = () => useStore((state) => state.basicDetails);
export const useLandlordDetails = () =>
  useStore((state) => state.landlordDetails);
