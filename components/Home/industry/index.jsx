import { industries } from "@/data/industries";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

function Industry() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: (
      <Image
        className=""
        src="/image/newblackright.webp"
        width={55}
        height={55}
        alt="arrow icon"
      />
    ),
    nextArrow: (
      <Image
        className=""
        src="/image/newblackleft.webp"
        width={55}
        height={55}
        alt="arrow icon"
      />
    ),
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="main_homeindustry">
      <Container>
        {/* <h2 className="heading">Revolutionize Product Packaging</h2> */}
        <h2 className="heading">All-Inclusive Industrial Packaging Supplies</h2>
        <Slider {...settings}>
          {Object.values(industries).map((slide, index) => (
            <div key={index} className="slide_indimg">
              <Link style={{ outline: "none" }} href={slide.links}>
                <img className="ind_img" src={slide.imgSrc} alt={slide.title} />
              </Link>
              <div className="main_roundedInd">
                <Link href={slide.links}>
                  <div className="home_rounded">
                    <div>
                      <span className="titleInd_heading">{slide.title}</span>
                    </div>
                    <div>
                      <img
                        className="arrowslide"
                        src={slide.secondaryImgSrc}
                        alt="arrow line icon"
                      />
                    </div>
                  </div>
                </Link>
                <p className="titleInd_para">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default Industry;
