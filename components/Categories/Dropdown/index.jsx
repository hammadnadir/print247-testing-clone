import { industries, industriesProduct } from "@/data/industries";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Dropdown() {
  const { pages } = useSelector((state) => state.product);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const router = useRouter();
  const product = router.query.id.split("-").slice(2).join("-") || "";

  const signBanners = router?.asPath.includes("/category/print-products")

  const selected = pages?.catgeory?.find((item) => item?.slug === product);


  useEffect(() => {
    setSelectedProduct(selected)
  }, [pages])

  useEffect(() => {
    setShow(false);
  }, [product]);

  const handleSelect = () => {
    setShow(false);
  };

  useEffect(() => {
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

    router.events.on("routeChangeStart", saveScrollPosition);
    router.events.on("routeChangeComplete", scrollToSavedPosition);

    return () => {
      router.events.off("routeChangeStart", saveScrollPosition);
      router.events.off("routeChangeComplete", scrollToSavedPosition);
    };
  }, []);

  return (
    <div className="MainDropDown" id="pagess">
      <div className="dropdown">
        <div className="drop_menues_div">
          {
            (pages?.catgeory?.length > 1 || signBanners) ?
              <h2 className="dropbtn" onClick={() => setShow(!show)}>
                {selected?.title}
              </h2>
              :
              <h2 className="drop_head" onClick={() => setShow(!show)}>
                {selected?.title}
              </h2>
          }
          {pages?.catgeory?.length > 1 && (
            <img className={`img1 ${!show ? "set_show" : "set_show2"}`} src="/image/right-arrow.png" alt="icon"/>
          )}
        </div>
        {pages?.catgeory?.length > 1 && (
          <div className={`dropdown-content ${!show ? "hide_dropdown" : "show_dropdown"}`}>
            {
              pages?.catgeory
                .filter((data) => !industriesProduct?.includes(data?.slug))
                .map((item, i) => (
                  <Link href={`/category/${router?.query?.id?.split("-").splice(0, 2).join("-")}-${item?.slug}`} key={i} onClick={handleSelect} className="menues_inside">
                    <p>{item?.title}</p>
                  </Link>
                ))
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
