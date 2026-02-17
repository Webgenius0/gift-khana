import { useRef } from 'react';

const BannerVideo = () => {
    const playCountRef = useRef(1);
    const maxPlays = 3;

    const handleVideoEnd = (event) => {
        if (playCountRef.current < maxPlays) {
            playCountRef.current += 1;
            event.currentTarget.play();
        }
    };

    return (
        <video
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className={`w-full h-full object-cover transition-opacity duration-1000`}
        >
            <source src="/banner_video.mp4" type="video/mp4" />
        </video>
    );
};

export default BannerVideo;