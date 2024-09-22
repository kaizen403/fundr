"use client";

import React from "react";
import { useParams } from "next/navigation";
import { startupData } from "@/constants/startupContext";
import Timeline from "@/components/ui/timeline";
import GrowthCharts from "@/components/Charts/GrowthCharts";
import { PerformanceMetrics } from "@/components/Charts/PerformanceMetrics";
import { UnitEconomics } from "@/components/Charts/UnitEconomics";
import { EquityDilution } from "@/components/Charts/EquityDilution";
import { ARRChart } from "../Charts/ARR";
export default function TimelineData() {
  const params = useParams();
  const startup = params.startup; // Access the dynamic route parameter

  // Find the selected startup based on the route parameter
  const selectedStartup = startupData.find(
    (s) => s.name.toLowerCase() === startup?.toString().toLowerCase(),
  );

  if (!selectedStartup) {
    return <div>Startup not found</div>;
  }
  const quarterlyGrowthData = [
    {
      quarter: 1,
      data: [
        { month: "January", profit: 500, revenue: 2000 },
        { month: "February", profit: 20000, revenue: 25000 },
        { month: "March", profit: 20000, revenue: 30000 },
      ],
    },
    {
      quarter: 2,
      data: [
        { month: "April", profit: 12000, revenue: 22000 },
        { month: "May", profit: 17000, revenue: 27000 },
        { month: "June", profit: 1900, revenue: 32000 },
      ],
    },
    {
      quarter: 3,
      data: [
        { month: "July", profit: 140, revenue: 240 },
        { month: "August", profit: 180, revenue: 280 },
        { month: "September", profit: 210, revenue: 330 },
      ],
    },
    {
      quarter: 4,
      data: [
        { month: "October", profit: 160, revenue: 260 },
        { month: "November", profit: 20000, revenue: 31990 },
        { month: "December", profit: 23000, revenue: 36000 },
      ],
    },
  ];
  const data = [];

  // Add Founders Information
  if (selectedStartup?.founders) {
    data.push({
      title: "Founders",
      content: (
        <div>
          {selectedStartup.founders.map((founder, index) => (
            <div
              key={index}
              className="text-white mb-8 p-4 border-b border-gray-700"
            >
              <div className="mb-2">
                <strong className="text-lg">Name:</strong> {founder.name}
              </div>
              <div className="mb-2">
                <strong className="text-lg">Age:</strong> {founder.age} years
                old
              </div>
              <div className="mb-2">
                <strong className="text-lg">Qualifications:</strong>{" "}
                {founder.qualifications}
              </div>
              <div className="mb-2">
                <strong className="text-lg">Industry Experience:</strong>{" "}
                {founder.industryExperience}
              </div>
              <div className="mb-2">
                <strong className="text-lg">Achievements:</strong>{" "}
                {founder.achievements}
              </div>
              <div className="mb-2">
                <strong className="text-lg">Expertise:</strong>{" "}
                {founder.expertise}
              </div>
            </div>
          ))}
        </div>
      ),
    });
  }

  // Add Pitch Video using iframe for YouTube
  if (selectedStartup?.pitchVideo) {
    data.push({
      title: "Pitch Video",
      content: (
        <div className="flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src={selectedStartup.pitchVideo.replace(
              "youtu.be/",
              "www.youtube.com/embed/",
            )}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      ),
    });
  }

  // Add Growth and Sales section
  data.push({
    title: "Growth and Sales",
    content: <GrowthCharts quarterlyGrowthData={quarterlyGrowthData} />,
  });

  data.push({
    title: "Marketing & Performance Metrics",
    content: (
      <div className="flex bg-gradient-to-b border-blue-900 border-opacity-45 bg-[#021526] flex-col p-6 rounded-lg shadow-md">
        <PerformanceMetrics />
        {/* Safely accessing 'selectedStartup.details' properties */}
        {selectedStartup.details && (
          <div className="mt-10 text-white">
            <div className="mb-8">
              <h3 className="text-xl mb-2 font-semibold">
                Average Ticket Size
              </h3>
              <p>{selectedStartup.details?.averageTicketSize || "N/A"}</p>
            </div>
            <div>
              <h3 className="text-xl mb-2 font-semibold">Marketing Approach</h3>
              <p>{selectedStartup.details?.marketingApproach || "N/A"}</p>
            </div>
          </div>
        )}
      </div>
    ),
  });
  data.push({
    title: "Financial Metrics",
    content: (
      <div className="flex bg-gradient-to-b border-blue-900 border-opacity-45 bg-[#021526] flex-col p-6 rounded-lg shadow-md gap-6">
        {/* Unit Economics Component */}
        <UnitEconomics />
        {/* ARR Growth Chart */}
        <ARRChart />
      </div>
    ),
  });
  data.push({
    title: "Equity Dilution",
    content: (
      <div className="flex bg-gradient-to-b border-blue-900 border-opacity-45 bg-[#021526] flex-col p-6 rounded-lg shadow-md gap-6">
        {/* Equity Dilution Chart */}
        <EquityDilution />
      </div>
    ),
  });
  return (
    <Timeline
      data={data}
      startupName={selectedStartup.name}
      details={selectedStartup.details}
      logo={selectedStartup.logo}
    />
  );
}
