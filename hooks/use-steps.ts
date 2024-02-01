"use client";

import { create } from "zustand";

interface UseStepsProps {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
}

const useSteps = create<UseStepsProps>((set) => ({
  currentStep: 0,
  nextStep: () =>
    set((state) => ({ ...state, currentStep: state.currentStep + 1 })),
  prevStep: () =>
    set((state) => ({ ...state, currentStep: state.currentStep - 1 })),
}));

export default useSteps;
