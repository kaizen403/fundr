"s-1-proxmuse client";

import { Link } from "@nextui-org/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#050b2b] to-[#0a192e] mt-20 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand and Description */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-2xl font-bold">Fundr</p>
          <p className="text-gray-400 mt-2 text-center md:text-left">
            Connecting startups, investors, and VCs in a collaborative
            ecosystem.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-6 text-center">
          <Link href="#" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            Products
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            Pricing
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            About
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 text-center">
          <Link href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-twitter fa-lg"></i>
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-linkedin fa-lg"></i>
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-github fa-lg"></i>
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2024 Fundr. All rights reserved.</p>
      </div>
    </footer>
  );
}
