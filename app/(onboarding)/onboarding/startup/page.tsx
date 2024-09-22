// pages/home.tsx
"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { currentStepState } from "@/contexts/onboardingAtom";
import Login from "@/components/Onboarding/Startups/Login";
import CompanyInfo from "@/components/Onboarding/Startups/Companyinfo";
import LegalInfo from "@/components/Onboarding/Startups/Legalinfo";
import ReviewTOC from "@/components/Onboarding/Startups/ReviewTOC";

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);

  const renderStep = () => {
    switch (currentStep) {
      case "CompanyInfo":
        return <CompanyInfo />;
      case "LegalInfo":
        return <LegalInfo />;
      case "ReviewTOC":
        return <ReviewTOC />;
      default:
        return <Login />;
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-3/4">
      {renderStep()}
    </div>
  );
};

export default Home;
