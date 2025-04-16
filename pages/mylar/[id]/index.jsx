import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SocialSlider from "@/components/Home/socialSlider";
import Footer from "@/components/common/Footer";
import CampignFaqs from "@/components/campignCom/Faqs";
import Testimonial from "@/components/Home/Testimonial";
import ChatTwo from "@/components/Home/chatTwo";
import MylarCampaignHeader from "@/components/campaignMylarBags/mylarCampaignHeader";
import MainSliderMylar from "@/components/campaignMylarBags/mainSliderMylar";
import LiveChatMylar from "@/components/campaignMylarBags/liveChatMylar";
import ProductStandMylar from "@/components/campaignMylarBags/productStandMylar";
import InspiredMylar from "@/components/campaignMylarBags/InspiredMylar";
import CampignHeader from "@/components/campignCom/header";
import SingleProductCompaign from "@/components/campignCom2/SingleProductCompaign";
import ProductStand from "@/components/campignCom2/productStand";
import Inspired from "@/components/campignCom2/Inspired";

function Mylar() {

  const [data, setData] = useState({});
  const { detailData } = useSelector((state) => state.detail);

  const router = useRouter();
  const sectionRef = useRef(null);

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
        <link rel="canonical" href={`https://www.print247-testing-clone.vercel.app/${router?.asPath}`} />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main>
        <div>
          {
            router?.query?.id === "custom-mylar-bags-a" ?
              <>
                <MylarCampaignHeader />
                <MainSliderMylar minQuantity={1000} sectionRef={sectionRef} scrollToSection={scrollToSection} />
                <LiveChatMylar />
                <SocialSlider />
                <ProductStandMylar sectionRef={sectionRef} />
                <InspiredMylar />
                <div className="testimonial_space">
                  <Testimonial />
                </div>
                <CampignFaqs />
                <div style={{ marginBottom: "0px" }}></div>
                <ChatTwo />
                <Footer />
              </>
              : router?.query?.id === "custom-mylar-bags" ?
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
                :
                ""
          }
        </div>
      </main>
    </>
  );
}

export default Mylar;
