// contexts/subSidebarAtom.ts
import { atom } from "recoil";

export const selectedSubSidebarOptionState = atom<string>({
  key: "selectedSubSidebarOptionState", // Unique ID
  default: "Basic Startup Form", // Default value
});
