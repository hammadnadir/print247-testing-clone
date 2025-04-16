import { customQuoteData } from "@/data/customQuote";
import { setCustomerDetails, setErrors, setMainFile, setQuantity, setSelectedData, setSelectedProduct, setSelectedSubProduct } from "@/redux/quote";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from 'react-bootstrap/Accordion';
import { useMediaQuery } from "react-responsive";

function SelectProduct({ activeKey, setActiveKey, activeKey2, setActiveKey2, activeKeyOptions, setActiveKeyOptions }) {
  const [heading1, setHeading1] = useState("Choose your Product")

  const { selectedProduct, selectedSubProduct } = useSelector(
    (state) => state.quote
  );

  const isMobileView = useMediaQuery({ query: "(max-width: 786px)" });


  const dispatch = useDispatch();

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (product) => {
    dispatch(setSelectedProduct(product));
    dispatch(setSelectedSubProduct(""));
    dispatch(setSelectedData({}))
    setActiveKey(null)
    setActiveKey2("0")
    setActiveKeyOptions([0])
    dispatch(setQuantity(""))
    dispatch(setCustomerDetails({
      fullName: "",
      email: "",
      phone_no: "",
      company: "",
    }))
    dispatch(setErrors({}))
    dispatch(setMainFile([]))
    if (!isMobileView) {
      if (customQuoteData?.[product]?.isSubType) {
        setTimeout(() => {
          scrollToElement("sub_products")
        }, 100)
      } else {
        setTimeout(() => {
          scrollToElement("product_details")
        }, 100)
      }
    }

  };

  useEffect(() => {
    if (selectedProduct) {
      setHeading1(customQuoteData?.[selectedProduct]?.heading)
    } else {
      setHeading1("Choose your Product")
    }
  }, [selectedProduct])

  const toggleAccordion = () => {
    setActiveKey((prevKey) => (prevKey === "0" ? null : "0"));
  };

  return (
    <div className="select_product_main">
      {
        isMobileView ?
          <div className="select_product_child">
            <Accordion defaultActiveKey="0" activeKey={activeKey}>
              <Accordion.Item eventKey="0">
                <Accordion.Header onClick={toggleAccordion}>
                  <div className="text_hr">
                    <p>{heading1}</p>
                    <hr />
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="select_product">
                    <div className="products_selection_main">
                      <div className="products_selection" onClick={() => handleSelectProduct("boxes")}>
                        <img
                          src="/customQuote/Choose Your Product/select_product.webp"
                          alt="boxes and packaging"

                        />
                      </div>
                      <p className={selectedProduct === "boxes" ? "active_product" : ""}>
                        Boxes Packaging
                      </p>
                    </div>
                    <div className="products_selection_main">
                      <div className="products_selection" onClick={() => handleSelectProduct("mylar")}>
                        <img
                          src="/customQuote/Choose Your Product/select_product2.webp"
                          alt="mylar bags"

                        />
                      </div>
                      <p className={selectedProduct === "mylar" ? "active_product" : ""}>
                        Mylar Bags/Pouches
                      </p>
                    </div>
                    <div className="products_selection_main">
                      <div className="products_selection" onClick={() => handleSelectProduct("labels")}>
                        <img
                          src="/customQuote/Choose Your Product/select_product3.webp"
                          alt="labels and stickers"

                        />
                      </div>
                      <p className={selectedProduct === "labels" ? "active_product" : ""}>
                        Lables & Stickers
                      </p>
                    </div>
                    <div className="products_selection_main">
                      <div className="products_selection" onClick={() => handleSelectProduct("banner")}>
                        <img
                          src="/customQuote/Choose Your Product/select_product4.webp"
                          alt="banner"

                        />
                      </div>
                      <p className={selectedProduct === "banner" ? "active_product" : ""}>
                        Banners
                      </p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          :
          <div className="select_product_child">

            <div className="text_hr">
              <p>Choose your Product</p>
              <hr />
            </div>
            <div className="select_product">
              <div className="products_selection_main">
                <div className="products_selection" onClick={() => handleSelectProduct("boxes")}>
                  <img
                    src="/customQuote/Choose Your Product/select_product.webp"
                    alt="boxes and packaging"

                  />
                </div>
                <p className={selectedProduct === "boxes" ? "active_product" : ""}>
                  Boxes Packaging
                </p>
              </div>
              <div className="products_selection_main">
                <div className="products_selection" onClick={() => handleSelectProduct("mylar")}>
                  <img
                    src="/customQuote/Choose Your Product/select_product2.webp"
                    alt="mylar bags"

                  />
                </div>
                <p className={selectedProduct === "mylar" ? "active_product" : ""}>
                  Mylar Bags/Pouches
                </p>
              </div>
              <div className="products_selection_main">
                <div className="products_selection" onClick={() => handleSelectProduct("labels")}>
                  <img
                    src="/customQuote/Choose Your Product/select_product3.webp"
                    alt="labels and stickers"

                  />
                </div>
                <p className={selectedProduct === "labels" ? "active_product" : ""}>
                  Lables & Stickers
                </p>
              </div>
              <div className="products_selection_main">
                <div className="products_selection" onClick={() => handleSelectProduct("banner")}>
                  <img
                    src="/customQuote/Choose Your Product/select_product4.webp"
                    alt="banner"

                  />
                </div>
                <p className={selectedProduct === "banner" ? "active_product" : ""}>
                  Banners
                </p>
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default SelectProduct;
