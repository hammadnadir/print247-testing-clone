import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Link from "next/link";

function Collections() {
  const { pages } = useSelector((state) => state.product);

  const collection = pages?.collection ? pages?.collection : [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: (
      <Image
        className="one_image"
        src="/image/leftarrow.png"
        alt="left arrow"
        width={69}
        height={69}
      />
    ),
    nextArrow: (
      <Image
        className="one_image"
        src="/image/rightarrow.png"
        alt="right arrow"
        width={69}
        height={69}
      />
    ),
    responsive: [
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
        breakpoint: 600,
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
    <div className="main_collection1">
      <h3>Explore More Collections</h3>
      <Container>
        <Slider {...settings}>
          {collection?.map((item, i) => {
            const photoArray = item?.photo ? JSON.parse(item.photo) : [];
            const imageUrl = photoArray?.[0] || '';

            return (
              item ? (
                <div key={i}>
                  <div className="slide1">
                    <Link href={`/${item.slug || ''}`}>
                      <Image className="one_image" src={imageUrl} alt={item.main_image_alt} title={item.main_image_title} width={441} height={448} />
                    </Link>
                    <p>{item.title || ''}</p>
                  </div>
                </div>
              ) : null
            );
          })}

        </Slider>
      </Container>
    </div>
  );
}

export default Collections;