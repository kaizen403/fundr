import Image from "next/image";
import Cards from "@/components/Landing/Cards";
import FeaturesSection from "./FeaturesSection";
import Title from "./Title";
import PlatformStats from "./Metrics";
import { MarqueeDemo } from "./Review";

export default function Hero() {
  return (
    <div className="flex justify-center items-center pb-18 pt-12">
      <div className="hero-background py-12 px-8 rounded-lg shadow-lg w-5/6 text-center">
        <Title />

        <PlatformStats />

        <div className="flex justify-center mt-8">
          <MarqueeDemo />
        </div>
        <div className="flex justify-center mt-8">
          <Cards />
        </div>
        <FeaturesSection />

        {/* SVG Image */}
        <div className="flex justify-center mt-8">
          <Image
            src="/transpirant.svg"
            alt="Decorative transparent SVG"
            width={1100}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
