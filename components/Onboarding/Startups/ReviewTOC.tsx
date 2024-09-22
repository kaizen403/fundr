"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Component() {
  const [funlinen, setFunlinen] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

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
                  Review and agree to terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Select onValueChange={setFunlinen}>
                      <SelectTrigger className="w-full mb-4 text-gray-500">
                        <SelectValue placeholder="funlinen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="funlin">funlin</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-100 mb-2">
                        Terms and acknowledgements
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">
                        I have read and accept the following agreements:
                      </p>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={agreedToTerms}
                          onCheckedChange={(checked) =>
                            setAgreedToTerms(checked as boolean)
                          }
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm text-gray-300"
                        >
                          <span className="text-[#144272]">Privacy Policy</span>
                          ,{" "}
                          <span className="text-[#144272]">
                            Terms of Service
                          </span>
                          ,{" "}
                          <span className="text-[#144272]">
                            Master Subscription Agreement
                          </span>
                          ,{" "}
                          <span className="text-[#144272]">
                            Electronic Disclosure & E-Signature Consent
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-[#144272] hover:bg-[#0a2b4c] text-white"
                    type="submit"
                    disabled={!agreedToTerms}
                  >
                    Finish Setup
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
