import { ReactNode } from "react";

const MobileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative bg-primary min-h-screen">
      <header className="pt-20 px-4 space-y-4">
        <h1 className="text-3xl text-white font-semibold">Rent Agreement</h1>
        <p className="text-neutral-100 text-sm max-w-[27ch]">
          Get your rental agreement made with just a click
        </p>
      </header>

      <section className="absolute h-[77%] w-full bg-white rounded-t-[2rem] bottom-0 overflow-hidden">
        {/* // form client component */}
        <div className="relative h-full">{children}</div>
      </section>
    </main>
  );
};

export default MobileLayout;
