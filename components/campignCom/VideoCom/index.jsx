import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

function VideoCom() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (!videoRef.current.paused) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="newabout_main_pack">
      <Container>
        <div className="about_video" onClick={handleVideoClick}>
          <video ref={videoRef} muted loop>
            <source src="/videos/homeVideos.mp4" type="video/mp4" />
          </video>
          {!isPlaying && (
            <div className='ring_absolute'>
              <img src='/image/video_ring.png' className="ringlogo" alt="Video Ring" />
              <div className="play_absolute" onClick={handlePlayClick}>
                <div className='img_div'>
                <img src="/image/Icon akar-play.png" alt="Play Button" />
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default VideoCom;