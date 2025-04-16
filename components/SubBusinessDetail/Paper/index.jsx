import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function Paper() {
    const [selected, setSelected] = useState([]);
    const { pages } = useSelector((state) => state.product);
    const router = useRouter();

    const product =
        router?.query?.id && router.query.id.split("-").length > 1
            ? router.query.id.split("-").slice(2).join("-")
            : "";

    useEffect(() => {
        const selectedProduct = Array.isArray(pages?.catgeory)
            ? pages?.catgeory?.find((item, i) => {
                return item?.slug === product;
            })
            : null;
        setSelected(selectedProduct);
    }, [router]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: (
            <Image className="one_image" src="/image/leftarrow.png" alt='arrow icon' width={69} height={69} />
        ),
        nextArrow: (
            <Image className="one_image" src="/image/rightarrow.png" alt='arrow icon' width={69} height={69} />
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

    const handleClick = (slug) => {
        router.push(`/${slug}`);
    };

    const shouldShowProduct = (productName) => {
        const excludedProductNames = ['Standard', 'Basic', 'Premium'];
        return !excludedProductNames.includes(productName);
    };

    return (
        <div className="main_paper">
            <h4>Shop by Papers & Textures</h4>
            <Container>
                <Slider {...settings}>
                    {pages?.catgeory?.map((item, i) =>
                        item?.category_products?.map((product, j) => {
                            if (shouldShowProduct(product.title)) {
                                return (
                                    <div key={j} >
                                        <div className="slide1" onClick={() => handleClick(product?.slug)}>
                                            <img className="one_image" alt={product.title} src={product?.main_image} width={380} height={416} />
                                            <div className="rounded">
                                                <h3>{product.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })
                    )}
                </Slider>
            </Container>
        </div>
    );
}

export default Paper;
