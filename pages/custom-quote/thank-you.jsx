import QuoteSubmittedCam from '@/components/campignCom/QuoteSubmittedCam'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

function ThankYou() {
    const router = useRouter()


    return (
        <>
        <Head>
        <title>{`Quote Submitted`}</title>
                <meta name="description" content={`Quote Submitted`} />
                <link
          rel="canonical"
          href={`https://print247.us${router?.asPath}`}
        />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        </Head>
        <QuoteSubmittedCam />
        </>
    )
}

export default ThankYou

