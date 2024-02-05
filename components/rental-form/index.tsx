"use client";

import { stepsData } from "@/constants/steps-data";
import { useSteps } from "@/hooks/use-store-hooks";
import IsBrowser from "@/components/ui/is-browser";
import ResponsiveLayout from "@/components/rental-form/layouts/responsive-layout";
import Summary from "@/components/rental-form/steps/summary";

const RentalForm = () => {
  const currentStep = useSteps().currentStep;

  const lastStep = currentStep === stepsData.length;
  if (lastStep) return <Summary />;

  const step = stepsData[currentStep].component;
  return (
    <>
      <IsBrowser>
        <ResponsiveLayout>{step}</ResponsiveLayout>
      </IsBrowser>
    </>
  );
};

export default RentalForm;
