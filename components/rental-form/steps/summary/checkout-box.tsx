"use client";

import useScreen from "@/hooks/useScreen";
import CouponWidget from "./coupon-widget";
import PhotocopyWidget from "./photocopy-widget";
import { DesktopPreviewWidget } from "./preview-widget";
import { usePhotocopy } from "@/hooks/use-store-hooks";

const CheckoutBox = () => {
  const { isDesktop } = useScreen();
  const { photocopy } = usePhotocopy();
  const totalValue = photocopy ? "₹949" : "₹699";
  return (
    <section className="w-full max-w-sm flex flex-col lg:flex-col-reverse gap-4">
      {/* // Coupon Widget */}
      <CouponWidget />

      <div className="rounded-lg bg-inherit lg:bg-wnr-purple/15">
        <div className="p-0 lg:p-4">
          {/* // Total Amount */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-muted-foreground">
                Total Amount
              </span>
              <span className="font-bold text-xl">{totalValue}</span>
            </div>

            <div className="space-y-4">
              {isDesktop && <DesktopPreviewWidget />}
              <PhotocopyWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutBox;
