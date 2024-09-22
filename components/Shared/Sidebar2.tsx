"use client";
import { Link } from "@nextui-org/link";

import { useRecoilState } from "recoil";
import { selectedSidebar2OptionState } from "../../contexts/sidebar2Atom"; // Adjust the atom import as needed
import { sidebarOptions } from "../../constants/sidebar2Options"; // Adjust the path as needed

export default function Sidebar2() {
  const [selectedOption, setSelectedOption] = useRecoilState(
    selectedSidebar2OptionState,
  );

  const handleOptionClick = (optionName: string) => {
    setSelectedOption(optionName); // Update Recoil state with selected option
  };

  return (
    <div className="w-64 ml-5 bg-[#0A2647] rounded-xl my-6 flex flex-col justify-between p-6 shadow-lg border border-blue-700 border-opacity-30 fixed top-[4rem] sidebar">
      {/* Logo and Navigation */}
      <div>
        <div className="mb-8">
          <p className="text-2xl font-bold tracking-wide text-white mb-4">
            Fundline
          </p>
        </div>
        <nav className="flex flex-col gap-6">
          {sidebarOptions.map((option, index) => (
            <Link
              key={index}
              href="#"
              onClick={() => handleOptionClick(option.name)}
              className={`flex items-center text-white border border-transparent p-3 rounded-lg transition-all duration-300 transform ${
                selectedOption === option.name
                  ? "border-blue-950 bg-[#021526] shadow-lg"
                  : "hover:border-blue-500 hover:bg-[#021526] hover:shadow-lg"
              }`}
            >
              <option.icon className="text-2xl" />
              <span className="ml-4">{option.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
