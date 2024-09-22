"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart2,
  DollarSign,
  Briefcase,
  TrendingUp,
} from "lucide-react";

export default function Component() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const features = [
    {
      icon: <DollarSign className="h-6 w-6 text-blue-400" />,
      title: "Instant Liquidity",
      description: "Convert your private shares to cash, when you need it.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-green-400" />,
      title: "Diversify Portfolio",
      description:
        "Invest in other promising ventures without waiting for IPOs.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
      title: "Market Insights",
      description:
        "Get real-time valuations and market trends for informed decisions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 py-16">
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text gradient-text">
            Unlock the Power of Reserve Share
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Revolutionizing private equity: Trade your invested shares with
            unprecedented flexibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-[#021526] to-[#050b2b] rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-2 text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="flex justify-center space-x-4 mb-16" {...fadeIn}>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
          >
            Coming Soon
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#"
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          className="relative h-64 md:h-96"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <BarChart2 className="h-full w-full text-blue-500 opacity-10" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-16 h-16 bg-blue-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
