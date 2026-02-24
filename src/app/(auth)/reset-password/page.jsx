"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import CommonInput from "@/components/Shared/CommonInput/CommonInput";
import AuthHeader from "@/components/authComponents/AuthHeader";
import AuthFormContainer from "@/components/authComponents/AuthFormContainer";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // reset password logic
        router.push("/signin");
    };

    return (
        <>
            <AuthHeader
                title="Create new password"
                subtitle="Your new password must be different from previous ones"
            />

            <AuthFormContainer onSubmit={handleSubmit}>
                <CommonInput
                    label="New Password"
                    placeholder="Enter new password"
                    type="password"
                    id="password"
                    required
                />
                <CommonInput
                    label="Confirm New Password"
                    placeholder="Re-type new password"
                    type="password"
                    id="confirm-password"
                    required
                />

                <Button
                    type="submit"
                    className="w-full h-[64px] bg-custom-secondary text-white font-bold rounded-lg hover:bg-custom-secondary/90 transition-all text-[19px] py-0 hover:scale-[1.01] active:scale-[0.99]"
                >
                    Reset Password
                </Button>
            </AuthFormContainer>
        </>
    );
}
