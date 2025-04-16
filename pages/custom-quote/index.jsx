import QuoteHeader from "@/components/quote-design/header";
import QuoteHeaderMobile from "@/components/quote-design/mobileView/header";
import ProductDetails from "@/components/quote-design/productDetails";
import SelectProduct from "@/components/quote-design/productSelect";
import ProductTypes from "@/components/quote-design/productTypes";
import TopData from "@/components/quote-design/topData";
import { customQuoteData } from "@/data/customQuote";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function CustomQuotes() {
  // const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 540);
  const [isMobileView, setIsMobileView] = useState(null); 

  const { selectedProduct, selectedSubProduct } = useSelector((state) => state.quote);
  const [activeKey, setActiveKey] = useState("0");
  const [activeKey2, setActiveKey2] = useState(null);
  const [activeKeyOptions, setActiveKeyOptions] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 540);
    };

    // Check initial width and set the state accordingly
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this runs once on mount
  

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main>
        <div >
          {isMobileView ? (
            <div className="custom_quote_mobile">
              <QuoteHeaderMobile />

              <SelectProduct activeKey={activeKey} setActiveKey={setActiveKey} activeKey2={activeKey2} setActiveKey2={setActiveKey2} activeKeyOptions={activeKeyOptions} setActiveKeyOptions={setActiveKeyOptions} />
              {customQuoteData?.[selectedProduct]?.types ?
                <>
                  {Object.keys(customQuoteData?.[selectedProduct]?.types)?.length > 0 && <ProductTypes activeKey={activeKey} setActiveKey={setActiveKey} activeKey2={activeKey2} setActiveKey2={setActiveKey2} activeKeyOptions={activeKeyOptions} setActiveKeyOptions={setActiveKeyOptions} />}
                  {customQuoteData?.[selectedProduct]?.isSubType ? selectedSubProduct ? <ProductDetails activeKey={activeKey} setActiveKey={setActiveKey} activeKey2={activeKey2} setActiveKey2={setActiveKey2} activeKeyOptions={activeKeyOptions} setActiveKeyOptions={setActiveKeyOptions} /> : "" : <ProductDetails activeKey={activeKey} setActiveKey={setActiveKey} activeKey2={activeKey2} setActiveKey2={setActiveKey2} activeKeyOptions={activeKeyOptions} setActiveKeyOptions={setActiveKeyOptions} />}
                </>
                : ""
              }
            </div>
          ) : (
            <div style={{ minHeight: "100vh", background: "#F1F1F1" }}>
              <Container>
                <QuoteHeader />
                <TopData />
              </Container>
              <SelectProduct activeKey={activeKey} setActiveKey={setActiveKey} activeKey2={activeKey2} setActiveKey2={setActiveKey2} activeKeyOptions={activeKeyOptions} setActiveKeyOptions={setActiveKeyOptions} />
              {customQuoteData?.[selectedProduct]?.types ?
                <>
                  {Object.keys(customQuoteData?.[selectedProduct]?.types)?.length > 0 && <ProductTypes activeKey={activeKey} setActiveKey={setActiveKey} activeKey2={activeKey2} setActiveKey2={setActiveKey2} activeKeyOptions={activeKeyOptions} setActiveKeyOptions={setActiveKeyOptions} />}
                  {customQuoteData?.[selectedProduct]?.isSubType ? selectedSubProduct ? <ProductDetails activeKey={activeKey} setActiveKey={setActiveKey} activeKey2={activeKey2} setActiveKey2={setActiveKey2} activeKeyOptions={activeKeyOptions} setActiveKeyOptions={setActiveKeyOptions} /> : "" : <ProductDetails activeKey={activeKey} setActiveKey={setActiveKey} activeKey2={activeKey2} setActiveKey2={setActiveKey2} activeKeyOptions={activeKeyOptions} setActiveKeyOptions={setActiveKeyOptions} />}
                </>
                : ""
              }
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default CustomQuotes;
