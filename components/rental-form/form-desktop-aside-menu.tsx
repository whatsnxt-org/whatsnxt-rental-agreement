"use client";

import { Button } from "@/components/ui/button";
import { stepsData } from "@/constants/steps-data";
import { useSteps } from "@/hooks/use-store-hooks";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

const FormDesktopAsideMenu = () => {
  const currentStep = useSteps().currentStep;
  return (
    <aside className="min-h-screen w-[600px] bg-primary">
      <div className="px-8 py-10">
        <div className="flex flex-col h-full">
          {/* X Icon */}
          <div>
            <Button
              size={"icon"}
              variant={"ghost"}
              className="p-0 w-8 h-8 rounded-full bg-emerald-300/75 text-primary font-bold hover:bg-emerald-300/75 focus-visible:bg-emerald-300/75 hover:text-primary focus-visible:text-primary"
            >
              <X />
            </Button>
          </div>

          {/* Title */}
          <div className="py-6 space-y-6">
            <h1 className="text-3xl font-semibold tracking-tight text-white leading-6">
              Rent Agreement
            </h1>

            <p className="text-neutral-100/75 text-lg max-w-[20ch]">
              Get your rental agreement made with just a click
            </p>
          </div>

          {/* Steps */}
          {stepsData.map((step, i) => (
            <div
              className="flex justify-between items-center gap-2 py-4"
              key={step.title.mobile}
            >
              <div className="flex gap-4 items-center">
                <div
                  className={cn(
                    "text-neutral-100/65 w-10 h-10 rounded-full flex items-center justify-center",
                    currentStep === i && "text-neutral-100 border"
                  )}
                >
                  {step.icon}
                </div>
                <span
                  className={cn(
                    "text-neutral-100/65 text-sm font-semibold leading-6",
                    currentStep === i && "text-neutral-100"
                  )}
                >
                  {step.title.mobile}
                </span>
              </div>

              {currentStep > i && <Check className="text-emerald-300" />}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FormDesktopAsideMenu;
