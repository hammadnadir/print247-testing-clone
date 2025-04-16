import Head from "next/head";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { wrapper } from "@/store";
import { headerDataRequest } from "@/redux/home";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import IndustriesProducts from "@/components/industry/products";
import IndustryBanner from "@/components/industry/industryBanner";
import ChatTwo from "@/components/Home/chatTwo";
import { industries } from "@/data/industries";
import { setMainIndustries } from "@/redux/industry";
import { metaDataRequest } from "@/redux/meta";
import NotFound from "@/components/NotFound";

function Industries({notFound }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const { industry } = router?.query

    const { metaData } = useSelector((state) => state?.meta);
    const { mainIndustries } = useSelector((state) => state.industry)

    const metaTitle = metaData?.metadata?.meta_title;

    const metaDescription = metaData?.metadata?.meta_description
    const { countryName, ip } = useSelector((state) => state.getCountry);
    

    useEffect(() => {
        const filtered = industries?.[industry]
        if (filtered) {
            dispatch(setMainIndustries(filtered))
        }
    }, [industry])


    return (
        <>
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
            </Head>
            <main>
                <Header isWhiteColor={mainIndustries?.isWhiteHeader} />
                {notFound ?(

                
                    <NotFound/>):(
                 <div>
                    <IndustryBanner isWhiteHeading={mainIndustries?.isWhiteHeader} />
                    <div className="industry_product_top" style={{ backgroundColor: "#E5E5E5", marginTop: "-100px", paddingTop: "100px", paddingBottom: "100px", }}>
                        <Container>
                            <div className="gap-adjust" style={{ display: "flex", gap: "38px" }}>
                                <IndustriesProducts />
                            </div>
                        </Container>
                    </div>
                </div>
               ) }
                <ChatTwo color="rgb(229, 229, 229)" />
                <Footer />
            </main>
        </>
    );
}


export const getServerSideProps = wrapper.getServerSideProps(
    store => async (ctx) => {
      const industryParam = ctx?.params?.industry;
      const IndustryData = industries?.[industryParam];
  
      if (!IndustryData || !IndustryData?.title) {
        return {
          notFound: true,
        };
      }
  
      await Promise.all([
        store.dispatch(headerDataRequest()),
        store.dispatch(metaDataRequest(industryParam)),
      ]);
  
      return {
        props: {
          notFound: false, 
        },
      };
    }
  );
  
export default Industries;
