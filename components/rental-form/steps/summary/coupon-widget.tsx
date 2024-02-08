"use client";

import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/ui/custom-input";
import { ChevronDown, ChevronUp, Percent } from "lucide-react";
import { ElementRef, useEffect, useRef, useState } from "react";

const CouponWidget = () => {
  const inputRef = useRef<ElementRef<"input">>(null);

  const [open, setOpen] = useState(false);

  const Icon = open ? ChevronUp : ChevronDown;

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  return (
    <div className="rounded-lg bg-inherit lg:bg-border">
      <div className="lg:px-4 lg:py-4 lg:pb-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-6 aspect-square p-1 rounded-full border-2 flex items-center justify-center border-muted-foreground">
              <Percent className="w-3 h-3 text-muted-foreground" />
            </div>
            <span className="text-muted-foreground font-semibold">
              Apply Coupon
            </span>
          </div>
          <Icon
            className=" w-4 h-4 text-muted-foreground cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        {open && (
          <div className="flex items-center justify-between gap-6">
            <CustomInput
              placeholder="Enter coupon code"
              className="bg-inherit border-b-wnr-purple/50"
              ref={inputRef}
            />
            <Button variant={"wnrPurple"}>Apply</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CouponWidget;
