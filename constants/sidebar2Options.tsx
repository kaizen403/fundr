// contexts/sidebarOptions.ts
import {
  FaSearch,
  FaFolder,
  FaList,
  FaBell,
  FaCog,
  FaHome,
} from "react-icons/fa"; // Import FaHome icon

export const sidebarOptions = [
  {
    name: "Home", // New entry for Home
    icon: FaHome, // Home icon
    href: "/",
  },
  {
    name: "Equity",
    icon: FaSearch,
    href: "/equity",
  },
  {
    name: "fundraise",
    icon: FaFolder,
    href: "/my-portfolio",
  },
  {
    name: "Venture Profile",
    icon: FaCog,
    href: "/investor/settings",
  },
];
