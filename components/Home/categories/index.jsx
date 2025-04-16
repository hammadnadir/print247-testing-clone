import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";
import { useSelector } from "react-redux";
function Categories() {

  const { products, homeData } = useSelector((state) => state.home);

  const images = homeData?.pages?.[0]?.page_image;

  const [hov, setHov] = useState(null);

  return (
    <div className="main_categories">
      <div className="categories">
        <div>
          <h2>Categories</h2>
          <div className="categories_Data">
            {homeData &&
              homeData?.pages &&
              homeData?.pages
                // .filter((item)=>item.slug !== "cloth-bags")
                .slice(0, 8).map((items, index) => {
                  return (
                    <Link
                      key={index}
                      href={`/category/${items?.slug}-${items?.categories[0]?.slug}`}
                    >
                      <div className="product_image">
                        <img
                          src={items?.page_image}
                          onMouseEnter={() => setHov(index)}
                          onMouseLeave={() => setHov(null)}
                          alt="product image"
                          layout="fill"
                          className={`image`}
                        />
                        <div className={`title ${hov === index ? "hovEffect" : ""}`}>
                          <h4>{items.title}</h4>
                        </div>
                      </div>
                    </Link>
                  );
                })}
          </div>
          {/* <div className='buttonn'>
                        <Link href="/categories"><Button>View all</Button></Link>
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default Categories;
