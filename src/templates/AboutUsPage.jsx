"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Shared/NavBar/Header";
import Footer from "@/components/Shared/Footer/Footer";
import CommonContainer from "@/components/Shared/CommonContainer/CommonContainer";
import { aboutUsData } from "@/cms/aboutUsData";

export default function AboutUsPage() {
    return (
        <CommonContainer className="pt-8">
            {/* Breadcrumbs */}
            <div className="text-sm font-montserrat text-secondary/60 mb-6 uppercase tracking-wider">
                <span>HOME</span>
                <span className="mx-2">&gt;</span>
                <span className="text-secondary font-bold">About us</span>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-light text-secondary font-montserrat mb-8">
                {aboutUsData.title}
            </h1>

            {/* Banner Image */}
            <div className="relative w-full aspect-[21/9] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden mb-16">
                <Image
                    src={aboutUsData.bannerImage}
                    alt="About Us Banner"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
                {/* Text Content */}
                <div className="flex-1 font-courgette text-secondary space-y-8">
                    {/* Intro Quote */}
                    <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                        {aboutUsData.content.intro}
                    </p>

                    {/* Paragraphs */}
                    <div className="font-montserrat text-base md:text-lg space-y-6 leading-relaxed text-secondary/90 font-medium">
                        {aboutUsData.content.paragraphs.map((paragraph, index) => (
                            <p key={index} className={index === 1 ? "" : ""}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Side Image */}
                <div className="lg:w-2/5 relative aspect-square rounded-none overflow-hidden shadow-xl">
                    {/* Paper texture overlay effect could be added here if needed */}
                    <Image
                        src={aboutUsData.content.sideImage}
                        alt="Gift Khana Branding"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </CommonContainer>
    );
}
