"use client";

import { ReactNode } from "react";

const FormAction = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute h-[3rem] flex items-center bottom-[1.5rem] w-full">
      <div className="w-full max-w-[480px] mx-auto">{children}</div>
    </div>
  );
};

export default FormAction;
