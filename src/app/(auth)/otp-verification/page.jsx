"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import AuthHeader from "@/components/authComponents/AuthHeader";
import AuthFormContainer from "@/components/authComponents/AuthFormContainer";
import { useRouter } from "next/navigation";

export default function OTPVerificationPage() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // OTP verification logic
        router.push("/signin");
    };

    return (
        <>
            <AuthHeader
                title="Verify your account"
                subtitle="We've sent a 6-digit code to your email"
            />

            <AuthFormContainer onSubmit={handleSubmit}>
                <div className="space-y-4 flex flex-col items-center">
                    <label className="text-[17px] font-bold text-custom-secondary/80 w-full text-left">
                        Verification Code
                    </label>
                    <InputOTP maxLength={6} containerClassName="group flex items-center gap-2 sm:gap-4">
                        <InputOTPGroup className="gap-2 sm:gap-4">
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>

                <div className="flex flex-col gap-4 mt-10">
                    <Button
                        type="submit"
                        className="w-full h-[64px] bg-custom-secondary text-white font-bold rounded-lg hover:bg-custom-secondary/90 transition-all text-[19px] py-0 hover:scale-[1.01] active:scale-[0.99]"
                    >
                        Verify & Continue
                    </Button>

                    <button type="button" className="text-[15px] font-bold text-custom-secondary hover:underline underline-offset-4">
                        Resend Code
                    </button>
                </div>
            </AuthFormContainer>

            <div className="mt-12 text-center">
                <Link href="/signin" className="text-[15px] font-medium text-custom-secondary/60 hover:text-custom-secondary transition-colors">
                    Back to Sign in
                </Link>
            </div>
        </>
    );
}
