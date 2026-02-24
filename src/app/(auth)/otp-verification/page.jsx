"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CommonInput from "@/components/Shared/CommonInput/CommonInput";
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
                <CommonInput
                    label="Verification Code"
                    placeholder="0 0 0 0 0 0"
                    type="text"
                    id="otp"
                    required
                    maxLength={6}
                    className="text-center tracking-widest text-3xl h-[80px]"
                />

                <div className="flex flex-col gap-4">
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
