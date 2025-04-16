// import CampignFaqs from "@/components/campignCom/Faqs";
// import MaterialsCam from "../../../components/campignCom/MaterialsCam";
// import CampignHeader from "@/components/campignCom/header";
// import InstaSlides from "@/components/campignCom/instaSlide";
// import PackagingDetails from "@/components/campignCom/productDetail";
// import Footer from "@/components/common/Footer";
// import { campignObj } from "@/data/compaignData";
// import { detailDataRequest } from "@/redux/detail";
// import { headerDataRequest, homeDataRequest } from "@/redux/home";
// import { wrapper } from "@/store";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import SocialSlider from "@/components/Home/socialSlider";
// import SingleProductDetail from "@/components/campignCom/singleProductDetail";
// import { useMediaQuery } from "react-responsive";

// function DetailsPage() {
//   const [isSlideUp, setIsSlideUp] = useState(false);
//   const [isSlideUpHeight, setIsSlideUpHeight] = useState(false);
//   const [data, setData] = useState({});
//   const { detailData } = useSelector((state) => state.detail);

//   const isDesktopBelow = useMediaQuery({ query: "(max-width: 1100px)" });

//   const { countryName, ip } = useSelector((state) => state.getCountry);

//   const router = useRouter();
//   useEffect(() => {
//     setData(detailData);
//   }, [detailData]);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "instant" });
//   }, [router]);

//   return (
//     <>
//       <Head>
//         <title>{detailData?.meta_title}</title>
//         <meta name="description" content={detailData?.meta_desc} />
//         <meta name="robots" content="noindex, nofollow" />
//         <link rel="canonical" href={`https://print247.us${router?.asPath}`} />
//         <meta
//           name="robots"
//           content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
//         />
//       </Head>
//       <main>
//         <div
//           className={
//             isDesktopBelow
//               ? isSlideUpHeight
//                 ? "afterSlide"
//                 : "beforeSlide"
//               : ""
//           }
//         >
//           {data?.id &&
//             (router?.query?.id === "custom-mylar-bags" ? (
//               <>
//                 <CampignHeader />
//                 <SingleProductDetail
//                   isSlideUpHeight={isSlideUpHeight}
//                   setIsSlideUpHeight={setIsSlideUpHeight}
//                   isSlideUp={isSlideUp}
//                   setIsSlideUp={setIsSlideUp}
//                   isDesktopBelow={isDesktopBelow}
//                 />
//                 <SocialSlider />
//                 <MaterialsCam />
//                 <PackagingDetails />
//                 <InstaSlides />
//                 <CampignFaqs />
//                 <Footer />
//               </>
//             ) : router?.query?.id === "coffee-bags" ? (
//               <>
//                 <CampignHeader />
//                 <SingleProductDetail
//                   isSlideUpHeight={isSlideUpHeight}
//                   setIsSlideUpHeight={setIsSlideUpHeight}
//                   isSlideUp={isSlideUp}
//                   setIsSlideUp={setIsSlideUp}
//                   isDesktopBelow={isDesktopBelow}
//                 />
//                 <SocialSlider />
//                 <MaterialsCam />
//                 <PackagingDetails />
//                 <InstaSlides />
//                 <CampignFaqs />
//                 <Footer />
//               </>
//             ) : router?.query?.id === "stand-up-pouch" ? (
//               <>
//                 <CampignHeader />
//                 <SingleProductDetail
//                   isSlideUpHeight={isSlideUpHeight}
//                   setIsSlideUpHeight={setIsSlideUpHeight}
//                   isSlideUp={isSlideUp}
//                   setIsSlideUp={setIsSlideUp}
//                   isDesktopBelow={isDesktopBelow}
//                 />
//                 <SocialSlider />
//                 <MaterialsCam />
//                 <PackagingDetails />
//                 <InstaSlides />
//                 <CampignFaqs />
//                 <Footer />
//               </>
//             ) : router?.query?.id === "spout-pouches" ? (
//               <>
//                 <CampignHeader />
//                 <SingleProductDetail
//                   isSlideUpHeight={isSlideUpHeight}
//                   setIsSlideUpHeight={setIsSlideUpHeight}
//                   isSlideUp={isSlideUp}
//                   setIsSlideUp={setIsSlideUp}
//                   isDesktopBelow={isDesktopBelow}
//                 />
//                 <SocialSlider />
//                 <MaterialsCam />
//                 <PackagingDetails />
//                 <InstaSlides />
//                 <CampignFaqs />
//                 <Footer />
//               </>
//             ) : (
//               ""
//             ))}
//         </div>
//       </main>
//     </>
//   );
// }

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (ctx) => {
//     try {
//       const detailResult = await store.dispatch(
//         detailDataRequest(ctx?.params?.id)
//       );
//       if (!detailResult.payload.status) {
//         return {
//           redirect: {
//             destination: "/404",
//             permanent: false,
//           },
//         };
//       }

//       await Promise.all([
//         store.dispatch(headerDataRequest()),
//         store.dispatch(homeDataRequest()),
//       ]);
//       const productNames = Object.keys(campignObj).map((item) => item);
//       const isAvalibleProduct = productNames.filter(
//         (data) => data === ctx?.query?.id
//       );
//       if (!isAvalibleProduct?.[0]) {
//         return {
//           redirect: {
//             destination: "/404",
//             permanent: false,
//           },
//         };
//       }
//     } catch (error) {
//       console.error("Error in getServerSideProps:", error);
//     }

//     return {
//       props: {},
//     };
//   }
// );

// export default DetailsPage;



import CampignFaqs from "@/components/campignCom/Faqs";
import MaterialsCam from "../../../components/campignCom/MaterialsCam";
import CampignHeader from "@/components/campignCom/header";
import InstaSlides from "@/components/campignCom/instaSlide";
import PackagingDetails from "@/components/campignCom/productDetail";
import Footer from "@/components/common/Footer";
import { campignObj } from "@/data/compaignData";
import { detailDataRequest } from "@/redux/detail";
import { headerDataRequest, homeDataRequest } from "@/redux/home";
import { wrapper } from "@/store";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SocialSlider from "@/components/Home/socialSlider";
import SingleProductDetail from "@/components/campignCom/singleProductDetail";
import { useMediaQuery } from "react-responsive";
import Testimonial from "@/components/Home/Testimonial";
import CampaignContent from "@/components/campignCom/campaignContent";
import MylarCampaignHeader from "@/components/campaignMylarBags/mylarCampaignHeader";
import MainSliderMylar from "@/components/campaignMylarBags/mainSliderMylar";
import LiveChatMylar from "@/components/campaignMylarBags/liveChatMylar";
import ProductStandMylar from "@/components/campaignMylarBags/productStandMylar";
import InspiredMylar from "@/components/campaignMylarBags/InspiredMylar";
import ChatTwo from "@/components/Home/chatTwo";

function DetailsPage() {
  const [isSlideUp, setIsSlideUp] = useState(false);
  const [isSlideUpHeight, setIsSlideUpHeight] = useState(true);
  const [data, setData] = useState({});
  const { detailData } = useSelector((state) => state.detail);
  const sectionRef = useRef(null);

  const isDesktopBelow = useMediaQuery({ query: "(max-width: 1100px)" });

  const { countryName, ip } = useSelector((state) => state.getCountry);

  const router = useRouter();
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
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`https://print247.us${router?.asPath}`} />
      </Head>
      <main>
        <div className={router?.query?.id !== "custom-mylar-bags-a" && isDesktopBelow ? isSlideUpHeight ? "afterSlide" : "beforeSlide" : ""}>
          {
            // data?.id &&
            router?.query?.id === "custom-mylar-bags" ?
              <>
                <CampignHeader />
                <SingleProductDetail isSlideUpHeight={isSlideUpHeight} setIsSlideUpHeight={setIsSlideUpHeight} isDesktopBelow={isDesktopBelow} minQuantity={1000} />
                <SocialSlider />
                <MaterialsCam />
                <PackagingDetails />
                <InstaSlides />
                <CampaignContent />
                <Testimonial />
                <CampignFaqs />
                <Footer />
              </>

              : ""
          }
        </div>
      </main>

    </>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (ctx) => {
//     try {
//       const detailResult = await store.dispatch(
//         detailDataRequest(ctx?.params?.id)
//       );
//       if (!detailResult.payload.status) {
//         return {
//           redirect: {
//             destination: "/404",
//             permanent: false,
//           },
//         };
//       }

//       await Promise.all([
//         store.dispatch(headerDataRequest()),
//         store.dispatch(homeDataRequest()),
//       ]);
//       const productNames = Object.keys(campignObj).map((item) => item);
//       const isAvalibleProduct = productNames.filter(
//         (data) => data === ctx?.query?.id
//       );
//       if (!isAvalibleProduct?.[0]) {
//         return {
//           redirect: {
//             destination: "/404",
//             permanent: false,
//           },
//         };
//       }
//     } catch (error) {
//       console.error("Error in getServerSideProps:", error);
//     }

//     return {
//       props: {},
//     };
//   }
// );

export default DetailsPage;