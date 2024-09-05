"use client";
import { Link } from "@nextui-org/link";
import { FaSearch, FaFolder, FaBell } from "react-icons/fa";
import { sidebarOptions } from "../../contexts/sidebarOptions"; // Adjust the path as needed

export default function Sidebar() {
  return (
    <div className="w-64 ml-5 bg-[#0A2647] rounded-xl my-6 flex flex-col justify-between p-6 shadow-lg border border-blue-700 border-opacity-30 fixed top-[4rem] sidebar">
      {/* Logo and Navigation */}
      <div>
        {/* Logo */}
        <div className="mb-8">
          <p className="text-2xl font-bold tracking-wide text-white mb-4">
            Fundhive
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-6">
          {sidebarOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              className="flex items-center text-white border border-transparent hover:border-blue-500 hover:bg-[#14346f] p-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg active:border-blue-300 active:shadow-[4px_4px_10px_rgba(0,0,0,0.3)]"
            >
              <option.icon className="text-2xl" />
              <span className="ml-4">{option.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Apps Section */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Apps</h3>
        <div className="flex flex-col gap-6">
          <Link
            href="#"
            className="flex items-center font-semibold text-white border border-transparent hover:border-blue-500 hover:bg-[#14346f] p-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg active:border-blue-300 active:shadow-[4px_4px_10px_rgba(0,0,0,0.3)]"
          >
            <FaSearch className="text-2xl" />
            <span className="ml-4">AI Analytics</span>
          </Link>
          <Link
            href="#"
            className="flex items-center font-semibold text-white border border-transparent hover:border-blue-500 hover:bg-[#14346f] p-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg active:border-blue-300 active:shadow-[4px_4px_10px_rgba(0,0,0,0.3)]"
          >
            <FaFolder className="text-2xl" />
            <span className="ml-4">Research PRO</span>
          </Link>
          <Link
            href="#"
            className="flex items-center font-semibold text-white border border-transparent hover:border-blue-500 hover:bg-[#14346f] p-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg active:border-blue-300 active:shadow-[4px_4px_10px_rgba(0,0,0,0.3)]"
          >
            <FaBell className="text-2xl" />
            <span className="ml-4">Alerts</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
