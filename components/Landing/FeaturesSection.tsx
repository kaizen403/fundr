import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Tailored for Startups",
      description:
        "We provide a unique environment for startups to thrive by connecting them with the right investors and resources.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Easy to Use Interface",
      description:
        "Our platform is designed to be user-friendly and intuitive, making the investment process seamless for both startups and investors.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Transparent Pricing",
      description:
        "We believe in full transparency. Our pricing structure is clear and straightforward, with no hidden fees or surprises.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Secure and Reliable",
      description:
        "With top-notch security measures, we ensure your data and transactions are safe with 99.9% uptime.",
      icon: <IconCloud />,
    },
    {
      title: "Comprehensive Support",
      description:
        "Our 24/7 customer support is always ready to assist you with any questions or issues you may encounter.",
      icon: <IconHelp />,
    },
    {
      title: "Data-Driven Insights",
      description:
        "Access real-time analytics and detailed reports to make informed decisions and track your progress.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Investment Opportunities",
      description:
        "We connect investors with promising startups and provide valuable tools to help them evaluate and manage their portfolios.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Inclusive Community",
      description:
        "Our platform fosters collaboration between startups and investors, creating a supportive community for innovation and growth.",
      icon: <IconHeart />,
    },
  ];
  return (
    <section className="py-10 border border-neutral-700 rounded-lg mb-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold tracking-wide text-white mb-4">
          Key Features of Our Platform
        </h2>
        <p className="text-lg text-gray-300">
          Discover what makes our platform stand out for both startups and
          investors.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-950 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-950 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-200">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white group-hover">
          {title}
        </span>
      </div>
      <p className="text-sm text-white group-hover/bg-blue-900 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
