// components/Dashboard/Startup/Fundraise.tsx
"use client";

import React from "react";
import { useRecoilValue } from "recoil";
import { selectedSidebar2OptionState } from "@/contexts/sidebar2Atom";

const Fundraise: React.FC = () => {
  const selectedOption = useRecoilValue(selectedSidebar2OptionState);

  if (selectedOption !== "fundraise") return null;

  return (
    <div>
      <h1>Fundraise Section</h1>
      {/* Add more content for the Fundraise section */}
    </div>
  );
};

export default Fundraise;
