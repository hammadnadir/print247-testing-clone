import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, setCookie } from 'cookies-next';
import { getCountryRequest, setCountryName, setIpAddress } from '@/redux/getCountry';
import { useRouter } from 'next/router';
import { euMemberStates } from '@/utils';

const AppWrapper = ({ children, show, setShow }) => {
    const dispatch = useDispatch();
    const router = useRouter()
    
    const { countryName, ip } = useSelector((state) => state.getCountry);
    const fetchData = async () => {
        try {
            const data = await fetch('https://one.one.one.one/cdn-cgi/trace').then(res => res.text());
            const parsedData = {};
            data.split('\n').forEach(line => {
                const [key, value] = line.split('=');
                if (key && value) {
                    parsedData[key.trim()] = value.trim();
                }
            });
            const ip = parsedData?.ip
            const country = parsedData?.loc

            dispatch(setIpAddress(ip));
            dispatch(setCountryName(country));
            if (ip !== "116.58.20.234") {
                if (euMemberStates.includes(country?.toUpperCase())) {
                    setShow(true)
                    if (router.pathname === "/unavailable") {
                        window.location.href = "/"
                    }
                } else {
                    if (router.pathname !== "/unavailable") {
                        window.location.href = "/unavailable"
                        // setShow(true)
                    } else if (router.pathname === "/unavailable") {
                        setShow(true)
                    } else {
                        setShow(false)
                    }
                }
            } else {
                if (router.pathname === "/unavailable") {
                    window.location.href = "/"
                } else {
                    setShow(true)
                }
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setShow(true)
        }
    };

    // useEffect(() => {
    //     fetchData();
    // }, [dispatch]);

    // if (show) {
        return <>{children}</>;
    // }
};

export default AppWrapper;
