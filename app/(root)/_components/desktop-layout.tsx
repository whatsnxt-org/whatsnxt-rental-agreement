import { ReactNode } from "react";

const DesktopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex">
      <aside className="min-h-screen w-[600px] bg-primary">
        {/* // aside  menu */}
      </aside>

      <div className="relative min-h-screen w-full">
        <section className="absolute h-[90%] top-6 w-full">{children}</section>
      </div>
    </main>
  );
};

export default DesktopLayout;
