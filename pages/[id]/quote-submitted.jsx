import QuoteSubmitted from '@/components/QuoteSubmitted'
import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function QuoteSubmit() {

  const router = useRouter()
  const { countryName, ip } = useSelector((state) => state.getCountry);

  const productIds = [
    "spout-pouches",
    "stand-up-pouch",
    "cbd-mylar-bag",
    "custom-mylar-bags",
    "printed-pouches",
    "flat-pouches",
    "coffee-bags"
  ];

  useEffect(() => {
    if (productIds.includes(router.query.id)) {
      // Add the GTM script
      const script1 = document.createElement('script');
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-10926320771';
      script1.async = true;
      document.head.appendChild(script1);

      // Add the first dangerouslySetInnerHTML script
      const script2 = document.createElement('script');
      script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10926320771');
    `;
      document.head.appendChild(script2);

      // Add the second dangerouslySetInnerHTML script
      const script3 = document.createElement('script');
      script3.innerHTML = `
      gtag('event', 'conversion', {'send_to': 'AW-10926320771/pk'});
    `;
      document.head.appendChild(script3);

      // Clean up script elements if necessary
      return () => {
        document.head.removeChild(script1);
        document.head.removeChild(script2);
        document.head.removeChild(script3);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://print247.us${router?.asPath}`}
        />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
      </Head>
      <div>
        <QuoteSubmitted />
      </div>
    </>
  )
}

export default QuoteSubmit

