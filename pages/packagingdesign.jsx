import Projects from '@/components/About/Projects'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import ChatTwo from '@/components/Home/chatTwo'
import Alcoken from '@/components/PackagingDesign/Alcoken'
import PackageBanner from '@/components/PackagingDesign/PackageBanner'
import PackBox from '@/components/PackagingDesign/PackBox'
import { headerDataRequest } from '@/redux/home'
import { metaDataRequest } from '@/redux/meta'
import { wrapper } from '@/store'
import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'

function Packagingdesign() {

  const { metaData } = useSelector((state) => state?.meta)

  const metaTitle = metaData?.metadata?.meta_title

  const metaDescription = metaData?.metadata?.meta_description
  const { countryName, ip } = useSelector((state) => state.getCountry);
  
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="p:domain_verify" content="fe5b86d88716bd802bfdbfdc3a9f51fb" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
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
        <link rel="canonical" href={`https://print247-testing-clone.vercel.app/packagingdesign`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/logow.png" />
        {/* <link rel="icon" href="/images/biotech.png" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <Header />
        <PackageBanner />
        <Alcoken />
        <PackBox />
        <Projects />
        <ChatTwo  color="#F8F8F8"/>
        <Footer />
      </main>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  store => async ({ req, res }) => {
    await Promise.all([
      store.dispatch(headerDataRequest()),
      store.dispatch(metaDataRequest("packagingdesign")),
    ]);
  }
);

export default Packagingdesign