import Image from "next/image";
import Cards from "@/components/Landing/Cards";
import FeaturesSection from "./FeaturesSection";
import ReserveTrade from "./ReserveTrade";
export default function Hero2() {
  return (
    <div className="flex justify-center items-center pb-18 pt-12">
      <div className="hero-background2 py-12 px-8 rounded-lg shadow-lg w-5/6 text-center">
        <div className="flex justify-center mt-8">
          <Cards />
        </div>
        <ReserveTrade />

        <FeaturesSection />
      </div>
    </div>
  );
}
