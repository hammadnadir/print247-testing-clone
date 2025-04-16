import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import Image from "next/image";

function ProcessMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <Image
        className=""
        src="/image/processarrow1.webp"
        width={55}
        height={55}
        alt="arrow icon"
      />
    ),
    nextArrow: (
      <Image
        className=""
        src="/image/processarrow2.webp"
        width={55}
        height={55}
        alt="arrow icon"
      />
    ),

    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  const slides = [
    "/image/Process/p1.mp4",
    "/image/Process/P2.mp4",
    "/image/Process/P3.mp4",
    "/image/Process/P4.mp4",
  ];

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
    <div className="main_processmob">
      <Container>
        <div>
          <div className="our_process">
            <img src="/image/steic.webp" alt="" />
            <small>Dial To Door</small>
          </div>
          <div className="product_selection">
            <span>
              {processData?.[currentSlide]?.h_1}{" "}
              {processData?.[currentSlide]?.h_2}
            </span>
            <p>{processData?.[currentSlide]?.p_1}</p>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            {Object.values(slides)?.map((item, i) => {
              return (
                <div key={i} className="slide_mainimg">
                  <video
                    className="slider_img"
                    src={item}
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default ProcessMobile;
