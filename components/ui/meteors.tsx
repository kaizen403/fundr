import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-full bg-yellow-300 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className,
          )}
          style={{
            top: Math.random() * 100 + "%", // Position within the card height
            left: Math.random() * 100 + "%", // Position within the card width
            animationDelay: Math.random() * 0.8 + "s",
            animationDuration: Math.random() * 8 + 2 + "s",
          }}
        ></span>
      ))}
    </>
  );
};
