"use client";
import Image from "next/image";
import Cards from "@/components/Landing/Cards"; //

export default function Hero() {
  return (
    <div className="flex justify-center items-center pt-12">
      <div className="hero-background py-12 px-8 rounded-lg shadow-lg w-5/6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mx-auto max-w-4xl">
          <span className="gradient-text">Get the Backing Your</span>{" "}
          <span className="gold-gradient">Startup</span>{" "}
          <span className="gradient-text">Deserves</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
          Connect your startup with top VCs and investors. Ready to take off? 🚀
        </p>
        <div className="flex justify-center mt-8">
          <Cards />
        </div>
      </div>
    </div>
  );
}
