"use client";
import React from "react";
import CommonContainer from "../Shared/CommonContainer/CommonContainer";
import { ctaSectionData } from "@/cms/ctaSectionData";
import CTAButton from "../CTA/CTAButton";

export default function CTASection() {
    return (
        <section className="py-20 max-w-[1920px] mx-auto">
            <CommonContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {ctaSectionData.map((item, index) => (
                        <CTAButton key={index} item={item} index={index} />
                    ))}
                </div>
            </CommonContainer>
        </section>
    );
}