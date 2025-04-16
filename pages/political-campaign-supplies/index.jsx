import Footer from '@/components/common/Footer'
import PoliticalBanner from '@/components/compaignPolitical/politicalBanner'
import PoliticalSigns from '@/components/compaignPolitical/politicalSigns'
import ChatTwo from '@/components/Home/chatTwo'
import React from 'react'
import { headerDataRequest, homeDataRequest } from "@/redux/home";
import { wrapper } from "@/store";
import PoliticalHeader from '@/components/compaignPolitical/politicalHeader'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PoliticalDescription from '@/components/compaignPolitical/politicalDescription'
import { useSelector } from 'react-redux'

export default function PoliticalCompaignSupplies() {
    
    const router = useRouter()

    const { countryName, ip } = useSelector((state) => state.getCountry);
    
    return (
        <>
            <Head>
                <title>Custom Political Campaign Supplies</title>
                <link
                    rel="canonical"
                    href={`https://print247-testing-clone.vercel.app${router?.asPath}`}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/image/print247FavIcon.png" />
                {/* <link rel="icon" href="/images/biotech.png" /> */}
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
            </Head>
            <main>
                <PoliticalHeader />
                <PoliticalBanner />
                <PoliticalSigns />
                <PoliticalDescription />
                <ChatTwo />
                <Footer />
            </main>
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    store => async () => {
        await Promise.all([
            store.dispatch(homeDataRequest()),
            store.dispatch(headerDataRequest())
        ]);
    }
);
