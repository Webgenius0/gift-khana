"use client";
import React from "react";
import Link from "next/link";
import { ChevronLeft, RotateCcw, RotateCw, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function EditLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#FBF3EA]">
            {/* Editor Top Header */}
            <header className="h-16 bg-white border-b border-[#F3E8E0] flex items-center justify-between px-4 sticky top-0 z-50">
                {/* Left Section: Back and Name */}
                <div className="flex items-center gap-3 sm:gap-6">
                    <Link href="/personalized-products" className="flex items-center gap-1 sm:gap-2 text-sm font-medium hover:opacity-70 transition-all text-[#182235]">
                        <ChevronLeft size={20} />
                        <span className="hidden xs:inline sm:inline">Back</span>
                    </Link>
                    <div className="hidden sm:flex items-center gap-3 border-l pl-6 h-6 border-[#182235]/10">
                        <span className="text-sm font-semibold text-[#182235]">Throw Pillow</span>
                        <div className="flex items-center gap-1.5 bg-[#E8F5E9] text-[#2E7D32] px-2 py-0.5 rounded-full text-[10px] font-bold">
                            <div className="w-1 h-1 bg-[#2E7D32] rounded-full" />
                            Saved
                        </div>
                    </div>
                </div>

                {/* Center Section: Tabs */}
                <nav className="hidden md:flex items-center h-full">
                    {["Design", "Options", "Review"].map((tab) => (
                        <div
                            key={tab}
                            className={cn(
                                "h-full flex items-center px-6 text-sm font-semibold cursor-pointer border-b-2 transition-all",
                                tab === "Design" ? "border-[#182235] text-[#182235]" : "border-transparent text-[#182235]/40 hover:text-[#182235]/60"
                            )}
                        >
                            {tab}
                        </div>
                    ))}
                </nav>

                {/* Right Section: Actions */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="hidden lg:flex items-center gap-1 mr-2 border-r pr-4 border-[#182235]/10">
                        <button className="p-2 text-[#182235]/60 hover:text-[#182235] transition-all bg-[#F3E8E0]/30 rounded-full">
                            <RotateCcw size={18} />
                        </button>
                        <button className="p-2 text-[#182235]/60 hover:text-[#182235] transition-all bg-[#F3E8E0]/30 rounded-full">
                            <RotateCw size={18} />
                        </button>
                    </div>

                    <button className="flex items-center gap-2 text-sm font-semibold text-[#182235] px-2 sm:px-4 py-2 hover:bg-[#F3E8E0]/30 rounded-full transition-all">
                        <Eye size={20} />
                        <span className="hidden md:inline">Preview</span>
                    </button>

                    <Button className="bg-[#182235] hover:bg-[#1f2b45] text-white rounded-full px-4 sm:px-6 font-bold text-sm h-10">
                        <span className="hidden sm:inline">Next: Design Back</span>
                        <span className="sm:hidden">Next</span>
                    </Button>
                </div>
            </header>

            <main className="flex-1 overflow-hidden">
                {children}
            </main>
        </div>
    );
}