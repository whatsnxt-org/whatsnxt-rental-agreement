"use client";

import React, { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const FormScrollableArea = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollArea className="w-full h-[calc(100%-9.5rem)] lg:h-[calc(100%-8rem)] overflow-hidden">
      <div className="py-6 lg:py-0 lg:max-w-[480px] mx-auto">{children}</div>
    </ScrollArea>
  );
};

export default FormScrollableArea;
