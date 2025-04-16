import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { getCookie, setCookie } from "cookies-next";

function Products() {
  const [loaded, setLoaded] = useState([]);
  const [selected, setSelected] = useState({});
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const router = useRouter();
  const { pages } = useSelector((state) => state.product);
  const { showShimmer } = useSelector((state) => state.global);

  const product =
    router?.query?.id && router.query.id.split("-").length > 1
      ? router.query.id.split("-").slice(2).join("-")
      : "";

  const category =
    router?.query?.id && router.query.id.split("-").length > 1
      ? router.query.id.split("-").slice(0, 2).join("-")
      : "";

  useEffect(() => {
    const selectedProduct = Array.isArray(pages?.catgeory)
      ? pages?.catgeory?.find((item) => item?.slug === product)
      : null;
    setSelected(selectedProduct);
  }, [router.asPath]);

  useEffect(() => {
    if (router?.asPath?.includes("boxes-packaging")) {
      const selectedProduct = pages?.catgeory;
      setSelectedBoxes(selectedProduct);
    }
  }, [router.asPath]);

  const handleImageLoad = (index) => {
    const data = [...loaded];
    data.push(index);
    setLoaded(data);
  };
  return (
    <div className="main_product_page_data">
      {selected?.category_products?.length > 0 && (
        <div className="main_productss">
          {category === "boxes-packaging"
            ? selected?.category_products.map((items, index) => {
              return (
                items?.main_image && (
                  <div className="bottom" key={index}>
                    <Fade
                      damping={showShimmer ? 1 : 0}
                      direction="bottom"
                      key={router?.asPath}
                      triggerOnce={true}
                      duration={500}
                    >
                      <div className="head_and_image">
                        <div className="image">
                          <Link href={`/${items?.slug}`}>
                            {showShimmer ? (
                              <div className="skeleton skeleton-image" />
                            ) : (
                              <div className="shimmer_div">
                                <img
                                  src={`${items?.main_image}`}
                                  onLoad={() => handleImageLoad(index)}
                                  alt={items.main_image_alt}
                                  title={items.main_image_title}
                                />
                              </div>
                            )}
                          </Link>
                        </div>
                        <div className="head">
                          {showShimmer ? (
                            <div className="skeleton skeleton-text" style={{ margin: "10px auto 0px auto" }} />
                          ) : (
                            <h3>{items.title}</h3>
                          )}
                        </div>
                      </div>
                    </Fade>
                  </div>
                )
              );
            })
            : selected?.category_products.map((items, index) => {
              return (
                items?.main_image && (
                  <div className="bottom" key={index}>
                    <div className="head_and_image">
                      <div className="image">
                        <Fade key={router.asPath}>
                          <Link href={`/${items?.slug}`}>
                            {showShimmer ? (
                              <div className="skeleton skeleton-image" />
                            ) : (
                              <div className="shimmer_div">
                                <img
                                  src={`${items?.main_image}`}
                                  onLoad={() => handleImageLoad(index)}
                                  alt={items.slug}

                                />
                              </div>
                            )}
                          </Link>
                        </Fade>
                      </div>
                      <div className="head">
                        {showShimmer ? (
                          <div className="skeleton skeleton-text" />
                        ) : (
                          <h3>{items.title}</h3>
                        )}
                      </div>
                    </div>
                  </div>
                )
              );
            })}
        </div>
      )}
      {selected?.category_products?.length === 0 && <h3>No Product Found</h3>}
    </div>
  );
}

export default Products;
