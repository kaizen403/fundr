// contexts/sidebarAtom.ts
import { atom } from "recoil";

export const selectedSidebarOptionState = atom({
  key: "selectedSidebarOptionState", // unique ID (with respect to other atoms/selectors)
  default: "Browse Startups", // default value (aka initial value)
});
