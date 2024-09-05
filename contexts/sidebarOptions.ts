// contexts/sidebarOptions.ts
import { FaSearch, FaFolder, FaList, FaBell } from "react-icons/fa";

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
];
