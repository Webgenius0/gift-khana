"use client";
import React from "react";
import CommonContainer from "../CommonContainer/CommonContainer";
import { Phone, MessagesSquare } from "lucide-react";
import Link from "next/link";
import { footerData } from "@/cms/footerData";
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8 font-montserrat max-w-[1920px] mx-auto">
            <CommonContainer>
                {/* Upper Section: Links, Phone, and Get Help */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center md:justify-start gap-8 lg:gap-12 text-base font-medium">
                        {footerData.links.map((link, idx) => (
                            <Link key={idx} href={link.href} className="hover:opacity-80 transition-opacity">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Contact and Help */}
                    <div className="flex flex-col sm:flex-row items-center gap-10 lg:gap-14">
                        {/* Phone Number */}
                        <div className="flex items-center gap-4">
                            <Phone className="w-8 h-8 rotate-[15deg] fill-white" />
                            <span className="text-xl font-bold tracking-tight">{footerData.contact.phone}</span>
                        </div>

                        {/* Get Help Button */}
                        <Button className="bg-white text-secondary px-10! py-8 rounded-[40px] flex items-center gap-4 font-bold hover:bg-white/95 transition-all shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)] group">
                            <MessagesSquare className="w-8 h-8" />
                            <span className="text-xl">{footerData.help.text}</span>
                        </Button>
                    </div>
                </div>

                {/* Middle Section: Payment Methods */}
                <div className="flex justify-center mb-12">
                    <img
                        src={footerData.paymentImage}
                        alt="Payment Methods"
                        className="h-12 md:h-14 object-contain"
                    />
                </div>

                {/* Bottom Section: Copyright and Legal */}
                <div className="text-center pt-8">
                    <p className="text-[12px] md:text-sm text-white/80 font-medium tracking-wide">
                        {footerData.copyright}
                    </p>
                </div>
            </CommonContainer>
        </footer>
    );
}
