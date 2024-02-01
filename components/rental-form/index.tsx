"use client";

import { stepsData } from "@/constants/steps-data";
import useSteps from "@/hooks/use-steps";

// const steps = [<BasicDetails />];

const RentalForm = () => {
  const currentStep = useSteps((state) => state.currentStep);
  const step = stepsData[currentStep].component;
  return <>{step}</>;
};

export default RentalForm;
