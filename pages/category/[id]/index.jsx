import Head from "next/head";
import React from "react";
import { Container } from "react-bootstrap";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import CategoryBanners from "@/components/Categories/CategoryBanner";
import Sidebar from "@/components/Categories/Sidebar";
import Products from "@/components/Categories/Products";
import Collections from "@/components/Categories/Collections";
import Dropdown from "@/components/Categories/Dropdown";
import { wrapper } from "@/store";
import { sentPageRequest } from "@/redux/product";
import { headerDataRequest } from "@/redux/home";
import { useRouter } from "next/router";
import DesignLogoVideo from "@/components/DesignAndLogo/DesignLogoVideo";
import Growdesign from "@/components/DesignAndLogo/Growdesign";
import Designoption from "@/components/DesignAndLogo/Designoption";
import Businessdesign from "@/components/DesignAndLogo/Businessdesign";
import Collaborate from "@/components/DesignAndLogo/Collaborate";
import Opinion from "@/components/DesignAndLogo/Opinion";
import SignBannerProducts from "@/components/Categories/ProductsSignBanner";
import RightCard from "@/components/SubBusinessDetail/RightCard";
import CustomizedBusiness from "@/components/SubBusinessDetail/CustomizedBusiness";
import Paper from "@/components/SubBusinessDetail/Paper";
import SubFaq from "@/components/SubBusinessDetail/SubFaq";
import PremiemProducts from "@/components/SubBusinessDetail/premiemCards";
import { useSelector } from "react-redux";
import ImagesSection from "@/components/Categories/ImageSection";
import ChatTwo from "@/components/Home/chatTwo";
import { metaDataRequest } from "@/redux/meta";
import FullCategory from "@/components/Categories/FullCategory";
import { useMediaQuery } from "react-responsive";
import NotFound from "@/components/NotFound";
import { euMemberStates } from "@/utils";
import CollectionContent from "@/components/Categories/collectionContent";

function Clothing({ notFound }) {
  const router = useRouter();

  const path = router?.asPath === "/category/design-logo-design-service";

  const { metaData } = useSelector((state) => state?.meta);

  const metaTitle = metaData?.metadata?.meta_title;

  const metaDescription = metaData?.metadata?.meta_description;

  const signBanners =
    router?.asPath.includes("/category/print-products") ||
    router?.asPath.includes("/category/promotional-products");

  const buisnesscards = router?.asPath.includes("/category/business-cards");
  const isBoxesPackaging = router?.asPath.includes("/category/boxes-packaging");

  const isFaqShow =
    router?.asPath.includes("/category/mylar-bags") ||
    router?.asPath.includes("/category/labels-stickers") ||
    router?.asPath.includes("/category/signs-banners");

  const isShowImageSection =
    router?.asPath.includes("/category/mylar-bags") ||
    router?.asPath.includes("/category/labels-stickers");

  const isSmallScreen = useMediaQuery({ query: "(max-width: 1100px)" });

  const id2 = router?.query?.id?.split("-")?.splice(0, 2)?.join("-");
  const { countryName, ip } = useSelector((state) => state.getCountry);
  return (
    <>
      {/* {euMemberStates.includes(countryName?.toUpperCase()) &&  */}
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="google-site-verification"
          content="WLnhx0lStwpvOE5GoUp3EzD_KqDQWmcqXyxHbxOCVhE"
        />
        <meta
          name="p:domain_verify"
          content="fe5b86d88716bd802bfdbfdc3a9f51fb"
        />
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      </Head>
      {/* } */}
      <main>
        <Header />
        {!notFound ?
          (<div>
            {path ? (
              <>
                <DesignLogoVideo />
                <Growdesign />
                <Designoption />
                <Businessdesign />
                <Collaborate />
                <Opinion />
              </>
            ) : buisnesscards ? (
              <>
                <CategoryBanners />
                <div style={{ backgroundColor: "#E5E5E5", marginTop: "-100px", paddingTop: "100px", paddingBottom: "100px" }}>
                  <Container>
                    <div className="gap-adjust" style={{ display: "flex", gap: "38px" }}>
                      <Sidebar />
                      <div>
                        <RightCard />
                      </div>
                    </div>
                  </Container>
                </div>
                <PremiemProducts />
                <Paper />
                <CustomizedBusiness />
                {/* <CollectionContent /> */}
                <SubFaq />
              </>
            ) : (
              <>
                <CategoryBanners />
                <div style={{ backgroundColor: "#E5E5E5", marginTop: "-100px", paddingTop: "100px", paddingBottom: "100px" }}>
                  {!isSmallScreen && <FullCategory />}

                  <Container>
                    <div className="gap-adjust" style={{ display: "flex", gap: "38px" }}>
                      <Sidebar />
                      <div style={{ width: "100%" }}>
                        {isSmallScreen && <Dropdown />}
                        {signBanners ? <SignBannerProducts /> : <Products />}
                      </div>
                    </div>
                  </Container>
                </div>
                {isShowImageSection && <ImagesSection />}
                <CollectionContent />
                {isBoxesPackaging && (
                  <>
                    {/* <CollectionContent /> */}
                    <Collections />
                  </>
                )}
                {isFaqShow &&
                  (
                    <>
                      {/* <CollectionContent /> */}
                      <SubFaq />
                    </>
                  )
                }
              </>
            )}

            <ChatTwo />
          </div>) : (<NotFound />)}
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    if (ctx?.params?.id) {
      try {
        const { product } = store.getState();
        const prevId =
          product.pages?.catgeory && product.pages?.catgeory[0]?.slug;

        const id = ctx?.params?.id?.split("-")?.splice(0, 2)?.join("-");
        const id2 = ctx?.params?.id?.split("-").slice(2).join("-");
        if (prevId !== id) {
          const categoryResult = await store.dispatch(sentPageRequest(id));
          if (categoryResult?.payload?.catgeory?.length === 0) {
            return {
              notFound: true
            };
          }
          const selected = categoryResult?.payload?.catgeory?.find(
            (item) => item?.slug === id2
          );
          if (!selected?.id) {
            return {
              notFound: true
            };
          }
        }
        await Promise.all([
          store.dispatch(headerDataRequest()),
          store.dispatch(metaDataRequest(ctx?.params?.id)),
        ]);
      } catch (error) {
        console.error("Error in getServerSideProps:", error);
      }
    }
    return {
      props: {
        notFound: false,
      },
    };
  }
);

export default Clothing;
