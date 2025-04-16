import Link from 'next/link';
import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import Image from 'next/image';

function CategoryNew() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: (
            <Image className="" src="/image/newblackright.webp" width={55} height={55} alt='arrow icon' />
        ),
        nextArrow: (
            <Image className="" src="/image/newblackleft.webp" width={55} height={55} alt='arrow icon' />
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

    const slides = [
        {
            imgSrc: '/image/newcategory/boxandpackaging.webp',
            title: 'Box Packaging',
            links: "/category/boxes-packaging-custom-boxes"
        },
        {
            imgSrc: '/image/newcategory/mylarbags.webp',
            title: 'Mylar Bags',
            links: "/category/mylar-bags-mylar-pouch"
        },
        {
            imgSrc: '/image/newcategory/labelsandstickers.webp',
            title: 'Labels & Stickers',
            links: "/category/labels-stickers-custom-labels"
        },
        {
            imgSrc: '/image/newcategory/signandbanners.webp',
            title: 'Signs & Banners',
            links: "/category/signs-banners-banner"
        },
        {
            imgSrc: '/image/newcategory/businesscards.webp',
            title: 'Business Cards',
            links: "/category/business-cards-shapes"
        },
        {
            imgSrc: '/image/newcategory/printproducts.webp',
            title: 'Print Products',
            links: "/category/print-products-print-products"
        },
        {
            imgSrc: '/image/newcategory/designandlogo.webp',
            title: 'Design & Logo',
            links: "/category/design-logo-design-service"
        }
    ];


    return (
        <div className="main_newCategory">
            <Container>
                {/* <h2>The Inspiring Custom Packaging Boxes!</h2> */}
                <h2>Let{"’"}s Make the Right Custom Packaging Boxes</h2>
                <p>We believe in custom box packaging that becomes the first reference point for every retail product.
                    Our motto is, ‘You start a business and leave the packaging to us.’
                    Hence our exclusive and on-site printing and packaging facilities make us a qualitative, quantitative,
                    and quintessential packaging choice.</p>
            </Container>
            <div style={{ marginBottom: "50px" }}></div>
            <Container>
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="catslide_mainimg">
                            <div className="hover01 column">
                                <figure>
                                    <Link style={{ outline: "none" }} href={slide.links}>
                                        <img className="slider_imgcat" src={slide.imgSrc} alt={slide.title} />
                                    </Link>
                                </figure>

                            </div>

                            <div className="main_roundedcat">
                                <Link href={slide.links}>
                                    <div className="home_roundedcat">
                                        <p className='title_headingcat'>{slide.title}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    )
}

export default CategoryNew