import Head from "next/head";
import { wrapper } from "@/store";
import Header from "@/components/common/Header";
import Banner from "@/components/Home/banner";
import Footer from "@/components/common/Footer";
import { headerDataRequest, homeDataRequest } from "@/redux/home";
import { metaDataRequest } from "@/redux/meta";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import SocialSlider from "@/components/Home/socialSlider";
import BrandEssential from "@/components/Home/brandEssentials";
import BrandEssentialsMobile from "@/components/mobileView/home/brandEssentialsMobile";
import ProcessMobile from "@/components/mobileView/home/processMobile";
import LinesMobile from "@/components/mobileView/home/linesMobile";
import Industry from "@/components/Home/industry";
import Nfc from "@/components/Home/nfc";
import Creating from "@/components/Home/creating";
import LinesTwo from "@/components/Home/linesTwo";
import ChatTwo from "@/components/Home/chatTwo";
import ProcessNew from "@/components/Home/processNew";
import CategoryNew from "@/components/Home/categoryNew";
import CategoryNewMobile from "@/components/mobileView/home/categoryNewMobile";
import { useState } from "react";
import Testimonial from "@/components/Home/Testimonial";
import { euMemberStates } from "@/utils";
import HomeContent from "@/components/Home/homeContent";
import OurProcess from "@/components/Home/ourProcess";
import OurProcessMobile from "@/components/mobileView/home/ourProcessMobile";
import LatestPackaging from "@/components/Home/latestPackaging";
import LatestCreation from "@/components/Home/latestCreation";
import LatestBrand from "@/components/Home/latestBrand";
import LatestSmarterBranding from "@/components/Home/latestSmarterBranding";
import LatestIndustry from "@/components/Home/latestIndustry";
import LatestIndustryMobile from "@/components/mobileView/home/latestIndustryMobile";

export default function Home() {

  const [show, setShow] = useState(0);

  const [stateValue, setStateValue] = useState(0);

  const isRetina = useMediaQuery({ query: '(max-width: 575px)' });
  const { countryName, ip } = useSelector((state) => state.getCountry);

  return (
    <>
      <Head>
        <title>Printing Services & Eco Friendly Packaging Company USA</title>
        <meta name="description" content="Get printing services from Print247, your eco friendly packaging company USA. We offer a wide range of printing and packaging services." />
        <meta
          name="google-site-verification"
          content="WLnhx0lStwpvOE5GoUp3EzD_KqDQWmcqXyxHbxOCVhE"
        />
        <meta name="p:domain_verify" content="fe5b86d88716bd802bfdbfdc3a9f51fb" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YZ0SGTQD2B"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YZ0SGTQD2B');
            `,
          }}
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "",
              "name": "Print247",
              "url": "https://print247-testing-clone.vercel.app/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lancaster",
                "addressCountry": "United States",
                "postalCode": "93534",
                "streetAddress": "42450 12th St W #112, Lancaster, CA 93534"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "7252688276",
                "url": "https://print247-testing-clone.vercel.app/contact-us/",
                "contactType": "Customer Support"
              },
              "logo": {
                "@type": "ImageObject",
                "url": "https://print247-testing-clone.vercel.app/wp-content/uploads/2023/01/Print247-Logo.png",
                "width": 114,
                "height": 85,
                "@id": "https://print247-testing-clone.vercel.app/wp-content/uploads/2023/01/Print247-Logo.png/#logo"
              }
            }
          `}
        </script>
        <link rel="canonical" href="https://print247-testing-clone.vercel.app" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://print247-testing-clone.vercel.app/" />
        <meta property="og:image" content="/image/print247FavIcon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/print247FavIcon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <div>
          {
            isRetina ?
              <>
                <Header isWhiteColor={false} />
                <Banner show={show} setShow={setShow} stateValue={stateValue} setStateValue={setStateValue} />
                <SocialSlider />
                <LatestPackaging />
                <LatestCreation />
                <LatestBrand />
                <LatestSmarterBranding />
                <LatestIndustryMobile />
                {/* <CategoryNewMobile /> */}
                {/* <BrandEssentialsMobile /> */}
                {/* <Industry /> */}
                <LinesTwo />
                <OurProcessMobile />
                <Testimonial />
                <Creating />
                <HomeContent />
                <ChatTwo color="white" />
                <Footer />
              </>
              :
              <>
                <Header isWhiteColor={false} />
                <Banner show={show} setShow={setShow} stateValue={stateValue} setStateValue={setStateValue} />
                <SocialSlider />
                <LatestPackaging />
                <LatestCreation />
                <LatestBrand />
                <LatestSmarterBranding />
                <LatestIndustry />
                {/* <CategoryNew />
                <BrandEssential />
                <Industry /> */}
                <LinesTwo />
                <OurProcess />
                <Testimonial />
                <Creating />
                <HomeContent />
                <ChatTwo color="white" />
                <Footer />
              </>
          }
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  store => async ({ req, res }) => {
    await Promise.all([
      store.dispatch(homeDataRequest()),
      store.dispatch(headerDataRequest())
    ]);
  }
);