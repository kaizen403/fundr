// states/onboardingSelectors.ts
import { selector } from "recoil";
import { onboardingStepState } from "./onboardingAtom";

export const onboardingComponentSelector = selector({
  key: "onboardingComponentSelector",
  get: ({ get }) => {
    const step = get(onboardingStepState);

    switch (step) {
      case "Login":
        return "Login";
      case "CompanyInfo":
        return "CompanyInfo";
      case "LegalInfo":
        return "LegalInfo";
      case "ReviewTOC":
        return "ReviewTOC";
      default:
        return "Login";
    }
  },
});
