"use client";

import miniAgreementSample from "@/assets/agreement-desktop-sample.svg";
import agreementSample from "@/assets/agreement-sample.png";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import PreviewAgreementModal from "../../modals/preview-agreement-modal";

export const DesktopPreviewWidget = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <PreviewAgreementModal isOpen={openModal} onOpenChange={setOpenModal} />
      <div
        className="bg-white rounded-lg cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
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
    </>
  );
};

export const MobilePreviewWidget = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <PreviewAgreementModal isOpen={openDrawer} onOpenChange={setOpenDrawer} />
      <div className="space-y-4">
        <Image src={agreementSample} alt="Rupee" className="w-full h-auto" />
        <Button
          variant={"wnrPurple"}
          className="w-full"
          onClick={() => setOpenDrawer(true)}
        >
          View Agreement
        </Button>
      </div>
    </>
  );
};
