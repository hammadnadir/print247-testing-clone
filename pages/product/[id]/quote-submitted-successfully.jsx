import QuoteSubmittedCam from '@/components/campignCom/QuoteSubmittedCam'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

function QuoteSubmit() {
    const router = useRouter()

    const { countryName, ip } = useSelector((state) => state.getCountry);

    return (
        <>
        <Head>
        <title>{`Quote Submitted`}</title>
                <meta name="description" content={`Quote Submitted`} />
                <link
          rel="canonical"
          href={`https://print247-testing-clone.vercel.app${router?.asPath}`}
        />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        </Head>
        <QuoteSubmittedCam />
        </>
    )
}

export default QuoteSubmit

