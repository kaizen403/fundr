"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle, X } from "lucide-react";

interface Founder {
  name: string;
  age: string;
  qualifications: string;
  industryExperience: string;
  achievements: string;
  expertise: string;
}

const marketTypes = ["B2B", "B2C", "B2B2C", "C2C", "D2C"];
const businessAreas = [
  "AI/ML",
  "Agritech",
  "Consumer",
  "Digital Entertainment",
  "Edtech",
  "Fintech",
  "HealthTech",
  "Media",
  "Mobility",
  "SaaS",
];

export default function BasicStartupForm() {
  const [logo, setLogo] = useState<File | null>(null);
  const [marketType, setMarketType] = useState<string>("");
  const [shortPitch, setShortPitch] = useState<string>("");
  const [businessArea, setBusinessArea] = useState<string>("");
  const [founders, setFounders] = useState<Founder[]>([
    {
      name: "",
      age: "",
      qualifications: "",
      industryExperience: "",
      achievements: "",
      expertise: "",
    },
  ]);
  const [pitchVideo, setPitchVideo] = useState<File | null>(null);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setLogo(event.target.files[0]);
    }
  };

  const addFounder = () => {
    setFounders([
      ...founders,
      {
        name: "",
        age: "",
        qualifications: "",
        industryExperience: "",
        achievements: "",
        expertise: "",
      },
    ]);
  };

  const removeFounder = (index: number) => {
    const newFounders = founders.filter((_, i) => i !== index);
    setFounders(newFounders);
  };

  const handleFounderChange = (
    index: number,
    field: keyof Founder,
    value: string,
  ) => {
    const newFounders = [...founders];
    newFounders[index][field] = value;
    setFounders(newFounders);
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPitchVideo(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Logo:", logo);
    console.log("Market Type:", marketType);
    console.log("Short Pitch:", shortPitch);
    console.log("Business Area:", businessArea);
    console.log("Founders:", founders);
    console.log("Pitch Video:", pitchVideo);
    // Here you would typically send this data to your backend
  };

  return (
    <div className="bg-gradient-to-b from-[#021526] to-[#050b2b] text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto border border-[#03346E] border-opacity-50">
      <h1 className="text-3xl font-bold mb-8"> Basic Company Information</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="logo" className="block text-sm font-medium mb-2">
              Logo
            </label>
            <Input
              id="logo"
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="bg-[#1c2f4a] border-[#3a4d6b] text-white"
            />
            {logo && (
              <p className="mt-2 text-sm text-gray-300">
                Selected file: {logo.name}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="marketType"
              className="block text-sm font-medium mb-2"
            >
              Market Type
            </label>
            <Select onValueChange={setMarketType}>
              <SelectTrigger className="bg-[#1c2f4a] border-[#3a4d6b] text-white">
                <SelectValue placeholder="Select market type" />
              </SelectTrigger>
              <SelectContent>
                {marketTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="shortPitch"
              className="block text-sm font-medium mb-2"
            >
              Short Pitch (up to 15 words)
            </label>
            <Textarea
              id="shortPitch"
              value={shortPitch}
              onChange={(e) => setShortPitch(e.target.value)}
              className="bg-[#1c2f4a] border-[#3a4d6b] text-white"
              maxLength={100}
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="businessArea"
              className="block text-sm font-medium mb-2"
            >
              Business Area
            </label>
            <Select onValueChange={setBusinessArea}>
              <SelectTrigger className="bg-[#1c2f4a] border-[#3a4d6b] text-white">
                <SelectValue placeholder="Select business area" />
              </SelectTrigger>
              <SelectContent>
                {businessAreas.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            Founders
            <Button
              type="button"
              onClick={addFounder}
              className="ml-4 bg-blue-950 hover:bg-blue-600"
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Add Founder
            </Button>
          </h2>
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-[#0a1a2f] p-5 rounded-md mb-4 relative"
            >
              {index > 0 && (
                <Button
                  type="button"
                  onClick={() => removeFounder(index)}
                  className="absolute top-2 right-2 bg-blue-800 hover:bg-red-600 p-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Name"
                  value={founder.name}
                  onChange={(e) =>
                    handleFounderChange(index, "name", e.target.value)
                  }
                  className="bg-[#1c2f4a] border-[#3a4d6b] text-white"
                />
                <Input
                  placeholder="Age"
                  value={founder.age}
                  onChange={(e) =>
                    handleFounderChange(index, "age", e.target.value)
                  }
                  className="bg-[#1c2f4a] border-[#3a4d6b] text-white"
                />
                <Input
                  placeholder="Qualifications"
                  value={founder.qualifications}
                  onChange={(e) =>
                    handleFounderChange(index, "qualifications", e.target.value)
                  }
                  className="bg-[#1c2f4a] border-[#3a4d6b] text-white"
                />
                <Input
                  placeholder="Industry Experience"
                  value={founder.industryExperience}
                  onChange={(e) =>
                    handleFounderChange(
                      index,
                      "industryExperience",
                      e.target.value,
                    )
                  }
                  className="bg-[#1c2f4a] border-[#3a4d6b] text-white"
                />
                <Textarea
                  placeholder="Achievements"
                  value={founder.achievements}
                  onChange={(e) =>
                    handleFounderChange(index, "achievements", e.target.value)
                  }
                  className="bg-[#1c2f4a] border-[#3a4d6b] text-white col-span-2"
                />
                <Textarea
                  placeholder="Expertise"
                  value={founder.expertise}
                  onChange={(e) =>
                    handleFounderChange(index, "expertise", e.target.value)
                  }
                  className="bg-[#1c2f4a] border-[#3a4d6b] text-white col-span-2"
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Pitch Video</h2>
          <Input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="bg-[#1c2f4a] border-[#3a4d6b] text-white"
          />
          {pitchVideo && (
            <p className="mt-2 text-sm text-gray-300">
              Selected file: {pitchVideo.name}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full bg-blue-950 hover:bg-gray-600">
          Submit
        </Button>
      </form>
    </div>
  );
}
