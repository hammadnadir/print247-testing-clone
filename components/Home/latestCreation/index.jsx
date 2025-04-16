import Link from 'next/link';
import React from 'react'
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img
            src="/home/latestCreation/creation_arrow_left.webp"
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
            src="/home/latestCreation/creation_arrow_right.webp"
            alt="Prev"
            className={className}
            onClick={onClick}
        />
    );
}

function LatestCreation() {

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
        { id: 1, src: "/home/latestCreation/creationproduct.webp", title: "Product Boxes", links: "/product-box" },
        { id: 2, src: "/home/latestCreation/creationdisplay.webp", title: "Display Boxes", links: "/display-boxes" },
        { id: 3, src: "/home/latestCreation/creationrigid.webp", title: "Custom Rigid Boxes", links: "/rigid-boxes" },
        { id: 4, src: "/home/latestCreation/creationmailer.webp", title: "Custom Mailer Boxes", links: "/mailer-boxes" },
        { id: 5, src: "/home/latestCreation/creationgift.webp", title: "Gift Boxes", links: "/gift-boxes" },
        { id: 6, src: "/home/latestCreation/creationfolding.webp", title: "Folding Carton", links: "/folding-cartons" },
        { id: 7, src: "/home/latestCreation/creationDK.webp", title: "Cardboard Boxes", links: "/cardboard-box" },
        { id: 8, src: "/home/latestCreation/creationDK2.webp", title: "Cosmetic Boxes", links: "/cosmetic-boxes" },
    ];

    return (
        <div className='new_container'>
            <div className='new_creation_packaging'>
                {/* <h2>From Concept to Creation, We Box It All</h2> */}
                <h2>Let{"’"}s Make the Right Custom Retail Boxes</h2>
                <Slider {...settings}>
                    {sliderItems.map((item) => (

                        <div className="slider_creation_images" key={item.id}>
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

export default LatestCreation