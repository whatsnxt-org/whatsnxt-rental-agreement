"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

const ShowDetailsToggler = ({
  show,
  toggleShow,
}: {
  show: boolean;
  toggleShow: (state: boolean) => void;
}) => {
  const Icon = show ? ChevronUp : ChevronDown;

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => toggleShow(!show)}
    >
      <span className="text-wnr-purple">
        {show ? "View less" : "View details"}
      </span>
      <Icon className="w-4 h-4 text-muted-foreground" />
    </div>
  );
};

export default ShowDetailsToggler;
