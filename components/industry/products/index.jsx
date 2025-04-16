import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { capitalizeAllWords } from "@/utils";
import NotFound from "@/components/NotFound";

function IndustriesProducts({notFound}) {
  const [loaded, setLoaded] = useState([]);
  const [selected, setSelected] = useState({});
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const { mainIndustries } = useSelector((state) => state.industry)

  const router = useRouter();


  const handleImageLoad = (index) => {
    const data = [...loaded];
    data.push(index);
    setLoaded(data);
  };


  return (
    <div className="main_industry_page_data">
      <div className="main_product_industry">
        {
          mainIndustries?.products?.length > 0 &&
          mainIndustries?.products
            .map((items, index) => {
              return (
                items?.main_image && <div className="bottom_industry" key={index}>
                  <div className="head_industry_image">
                    <Link href={`${items?.slug}`}>
                      <div className="image">
                        <img src={`${items?.main_image}`} onLoad={() => handleImageLoad(index)} alt={items.slug}/>
                      </div>
                    </Link>
                    <div className="head_industry">
                      <h3>{capitalizeAllWords(items.title)}</h3>
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

export default IndustriesProducts;