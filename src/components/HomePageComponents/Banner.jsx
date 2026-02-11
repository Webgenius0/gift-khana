"use client";
import { useState, useRef } from "react";
import { bannerData } from "@/cms/bannerData";
import { Button } from "@/components/ui/button";
import CommonContainer from "../Shared/CommonContainer/CommonContainer";

export default function Banner() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <section className="relative w-full aspect-video overflow-hidden bg-[#F3D7C1] max-w-[1920px] mx-auto">
            {/* Background Media Layer */}
            <div className="absolute inset-0 z-0">
                {/* Fallback Image */}
                {!isVideoLoaded && (
                    <img
                        src="/banner_image.png"
                        alt="Banner Background"
                        className="w-full h-full object-cover"
                    />
                )}

                {/* Video - Plays once */}
                <video
                    autoPlay
                    muted
                    playsInline
                    onLoadedData={() => setIsVideoLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <source src="/banner_video.mp4" type="video/mp4" />
                </video>

            </div>

            {/* Content Layer */}
            <CommonContainer className="relative z-10 h-full w-full ">
                <div className="h-full flex flex-col justify-start pt-16 md:pt-24 lg:pt-46 max-w-2xl">
                    {/* Title */}
                    <h1 className="text-5xl text-secondary leading-tight font-bebas">
                        {bannerData.title}
                    </h1>

                    {/* Description */}
                    <p className="text-sm md:text-lg font-medium text-secondary/90 max-w-lg leading-relaxed">
                        {bannerData.description}
                    </p>

                    {/* CTA Button from Figma */}
                    <div className="mt-10">
                        <Button className="px-8 py-6 text-lg shadow-lg">
                            SHOP NOW
                        </Button>
                    </div>
                </div>
            </CommonContainer>
        </section>
    );
}