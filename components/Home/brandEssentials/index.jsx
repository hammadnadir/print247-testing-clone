import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

function BrandEssential() {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: (
            <Image className="" src="/image/newblackright.webp" width={55} height={55} alt="arrow icon" />
        ),
        nextArrow: (
            <Image className="" src="/image/newblackleft.webp" width={55} height={55} alt="arrow icon" />
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
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
            imgSrc: '/image/Essentials/new_foldres.webp',
            title: 'Folding Cartons',
            description: 'Our packaging company prints and produces folding cartons of cardboard, Kraft, corrugated, and rigid materials. Get them today!',
            secondaryImgSrc: '/image/arr_home.png',
            links: "/folding-cartons"
        },
        {
            imgSrc: '/image/Essentials/new_myres.webp',
            title: 'Mylar Bags',
            description: 'We print and produce Mylar Bags in all the required materials, i.e., Metalized, Clear, White, Foil, and Kraft. What is your theme?',
            secondaryImgSrc: '/image/arr_home.png',
            links: "/custom-mylar-bags"
        },
        {
            imgSrc: '/image/Essentials/new_rolres.webp',
            title: 'Roll Labels',
            description: 'We are “handsomely” experts in printing the labels on rolls. Print them in any material. Peel off and apply anywhere you want.',
            secondaryImgSrc: '/image/arr_home.png',
            links: "/custom-labels"
        },
        {
            imgSrc: '/image/Essentials/new_pulres.webp',
            title: 'Pull up Banners',
            description: 'Shop portable and retractable Pull-up Banners from us and adorn your business events, celebrations, parties, festivals, etc.',
            secondaryImgSrc: '/image/arr_home.png',
            links: "/pull-up-banners"
        },
        {
            imgSrc: '/image/Essentials/new_vinres.webp',
            title: 'Vinyl Banners',
            description: 'Spend one time and get the long-life Vinyl Banners from Print 247. We offer the most sparkling printing results for your banners.',
            secondaryImgSrc: '/image/arr_home.png',
            links: "/vinyl-banner"
        },
        {
            imgSrc: '/image/Essentials/new_mailres.webp',
            title: 'Mailer Boxes',
            description: 'Fully customize and build mailer boxes from scratch with us for your splendid retail and effective e-commerce businesses.',
            secondaryImgSrc: '/image/arr_home.png',
            links: "/mailer-boxes"
        },
    ];

    return (
        <div className="main_brandslider">
            {/* <h2>Let{"’"}s Adorn Your Brand</h2> */}
            {/* <h2>Packaging Supplies, Galore!</h2> */}
            <h2>Printed Products, Galore!</h2>
            <Container>
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="slide_mainimg">
                            <Link style={{outline: "none"}} href={slide.links}>
                                <img className="slider_img" src={slide.imgSrc} alt={slide.title} /> 
                            </Link>
                            <div className="main_roundeded">
                                <Link href={slide.links}>
                                    <div className="home_roundeded">
                                        <div>
                                            <span className='title_headings'>{slide.title}</span>
                                        </div>
                                        <div>
                                            <img className='arrowslide' src={slide.secondaryImgSrc} alt="slider arrow icon" />
                                        </div>
                                    </div>
                                </Link>
                                <p className='title_para'>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    )
}

export default BrandEssential;

