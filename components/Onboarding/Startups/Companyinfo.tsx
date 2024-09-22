"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Component() {
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [capitalRaised, setCapitalRaised] = useState("");
  const [teamMembers, setTeamMembers] = useState("");

  return (
    <div className="flex items-center justify-center w-3/4">
      <div className="bg-gradient-to-b from-[#021526] to-[#050b2b] shadow-lg p-8 md:p-12 w-full text-center flex flex-col justify-center items-center border-x border-[#03346E] border-opacity-50 h-screen">
        <div className="flex w-3/4">
          <div className="w-1 bg-[#144272]"></div>
          <div className="p-8 w-full">
            <Card className="w-full border-blue-950 bg-gradient-to-b from-[#021526] to-[#050b2b]  max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-100">
                  <span className="inline-block w-1 text-white h-8 mr-3 align-middle"></span>
                  Tell us about your company
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="mb-4 text-gray-500"
                    />
                    <Input
                      type="url"
                      placeholder="Website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="mb-4 text-gray-500"
                    />
                    <Input
                      type="text"
                      placeholder="Total capital raised"
                      value={capitalRaised}
                      onChange={(e) => setCapitalRaised(e.target.value)}
                      className="mb-4 text-gray-500"
                    />
                    <Input
                      type="text"
                      placeholder="Team members with equity (not including investors)"
                      value={teamMembers}
                      onChange={(e) => setTeamMembers(e.target.value)}
                      className="mb-4 text-gray-500"
                    />
                  </div>
                  <Button
                    className="w-full bg-[#144272] hover:bg-[#0a2b4c] text-white"
                    type="submit"
                  >
                    Next
                  </Button>
                  <p className="text-sm text-center text-gray-600">
                    Need to incorporate?{" "}
                    <a
                      href="#"
                      className="text-[#144272] hover:underline hover:text-[#0a2b4c]"
                    >
                      Get started
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
