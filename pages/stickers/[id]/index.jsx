import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SocialSlider from "@/components/Home/socialSlider";
import Footer from "@/components/common/Footer";
import CampignFaqs from "@/components/campignCom/Faqs";
import { useMediaQuery } from "react-responsive";
import Testimonial from "@/components/Home/Testimonial";
import StickerCampaignHeader from "@/components/campaignCustomSticker/stickerCampaignHeader";
import SingleStickerCompaign from "@/components/campaignCustomSticker/SingleStickerCompaign";
import InspiredSticker from "@/components/campaignCustomSticker/InspiredSticker";
import ChatTwo from "@/components/Home/chatTwo";
import LiveChat from "@/components/campaignCustomSticker/liveChat";
import ProductStandSticker from "@/components/campaignCustomSticker/productStandSticker";
import MainSlider from "@/components/campaignCustomSticker/mainSlider";

function Stickers() {

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
        <link rel="canonical" href={`https://www.print247.us/${router?.asPath}`} />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main>
        <div>
          {
            router?.query?.id === "custom-sticker-a" ?
              <>
                <StickerCampaignHeader />
                <MainSlider minQuantity={1000} sectionRef={sectionRef} scrollToSection={scrollToSection}/>
                {/* <SingleStickerCompaign minQuantity={1000} sectionRef={sectionRef} scrollToSection={scrollToSection} /> */}
                <LiveChat />
                <SocialSlider />
                <ProductStandSticker sectionRef={sectionRef} />
                <InspiredSticker />
                <div className="testimonial_space">
                  <Testimonial />
                </div>
                <CampignFaqs />
                <div style={{ marginBottom: "0px" }}></div>
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

export default Stickers;
