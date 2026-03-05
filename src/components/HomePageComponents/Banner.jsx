"use client";
import { bannerData } from "@/cms/bannerData";
import { Button } from "@/components/ui/button";
import CommonContainer from "../Shared/CommonContainer/CommonContainer";
import BannerVideo from "../Shared/BannerVideo/BannerVideo";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function Banner() {
    const videoRef = useRef(null);
    const playCountRef = useRef(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const maxInitialPlays = 3;

    const handlePlayClick = () => {
        if (videoRef.current) {
            playCountRef.current = maxInitialPlays;
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleVideoEnd = () => {
        playCountRef.current += 1;
        if (playCountRef.current < maxInitialPlays) {
            videoRef.current.play();
        } else {
            setIsPlaying(false);
        }
    };


    return (
        <section className="relative w-full lg:aspect-video overflow-hidden max-w-[1920px] mx-auto">
            {/* Background Media Layer */}
            <div className="lg:absolute inset-0 z-0  -mb-2">
                {/* Video - Plays once */}
                <BannerVideo
                    videoRef={videoRef}
                    handlePlayClick={handlePlayClick}
                    handleVideoEnd={handleVideoEnd}
                    isPlaying={isPlaying}
                />

            </div>
            <div className="bg-[#DBC0A6] lg:bg-transparent w-full z-1 relative">
                {/* Content Layer */}
                <CommonContainer className="relative z-10 h-full w-full">
                    <div className="h-full mx-auto lg:mx-0 flex flex-col justify-start mb-4 lg:pt-46 max-w-2xl">
                        <div className="lg:bg-white/20 lg:backdrop-blur-sm lg:px-4 py-3 rounded-xl">
                            {/* Title */}
                            <h1 className="text-center lg:text-left text-3xl lg:text-5xl text-secondary leading-tight font-bebas">
                                {bannerData.title}
                            </h1>

                            {/* Description */}
                            <p className="relative text-center mx-auto lg:mx-0 lg:text-left text-xs md:text-lg font-medium text-secondary max-w-xl leading-relaxed ">
                                {bannerData.description}
                            </p>

                            {/* CTA Button from Figma */}
                            <div className="mt-10 hidden lg:block space-x-2">
                                <Button className="px-8 py-6 text-lg shadow-lg">
                                    SHOP NOW
                                </Button>


                                {/* Play Button */}
                                <Button
                                    size="icon"
                                    onClick={handlePlayClick}
                                    className={`rounded-full p-6!
                                            ${isPlaying
                                            ? 'scale-0 opacity-0 pointer-events-none'
                                            : 'scale-100 opacity-100 animate-pop'
                                        }`}
                                >
                                    <Play fill />
                                </Button>

                                <style jsx>{`
                                    @keyframes pop {
                                        0% { transform: scale(0.5); opacity: 0; }
                                        70% { transform: scale(1.1); opacity: 1; }
                                        100% { transform: scale(1); opacity: 1; }
                                    }
                                    .animate-pop {
                                        animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                                    }
                                `}</style>
                            </div>
                        </div>
                    </div>
                </CommonContainer>
            </div >
        </section >
    );
}