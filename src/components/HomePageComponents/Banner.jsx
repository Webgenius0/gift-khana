"use client";
import { useState, useRef } from "react";
import { bannerData } from "@/cms/bannerData";
import { Button } from "@/components/ui/button";
import CommonContainer from "../Shared/CommonContainer/CommonContainer";

export default function Banner() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <section className="relative w-full lg:aspect-video overflow-hidden max-w-[1920px] mx-auto">
            {/* Background Media Layer */}
            <div className="lg:absolute inset-0 z-0  -mb-2">
                {/* Video - Plays once */}
                <video
                    autoPlay
                    muted
                    playsInline
                    onLoadedData={() => setIsVideoLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-1000`}
                >
                    <source src="/banner_video.mp4" type="video/mp4" />
                </video>

                {/* Fallback Image */}
                {/* <img
                    src="/banner_image.png"
                    alt="Banner Background"
                    className=" w-full h-full object-cover"
                /> */}

            </div>
            <div className="bg-bg-primary lg:bg-transparent w-full z-1 relative">
                {/* Content Layer */}
                <CommonContainer className="relative z-10 h-full w-full">
                    <div className="h-full mx-auto lg:mx-0 flex flex-col justify-start lg:pt-46 max-w-2xl">
                        {/* Title */}
                        <h1 className="text-center lg:text-left text-3xl lg:text-5xl text-secondary leading-tight font-bebas">
                            {bannerData.title}
                        </h1>

                        {/* Description */}
                        <p className="relative text-center mx-auto lg:mx-0 lg:text-left text-xs md:text-lg font-medium text-secondary max-w-xl leading-relaxed lg:bg-white/20 lg:backdrop-blur-sm lg:px-4 py-3 rounded-xl">
                            {bannerData.description}
                        </p>

                        {/* CTA Button from Figma */}
                        <div className="mt-10 hidden lg:block">
                            <Button className="px-8 py-6 text-lg shadow-lg">
                                SHOP NOW
                            </Button>
                        </div>
                    </div>
                </CommonContainer>
            </div>
        </section>
    );
}