import React from "react";
import NumberTicker from "@/components/magicui/number-ticker";
import WordFadeIn from "@/components/magicui/word-fade-in";
import BlurIn from "@/components/magicui/blur-in"; // Assuming this is your blur-in effect component

const PlatformStats: React.FC = () => {
  return (
    <div className="text-center my-10">
      <div className="flex justify-center items-center gap-6 text-white">
        {/* Startups section */}
        <div className="flex items-center">
          <NumberTicker value={100} className="text-4xl font-bold" />
          <BlurIn word="+" className="text-4xl font-bold mx-1" />{" "}
          {/* Blur-in effect for "+" */}
          <WordFadeIn words="Startups" className="text-4xl font-normal ml-2" />
        </div>

        {/* Divider */}
        <div className="h-10 w-[2px] bg-gray-500 mx-6 opacity-40"></div>

        {/* Investors section */}
        <div className="flex items-center">
          <NumberTicker value={50} className="text-4xl font-bold" />
          <BlurIn word="+" className="" /> {/* Blur-in effect for "+" */}
          <WordFadeIn words="Investors" className="text-4xl font-normal ml-2" />
        </div>
      </div>
    </div>
  );
};

export default PlatformStats;
