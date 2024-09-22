"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Component() {
  const [legalName, setLegalName] = useState("");
  const [country, setCountry] = useState("");
  const [entityType, setEntityType] = useState("");

  return (
    <div className="flex items-center justify-center w-3/4">
      <div className="bg-gradient-to-b from-[#021526] to-[#050b2b] shadow-lg p-8 md:p-12 w-full text-center flex flex-col justify-center items-center border-x border-[#03346E] border-opacity-50 h-screen">
        <div className="flex w-3/4">
          <div className="w-1 bg-[#144272]"></div>
          <div className="p-8 w-full">
            <Card className="w-full border-blue-950 bg-gradient-to-b from-[#021526] to-[#050b2b] max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-100">
                  <span className="inline-block w-1 bg-[#144272] h-8 mr-3 align-middle"></span>
                  Legal information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 mb-4">
                  Companies must be registered as corporations in the United
                  States.
                </p>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Legal Name"
                      value={legalName}
                      onChange={(e) => setLegalName(e.target.value)}
                      className="mb-4 text-gray-500"
                    />
                    <Select onValueChange={setCountry}>
                      <SelectTrigger className="w-full mb-4 text-gray-500">
                        <SelectValue placeholder="Country of incorporation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select onValueChange={setEntityType}>
                      <SelectTrigger className="w-full mb-4 text-gray-500">
                        <SelectValue placeholder="Company Entity Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="llc">LLC</SelectItem>
                        <SelectItem value="corporation">Corporation</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    className="w-full bg-[#144272] hover:bg-[#0a2b4c] text-white"
                    type="submit"
                  >
                    Next
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
