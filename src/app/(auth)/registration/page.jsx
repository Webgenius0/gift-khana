"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CommonInput from "@/components/Shared/CommonInput/CommonInput";
import AuthHeader from "@/components/authComponents/AuthHeader";
import AuthFormContainer from "@/components/authComponents/AuthFormContainer";
import AuthAgreement from "@/components/authComponents/AuthAgreement";
import GoogleLoginBtn from "@/components/socialLogin/GoogleLoginBtn";
import AppleLoginBtn from "@/components/socialLogin/AppleLoginBtn";
import { useRouter } from "next/navigation";

export default function RegistrationPage() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // registration logic
        router.push("/otp-verification");
    };

    return (
        <>
            <AuthHeader
                title="Create a Gift Khana account"
                subtitle="Join us today for a personalized experience"
            />

            <AuthFormContainer onSubmit={handleSubmit}>
                <CommonInput
                    label="Full Name"
                    placeholder="Enter your full name"
                    type="text"
                    id="name"
                    required
                />
                <CommonInput
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required
                />
                <CommonInput
                    label="Password"
                    placeholder="Create a password"
                    type="password"
                    id="password"
                    required
                />

                <AuthAgreement />

                <Button
                    type="submit"
                    className="w-full h-[64px] bg-custom-secondary text-white font-bold rounded-lg hover:bg-custom-secondary/90 transition-all text-[19px] py-0 hover:scale-[1.01] active:scale-[0.99]"
                >
                    Create Account
                </Button>
            </AuthFormContainer>

            <div className="mt-8 space-y-4">
                <GoogleLoginBtn />
                <AppleLoginBtn />
            </div>

            <div className="mt-8 text-center">
                <p className="text-[15px] text-custom-secondary/80">
                    Already have an account?{" "}
                    <Link href="/signin" className="font-bold text-custom-secondary hover:underline underline-offset-4">
                        Sign in
                    </Link>
                </p>
            </div>
        </>
    );
}
