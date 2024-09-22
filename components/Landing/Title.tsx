"use client";
import BlurIn from "@/components/magicui/blur-in"; // Ensure this path is correct

export default function Title() {
  return (
    <>
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mx-auto max-w-4xl">
        <span>
          <BlurIn
            duration={0.5}
            word="Get the Backing Your"
            className="inline-block text-7xl gradient-text"
          />
        </span>{" "}
        <span>
          <BlurIn
            word="Startup"
            duration={0.8}
            className="gold-gradient text-7xl inline-block"
          />
        </span>{" "}
        <span>
          <BlurIn
            duration={0.8}
            word="Deserves"
            className="gradient-text inline-block text-7xl"
          />
        </span>
      </h1>
      <p>
        <BlurIn
          duration={1}
          word="Connect your startup with top VCs and investors. Ready to take off? 🚀"
          className="block text-lg font-normal md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
        />
      </p>
    </>
  );
}
