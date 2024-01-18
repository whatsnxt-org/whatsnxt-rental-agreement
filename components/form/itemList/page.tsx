import { FaBed, FaLightbulb } from "react-icons/fa6";
import { GiComputerFan, GiTable, GiWoodenChair } from "react-icons/gi";

export const ItemList = ({ stepForward }: { stepForward: Function }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    stepForward()
  };
  return <form
    onSubmit={handleSubmit}
    className="w-full h-full justify-around flex flex-col gap-5"
  >
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium md:hidden">Item List</h2>
      <p className="text-sm text-slate-500">
        Add Fittings and Furnishings (Optional)
      </p>
      <div className="flex flex-col gap-6">
        <div className="w-full flex justify-between">
          <div className="flex gap-2 items-center">
            <GiComputerFan />
            <p className="text-sm font-semibold">Fans</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-wnr-purple text-lg bg-slate-100 p-2 pl-5 pr-5 rounded-xl border-none">
              -
            </button>
            <p className="text-xs font-semibold">1</p>
            <button className="text-wnr-purple text-lg bg-slate-100 p-2 pl-5 pr-5 rounded-xl border-none">
              +
            </button>
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div className="flex gap-2 items-center">
            <FaLightbulb/>
            <p className="text-sm font-semibold">Fans</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-wnr-purple text-lg bg-slate-100 p-2 pl-5 pr-5 rounded-xl border-none">
              -
            </button>
            <p className="text-xs font-semibold">1</p>
            <button className="text-wnr-purple text-lg bg-slate-100 p-2 pl-5 pr-5 rounded-xl border-none">
              +
            </button>
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div className="flex gap-2 items-center">
            <FaBed />
            <p className="text-sm font-semibold">Light bulb / tube</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-wnr-purple text-lg bg-slate-100 p-2 pl-5 pr-5 rounded-xl border-none">
              -
            </button>
            <p className="text-xs font-semibold">1</p>
            <button className="text-wnr-purple text-lg bg-slate-100 p-2 pl-5 pr-5 rounded-xl border-none">
              +
            </button>
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div className="flex gap-2 items-center">
            <GiTable />
            <p className="text-sm font-semibold">Bed</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-wnr-purple text-lg bg-slate-100 p-2 pl-5 pr-5 rounded-xl border-none">
              -
            </button>
            <p className="text-xs font-semibold">1</p>
            <button className="text-wnr-purple text-lg bg-slate-100 p-2 pl-5 pr-5 rounded-xl border-none">
              +
            </button>
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div className="flex gap-2 items-center">
            <GiWoodenChair />
            <p className="text-sm font-semibold">Chair</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-wnr-purple text-lg bg-slate-100 p-2 pl-5 pr-5 rounded-xl border-none">
              -
            </button>
            <p className="text-xs font-semibold">1</p>
            <button className="text-wnr-purple text-lg bg-slate-100 p-2 pl-5 pr-5 rounded-xl border-none">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col gap-4">
      <button
        onClick={handleSubmit}
        className="bg-wnr-light-green w-full text-sm rounded-lg p-4 text-white font-bold"
      >
        Skip & Next
      </button>
      <p className="text-xs text-gray">
        By continuing, I agree to get updates on WhatsApp
      </p>
    </div>
  </form> 
    
    
}