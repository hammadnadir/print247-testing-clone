
import { hideCategories } from "@/data/hideCategories";
import { Tabs } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const FullCategory = () => {
  const { pages } = useSelector((state) => state.product);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("");

  const router = useRouter();
  const product = router.query.id.split("-").slice(2).join("-") || "";

  const signBanners = router?.asPath.includes("/category/print-products");

  const selected = pages?.catgeory?.find((item) => item?.slug === product);
  useEffect(() => {
    setSelectedProduct(selected);
  }, [pages]);

  useEffect(() => {
    setShow(false);
    setActiveCategory(product);
  }, [product]);

  const handleSelect = (slug) => {
    setShow(false);
    setActiveCategory(slug);
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const saveScrollPosition = () => {
    localStorage.setItem("scrollY", window.scrollY);
  };

  const scrollToSavedPosition = () => {
    const scrollY = parseInt(localStorage.getItem("scrollY") || "0", 10);
    window.scroll({
      top: scrollY,
      behavior: "instant",
    });
  };

  useEffect(() => {
    router.events.on("routeChangeStart", saveScrollPosition);
    router.events.on("routeChangeComplete", scrollToSavedPosition);

    return () => {
      router.events.off("routeChangeStart", saveScrollPosition);
      router.events.off("routeChangeComplete", scrollToSavedPosition);
    };
  }, []);

  if (pages?.catgeory?.length > 1) {
    return (
      <div className="fullcategory">
        <Container>
          <div className="main_slide_categories">
            <div className="fullchild">
              <Tabs
                activeKey={activeCategory}
                onChange={handleSelect}
                items={pages?.catgeory
                  .filter((data) => !hideCategories?.includes(data?.slug))
                  .map((item,i) => ({
                    key: item?.slug,
                    label: (
                      <Link
                      key={i}
                        href={`/category/${router?.query?.id
                          ?.split("-")
                          .splice(0, 2)
                          .join("-")}-${item?.slug}`}
                        className="menues_inside"
                        onClick={() => handleSelect(item?.slug)}
                      >
                        <p
                          className={''
                            // activeCategory === item?.slug
                            //   ? "active-category"
                            //   : "in-active-category"
                          }
                        >
                          {item?.title}
                        </p>
                      </Link>
                    ),
                  }))}
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
};

export default FullCategory;
