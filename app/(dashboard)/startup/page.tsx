// pages/dashboard/startup/page.tsx
import React from "react";
import Home from "@/components/Dashboard/Startup/Home";
import Equity from "@/components/Dashboard/Startup/Equity";
import Fundraise from "@/components/Dashboard/Startup/Fundraise";
import VentureProfile from "@/components/Dashboard/Startup/VentureProfile";

export default function Sidebar2Page() {
  return (
    <div className="p-6 w-full h-full">
      {/* The child components will manage their own state and behavior */}
      <Home />
      <Equity />
      <Fundraise />
      <VentureProfile />
    </div>
  );
}
