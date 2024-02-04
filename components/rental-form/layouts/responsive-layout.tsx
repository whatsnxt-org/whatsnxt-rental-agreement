"use client";

import useScreen from "@/hooks/useScreen";
import { ReactNode } from "react";
import DesktopLayout from "./desktop-layout";
import MobileLayout from "./mobile-layout";

const ResponsiveLayout = ({ children }: { children: ReactNode }) => {
  const { isDesktop } = useScreen();

  return isDesktop ? (
    <DesktopLayout>{children}</DesktopLayout>
  ) : (
    <MobileLayout>{children}</MobileLayout>
  );
};

export default ResponsiveLayout;
