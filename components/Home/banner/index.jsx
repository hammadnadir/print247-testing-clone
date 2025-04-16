import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Banner() {
  const [stateValue, setStateValue] = useState(0);

  const isRetina = useMediaQuery({ query: "(max-width: 574px)" });
  const isTabView = useMediaQuery({ query: "(max-width: 912px) and (min-width: 575px)" });

  const carouselData = [
    {
      desktop: "/home/newBanner/Main Banners/main_banner_1.webp",
      tab: "/home/newBanner/tab banner/tab_banner_1.webp",
      mobile: "/home/newBanner/Banner mbl/mob_banner_1.webp",
      des: "We Empower Small Business Owners, Luxury Retail Stores, And A Wide Range of Corporate Sectors with Custom Packaging Solutions.",
    },
    {
      desktop: "/home/newBanner/Main Banners/main_banner_2.webp",
      tab: "/home/newBanner/tab banner/tab_banner_2.webp",
      mobile: "/home/newBanner/Banner mbl/mob_banner_2.webp",
      des: "We Empower Small Business Owners, Luxury Retail Stores, And A Wide Range of Corporate Sectors with Custom Packaging Solutions.",
    },
    {
      desktop: "/home/newBanner/Main Banners/main_banner_3.webp",
      tab: "/home/newBanner/tab banner/tab_banner_3.webp",
      mobile: "/home/newBanner/Banner mbl/mob_banner_3.webp",
      des: "We Empower Small Business Owners, Luxury Retail Stores, And A Wide Range of Corporate Sectors with Custom Packaging Solutions.",
    },
  ];

  const getImage = (item) => {
    if (isRetina) return item.mobile;
    if (isTabView) return item.tab;
    return item.desktop;
  };

  return (
    <div className="main-banner">
      <div className="main-banner">
        <Swiper
          direction="horizontal"
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false}}
          speed={1000}
          modules={[Autoplay, Pagination]}
          allowTouchMove={false}
          pagination={{ clickable: true,
            renderBullet: (indx, className) => {
              return `<span key="${indx}" class="${className}">
              <svg viewBox="0 0 36 36">
                <circle class="bg" cx="18" cy="18" r="16"></circle>
                <circle class="progress" cx="18" cy="18" r="16"></circle>
              </svg>
            </span>`;
            },
          }}
          style={{ width: "100vw", height: "100vh" }}
        >
          {carouselData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="background_image">
                <Image src={getImage(item)} alt={`Banner ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="top_sectionb">
        <Container>
          <div className="main_Section">
            <div className="linear_gradiant_gray">
              <div className="main_banner_data">
                <div className="main_banner_detail">
                  <h1 className="heading1">Product Packaging <br />at its Peak</h1>
                </div>
                <p className="banner_desc">{carouselData?.[stateValue]?.des}</p>
                <div className="flex_new_buttons">
                  <div>
                    <Link href="/custom-mylar-bags"><button className="new_buttons">Mylar Bags</button></Link>
                  </div>
                  <div>
                    <Link href="/custom-labels"><button className="new_buttons">Custom Labels</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Banner;