// components/CustomHead.js
import { euMemberStates, excludedPaths } from "@/utils";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Script from "next/script";

const CustomHead = () => {

    const router = useRouter()
    const { countryName, ip } = useSelector((state) => state.getCountry);

    useEffect(() => {
        // if (!excludedPaths.includes(router.pathname) && euMemberStates.includes(countryName?.toUpperCase())) {
            // Inject the Zoho SalesIQ script after the component is mounted
            const script = document.createElement('script');
            script.src = "https://salesiq.zohopublic.com/widget?wc=siq4a5402d8d638be6789be8db6255c4735afa78be87725188dd2c85335875226e7";
            script.defer = true;
            document.body.appendChild(script);

            // Set the Zoho SalesIQ object
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function () { } };

            // Cleanup function to remove the script when the component is unmounted
            return () => {
                document.body.removeChild(script);
            };
        // }
    }, []);


    useEffect(() => {
        // if (!excludedPaths.includes(router.pathname) && euMemberStates.includes(countryName?.toUpperCase())) {
            // Initialize Meta Pixel tracking
            (function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1588595171866012');
            fbq('track', 'PageView');
        // }
    }, []);

    // if (!excludedPaths.includes(router.pathname) && euMemberStates.includes(countryName?.toUpperCase())) {
    return (
        <Head>
            {/* commented due to the instruction by sir kashif */}
            {/* <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,s){var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src="https://cdn.pagesense.io/js/860352469/12f2ebb0d0b54a958fa57dab225b144d.js";var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(e,x);})(window,"script");`
                }}
            /> */}
            {/* Noscript Pixel image */}
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=1588595171866012&ev=PageView&noscript=1"
                />
            </noscript>

            <Script
                id="zsiqscript"
                src="https://salesiq.zohopublic.com/widget?wc=siq1bd6b83701d86bc90652db051ca11a64335ff7ce01d784341d5633102068804d"
                strategy="afterInteractive" // Load after some initial hydration
                defer // Defer execution until after the HTML is parsed
            />
            {/* Google Tag Manager */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-M3VFRZ4W');
                `,
                }}
            />
            {/* End Google Tag Manager */}
            <script src="https://apis.google.com/js/platform.js" async defer />
            {/* Meta Pixel Code */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '720182080213343');
            fbq('track', 'PageView');
            `,
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src="https://www.facebook.com/tr?id=720182080213343&ev=PageView&noscript=1"
                />
            </noscript>
        </Head>
    );
    // }
};

export default CustomHead;
