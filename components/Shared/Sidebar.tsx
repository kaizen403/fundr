// Sidebar.tsx
"use client";

import { useRecoilState } from "recoil";
import { selectedSidebarOptionState } from "../../contexts/sidebaratom"; // Import your atom
import { Link } from "@nextui-org/link";
import { FaSearch, FaFolder, FaBell, FaCog } from "react-icons/fa";
import { sidebarOptions } from "../../constants/sidebarOptions"; // Adjust the path as needed

export default function Sidebar() {
  const [selectedOption, setSelectedOption] = useRecoilState(
    selectedSidebarOptionState,
  );

  const handleOptionClick = (optionName: string) => {
    setSelectedOption(optionName);
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
                  ? "border-blue-500 bg-[#14346f] shadow-lg"
                  : "hover:border-blue-500 hover:bg-[#14346f] hover:shadow-lg"
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
