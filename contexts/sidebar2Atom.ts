// contexts/sidebar2Atom.ts
import { atom } from "recoil";

// Extend the atom's value to include both main and sub-sidebar options
export const selectedSidebar2OptionState = atom<string>({
  key: "selectedSidebar2OptionState",
  default: "Home", // The initial selected option
});
