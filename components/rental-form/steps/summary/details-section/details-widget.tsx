"use client";

import type { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

type DetailsWidgetProps = {
  icon: JSX.Element;
  title: string;
  onChange: () => void;
  children: ReactNode;
};
const DetailsWidget = ({
  icon,
  title,
  onChange,
  children,
}: DetailsWidgetProps) => (
  <section className="w-full bg-white rounded-lg border">
    <div className="p-4 space-y-4">
      {/* // header */}
      <div className="flex items-center justify-between">
        {/* // Icon & Title */}
        <div className="flex items-center gap-4 text-sm text-wnr-purple">
          {icon}
          <span className="font-semibold">{title}</span>
        </div>

        {/* // OnChange */}
        <span
          className="font-semibold text-sm text-wnr-purple cursor-pointer"
          onClick={onChange}
        >
          Change
        </span>
      </div>

      <Separator />

      {/* // Body */}
      <div>{children}</div>
    </div>
  </section>
);

export default DetailsWidget;
