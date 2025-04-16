import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function CategoryMobile() {
    const { products, homeData } = useSelector((state) => state.home);
    const images = homeData?.pages?.[0]?.page_image;
    const [hov, setHov] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: (
            <Image className="" src="/image/grayleft.png" width={55} height={55} alt="arrow icon"/>
        ),
        nextArrow: (
            <Image className="" src="/image/grayright.png" width={55} height={55} alt="arrow icon"/>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                // breakpoint: 600,
                breakpoint: 725,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="main_categories">
            <Container>
                <div className="categories">
                    <h2>Explore all Categories</h2>

                    <Slider {...settings}>
                        {homeData && homeData?.pages && homeData?.pages.slice(0, 8).map((items, index) => {
                            return (
                                <div className="categories_Data">
                                    <Link key={index} href={`/category/${items?.slug}-${items?.categories[0]?.slug}`}>
                                        <div className="slide_mainimg product_image">
                                            <img
                                                className="slider_img"
                                                src={items?.page_image}
                                                onMouseEnter={() => setHov(index)}
                                                onMouseLeave={() => setHov(null)}
                                                alt="slider product image "
                                                layout="fill"
                                            />
                                            <div className={`title ${hov === index && "hovEffect"}`}>
                                                <h4>{items.title}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}

                    </Slider>
                </div>
            </Container >
        </div >
    );
}

export default CategoryMobile;

