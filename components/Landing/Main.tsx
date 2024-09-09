"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"; // Adjust the path to where InfiniteMovingCards is located

export default function Main() {
  const testimonials = [
    {
      quote:
        "Fundline provides an incredible level of access to startups that would otherwise be hard to reach. It simplifies our decision-making process with clear data insights.",
      name: "Sarah Williams",
      title: "Partner at Nexus Ventures",
    },
    {
      quote:
        "As an individual investor, Fundline has given me the opportunity to invest in high-growth startups that are normally out of reach for solo investors. The platform is a true equalizer.",
      name: "John Doe",
      title: "Angel Investor",
    },
    {
      quote:
        "We have expanded our portfolio thanks to Fundline’s curated selection of startups. The financial transparency and networking opportunities are second to none.",
      name: "David Thompson",
      title: "General Partner at Rocket Capital",
    },
    {
      quote:
        "Fundline has been instrumental in helping us discover early-stage companies in niche markets. The investment process is smooth and efficient.",
      name: "Emily Roberts",
      title: "Venture Capitalist at GladeBooks",
    },
    {
      quote:
        "Fundline is not only about deal flow. It’s about discovering startups that resonate with our investment philosophy and building long-term relationships with founders.",
      name: "James Cooper",
      title: "Investor at Y Combinator",
    },
    {
      quote:
        "For an angel investor like myself, Fundline is an excellent platform to diversify investments across multiple sectors, while gaining insights from other experienced investors.",
      name: "Alice Green",
      title: "Angel Investor & Startup Advisor",
    },
    {
      quote:
        "The community and networking opportunities on Fundline are invaluable. Connecting with other investors and venture firms has expanded my deal pipeline significantly.",
      name: "Robert Lee",
      title: "Private Equity Investor",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-[40rem] rounded-md antialiased relative overflow-hidden">
      <h2 className="text-6xl font-extrabold text-center text-white mb-12">
        What Our Investors Say
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}
