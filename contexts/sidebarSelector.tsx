// contexts/sidebarSelector.ts
import { selector } from "recoil";
import { selectedSidebarOptionState } from "./sidebaratom";
import BrowseStartups from "@/components/Sidebar/Browse"; // Ensure this path is correct
import Settings from "@/components/Sidebar/Settings";

export const selectedComponentState = selector<React.ReactNode | null>({
  key: "selectedComponentState",
  get: ({ get }) => {
    const selectedOption = get(selectedSidebarOptionState);

    switch (selectedOption) {
      case "Browse Startups":
        return <BrowseStartups />;
      case "My Portfolio":
      case "Recently Listed":
      case "Notifications":
      case "Investor Settings":
        return <Settings />; // Return null for other options as placeholders for now
      default:
        return null; // Default case if none of the cases match
    }
  },
});
