"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-start px-4 pt-16 pb-24 font-montserrat">
            <div className="w-full max-w-[580px]">
                <h1 className="text-[28px] font-bold text-custom-secondary mb-1 leading-tight">
                    Sign in or create a Gift Khana account
                </h1>
                <p className="text-[17px] text-custom-secondary/80 mb-10">
                    Enter your email below to get started
                </p>

                <form className="space-y-6">
                    <div className="space-y-1.5 focus-within:text-blue-600 transition-colors">
                        <label htmlFor="email" className="text-[15px] font-medium text-custom-secondary/70">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                id="email"
                                type="email"
                                placeholder=""
                                className="w-full h-[64px] px-5 bg-white border-[3px] border-custom-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-xl font-medium text-custom-secondary"
                                required
                            />
                        </div>
                    </div>

                    <p className="text-[14px] text-custom-secondary/80 leading-[1.6]">
                        By clicking &quot;Continue,&quot; I agree to the{" "}
                        <Link href="#" className="underline hover:text-custom-secondary transition-colors underline-offset-2">
                            Gift Khana User Agreement
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="underline hover:text-custom-secondary transition-colors underline-offset-2">
                            Privacy Notice
                        </Link>.
                    </p>

                    <Button
                        type="submit"
                        className="w-full h-[64px] bg-custom-secondary text-white font-bold rounded-lg hover:bg-custom-secondary/90 transition-all text-[19px] py-0 hover:scale-[1.01] active:scale-[0.99]"
                    >
                        Continue
                    </Button>
                </form>

                <div className="mt-8 space-y-4">
                    <button
                        type="button"
                        className="w-full h-[64px] bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-4 hover:bg-gray-50 transition-all font-semibold text-custom-secondary text-[17px] shadow-sm hover:shadow-md active:scale-[0.99]"
                    >
                        <svg className="w-7 h-7" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        <span className="flex gap-2">
                            <span className="font-bold">Continue</span>
                            <span className="font-medium opacity-80">with Google</span>
                        </span>
                    </button>

                    <button
                        type="button"
                        className="w-full h-[64px] bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-4 hover:bg-gray-50 transition-all font-semibold text-custom-secondary text-[17px] shadow-sm hover:shadow-md active:scale-[0.99]"
                    >
                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.073 17.3c-.628.93-1.463 1.838-2.463 1.847-.985.009-1.312-.591-2.478-.591-1.166 0-1.528.582-2.463.6-1 .018-1.928-.973-2.564-1.901-1.309-1.901-2.001-5.368-.691-7.633.655-1.127 1.815-1.847 3.076-1.865 1 .009 1.874.682 2.474.682.601 0 1.638-.818 2.8-.7 1.164.118 2.1 2.3 2.1 2.3s-.937.455-1.555 1.173c-.618.718-.891 1.637-.891 2.501 0 1.146.436 2.046 1.082 2.683.336.31.736.564.736.564s-.309.436-.736.845zM13.628 3c-.027.609-.327 1.182-.836 1.564-.509.382-1.137.527-1.728.455.027-.609.336-1.146.791-1.519.455-.373 1.155-.545 1.773-.5z" />
                        </svg>
                        <span className="flex gap-2">
                            <span className="font-bold">Continue</span>
                            <span className="font-medium opacity-80">with Apple</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
