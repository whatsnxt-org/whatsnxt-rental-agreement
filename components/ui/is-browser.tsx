"use client";

import { ReactNode, useEffect, useState } from "react";

const IsBrowser = ({ children }: { children: ReactNode }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) setIsBrowser(true);
  }, []);

  if (!isBrowser) return null;

  return <>{children}</>;
};

export default IsBrowser;
