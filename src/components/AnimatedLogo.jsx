import React, { useRef } from "react";

export const AnimatedLogo = () => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{width: "100%", height: "100%", cursor: "pointer"}}
        >
            <video
                ref={videoRef}
                src="/Logo-A.mov" // Обратите внимание на путь
                muted
                style={{width: "150%", height: "100%"}}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="logo" viewBox="0 0 120 120">
                <path
                    d="M10  H 10 V 0 H 10 L 10 10"
                    stroke="black"
                    fill="transparent"
                />
            </svg>
        </div>
    );
};

export default AnimatedLogo;