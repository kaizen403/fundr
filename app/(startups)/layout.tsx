"use client"; // Ensure this directive is only in client components

import type { Metadata } from "next";
import "../globals.css";
import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"] });
import { Providers } from "../providers";
import dynamic from "next/dynamic";
import Navbarr from "../../components/Shared/Navbar";
import Sidebar from "../../components/Shared/Sidebar";

// Dynamically import Sidebar to avoid hydration issues
const DynamicSidebar = dynamic(
  () => import("../../components/Shared/Sidebar"),
  { ssr: false },
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} bg-black`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbarr /> {/* Dashboard-specific navbar */}
            <div className="flex flex-grow">
              {/* Dynamically loaded Sidebar */}
              <div className="w-72 flex-shrink-0">
                <DynamicSidebar />
              </div>
              {/* Main content area with dashboard background */}
              <main className="flex-grow p-6">
                <div className="dashboardbg h-full w-full rounded-lg p-3">
                  <div className="h-full overflow-y-auto">{children}</div>
                </div>
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
