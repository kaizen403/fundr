export interface Startup {
  logo: string;
  name: string;
  area: string;
  about: string;
  series: string;
  valuation: string;
  links: {
    website: string;
  };
  likes: number;
  founders?: Array<{
    name: string;
    age: number;
    qualifications: string;
    industryExperience: string;
    achievements: string;
    expertise: string;
  }>; // Optional
  details?: {
    companyExplanation: string;
    fundingUse: string;
    coreValues: string;
    marketingType: string;
  }; // Optional
  pitchVideo?: string; // Optional
}
