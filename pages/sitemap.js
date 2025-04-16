import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import HtmlSiteCom from '@/components/htmlSiteMap';
import { blogDataRequest } from '@/redux/blog';
import { headerDataRequest } from '@/redux/home';
import { siteMapDataRequest } from '@/redux/sitemap';
import { wrapper } from '@/store';
import Head from 'next/head';
import React from 'react'

function SiteMapHtml() {

    return (
        <>
            <Head>
                <title>HTML SITEMAP Print247</title>
                <meta name="description" content="Get printing services from Print247, your eco friendly packaging company USA. We offer a wide range of printing and packaging services." />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <main>
                <Header isWhiteColor={false} />
                <HtmlSiteCom />
                <Footer />
            </main>
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    store => async ({ req, res }) => {
        await Promise.all([
            store.dispatch(headerDataRequest()),
            store.dispatch(siteMapDataRequest()),
            store.dispatch(blogDataRequest("all"))
        ]);
    }
);


export default SiteMapHtml