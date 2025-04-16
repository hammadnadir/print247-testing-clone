import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SocialSlider from "@/components/Home/socialSlider";
import Footer from "@/components/common/Footer";
import CampignHeader from "@/components/campignCom/header";
import CampignFaqs from "@/components/campignCom/Faqs";
import SingleProductCompaign from "@/components/campignCom2/SingleProductCompaign";
import ProductStand from "@/components/campignCom2/productStand";
import Inspired from "@/components/campignCom2/Inspired";
import { useMediaQuery } from "react-responsive";
import Testimonial from "@/components/Home/Testimonial";
import ProductStandFolding from "@/components/folding-carton-campaign/productStandFolding";
import InspiredFolding from "@/components/folding-carton-campaign/InspiredFolding";
import FoldingCampaignHeader from "@/components/folding-carton-campaign/foldingCampaignHeader";
import LiveChat from "@/components/folding-carton-campaign/liveChat";
import ChatTwo from "@/components/Home/chatTwo";
import MainSlider from "@/components/folding-carton-campaign/mainSlider";

function BoxesCompaign() {

  const [data, setData] = useState({});
  const { detailData } = useSelector((state) => state.detail);

  // const [isSlideUp, setIsSlideUp] = useState(false)
  // const [isSlideUpHeight, setIsSlideUpHeight] = useState(false)

  const router = useRouter();
  const sectionRef = useRef(null);

  const isDesktopBelow = useMediaQuery({ query: '(max-width: 1100px)' });
  useEffect(() => {
    setData(detailData);
  }, [detailData]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [router]);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>{detailData?.meta_title}</title>
        <meta name="description" content={detailData?.meta_desc} />
        <link rel="canonical" href={`https://www.print247.us/${router?.asPath}`} />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main>
        <div
        // className={router?.query?.id !== "folding-carton-a" && isDesktopBelow ? isSlideUpHeight ? "afterSlide" : "beforeSlide" : ""}
        >
          {
            router?.query?.id === "custom-boxes" ?
              <>
                <CampignHeader />
                <SingleProductCompaign minQuantity={1000} sectionRef={sectionRef} scrollToSection={scrollToSection} />
                <SocialSlider />
                <ProductStand sectionRef={sectionRef} />
                <Inspired />
                <div className="testimonial_space">
                  <Testimonial />
                </div>
                <CampignFaqs />
                <div style={{ marginBottom: "40px" }}></div>
                <Footer />
              </>
              : router?.query?.id === "custom-mailer-boxes" ?
                <>
                  <CampignHeader />
                  <SingleProductCompaign minQuantity={1000} sectionRef={sectionRef} scrollToSection={scrollToSection} />
                  <SocialSlider />
                  <ProductStand sectionRef={sectionRef} />
                  <Inspired />
                  <div className="testimonial_space">
                    <Testimonial />
                  </div>
                  <CampignFaqs />
                  <div style={{ marginBottom: "40px" }}></div>
                  <Footer />
                </>
                : router?.query?.id === "folding-carton" ?
                  <>
                    <CampignHeader />
                    <SingleProductCompaign minQuantity={1000} sectionRef={sectionRef} scrollToSection={scrollToSection} />
                    <SocialSlider />
                    <ProductStand sectionRef={sectionRef} />
                    <Inspired />
                    <div className="testimonial_space">
                      <Testimonial />
                    </div>
                    <CampignFaqs />
                    <div style={{ marginBottom: "40px" }}></div>
                    <Footer />
                  </>
                  : router?.query?.id === "folding-carton-a" ?
                    <>
                      <FoldingCampaignHeader />
                      {/* <SingleFoldingCompaign minQuantity={1000} sectionRef={sectionRef} scrollToSection={scrollToSection}/> */}
                      <MainSlider minQuantity={1000} sectionRef={sectionRef} scrollToSection={scrollToSection} />
                      <LiveChat />
                      <SocialSlider />
                      <ProductStandFolding sectionRef={sectionRef} />
                      <InspiredFolding />
                      <div className="testimonial_space">
                        <Testimonial />
                      </div>
                      <CampignFaqs />
                      <div style={{ marginBottom: "30px" }}></div>
                      <ChatTwo />
                      <Footer />
                    </>
                    : ""
          }
        </div>
      </main>
    </>
  );
}

export default BoxesCompaign;