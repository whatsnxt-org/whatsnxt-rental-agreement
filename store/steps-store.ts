"use client";

import { TSet } from "./form-store";

export type StepsStore = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
};

export const stepsStore = (set: TSet) => ({
  currentStep: 0,
  nextStep: () =>
    set((state) => ({
      ...state,
      steps: { ...state.steps, currentStep: state.steps.currentStep + 1 },
    })),
  prevStep: () =>
    set((state) => ({
      ...state,
      steps: { ...state.steps, currentStep: state.steps.currentStep - 1 },
    })),
});

export default stepsStore;
