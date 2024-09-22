// contexts/recoil/ventureProfileAtoms.ts
import { atom } from "recoil";

export const logoState = atom<File | null>({
  key: "logoState",
  default: null,
});

export const marketTypeState = atom<string>({
  key: "marketTypeState",
  default: "",
});

export const shortPitchState = atom<string>({
  key: "shortPitchState",
  default: "",
});

export const businessAreaState = atom<string>({
  key: "businessAreaState",
  default: "",
});

export const foundersState = atom<Founder[]>({
  key: "foundersState",
  default: [
    {
      name: "",
      age: "",
      qualifications: "",
      industryExperience: "",
      achievements: "",
      expertise: "",
    },
  ],
});

export const pitchVideoState = atom<File | null>({
  key: "pitchVideoState",
  default: null,
});

interface Founder {
  name: string;
  age: string;
  qualifications: string;
  industryExperience: string;
  achievements: string;
  expertise: string;
}
