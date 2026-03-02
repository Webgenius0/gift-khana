"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CommonInput from "@/components/Shared/CommonInput/CommonInput";
import AuthHeader from "@/components/authComponents/AuthHeader";
import AuthFormContainer from "@/components/authComponents/AuthFormContainer";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // forgot password logic
        router.push("/otp-verification");
    };

    return (
        <>
            <AuthHeader
                title="Forgot Password?"
                subtitle="Don't worry, happen to the best of us. Enter your email to reset."
            />

            <AuthFormContainer onSubmit={handleSubmit}>
                <CommonInput
                    label="Email Address"
                    placeholder="Enter your registered email"
                    type="email"
                    id="email"
                    required
                />

                <Button
                    type="submit"
                    className="w-full h-[64px] bg-custom-secondary text-white font-bold rounded-lg hover:bg-custom-secondary/90 transition-all text-[19px] py-0 hover:scale-[1.01] active:scale-[0.99]"
                >
                    Send Reset Code
                </Button>
            </AuthFormContainer>

            <div className="mt-12 text-center">
                <Link href="/signin" className="text-[15px] font-bold text-custom-secondary hover:underline underline-offset-4">
                    Back to Sign in
                </Link>
            </div>
        </>
    );
}
