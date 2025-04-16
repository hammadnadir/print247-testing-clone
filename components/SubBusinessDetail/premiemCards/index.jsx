import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container } from "react-bootstrap";

function PremiemProducts() {
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
        <div className="premiem-cards-products">
            <Container>
                <div className="buisness-object-layout">
                    {pages?.catgeory?.length > 0 && [...pages?.catgeory.slice(2, 4)]?.reverse().map((data, index) => {
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
                                                            {/* <img src={`${items?.photo?.[0]}`} onLoad={() => handleImageLoad(i)} alt={items.slug}/> */}
                                                            <img src={`${items?.main_image}`} onLoad={() => handleImageLoad(i)} alt={items.slug}/>
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
            </Container>
        </div>
    );
}

export default PremiemProducts;