import Footer from '@/components/common/Footer'
import ChatTwo from '@/components/Home/chatTwo'
import React from 'react'
import { headerDataRequest, homeDataRequest } from "@/redux/home";
import { wrapper } from "@/store";
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '@/components/common/Header'
import ChristmasBanner from '@/components/christmas/christmasBanner';
import ChristmasProducts from '@/components/christmas/christmasProducts';
import ChristmasDescription from '@/components/christmas/christmasDescription';
import ChristmasFaqs from '@/components/christmas/christmasFaqs';
import { metaDataRequest } from '@/redux/meta';
import { useSelector } from 'react-redux';

export default function CustomChristmas() {

    const router = useRouter()

    const { metaData } = useSelector((state) => state?.meta)

    const metaTitle = metaData?.metadata?.meta_title

    const metaDescription = metaData?.metadata?.meta_description

    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={`https://print247-testing-clone.vercel.app${router?.asPath}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/image/print247FavIcon.png" />
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
            </Head>
            <main>
                <Header/>
                <ChristmasBanner/>
                <ChristmasProducts/>
                <ChristmasDescription/>
                <ChristmasFaqs/>
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
            store.dispatch(headerDataRequest()),
            store.dispatch(metaDataRequest("custom-christmas-boxes")),
        ]);
    }
);
