import { customQuoteData } from "@/data/customQuote";
import { setCustomerDetails, setErrors, setMainFile, setQuantity, setSelectedData, setSelectedSubProduct } from "@/redux/quote";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from 'react-bootstrap/Accordion';
import { useMediaQuery } from "react-responsive";

function ProductTypes({ activeKey, setActiveKey, activeKey2, setActiveKey2, activeKeyOptions, setActiveKeyOptions }) {

  const [heading2, setHeading2] = useState("Select Type")

  const { selectedProduct, selectedSubProduct, selectedData } = useSelector(
    (state) => state.quote
  );
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isMobileView = useMediaQuery({ query: "(max-width: 786px)" });
  const dispatch = useDispatch();

  const handleSelectTypes = (product) => {
    dispatch(setSelectedSubProduct(product));
    setActiveKey(null)
    setActiveKey2(null)
    dispatch(setQuantity(""))
    dispatch(setCustomerDetails({
      fullName: "",
      email: "",
      phone_no: "",
      company: "",
    }))
    dispatch(setErrors({}))
    dispatch(setMainFile([]))

    if (customQuoteData?.[selectedProduct]?.isSubType) {
      setActiveKeyOptions([0])
    } else {
      setActiveKeyOptions([])
    }
    if (!isMobileView) {
      setTimeout(() => {
        scrollToElement("product_details")
      }, 100)
    }

  };
  const toggleAccordion = () => {
    setActiveKey2((prevKey) => (prevKey === "0" ? null : "0"));
  };

  useEffect(() => {
    if (selectedSubProduct) {
      setHeading2(selectedSubProduct)
    } else {
      setHeading2("Select Type")
    }
  }, [selectedSubProduct])


  return (
    <div className="product_types_quote_main">
      {
        isMobileView ?
          <div className="product_types_quote_child">
            <Accordion defaultActiveKey="0" activeKey={activeKey2}>
              <Accordion.Item eventKey="0">
                <Accordion.Header onClick={toggleAccordion}>
                  <div className="text_hr">
                    <p>{heading2}</p>
                    <hr />
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="product_types_quote">
                    {Object.entries(customQuoteData?.[selectedProduct]?.types) && Object.entries(customQuoteData?.[selectedProduct]?.types)?.map(
                      ([key, val], i) => {
                        return (
                          <div key={i} className="products_selection">
                            <div onClick={() => handleSelectTypes(key)} className="image_select">
                              <img
                                src={val?.image}
                                alt=""
                              />
                            </div>
                            <p
                              className={selectedSubProduct === key ? "active_product" : ""}
                            >
                              {val?.title}
                            </p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          :
          <div className="product_types_quote_child" id="sub_products">
            <div className="text_hr">
              <p>Select Type</p>
              <hr />
            </div>
            <div className="product_types_quote">
              {Object.entries(customQuoteData?.[selectedProduct]?.types) && Object.entries(customQuoteData?.[selectedProduct]?.types)?.map(
                ([key, val], i) => {
                  return (
                    <div key={i} className="products_selection">
                      <div onClick={() => handleSelectTypes(key)} className="image_select">
                        <img src={val?.image} alt="product image" />
                      </div>
                      <p className={selectedSubProduct === key ? "active_product" : ""}>
                        {val?.title}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
      }

    </div>
  );
}

export default ProductTypes;
