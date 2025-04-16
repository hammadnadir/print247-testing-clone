import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { searchDataRequest } from "@/redux/home";
import { getUserIdFromLocalStorage } from "@/utils";
import SearchCom from "@/components/Search";
import { getCartRequest } from "@/redux/cart";
import { industries } from "@/data/industries";
import Faq from 'react-faq-component';

function MylarCampaignHeader({ isWhiteColor = false }) {
    const [showresSearch, setShowresSearch] = useState(false);
    const [searchVal, setSearchVal] = useState("");
    const [subProducts, setSubProducts] = useState(false);
    const [subIndProducts, setIndSubProducts] = useState(false);
    const [focusInput, setFocusInput] = useState(false);
    const [focusInput2, setFocusInput2] = useState(false);
    const [cartData, setCartData] = useState(null);
    const router = useRouter();
    const dispatch = useDispatch();

    const { mainCart } = useSelector((state) => state.cart);

    const { header, searchData } = useSelector((state) => state.home);

    const userId = getUserIdFromLocalStorage();
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Function to handle clicks outside of input and dropdown
        const handleClickOutside = (event) => {
            if (
                inputRef.current &&
                dropdownRef.current &&
                !inputRef.current.contains(event.target) &&
                !dropdownRef.current.contains(event.target)
            ) {
                setFocusInput(false)
                setSearchVal("")
            }
        };

        // Add event listener for clicks on the entire document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleStart = (url) => { };
        const handleComplete = () => {
            setFocusInput(false)
            setSearchVal("")
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [router]);


    useEffect(() => {
        if (mainCart) {
            setCartData(mainCart?.cart_data);
        }
    }, [mainCart]);

    useEffect(() => {
        dispatch(getCartRequest({ user_id: userId })).then((response) => { })
    }, [])



    const handleChange = (e) => {
        setSearchVal(e.target.value);
        if (e.target.value?.length > 0) {
            dispatch(searchDataRequest({ search: e.target.value }));
        }
    };

    const handleFilter = () => {
        const inputField = document.querySelector(".inside-input-field");
        inputField.focus();
        setSearchVal("");
    };

    useEffect(() => {
        setSubProducts(false);
        setIndSubProducts(false);
    }, [router]);

    return (
        <div className="header_campign_sticker">
            <Container>
                <div className="top_data">
                    <Link href="/">
                        <Image className="Print247-Logo newprint_logo" src={isWhiteColor ? "/image/print247originalwhitelogo.svg" : "/image/print247originallogo.svg"} width={165} height={45} alt="print247 logo" />
                    </Link>

                    <div className="left_menus">
                        {/* <div>
                            <Image className="input-search-mobile" onClick={() => { setShowresSearch(true); setFocusInput2(true) }} src={isWhiteColor ? "/image/searchwhite.png" : "/image/searchh.svg"} width={17} height={17} alt='search icon' />
                        </div> */}

                        <div className="address-com">
                            <p className="cam-para">Rosenberg, TX 77471</p>
                            <img className="dot-cam" src="/image/dot-com.png" alt="iamge of dot com" />
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    );
}

export default MylarCampaignHeader;