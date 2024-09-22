// states/onboardingState.ts
import { atom } from "recoil";

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const currentStepState = atom({
  key: "currentStepState",
  default: "Login",
});
