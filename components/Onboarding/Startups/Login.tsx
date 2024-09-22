// components/Login.tsx
import { useState } from "react";
import { useRecoilState } from "recoil";
import { emailState, currentStepState } from "@/contexts/onboardingAtom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [email, setEmail] = useRecoilState(emailState);
  const [, setCurrentStep] = useRecoilState(currentStepState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setCurrentStep("CompanyInfo"); // Move to the next form step
  };

  return (
    <div className="flex items-center justify-center w-3/4">
      <div className="bg-gradient-to-b from-[#021526] to-[#050b2b] shadow-lg p-8 md:p-12 w-full text-center flex flex-col justify-center items-center border-x border-[#03346E] border-opacity-50 h-screen">
        <div className="flex w-3/4">
          <div className="w-1 bg-[#144272]"></div>
          <div className="p-8 w-full">
            <h2 className="text-2xl font-semibold text-gray mb-6">
              Sign up into Fundline
            </h2>
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 text-gray-500"
                required
              />
              <Button
                type="submit"
                className="w-full bg-[#144272] hover:bg-[#0a2b4c] text-white"
              >
                Continue
              </Button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
              You can also sign in with{" "}
              <a
                href="#"
                className="text-[#144272] hover:underline hover:text-[#0a2b4c]"
              >
                Google
              </a>{" "}
              or{" "}
              <a
                href="#"
                className="text-[#144272] hover:underline hover:text-[#0a2b4c]"
              >
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
