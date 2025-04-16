import Link from 'next/link';
import React from 'react'
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img
            src="/home/latestBrand/brand_arrow_left.webp"
            alt="Next"
            className={className}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <img
            src="/home/latestBrand/brand_arrow_right.webp"
            alt="Prev"
            className={className}
            onClick={onClick}
        />
    );
}
function LatestBrand() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    const sliderItems = [
        { id: 1, src: "/home/latestBrand/brandcoffee.webp", title: "Coffee Bags", links: "/coffee-bags" },
        { id: 2, src: "/home/latestBrand/brandmylar.webp", title: "Custom Mylar Bags", links: "/custom-mylar-bags" },
        { id: 3, src: "/home/latestBrand/brandstand.webp", title: "Custom Stand Up Pouches", links: "/stand-up-pouch" },
        { id: 4, src: "/home/latestBrand/brandflat.webp", title: "Flat Pouches", links: "/flat-pouches" },
        { id: 5, src: "/home/latestBrand/brandspout.webp", title: "Custom Spout Pouches", links: "/spout-pouches" },
        { id: 6, src: "/home/latestBrand/brandeco.webp", title: "Eco Friendly Pouches", links: "/eco-friendly-pouches" },
        { id: 7, src: "/home/latestBrand/brandDK.webp", title: "Bubble Mailers", links: "/" },
        { id: 8, src: "/home/latestBrand/brandDK2.webp", title: "Poly Mailers", links: "/poly-mailers" },
    ];

    return (
        <div className='new_container'>
            <div className='new_brand_packaging'>
                {/* <h2>Your Brand, Your Pouch, Your Way!</h2> */}
                <h2>Mylar Bags A Match For Every Brand</h2>
                <Slider {...settings}>
                    {sliderItems.map((item) => (
                        <div className="slider_brand_images" key={item.id}>
                            <Link href={item.links}>
                                <img src={item.src} alt={item.title} />
                                <h3>{item.title}</h3>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default LatestBrand
