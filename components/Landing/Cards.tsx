"use client";

export default function Cards() {
  return (
    <div className="flex flex-col items-center gap-8 py-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        {/* Card 1 */}
        <div className="bg-gradient-to-b from-[#03346E] via-[#050b2b] to-[#021526] rounded-lg shadow-lg p-12 w-full md:w-1/2 max-w-lg text-center h-96 flex flex-col justify-between border border-[#03346E] border-opacity-50">
          <div>
            <h2 className="text-5xl font-bold gradient-text mb-6">Startup?</h2>
            <p className="text-2xl font-bold text-white mb-6">
              Get your project funded
            </p>
            <p className="text-lg text-gray-300">
              Fundraising, support, legal, engaged network – we got you covered.
            </p>
          </div>
          <button className="bg-white text-black py-3 px-6 rounded-full shadow-lg">
            Learn more →
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-b from-[#03346E] via-[#050b2b] to-[#021526] rounded-lg shadow-lg p-12 w-full md:w-1/2 max-w-lg text-center h-96 flex flex-col justify-between border border-[#03346E] border-opacity-50">
          <div>
            <h2 className="text-5xl font-bold gradient-text mb-6">Investor?</h2>
            <p className="text-2xl font-bold text-white mb-6">
              Find promising projects
            </p>
            <p className="text-lg text-gray-300">
              Deal flow, investment dashboard, investment process – all in one
              place.
            </p>
          </div>
          <button className="bg-white text-black py-3 px-6 rounded-full shadow-lg">
            Learn more →
          </button>
        </div>
      </div>

      {/* VC Card */}
      <div className="bg-gradient-to-b from-[#03346E] via-[#050b2b] to-[#021526] rounded-lg shadow-lg p-6 w-5/6 text-center h-80 flex flex-col justify-between mt-8 border border-[#03346E] border-opacity-50">
        <div>
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Venture Capital?
          </h2>
          <p className="text-2xl font-bold text-white mb-6">
            Grow your portfolio
          </p>
          <p className="text-lg text-gray-300 justify-center text-center">
            Discover high-potential startups, streamline investment processes,
            and connect with other VCs in a collaborative environment.
          </p>
        </div>
        <button className="bg-white text-black py-3 px-6 rounded-full shadow-lg">
          Learn more →
        </button>
      </div>
    </div>
  );
}
