"use client";
import { motion } from "framer-motion";
import { ArrowRight, Search, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
export default function Component() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#021526] to-[#050b2b] flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-6xl relative">
        {/* Top Section */}
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text gradient-text">
            Connecting Visionaries with Investors
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering startups to find the right investors, and enabling VCs to
            discover groundbreaking innovations.
          </p>
        </motion.div>
        {/* Left Section */}
        <motion.div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
            <CardContent className="p-6">
              <Search className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                Find Investors
              </h3>
              <p className="text-gray-300">
                Startups can easily connect with potential investors and VCs
                through our platform.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        {/* Right Section */}
        <motion.div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
            <CardContent className="p-6">
              <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                Fund Innovations
              </h3>
              <p className="text-gray-300">
                Investors can fund promising startups, including those from top
                IIT and IIIT incubators.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        {/* Center Section (SVG Placeholder) */}
        <motion.div
          className="w-1/2 h-64 mx-auto my-12 flex items-center justify-center"
          whileHover={{ scale: 1.2 }} // Zoom effect on hover
          transition={{ duration: 0.5 }} // Smooth transition
        >
          <Image
            src="/transpirant.svg"
            alt="Transpirant SVG"
            width={700} // Set appropriate width
            height={700} // Set appropriate height
            className="object-contain"
          />
        </motion.div>{" "}
        {/* Bottom Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
        {/* Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-2000"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </div>
  );
}
