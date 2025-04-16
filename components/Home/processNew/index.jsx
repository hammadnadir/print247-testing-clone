import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Progress from 'rsuite/Progress';
import 'rsuite/Progress/styles/index.css';

function ProcessNew() {
  const [step, setStep] = useState(0);
  const [value, setValue] = useState(0);
  const videoRef = useRef(null);
  
  useEffect(() => {
    const totalSteps = 4;
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        const percent = (currentTime / duration) * 100;
        setValue(percent);
      }
    };

    const handleEnded = () => {
      setStep(prevStep => (prevStep + 1) % totalSteps);
      setValue(0); // Reset the value for the next step
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
      videoElement.addEventListener('ended', handleEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
        videoElement.removeEventListener('ended', handleEnded);
      }
    };
  }, [step]);

  const data = {
    // 0: "https://res.cloudinary.com/dpubtauz7/video/upload/f_auto:video,q_auto/agozcthbwccvxghtbrbh",
    // 1: "https://res.cloudinary.com/dpubtauz7/video/upload/f_auto:video,q_auto/orlxnwd2unmmnhhd2j76",
    // 2: "https://res.cloudinary.com/dpubtauz7/video/upload/f_auto:video,q_auto/fhsfshmkym2cjiccr06c",
    // 3: "https://res.cloudinary.com/dpubtauz7/video/upload/f_auto:video,q_auto/kwiovliullgjpin7vlew",
    // 0: "https://res.cloudinary.com/dqkrfnxxa/video/upload/v1726078807/ctpenq6wxhdltitpwbk6.mp4",
    // 1: "https://res.cloudinary.com/dqkrfnxxa/video/upload/v1726078980/whehayq6im0nnvz84mej.mp4",
    // 2: "https://res.cloudinary.com/dqkrfnxxa/video/upload/v1726079075/qwh3jg4pdqqhkqw5i5nz.mp4",
    // 3: "https://res.cloudinary.com/dqkrfnxxa/video/upload/v1726079126/undvyzvpdpcds3oltqfq.mp4",
    0: "/image/Process/p1.mp4",
    1: "/image/Process/P2.mp4",
    2: "/image/Process/P3.mp4",
    3: "/image/Process/P4.mp4",
  };
 
  const processData = {
    0: {
      h_1: "Select",
      h_2: "the Product",
      p_1: "Choose the ideal packaging product from an extensive range of our Product Listings.",
    },
    1: {
      h_1: "Instant",
      h_2: "Quote",
      p_1: "Let us know about your commodity. So we can offer you the most attractive prices.",
    },
    2: {
      h_1: "Talk",
      h_2: "to Us",
      p_1: "Dial our number. Brief us! What are your order details, i.e., design, materials, quantities, etc?",
    },
    3: {
      h_1: "Ship",
      h_2: "to You",
      p_1: "We complete all the packaging procedures under one roof and then ship the order to your location.",
    },
  };

  return (
    <div className="main_process">
      <Container>
        <div className="flex_process">
          <div className="inner_process">
            <div className="our_process">
              <img src="/image/steic.webp" alt="steric image" />
              {/* <h3>Our Process</h3> */}
              <small>Dial To Door</small>
            </div>

            <div className="product_selection">
              <span className="heading">
                {processData[step].h_1} <br /> {processData[step].h_2}
              </span>
              <p>{processData[step].p_1}</p>
            </div>
          </div>

          <div className="slider-content flex_slider">
            <div className="progress_height" style={{ height: "100%" }}>
              <span>0{step + 1}</span>
              <Progress.Line
                style={{ height: "90%" }}
                vertical
                percent={value}
                status="success"
                strokeColor="#00A1ED"
              />
              <span>{step > 0 ? "0" : ""}{step}</span>
            </div>

            <div className="slider-wrapper">
              <div className="upper_video" style={{ outline: "none" }}>
                <video
                  className="process_img"
                  src={data[step]}
                  autoPlay
                  loop={false}
                  muted
                  ref={videoRef}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProcessNew;