"use client";
import React, { useState } from "react";
import { Image, Link, Chip, Button } from "@nextui-org/react";
import { FaHeart } from "react-icons/fa";
import { Meteors } from "../ui/meteors";
import { Startup } from "@/types/types"; // Adjust the path according to your project structure
import { useRouter } from "next/navigation"; // Import useRouter from next/router

export default function StartupCard({
  logo,
  name,
  about,
  series,
  valuation,
  links,
  likes: initialLikes,
  area, // Add the 'area' of the startup
}: Startup) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const router = useRouter(); // Initialize useRouter

  // Extract the domain name from the website URL for display
  const websiteName = new URL(links.website).hostname.replace("www.", "");

  // Handle like button click
  const handleLikeClick = () => {
    setLikes(likes + (isLiked ? -1 : 1)); // Increment or decrement based on current state
    setIsLiked(!isLiked); // Toggle like state
  };

  // Handle Fund button click
  const handleFundClick = () => {
    router.push(`/startups/${name}`); // Navigate to the startup's page
  };

  return (
    <div className="relative bg-[#021526] rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-lg h-auto flex flex-col border border-[#03346E] border-opacity-50 overflow-hidden">
      {/* Meteors Effect */}
      <Meteors number={8} />

      <div className="flex flex-wrap sm:flex-nowrap relative z-10">
        {/* Logo with Zoom Effect */}
        <div className="flex-shrink-0">
          <Image
            isZoomed
            width={80} // Adjust the width to be smaller for responsiveness
            alt={`${name} Logo`}
            src={logo}
            className="rounded-lg"
          />
          {/* Area of the Startup displayed as text or a chip */}
          <div className="mt-2">
            <Chip
              color="secondary"
              variant="flat"
              className="text-blue-400 mt-1"
              size="sm"
            >
              {area}
            </Chip>
          </div>
        </div>

        {/* Info Section */}
        <div className="ml-6 flex flex-col justify-start w-full mt-2 sm:mt-0">
          {/* Name and Link */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white break-words">
            {name}
          </h2>
          <Link
            isExternal
            href={links.website}
            showAnchorIcon
            className="text-blue-400 hover:text-blue-300 mt-1 sm:mt-2 text-xs sm:text-sm break-words"
          >
            {websiteName}
          </Link>

          {/* Series and Valuation Chips */}
          <div className="flex gap-2 mt-2 flex-wrap">
            <Chip color="primary" variant="shadow" size="sm">
              Series: {series}
            </Chip>
            <Chip color="primary" variant="shadow" size="sm">
              Valuation: {valuation}
            </Chip>
          </div>

          {/* About Section */}
          <p className="text-xs sm:text-sm text-gray-50 mt-3 break-words">
            {about}
          </p>
        </div>
      </div>

      {/* Heart, Fund, and Wishlist Buttons */}
      <div className="flex justify-between items-center mt-6 relative z-10">
        <div className="flex items-center">
          {/* Heart Icon */}
          <FaHeart
            className={`cursor-pointer ${
              isLiked ? "text-red-500" : "text-white"
            }`}
            onClick={handleLikeClick}
            size={20} // Adjust size to make it more responsive
          />
          <span className="ml-2 text-white text-sm sm:text-base">{likes}</span>
        </div>

        {/* Fund Button with Shadow Variant */}
        <Button
          color="secondary"
          className="text-white font-bold tracking-wider"
          variant="shadow"
          size="sm"
          onPress={handleFundClick} // Attach the click handler
        >
          Fund
        </Button>

        {/* Wishlist Button with Icon and Shadow Variant */}
        <Button
          color="secondary"
          className="text-white font-bold tracking-wider"
          variant="shadow"
          size="sm"
        >
          Wishlist
        </Button>
      </div>
    </div>
  );
}
