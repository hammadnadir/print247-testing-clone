import Link from 'next/link';
import React from 'react'
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img
            src="/home/latestSmarterBranding/smarter_arrow_left.webp"
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
            src="/home/latestSmarterBranding/smarter_arrow_right.webp"
            alt="Prev"
            className={className}
            onClick={onClick}
        />
    );
}

function LatestSmarterBranding() {

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
        { id: 1, src: "/home/latestSmarterBranding/latestSmarterStickers.webp", title: "Custom Stickers", links: "/custom-stickers" },
        { id: 2, src: "/home/latestSmarterBranding/latestSmarterMetallic.webp", title: "Metallic Stickers", links: "/metallic-stickers" },
        { id: 3, src: "/home/latestSmarterBranding/latestSmarterCosmetic.webp", title: "Cosmetic Labels", links: "/cosmetic-labels" },
        { id: 4, src: "/home/latestSmarterBranding/latestSmarterDie.webp", title: "Die Cut Stickers", links: "/die-cut-stickers" },
        { id: 5, src: "/home/latestSmarterBranding/latestSmarterWaterproof.webp", title: "Custom Waterproof Labels", links: "/waterproof-labels" },
        { id: 6, src: "/home/latestSmarterBranding/latestSmarterHolographic.webp", title: "Holographic Stickers", links: "/holographic-stickers" },
        { id: 7, src: "/home/latestSmarterBranding/latestSmarterDK.webp", title: "Sheet Labels", links: "/sheet-labels" },
        { id: 8, src: "/home/latestSmarterBranding/latestSmarterDK2.webp", title: "Business Stickers", links: "/business-stickers" },
    ];

    return (
        <div className='new_container'>
            <div className='new_smarter_branding'>
                {/* <h2>Smart Labels for Smarter Branding!</h2> */}
                <h2>Labels & Stickers Leveraging The Products</h2>
                <Slider {...settings}>
                    {sliderItems.map((item) => (
                        <div className="slider_smarter_branding_images" key={item.id}>
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

export default LatestSmarterBranding
