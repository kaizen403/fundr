"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { selectedSidebar2OptionState } from "@/contexts/sidebar2Atom"; // Ensure correct import path
import CompanyInfoForm from "./CompanyInfoForm";
import Docs from "./Docs";
import BasicStartupForm from "./CompanyProfileBasic";

const VentureProfile: React.FC = () => {
  const [selectedOption, setSelectedOption] = useRecoilState(
    selectedSidebar2OptionState,
  );

  // Only render Venture Profile-related forms when Venture Profile is selected in the main sidebar
  if (
    selectedOption !== "Venture Profile" &&
    selectedOption !== "BasicStartupForm" &&
    selectedOption !== "CompanyInfoForm" &&
    selectedOption !== "Docs"
  ) {
    return null;
  }

  // Render based on the selected sub-sidebar option
  const renderSubComponent = () => {
    switch (selectedOption) {
      case "BasicStartupForm":
        return <BasicStartupForm />;
      case "CompanyInfoForm":
        return <CompanyInfoForm />;
      case "Docs":
        return <Docs />;
      default:
        return <div>Select a form from the sidebar</div>; // Default message
    }
  };

  return (
    <div className="flex w-full h-full">
      {/* Sidebar */}
      <div className="w-64 p-6 text-white rounded-lg shadow-lg border border-blue-950 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Options</h2>
        <button
          onClick={() => setSelectedOption("BasicStartupForm")}
          className="w-full py-2 px-4 text-left rounded-lg bg-[#021526] hover:bg-[#143a5e] transition-all duration-300 shadow-md"
        >
          Basic Info
        </button>
        <button
          onClick={() => setSelectedOption("CompanyInfoForm")}
          className="w-full py-2 px-4 text-left rounded-lg bg-[#021526] hover:bg-[#143a5e] transition-all duration-300 shadow-md"
        >
          Company Info
        </button>
        <button
          onClick={() => setSelectedOption("Docs")}
          className="w-full py-2 px-4 text-left rounded-lg bg-[#021526] hover:bg-[#143a5e] transition-all duration-300 shadow-md"
        >
          Documents
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow shadow-lg ml-6">{renderSubComponent()}</div>
    </div>
  );
};

export default VentureProfile;
