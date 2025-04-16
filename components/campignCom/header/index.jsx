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

function CampignHeader({ isWhiteColor = false }) {
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
    <div className="main_header_campign">
      <Container>
        <div className="top_data">
          <Link href="/">
            <Image className="Print247-Logo newprint_logo" src={isWhiteColor ? "/image/print247originalwhitelogo.svg" : "/image/print247originallogo.svg"} width={185} height={45} alt="print247 logo"/>
          </Link>

          <div className="outside-input-field" >
            <Image className="input-search" src={isWhiteColor ? "/image/searchwhite.png" : "/image/input-search.png"} width={17} height={17} alt="input search icon"/>
            {
              isWhiteColor ?
                <input ref={inputRef} style={{ backgroundColor: focusInput ? "black" : "transparent", border: focusInput ? "2px solid black" : "2px solid white" }} className={"inside-input-fieldWhite"} value={searchVal} placeholder="Search..." onChange={handleChange} onFocus={() => setFocusInput(true)} />
                :
                <input ref={inputRef} style={{ backgroundColor: focusInput ? "white" : "transparent" }} className={"inside-input-field"} value={searchVal} placeholder="Search..." onChange={handleChange} onFocus={() => setFocusInput(true)} />

            }
            {searchVal?.length > 0 && <Image className="input-cross" src="/image/input-cross.png" width={17} height={17} style={{ cursor: "pointer" }} onClick={handleFilter} onFocus={() => setFocusInput(true)} alt="cross icon"/>}

            <div className="search_data">
              {focusInput && searchVal?.length === 0 && <SearchCom dropdownRef={dropdownRef} setFocusInput={setFocusInput} />}
              {(focusInput && searchVal?.length > 0) && <div className='inner_searchh' ref={dropdownRef}>
                {searchData?.data?.map((item, i) => {
                  return (
                    <Link key={i} href={`${item?.type === "product" ? `/${item?.slug}` : item?.type === "category" ? `/category/${item?.page}-${item?.slug}` : `/${item?.slug}`}`}>
                      <div className='search_productt' key={i}>
                        <div className='search_imgg'>
                          <img style={{ width: "40px", height: "40px" }} src={item?.type === "product" ? item?.photo?.[0] : item?.type === "category" ? item?.photo : item?.photo?.[0]} alt={item?.title}/>
                        </div>
                        <div className='search_namee'>
                          <p>{item?.type === "product" ? `${item?.title} (Product)` : item?.type === "category" ? `${item?.title} (Category)` : item.title}</p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
                {searchData?.data?.length === 0 && <h5>Not Found</h5>}
              </div>}
            </div>
          </div>

          <div className="left_menus">
            <div>
              <Image className="input-search-mobile" onClick={() => { setShowresSearch(true); setFocusInput2(true) }} src={isWhiteColor ? "/image/searchwhite.png" : "/image/searchh.svg"} width={17} height={17} alt='search icon'/>
            </div>

            {showresSearch && focusInput2 && <div>
              <div onClick={() => setShowresSearch(false)} style={{ position: "fixed", height: "100vh", opacity: 0.6, top: 0, left: 0, width: "100%", backgroundColor: "black" }}></div>
              <div style={{ width: "100%", position: "fixed", top: "30%", left: "50%", transform: "translate(-50%,-50%)", display: "flex", alignItems: "center" }}>
                <div style={{ width: '80%', margin: "auto", position: 'relative', height: "fit-content" }}>
                  <input
                    value={searchVal}
                    id="autocompleteInput"
                    placeholder="Search Product"
                    onChange={handleChange}
                    style={{
                      padding: '1rem',
                      width: '100%',
                      border: '1px solid #e5e7eb',
                      outline: "none",
                      borderRadius: "0.25rem"
                    }}
                  />
                  <div
                    id="dropdown"
                    style={{
                      width: '100%',
                      maxHeight: '50vh',
                      border: 'none',
                      borderRadius: '0.375rem',
                      backgroundColor: 'white',
                      position: 'absolute',
                      overflowY: 'scroll',
                      zIndex: "9999999999999"
                    }}
                  >
                    {searchVal?.length > 0 && <div className='inner_searchh'>
                      {searchData?.data?.map((item, i) => {
                        return (
                          <Link key={i} href={`/${item?.slug}`}>
                            <div
                              style={{
                                padding: '1rem',
                                borderBottom: '1px solid #e5e7eb',
                                color: '#4b5558',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s ease',
                                display: "flex",
                                gap: "20px",
                                width: "100%",
                                alignItems: "center"
                              }}
                            >
                              <div className='search_imgg'>
                                <img style={{ width: "40px", height: "40px" }} src={item?.photo?.[0]} alt={item?.title}/>
                              </div>
                              <div className='search_namee'>
                                <p style={{ marginBottom: "0px" }}>{item.title}</p>
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                      {searchData?.data?.length === 0 && <div
                        style={{
                          padding: '1rem',
                          borderBottom: '1px solid #e5e7eb',
                          color: '#4b5558',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s ease',
                        }}>Not Found</div>}
                    </div>}
                  </div>
                </div>
              </div>
            </div>}
            <div className="address-com">
              <p className="cam-para">California, CA 91342</p>
              <img className="dot-cam" src="/image/dot-com.png" alt="iamge of dot com" />
            </div>



          </div>
        </div>
      </Container >
    </div >
  );
}

export default CampignHeader;

