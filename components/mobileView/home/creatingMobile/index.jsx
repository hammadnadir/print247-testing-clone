import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import HoverVideoPlayer from 'react-hover-video-player';

function CreatingMobile() {

  // const instaData = [
  //   {
  //     path: "/New Reel/BkboxesReel.mp4",
  //     thumbnail: "/image/reelthumbnail/BkboxesThumb.jpg",
  //   },
  //   {
  //     path: "/New Reel/BoxesReel.mp4",
  //     thumbnail: "/image/reelthumbnail/BoxesThumb.jpg",
  //   },
  //   {
  //     path: "/New Reel/phybagReel.mp4",
  //     // path: "https://res.cloudinary.com/dj9hzubdg/video/upload/v1728498886/jbgbqwday3qle7wrw9rt.mp4",
  //     thumbnail: "/image/reelthumbnail/phybagThumb.jpg",
  //   },
  //   {
  //     path: "/New Reel/ScentboxesReel.mp4",
  //     thumbnail: "/image/reelthumbnail/ScentboxesThumb.jpg",
  //   },
  //   {
  //     path: "/New Reel/productpackageReel.mp4",
  //     thumbnail: "/image/reelthumbnail/productpackageThumb.webp",
  //   },
  //   {
  //     path: "/New Reel/Yodoo.mp4",
  //     thumbnail: "/image/reelthumbnail/YoodooboxThumbnail.jpg",
  //   },
  //   {
  //     path: "/New Reel/luxrylabelReel.mp4",
  //     thumbnail: "/image/reelthumbnail/luxrylabeThumb.jpg",
  //   },
  // ];

  // const videoRefs = useRef([]);

  // useEffect(() => {
  //     const videos = videoRefs.current;

  //     const playVideo = (event) => {
  //         event.target.play();
  //     };

  //     const pauseVideo = (event) => {
  //         event.target.pause();
  //         event.target.currentTime = 0;
  //     };

  //     videos.forEach((video) => {
  //         if (video) {
  //             video.addEventListener("mouseover", playVideo);
  //             video.addEventListener("mouseout", pauseVideo);
  //             video.addEventListener("touchstart", playVideo);
  //             video.addEventListener("touchend", pauseVideo);
  //         }
  //     });

  //     return () => {
  //         videos.forEach((video) => {
  //             if (video) {
  //                 video.removeEventListener("mouseover", playVideo);
  //                 video.removeEventListener("mouseout", pauseVideo);
  //                 video.removeEventListener("touchstart", playVideo);
  //                 video.removeEventListener("touchend", pauseVideo);
  //             }
  //         });
  //     };
  // }, []);

  return (
    <div className="main_creatingMobile">
      <Marquee>
        <small style={{ marginRight: "15px" }}>Let{"'"}em See Your Products and Say, "Wow"</small>
        <small style={{ marginRight: "15px" }}>Let{"'"}em See Your Products and Say, "Wow"</small>
      </Marquee>
      <div className="print247Mobile">
        <Container>
          <div>
            <h2>Set the Trends</h2>
            <p>Indeed, you are just a call away from us. Hence, you set the new trends of packaging products with us. Because we think “Beautiful”. We think “Revolutionary”. For You!</p>
            {/* <div className="main_boxesMobile">
              <Marquee direction="right">
                {instaData.map((vid, i) => (
                  <a href={vid.link} key={i} target="_blank" rel="noopener noreferrer">
                    <div className="mainvideo_Mobile">
                      <video poster={vid?.thumbnail} className="video_playerMobile" src={vid.path}></video>
                      <div className="playButtonSet">
                        <img src="/image/plays.png" alt="play button icon" />
                      </div>
                    </div>
                  </a>
                ))}
              </Marquee>
            </div> */}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default CreatingMobile;
