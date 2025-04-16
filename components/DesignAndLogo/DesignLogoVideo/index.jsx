import React, { useRef, useEffect } from 'react';

function DesignLogoVideo() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            // Set the initial playback position to skip the first 2 seconds (2 seconds * 1000 milliseconds)
            videoRef.current.currentTime = 2;
        }
    }, []);

    return (
        <div className='main_DesignLogoVideo'>
            <div className='video_part'>
                <video width="100%" autoPlay muted loop ref={videoRef}>
                    <source src="/image/designvideo.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default DesignLogoVideo;