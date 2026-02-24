"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import CommonInput from "@/components/Shared/CommonInput/CommonInput";
import AuthHeader from "@/components/authComponents/AuthHeader";
import AuthFormContainer from "@/components/authComponents/AuthFormContainer";
import AuthAgreement from "@/components/authComponents/AuthAgreement";
import GoogleLoginBtn from "@/components/socialLogin/GoogleLoginBtn";
import AppleLoginBtn from "@/components/socialLogin/AppleLoginBtn";

export default function LoginPage() {
    return (
        <>
            <AuthHeader
                title="Sign in or create a Gift Khana account"
                subtitle="Enter your email below to get started"
            />

            <AuthFormContainer>
                <CommonInput
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required
                />
                <CommonInput
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    id="password"
                    required
                />

                <AuthAgreement />

                <Button
                    type="submit"
                    className="w-full h-[64px] bg-custom-secondary text-white font-bold rounded-lg hover:bg-custom-secondary/90 transition-all text-[19px] py-0 hover:scale-[1.01] active:scale-[0.99]"
                >
                    Continue
                </Button>
            </AuthFormContainer>

            <div className="mt-8 space-y-4">
                <GoogleLoginBtn />
                <AppleLoginBtn />
            </div>
        </>
    );
}
