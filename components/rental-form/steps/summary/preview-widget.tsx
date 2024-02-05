"use client";

import miniAgreementSample from "@/assets/agreement-desktop-sample.svg";
import agreementSample from "@/assets/agreement-sample.png";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const DesktopPreviewWidget = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="p-4">
        <div className="flex gap-4">
          <Image src={miniAgreementSample} alt="rupee" />

          {/* // Content */}
          <div className="flex flex-col ">
            <div className="flex items-center justify-between text-wnr-purple ">
              <span className="font-semibold">Preview Agreement</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <p className="text-muted-foreground text-sm">
              See how your agreement is going to look like in reality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MobilePreviewWidget = () => {
  return (
    <div className="space-y-4">
      <Image src={agreementSample} alt="Rupee" className="w-full h-auto" />
      <Button variant={"wnrPurple"} className="w-full">
        View Agreement
      </Button>
    </div>
  );
};
