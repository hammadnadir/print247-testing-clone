import { setPageLoading, setShowShimmer } from '@/redux/global';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Loader() {
    const { pageLoading } = useSelector((state) => state.global);
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        const handleStart = (url) => {
            if (router?.asPath === url) {
                dispatch(setPageLoading(false));
            } else {
                if (url?.includes("/category/")) {
                    dispatch(setShowShimmer(true))
                }
                const newUrl = url?.split("/");
                const isNewCat = newUrl?.[2]?.split("-")?.splice(0, 2)?.join("-");
                const id2 = router?.query?.id ? router?.query?.id?.split("-")?.splice(0, 2)?.join("-") : "";
                if (!url?.includes("/category/") || !router.asPath.includes("/category/") || isNewCat !== id2) {
                    if (!url?.includes("search=")) {
                        dispatch(setPageLoading(true));
                    }
                }
            }
        };
        const handleComplete = () => {
            dispatch(setPageLoading(false))
            setTimeout(() => {
                dispatch(setShowShimmer(false))
            }, 100)
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [dispatch, router]);

    if (pageLoading) {
        return (
            <div>
                <div className='main_loader'>
                    <div className='loader_css'></div>
                    <div className='main_loadeing'>
                        <div className="custom-loader"></div>
                        <img src="/icons/loader.gif" alt="loading" />
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Loader;