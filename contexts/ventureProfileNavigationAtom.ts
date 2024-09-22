// contexts/recoil/ventureProfileNavigationAtom.ts
import { atom } from "recoil";

export const ventureProfileComponentState = atom({
  key: "ventureProfileComponent",
  default: "BasicStartupForm", // Set the default component to be displayed
});
