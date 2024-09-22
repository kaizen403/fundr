import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviewsStartups = [
  {
    name: "Startup Alpha",
    username: "@alpha",
    body: "Fundline helped us scale quickly by connecting us with the right investors.",
    img: "https://avatar.vercel.sh/startup-alpha",
  },
  {
    name: "BetaTech",
    username: "@betatech",
    body: "The best platform to meet VCs and accelerate growth.",
    img: "https://avatar.vercel.sh/betatech",
  },
  {
    name: "Gamma Innovations",
    username: "@gamma",
    body: "Our fundraising process became so much smoother thanks to Fundline.",
    img: "https://avatar.vercel.sh/gamma",
  },
];

const reviewsInvestors = [
  {
    name: "Nexus Ventures",
    username: "@nexus",
    body: "We've discovered incredible startups through Fundline’s platform.",
    img: "https://avatar.vercel.sh/nexus",
  },
  {
    name: "Rocket Capital",
    username: "@rocket",
    body: "Fundline simplifies our investment process with valuable insights.",
    img: "https://avatar.vercel.sh/rocket",
  },
  {
    name: "Alpha Investments",
    username: "@alphainvest",
    body: "The best place to find promising early-stage startups.",
    img: "https://avatar.vercel.sh/alphainvest",
  },
];

const firstRow = reviewsStartups;
const secondRow = reviewsInvestors;

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 bg-[#021526] cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-300/[.1] hover:bg-gray-100/[.05]",
      )}
    >
      <div className="flex flex-row items-center bg-gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col ml-3">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-300">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-xl">
      {/* Startups Row */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* Investors & VCs Row */}
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
    </div>
  );
}
