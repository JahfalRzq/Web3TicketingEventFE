"use client"; // Tambahkan ini di baris pertama

import React, { useState } from 'react';
import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RecoveryPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpFailed, setOtpFailed] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Dummy logic for OTP verification
    const dummyOtp = '123456'; // Assume this is the correct OTP
    const enteredOtp = (event.target as HTMLFormElement).otp.value;

    if (enteredOtp === dummyOtp) {
      setOtpVerified(true);
      setOtpFailed(false);
    } else {
      setOtpFailed(true);
    }
  };

  const handleRecovery = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Dummy logic for password recovery
    console.log("New Password:", newPassword);
    alert("Password recovered and logged in!");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={otpVerified ? handleRecovery : handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a href="#" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-center font-bold">Oh, no! You lost your password. Recovery here!.</h1>
          </div>
          <div className="flex flex-col gap-6">
            {!otpVerified && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="username"
                    placeholder="Input Username"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="otp">One Time Password</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Input Your OTP"
                    required
                  />
                </div>
              </>
            )}
            {otpVerified && (
              <div className="grid gap-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  placeholder="Input New Password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            )}
            <Button type="submit" className="w-full" style={{ backgroundColor: '#00B4D8', color: '#FFFFFF' }}>
              {otpFailed ? "Recovery Password" : otpVerified ? "Recovery and Login" : "Send One Time Password"}
            </Button>
          </div>
        </div>
      </form>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}