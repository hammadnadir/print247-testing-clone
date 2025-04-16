import Description from "@/components/Details/Description";
import ChatTwo from "@/components/Home/chatTwo";
import NotFound from "@/components/NotFound";
import DetailvinylSection from "@/components/VinylDetails/DetailvinylSection";
import CampaignMayLike from "@/components/campaignProducts/campaignMayLike";
import CampaignPoliticalProduct from "@/components/campaignProducts/campaignPoliticalProduct";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PackagingDetail from "@/components/packagingDetail";
import { detailDataRequest } from "@/redux/detail";
import { headerDataRequest, homeDataRequest } from "@/redux/home";
import { wrapper } from "@/store";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function DetailsPage({ notFound }) {
  const [data, setData] = useState({});
  const { detailData } = useSelector(
    (state) => state.detail
  );
  const [showFullContent, setShowFullContent] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const { countryName, ip } = useSelector((state) => state.getCountry);
  
  useEffect(() => {
    setData(detailData);
    const scripts = detailData?.script_text && detailData?.script_text !== undefined && JSON.parse(detailData?.script_text);

    if (scripts) {
      const allScripts = Object.values(scripts);

      if (allScripts && allScripts.length > 0) {
        allScripts.forEach((script) => {
          // Identify JSON-LD or other <script> types by checking for the type="application/ld+json"
          const isJsonLd = script?.includes('application/ld+json');

          if (isJsonLd) {
            // Create a new script element for JSON-LD
            const scriptTag = document.createElement('script');
            scriptTag.type = 'application/ld+json';
            scriptTag.innerHTML = script?.match(/<script[^>]*>([\s\S]*?)<\/script>/)[1];  // Extract content inside <script> tags
            document.head.appendChild(scriptTag);
          } else {
            // For any other scripts, clean up the script tags and attempt to execute
            const cleanedScript = script?.replace(/<\/?script[^>]*>/g, '').trim();

            try {
              const executeScript = new Function(cleanedScript);
              executeScript();
            } catch (error) {
              console.error('Error executing script:', error);
            }
          }
        });
      }
    }
  }, [detailData]);



  useEffect(() => {
    if (showFullContent) {
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
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [router?.asPath, showFullContent]);
  const productIds = [
    "spout-pouches",
    "stand-up-pouch",
    "cbd-mylar-bag",
    "custom-mylar-bags",
    "printed-pouches",
    "flat-pouches",
    "coffee-bags"
  ];
  const campaignScriptProduct = [
    'spout-pouches',
    'printed-pouches',
    'stand-up-pouch',
    'custom-mylar-bags',
    'coffee-bags',
    'custom-pouches',
    'flat-pouches'
  ]

  useEffect(() => {
    if (campaignScriptProduct.includes(router?.query?.id)) {
      if (typeof window !== 'undefined') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-10926320771/BsPPCM-Zn8wZEIPZidoo',
        });
      }
    }
  }, []);

  useEffect(() => {
    if (productIds.includes(router.query.id)) {
      // Load the Google Tag Manager script
      const script1 = document.createElement('script');
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-10926320771';
      script1.async = true;
      document.head.appendChild(script1);

      // Initialize Google Tag Manager with the given ID
      const script2 = document.createElement('script');
      script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10926320771');
    `;
      document.head.appendChild(script2);

      // Clean up script elements if necessary
      return () => {
        document.head.removeChild(script1);
        document.head.removeChild(script2);
      }
    };
  }, []);

  return (
    <>
      <Head
      >
        <title>{detailData?.meta_title}</title>
        <meta name="description" content={detailData?.meta_desc} />
        <meta
          name="google-site-verification"
          content="WLnhx0lStwpvOE5GoUp3EzD_KqDQWmcqXyxHbxOCVhE"
        />
        <meta
          name="p:domain_verify"
          content="fe5b86d88716bd802bfdbfdc3a9f51fb"
        />
        {/* <meta name="google-site-verification" content="0qmDK1CfgaS3PU55MURyg-uMlUxeP6yHkdUlduAFC9o" /> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YZ0SGTQD2B"
        ></script>
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

        <link
          rel="canonical"
          href={`https://print247-testing-clone.vercel.app${router?.asPath}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/print247FavIcon.png" />
        {/* <link rel="icon" href="/images/biotech.png" /> */}
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <div>
          {data?.id && (
            <>
              <Header />
              {notFound ? (
                <NotFound />
              ) :
                <div>
                  <CampaignPoliticalProduct />
                  <CampaignMayLike showFullContent={showFullContent} setShowFullContent={setShowFullContent} />
                  <ChatTwo />
                </div>
              }
              <Footer />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    try {
      const detailResult = await store.dispatch(
        detailDataRequest(ctx?.params?.id)
      );
      if (!detailResult.payload.status) {
        return {
          notFound: true
        };
      }

      await Promise.all([
        store.dispatch(headerDataRequest()),
        store.dispatch(homeDataRequest()),
      ]);
    } catch (error) {
      console.error("Error in getServerSideProps:", error);
    }

    return {
      props: {
        notFound: false
      },
    };
  }
);

export default DetailsPage;
