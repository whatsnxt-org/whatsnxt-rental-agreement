"use client";

import { Button } from "@/components/ui/button";
import { useSteps } from "@/hooks/use-store-hooks";
import useScreen from "@/hooks/useScreen";
import { ArrowLeft } from "lucide-react";
import CheckoutBox from "./checkout-box";
import DetailsSection from "./details-section";
import { MobilePreviewWidget } from "./preview-widget";

const Summary = () => {
  const { prevStep } = useSteps();
  const { isDesktop } = useScreen();

  return (
    <main className={"p-6"}>
      <div className="space-y-4">
        {/* // Header */}
        <header className="flex items-center">
          <Button
            variant={"ghost"}
            size={"icon"}
            type="button"
            className="px-0 w-10 h-10 justify-start rounded-full"
            onClick={prevStep}
          >
            <ArrowLeft />
          </Button>
          <div className="w-full text-center">
            <h1 className="text-2xl font-bold">Summary</h1>
          </div>
        </header>

        <p className="ps-2">Please check your details carefully.</p>

        {!isDesktop && <MobilePreviewWidget />}

        {/* // Details */}
        <div className="pb-12 flex flex-col items-start lg:flex-row gap-4">
          <div className="w-full">
            <DetailsSection />
          </div>

          <CheckoutBox />
        </div>
      </div>
    </main>
  );
};

export default Summary;
