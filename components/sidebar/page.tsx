import { MdOutlineAssignment } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { steps } from "./properties";
import { CiCircleList } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";

const Sidebar = ({ className, currentStep}: { className?: string, currentStep: number } ) => {

  const StepsList = [ MdOutlineAssignment,IoIosPerson,IoIosPerson,IoIosPerson, CiCircleList, IoMdHome,  ]

  const Steps = () => {

    const Step = ({step, index}: {step: string, index: number}) => {
      const StepIcon = StepsList[index]
     return <div className="flex gap-3 items-center md:hidden">
        <StepIcon
          fontSize={40}
          color="white"
          className="border rounded-full p-2"
        />
        <p className={`text-sm text-white ${currentStep === index ? 'font-extrabold': 'font-medium'}`}>
          {step}
        </p>
      </div>
    };

    return (
      <div className="flex flex-col gap-9">
        {steps.map((step, index) => (
            <Step step={step} index={index} key={index} />
          ))}
      </div>
    );
  };

  return (
    <div className={`w-1/4 xl:w-2/4 lg:w-3/6 md:h-44 h-full flex flex-col bg-wnr-green p-10 justify-around relative md:w-full ${className}`}>
      <RxCross2 fontSize={30} className="absolute top-7 md:top-2 md:left-2 left-10 text-wnr-green bg-white bg-opacity-25 p-1 rounded-full" />
      <div className="flex flex-col gap-4">
        <h2 className="text-white font-semibold text-3xl md:text-2xl">Rent Agreement</h2>
        <p className="text-white text-opacity-75 md:text-sm">
          Get your rental agreement <br />
          made with just a click
        </p>
      </div>
      <Steps />
    </div>
  );
};

export default Sidebar;
