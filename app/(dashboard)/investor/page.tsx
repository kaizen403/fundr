"use client";
import { startupData } from "@/constants/startupContext"; // Adjust the path according to your project structure
import StartupCard from "@/components/Cards/StartupCard";
import Browse from "@/components/Sidebar/Browse";
import { useRecoilValue } from "recoil";
import { selectedComponentState } from "@/contexts/sidebarSelector";
export default function Home() {
  const SelectedComponent = useRecoilValue(selectedComponentState);
  return <>{SelectedComponent}</>;
}
