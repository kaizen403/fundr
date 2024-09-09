"use client";
import Image from "next/image";
import Cards from "@/components/Landing/Cards";
import Main from "@/components/Landing/Main";
import FeaturesSection from "./FeaturesSection";

export default function Hero() {
  return (
    <div className="flex justify-center items-center pb-18  pt-12">
      <div className="hero-background py-12 px-8 rounded-lg shadow-lg w-5/6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mx-auto max-w-4xl">
          <span className="gradient-text">Get the Backing Your</span>{" "}
          <span className="gold-gradient">Startup</span>{" "}
          <span className="gradient-text">Deserves</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
          Connect your startup with top VCs and investors. Ready to take off? 🚀
        </p>

        {/* Add the SVG here */}
        <div className="flex justify-center mt-8">
          <Image
            src="/transpirant.svg" // Assuming your svg is located in the public folder
            alt="Decorative transparent SVG"
            width={1100} // You can adjust the width accordingly
            height={1000} // You can adjust the height accordingly
          />
        </div>

        <div className="flex justify-center ">
          <Cards />
        </div>
        <Main />
        <FeaturesSection />
      </div>
    </div>
  );
}
