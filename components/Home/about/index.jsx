import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function About() {
  const isRetina = useMediaQuery({ query: "(max-width: 575px)" });
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = document.getElementById("aboutAudio");
    if (audio) {
      if (isAudioPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
      
    }
  };

  return (
    <div className="main-about">
      {isRetina ? (
        <video autoPlay muted loop>
          <source src="/videos/homeVideo1.mp4" type="video/mp4" />
        </video>
      ) : (
        <Container>
          <div className="videos_main">
            <video autoPlay muted loop>
              <source src="/videos/homeVideo1.mp4" type="video/mp4" />
            </video>
            <div className="audio-button-container">
              {/* <Button onClick={toggleAudio}> */}
                {isAudioPlaying ? <img onClick={toggleAudio} src="/home/about/1.svg" alt="mute"/> : <img onClick={toggleAudio} src="/home/about/2.svg" alt="unmute"/>}
              {/* </Button> */}
              <audio id="aboutAudio" muted={!isAudioPlaying}>
                <source src="/videos/homeVideo1.mp4" type="audio/mp4" />
              </audio>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default About;
