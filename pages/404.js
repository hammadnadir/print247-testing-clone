import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import NotFound from '@/components/NotFound'
import { headerDataRequest } from '@/redux/home'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function NotFoundPage() {

    const router = useRouter()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(headerDataRequest())
    }, [dispatch])

    const { header } = useSelector((state) => state.home)

    if (header?.pages?.length > 0) {
        return (
            <>
                <Head>
                    <title>Not Found | Print 247</title>
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
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/image/print247FavIcon.png" />
                    {/* <link rel="icon" href="/images/biotech.png" /> */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
                </Head>
                <main>
                    <Header />
                    <NotFound />
                    <Footer />
                </main>
            </>
        )
    }

}



export default NotFoundPage
