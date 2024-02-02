import type { ReactNode } from "react";
import FormDesktopAsideMenu from "@/components/rental-form/form-desktop-aside-menu";

const DesktopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex">
      <FormDesktopAsideMenu />

      <div className="relative min-h-screen w-full">
        <section className="absolute h-[90%] top-6 w-full">{children}</section>
      </div>
    </main>
  );
};

export default DesktopLayout;
