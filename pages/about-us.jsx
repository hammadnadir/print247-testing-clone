import AboutBanner from '@/components/About/AboutBannner'
import AboutPrint247 from '@/components/About/AboutPrint247'
import Customer247 from '@/components/About/Customer247'
import SliderAbout from '@/components/About/SliderAbout'
import Value247 from '@/components/About/Value247'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import ChatTwo from '@/components/Home/chatTwo'
import Creating from '@/components/Home/creating'
import SocialSlider from '@/components/Home/socialSlider'
import { aboutDataRequest } from '@/redux/about'
import { headerDataRequest } from '@/redux/home'
import { metaDataRequest } from '@/redux/meta'
import { wrapper } from '@/store'
import Head from 'next/head'
import React from 'react'
import {  useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

function About() {

  const { metaData } = useSelector((state) => state?.meta)

  const metaTitle = metaData?.metadata?.meta_title

  const metaDescription = metaData?.metadata?.meta_description

  const isRetina = useMediaQuery({ query: '(max-width: 767px)' });

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
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
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
        <link rel="canonical" href={`https://print247.us/about-us`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/print247FavIcon.png" />
        {/* <link rel="icon" href="/images/biotech.png" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        {isRetina ?
          <>
            <Header isWhiteColor={true}/>
            <AboutBanner />
            <AboutPrint247 />
            <Value247 />
            <SliderAbout/>
            <Customer247 />
            <SocialSlider />
            <Creating />
            <div style={{ marginBottom: "70px" }}></div>
            <ChatTwo color="white"/>
            <Footer />
          </>
          :
          <>
            <Header isWhiteColor={true}/>
            <AboutBanner />
            <AboutPrint247 />
            <Value247 />
            <SliderAbout/>
            <Customer247 />
            <SocialSlider />
            <Creating />
            <div style={{ marginBottom: "50px" }}></div>
            <ChatTwo color="white"/>
            <Footer />
          </>
        }
      </main>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  store => async ({ req, res }) => {
    await Promise.all([
      store.dispatch(headerDataRequest()),
      store.dispatch(aboutDataRequest()),
      store.dispatch(metaDataRequest("about-us")),
    ]);
  }
);

export default About