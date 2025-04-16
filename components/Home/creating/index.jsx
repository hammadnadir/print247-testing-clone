import { instaData } from "@/data";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

function Creating() {
  const [playing, setPlaying] = useState(
    new Array(instaData.length).fill(false)
  );
  const [videoSrc, setVideoSrc] = useState(instaData.map((item) => item.path));

  const handleMouseEnter = (index, videoElement) => {
    // Change video src to path2 on hover
    if (!playing[index]) {
      videoElement.src = instaData[index].path2; // Set the new src directly
      videoElement.play();
      setPlaying((prevState) => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      });
    }
  };

  const handleMouseLeave = (index, videoElement) => {
    // Pause the video on mouse leave
    videoElement.pause();
    setPlaying((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const handleClick = (index, videoElement) => {
    if (videoElement.paused) {
      videoElement.play();
      setPlaying((prevState) => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      });
    } else {
      videoElement.pause();
      setPlaying((prevState) => {
        const newState = [...prevState];
        newState[index] = false;
        return newState;
      });
    }
  };

  return (
    <div className="main_creating" style={{position:"relative", zIndex:"233", backgroundColor:"white" ,marginTop:"-10px"  }}>
      <Marquee>
        <small style={{ marginRight: "20px" }}>
          Let{"'"}em See Your Products and Say, "Wow"
        </small>
        <small style={{ marginRight: "20px" }}>
          Let{"'"}em See Your Products and Say, "Wow"
        </small>
      </Marquee>
      <div className="print247">
        <Container>
          <div>
            <h2>Set the Trends</h2>
            <p>
              Indeed, you are just a call away from us. Hence, you set the new
              trends of packaging products with us. Because we think
              “Beautiful”. We think “Revolutionary”. For You!
            </p>
          </div>
        </Container>
        {/* <div className="main_boxes">
          <Marquee pauseOnHover direction="right">
            {instaData.map((vid, i) => (
              <div key={i}>
                <video
                  poster={vid?.thumbnail}
                  className="video_player"
                  src={videoSrc[i]} 
                  loop
                  muted
                  onMouseEnter={(e) => handleMouseEnter(i, e.target)}
                  onMouseLeave={(e) => handleMouseLeave(i, e.target)}
                  onClick={(e) => handleClick(i, e.target)}
                />
              </div>
            ))}
          </Marquee>
        </div> */}
      </div>
    </div>
  );
}

export default Creating;
