import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

function Products() {
    const [loaded, setLoaded] = useState([]);
    const [selected, setSelected] = useState([]);

    const { pages } = useSelector((state) => state.product);

    const router = useRouter();

    const product =
        router?.query?.id && router.query.id.split("-").length > 1
            ? router.query.id.split("-").slice(2).join("-")
            : "";

    useEffect(() => {
        const selectedProduct = Array.isArray(pages?.catgeory) ? pages?.catgeory?.find((item, i) => {
            return item?.slug === product;
        }) : null
        setSelected(selectedProduct);
    }, [router]);

    const handleImageLoad = (index) => {
        const data = [...loaded];
        data.push(index);
        setLoaded(data);
    };

    return (
        <div className="buisness-cards-products">
            {/* <h2 className="buisness-heading">{pages?.catgeory?.[4]?.title}</h2> */}

            {/* <div className="main_productss">
                {pages?.catgeory?.[4]?.category_products.length > 0 && pages?.catgeory?.[4]?.category_products?.map((items, index) => {
                    return (
                        <div className="bottom" key={index}>
                            <div className="head_and_image_packages">
                                <Link href={`/${items?.slug}`}>
                                        <a href="tel:13462461639">
                                            <div className='head_sub_business_image'>
                                                <img src={`${items?.main_image}`} onLoad={() => handleImageLoad(index)} alt={items.slug} />
                                                {index > 0 && <div className='btn_pop'>
                                                    <button>Most Popular</button>
                                                </div>}
                                                <div className='headsubbusiness'>
                                                    <h3>{items.title}</h3>
                                                </div>
                                            </div>
                                        </a>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div> */}

            <h4 className="buisness-heading">Get the right card, right away</h4>

            <div className="main_productss">

                <div className="bottom">
                    <div className="head_and_image_packages">
                        <a href="tel:13462461639">
                            <div className='head_sub_business_image'>
                                <img src="/image/business1.png" alt="basic business card image"/>
                                <div className='headsubbusiness'>
                                    <h3>Basic</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="head_and_image_packages">
                        <a href="tel:13462461639">
                            <div className='head_sub_business_image'>
                                <img src="/image/business2.png" alt="standard business card image"/>
                                <div className='btn_pop'>
                                    <button>Most Popular</button>
                                </div>
                                <div className='headsubbusiness'>
                                    <h3>Standard</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="head_and_image_packages">
                        <a href="tel:13462461639">
                            <div className='head_sub_business_image'>
                                <img src="/image/business3.png" alt="premium business card image"/>
                                <div className='btn_pop'>
                                    <button>Most Popular</button>
                                </div>
                                <div className='headsubbusiness'>
                                    <h3>Premium</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>

            <div className="buisness-object-layout">
                {pages?.catgeory?.length > 0 && pages?.catgeory.slice(0, 2)?.map((data, index) => {
                    return (
                        <div key={index}>
                            <h4>{data?.title}</h4>
                            <div className="main_second_portion">
                                {data?.category_products?.map((items, i) => {
                                    return (
                                        <div className="bottom" key={i}>
                                            <div className="head_and_image">
                                                <Link href={`/${items?.slug}`}>
                                                    <div className="image">
                                                        <img src={`${items?.main_image}`} onLoad={() => handleImageLoad(i)} alt={items.slug} />
                                                    </div>
                                                </Link>
                                                <div className="head">
                                                    <h3>{items.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            {selected?.category_products?.length === 0 && <h3>No Product Found</h3>}
        </div>
    );
}

export default Products;