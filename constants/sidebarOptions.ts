// contexts/sidebarOptions.ts
import { FaSearch, FaFolder, FaList, FaBell, FaCog } from "react-icons/fa"; // Import FaCog for settings icon

export const sidebarOptions = [
  {
    name: "Browse Startups",
    icon: FaSearch,
    href: "/browse-startups",
  },
  {
    name: "My Portfolio",
    icon: FaFolder,
    href: "/my-portfolio",
  },
  {
    name: "Recently Listed",
    icon: FaList,
    href: "/recently-listed",
  },
  {
    name: "Notifications",
    icon: FaBell,
    href: "/notifications",
  },
  {
    name: "Investor Settings", // New entry for Investor Settings
    icon: FaCog, // Settings icon
    href: "/investor/settings", // Add the correct link
  },
];
