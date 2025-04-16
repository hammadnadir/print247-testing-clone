import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { capitalizeAllWords } from "@/utils";

function SignBannerProducts() {
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
        <div className="main_sign_banner_products">
            <div className="main_promproducts_new">
                {selected?.category_products?.length > 0 && selected?.category_products?.map((items, index) => {
                    return (
                        items?.main_image && items?.main_image &&
                        <div className='bottom' key={index}>
                            <div className='head_and_image'>
                                <Link href={`/${items?.slug}`}>
                                    <div className='image'>
                                        <img src={`${items?.main_image}`} onLoad={() => handleImageLoad(index)} alt={items.slug} />
                                    </div>
                                </Link>
                                <div className='promcloth'>
                                    <h3>{capitalizeAllWords(items.title)}</h3>
                                    <p className="print_products_height" dangerouslySetInnerHTML={{ __html: items.summary }}></p>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </div>
            {selected?.category_products?.length === 0 && <h3>No Product Found</h3>}
        </div>
    );
}

export default SignBannerProducts;
