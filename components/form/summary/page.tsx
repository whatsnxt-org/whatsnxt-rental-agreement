import { BsPerson } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { AgreementPreview } from "./agreementPreview/page";
import { useState } from "react";

export const Summary = () => {

  const [openAgreement, setOpenAgreement] = useState(false);

  return (
    <>
    <AgreementPreview
     open={openAgreement}
     onClose={() => setOpenAgreement(false)}
     />
      <h2 className="text-2xl font-medium">Summary</h2>
      <br />
      <div className="w-8/12 xl:w-11/12 flex flex-col justify-center items-center">
        <p className="text-sm text-slate-500 w-full text-left">
          Please check your details carefully
        </p>
        <div className="flex md:flex-col-reverse items-start justify-between md:gap-4 w-full mt-4">
        <button className="bg-wnr-light-green w-full text-sm rounded-lg p-4 text-white font-bold hidden md:flex">
          Confirm Details & Pay ₹699
        </button>
          <div className="w-7/12 lg:w-5/12 md:w-full flex flex-col gap-5">
            <div className="w-full h-auto flex flex-col gap-4 p-4 border border-slate-200 rounded-lg">
              <div className="w-full border-b border-b-slate-200 flex justify-between p-2">
                <div className="flex gap-2 items-center">
                  <BsPerson className="text-wnr-purple" />
                  <p className="text-sm text-wnr-purple">Landlord Details</p>
                </div>
                <button className="text-wnr-purple text-sm font-medium">
                  Change
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <p>Lokesh Sharma</p>
                <button className="flex gap-3 text-xs font-light text-wnr-purple items-center">
                  View Details <IoIosArrowDown fontSize={16} />
                </button>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-4 p-4 border border-slate-200 rounded-lg">
              <div className="w-full border-b border-b-slate-200 flex justify-between p-2">
                <div className="flex gap-2 items-center">
                  <BsPerson className="text-wnr-purple" />
                  <p className="text-sm text-wnr-purple">Landlord Details</p>
                </div>
                <button className="text-wnr-purple text-sm font-medium">
                  Change
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <p>Lokesh Sharma</p>
                <button className="flex gap-3 text-xs font-light text-wnr-purple items-center">
                  View Details <IoIosArrowDown fontSize={16} />
                </button>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-4 p-4 border border-slate-200 rounded-lg">
              <div className="w-full border-b border-b-slate-200 flex justify-between p-2">
                <div className="flex gap-2 items-center">
                  <BsPerson className="text-wnr-purple" />
                  <p className="text-sm text-wnr-purple">Landlord Details</p>
                </div>
                <button className="text-wnr-purple text-sm font-medium">
                  Change
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <p>Lokesh Sharma</p>
                <button className="flex gap-3 text-xs font-light text-wnr-purple items-center">
                  View Details <IoIosArrowDown fontSize={16} />
                </button>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-4 p-4 border border-slate-200 rounded-lg">
              <div className="w-full border-b border-b-slate-200 flex justify-between p-2">
                <div className="flex gap-2 items-center">
                  <BsPerson className="text-wnr-purple" />
                  <p className="text-sm text-wnr-purple">Landlord Details</p>
                </div>
                <button className="text-wnr-purple text-sm font-medium">
                  Change
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <p>Lokesh Sharma</p>
                <button className="flex gap-3 text-xs font-light text-wnr-purple items-center">
                  View Details <IoIosArrowDown fontSize={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="w-96 lg:w-6/12 md:hidden h-auto flex flex-col gap-4 rounded-md bg-slate-100 p-5">
            <div className="w-full flex justify-between">
              <p className="text-slate-500 font-xl">Total Amount</p>
              <p className="text-black font-semibold text-xl">₹699</p>
            </div>
            <div className="flex gap-3 items-center bg-white p-4 rounded-lg">
              <img
                className="w-12 h-full object-cover rounded-sm"
                src="https://c.housingcdn.com/chimera/s/client/common/assets/previewAgreementDesktop.05634896.svg"
                alt="rupee"
              />
              <div className="flex flex-col gap-1">
                <div className="flex items-center w-full justify-between">
                  <p className="text-wnr-purple text-sm hover:cursor-pointer" onClick={() => setOpenAgreement(true)}>Preview Agreement</p>
                  <IoIosArrowForward className="text-wnr-purple" />
                </div>
                <p className="text-xs text-slate-400">
                  See how your agreement is going to look like in reality
                </p>
              </div>
            </div>
            <button className="bg-wnr-light-green w-full text-sm rounded-lg p-4 text-white font-bold">
              Confirm Details & Pay ₹699
            </button>
          </div>

          <div className="w-96 lg:w-6/12 md:w-full h-auto hidden md:flex flex-col gap-4 rounded-md bg-slate-100 p-5">
            <div className="flex flex-col gap-4 items-center bg-white p-4 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-sm"
                src="https://housing-ca.s3-ap-southeast-1.amazonaws.com/housing-edge/assets/SJ112AA575.png"
                alt="rupee"
              />
              <p onClick={() => setOpenAgreement(true)} className="text-wnr-purple text-xl font-semibold hover:cursor-pointer">
                Preview Agreement
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
