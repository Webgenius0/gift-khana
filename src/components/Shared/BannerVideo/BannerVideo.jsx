const BannerVideo = ({ videoRef, handlePlayClick, handleVideoEnd, isPlaying }) => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover"
            >
                <source src="/banner_video.mp4" type="video/mp4" />
            </video>

            {/* Play Button */}
            <button
                onClick={handlePlayClick}
                className={`lg:hidden absolute bottom-6 left-4 z-10 p-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg transition-all duration-300 transform 
                    ${isPlaying
                        ? 'scale-0 opacity-0 pointer-events-none'
                        : 'scale-100 opacity-100 animate-pop'
                    }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-8 h-8"
                >
                    <path d="M8 5v14l11-7z" />
                </svg>
            </button>

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
    );
};

export default BannerVideo;