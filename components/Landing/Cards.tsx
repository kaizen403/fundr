"use client";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { useRouter } from "next/navigation";

export default function Cards() {
  const router = useRouter(); // Initialize the router

  const handleStartupNavigation = () => {
    router.push("/onboarding/startup"); // Navigate to /onboarding/startup
  };

  return (
    <div className="flex flex-col items-center gap-8 py-12 px-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        {/* Card 1 */}
        <div className="bg-gradient-to-b from-[#021526] to-[#050b2b] rounded-lg shadow-lg p-8 md:p-12 w-full text-center flex flex-col justify-between border border-[#03346E] border-opacity-50 h-auto md:h-96">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Startup?
            </h2>
            <p className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Get your project funded
            </p>
            <p className="text-md md:text-lg text-gray-300">
              Fundraising, support, legal, engaged network – we got you covered.
            </p>
          </div>
          <ShimmerButton
            className=" text-gray-300 py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg mt-4 md:mt-0"
            onClick={handleStartupNavigation} // Call the function on click
          >
            <span className="font-semibold tracking-wide">Join as Startup</span>
          </ShimmerButton>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-b from-[#021526] to-[#050b2b] rounded-lg shadow-lg p-8 md:p-12 w-full text-center flex flex-col justify-between border border-[#03346E] border-opacity-50 h-auto md:h-96">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Investor?
            </h2>
            <p className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Find promising projects
            </p>
            <p className="text-md md:text-lg text-gray-300">
              Deal flow, investment dashboard, investment process – all in one
              place.
            </p>
          </div>
          <ShimmerButton className=" text-gray-300 py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg mt-4 md:mt-0">
            <span className="font-semibold tracking-wide">
              Join as an Investor
            </span>
          </ShimmerButton>
        </div>
      </div>

      {/* VC Card */}
      <div className="bg-gradient-to-b from-[#021526] to-[#050b2b] rounded-lg shadow-lg p-6 md:p-8 w-full text-center flex flex-col justify-between border border-[#03346E] border-opacity-50 h-auto md:h-80 mt-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Venture Capital?
          </h2>
          <p className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
            Grow your portfolio
          </p>
          <p className="text-md md:text-lg text-gray-300 justify-center text-center">
            Discover high-potential startups, streamline investment processes,
            and connect with other VCs in a collaborative environment.
          </p>
        </div>
        <div className="flex justify-center">
          <ShimmerButton className="text-gray-300 py-2 w-1/2 md:py-3 px-4 md:px-6 rounded-full shadow-lg mt-4 md:mt-0">
            <span className="font-semibold tracking-wide">Join as VC</span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
}
