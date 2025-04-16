import React, { useRef } from "react";
import { wrapper } from "@/store";
import Head from "next/head";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { headerDataRequest } from "@/redux/home";
import { orderDataDetailRequest } from "@/redux/order";
import OrderSummaryNew from "@/components/OrderSummaryNew";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function OrderQuoteView() {

    let componentRef = useRef();
    const router = useRouter()

    const { metaData } = useSelector((state) => state?.meta)

    const metaTitle = metaData?.metadata?.meta_title

    const metaDescription = metaData?.metadata?.meta_description

    const { countryName, ip } = useSelector((state) => state.getCountry);
    
    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta
                    name="google-site-verification"
                    content="WLnhx0lStwpvOE5GoUp3EzD_KqDQWmcqXyxHbxOCVhE"
                />
                <meta name="p:domain_verify" content="fe5b86d88716bd802bfdbfdc3a9f51fb" />
                {/* <meta name="google-site-verification" content="0qmDK1CfgaS3PU55MURyg-uMlUxeP6yHkdUlduAFC9o" /> */}
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
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
                <link rel="canonical" href={`https://print247-testing-clone.vercel.app${router?.asPath}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/image/print247FavIcon.png" />
                {/* <link rel="icon" href="/images/biotech.png" /> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <main>
                <div>
                    <Header />
                    <OrderSummaryNew componentRef={componentRef} />
                    <Footer />
                </div>
            </main>
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(function (store) {
    return async function (ctx) {
        const { req, params } = ctx;

        const { id } = params || {};

        await Promise.all([
            id && store.dispatch(orderDataDetailRequest({ id })),
            store.dispatch(headerDataRequest()),
        ]);
      
    }
}
);

export default OrderQuoteView;
