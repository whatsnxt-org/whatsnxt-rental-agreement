"use client";
import React, { useEffect, useState } from "react";
import { BasicDetails } from "./basicDetails/page";
import { LandlordDetails } from "./landlordDetails/page";
import { TenantDetails } from "./tenantDetails/page";
import { PropertyDetails } from "./propertyDetails/page";
import { ContractDetails } from "./contractDetails/page";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import Sidebar from "../sidebar/page";
import { ItemList } from "./itemList/page";
import { Summary } from "./summary/page";
import { MdOutlineAssignment } from "react-icons/md";
import { steps } from "../sidebar/properties";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [transitionOn, setTransitionOn] = useState(false);
  const [stepsCompleted, setStepsCompleted] = useState(false);

  const handleStep = (direction: string) => {
    setTransitionOn(true);

    setTimeout(() => {
      if (direction === "back") {
        setCurrentStep((prev) => (prev === 0 ? 0 : prev - 1));
        setStepsCompleted(false);
        if(currentStep === formSteps.length - 1 && stepsCompleted){
          setStepsCompleted(false)
          setCurrentStep(formSteps.length - 1)
        }

      } else {
        setCurrentStep(
          (prev) => prev + (currentStep === formSteps.length - 1 ? 0 : 1)
        );
        if (currentStep === formSteps.length - 1) {
          setStepsCompleted(true);
        }
      }
      setTransitionOn(false);
    }, 500);
  };

  const formSteps = [
    <BasicDetails stepForward={handleStep} />,
    <LandlordDetails stepForward={handleStep} />,
    <TenantDetails stepForward={handleStep} />,
    <PropertyDetails stepForward={handleStep} />,
    <ContractDetails stepForward={handleStep} />,
    <ItemList stepForward={handleStep} />,
  ];

  const MobileStep = () => {
    return (
      <div className="hidden md:flex w-full gap-4 items-center justify-start sticky top-0 left-0 p-4 bg-white z-20">
        <IoIosArrowBack
          onClick={() => handleStep("back")}
          className="text-slate-400"
        />
        <MdOutlineAssignment className="text-wnr-purple bg-wnr-purple bg-opacity-20 text-3xl rounded-full p-2" />
        <div className="flex flex-col gap-1">
          <p className="text-slate-400 text-xs">Step {currentStep + 1} of 6</p>
          <p className="text-xs font-bold">{steps[currentStep]}</p>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`w-screen h-screen flex md:flex-col md:w-full md:h-full md:${
        currentStep === 0 ? "bg-wnr-green" : ""
      }`}
    >
      {!stepsCompleted && (
        <Sidebar currentStep={currentStep} className={`md:${currentStep !== 0 ? "hidden" : ""}`} />
      )}
      <div
        className={`w-full md:rounded-t-2xl relative h-full bg-white flex flex-col justify-center items-center transition-all duration-300 ${
          transitionOn ? "opacity-0" : "opacity-100"
        }`}
      >
        <IoIosArrowBack
          onClick={() => handleStep("back")}
          className={`absolute top-12 left-10 hover:cursor-pointer md:top-1 md:left-1 md:${stepsCompleted? '':'hidden'}`}
          fontSize={25}
        />
        {stepsCompleted ? (
          <Summary />
        ) : (
          <div className="w-2/6 xl:w-3/6 lg:w-4/6 md:w-full md:p-5 h-full justify-around flex flex-col gap-5 rounded-t-3xl md:relative">
            <MobileStep />
            {formSteps[currentStep]}
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
