import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Link from "next/link";
import MenuBar from "../../common/MenuBar";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { searchDataRequest } from "@/redux/home";
import { getUserIdFromLocalStorage } from "@/utils";
import SearchCom from "@/components/Search";
import { getCartRequest } from "@/redux/cart";
import { industries } from "@/data/industries";
import Faq from 'react-faq-component';
import { hideCategories, hideCategoriesData } from "@/data/hideCategories";

function PoliticalHeader({ isWhiteColor = false }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuInd, setShowMenuInd] = useState(false);
  const [showresSearch, setShowresSearch] = useState(false);
  const [searchVal, setSearchVal] = useState("");
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


  const handleClick = () => {
    setShowMenu(true);
    setShowMenuInd(true);
  };

  const handleClose = () => {
    setShowMenu(false);
    setShowMenuInd(false);
  };

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
    setShowMenu(false);
    setShowMenuInd(false);
  }, [router]);

  const des = [
    "Durable Custom, Quality Packaging",
    "Airtight Durable, Versatile Protection",
    "Custom Durable, Eye-Catching Labels",
    "Bold Custom, High-Impact Displays",
    "Professional, Custom, Eye-Catching Cards",
    "Vibrant, High-Quality, Custom Prints",
    "Creative, Brand-Focused, Designs",
  ]

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const faqData = {
    title: (
      <>
        <div onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', justifyContent: "space-between" }}>
          <div>
            <p style={{ color: "white", fontSize: "17px" }}>Shop by Industries</p>
          </div>
          <img src="/image/right-arrow-W.png" style={{ marginLeft: 'auto', transform: isOpen ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }} alt="arrow icon"></img>
        </div>
      </>
    ),
    rows: isOpen
      ? Object.entries(industries).map(([key, industry]) => ({
        title: (
          <>
            <div
              key={key}
              style={{ transform: 'translateY(0)', transition: 'transform 0.3s ease-in-out' }}>
              <Link href={industry?.links} className="sub-menus-mobile">
                <p>{industry.title}</p>
              </Link>
            </div>
          </>
        ),
      }))
      : [],
  };

  return (
    <div className="main_header_political">
      <div className="glass_political">
        <Container>
          <div className="top_data_political">
            <div className="main_icons">
              <Image className="ham-header" src={isWhiteColor ? "/image/hamburgerwhite.png" : "/image/ham-header.png"} onClick={handleClick} width={20} height={16} alt="hamburger menu icon" />
              <Link href="/">
                <Image className="Print247-Logo" src={isWhiteColor ? "/image/print247originalwhitelogo.svg" : "/image/print247originallogo.svg"} width={185} height={45} alt="logo icon" />
              </Link>
            </div>

            <div className="outside-input-field-political" >
              <Image className="input-search" src={isWhiteColor ? "/image/searchwhite.png" : "/image/input-search.png"} width={17} height={17} alt="search icon" />
              {
                isWhiteColor ?
                  <input ref={inputRef} style={{ backgroundColor: focusInput ? "black" : "transparent", border: focusInput ? "2px solid black" : "2px solid white" }} className={"inside-input-fieldWhite"} value={searchVal} placeholder="Search..." onChange={handleChange} onFocus={() => setFocusInput(true)} />
                  :
                  <input ref={inputRef} style={{ backgroundColor: focusInput ? "white" : "transparent" }} className={"inside-input-field"} value={searchVal} placeholder="Search..." onChange={handleChange} onFocus={() => setFocusInput(true)} />

              }
              <Link href="/">
                <Image className="Print247-Logo-mobile" src={isWhiteColor ? "/image/print247originalwhitelogo.svg" : "/image/Print247-Logo-mobile.png"} width={185} height={45} alt="logo" />
              </Link>
              {searchVal?.length > 0 && <Image className="input-cross" src="/image/input-cross.png" width={17} height={17} style={{ cursor: "pointer" }} onClick={handleFilter} onFocus={() => setFocusInput(true)} alt="cross icon" />}

              {/* <div className="search_data">
                {focusInput && searchVal?.length === 0 && <SearchCom dropdownRef={dropdownRef} setFocusInput={setFocusInput} />}
                {(focusInput && searchVal?.length > 0) && <div className='inner_searchh' ref={dropdownRef}>
                  {searchData?.data?.map((item, i) => {
                    return (
                      <Link key={i} href={`${item?.type === "product" ? `/${item?.slug}` : item?.type === "category" ? `/category/${item?.page}-${item?.slug}` : `/${item?.slug}`}`}>
                        <div className='search_productt' key={i}>
                          <div className='search_imgg'>
                            <img style={{ width: "40px", height: "40px" }} src={item?.type === "product" ? item?.photo?.[0] : item?.type === "category" ? item?.photo : item?.photo?.[0]} alt="product photo" />
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
              </div> */}
              <div className="search_data">
                {focusInput && searchVal?.length === 0 && <SearchCom dropdownRef={dropdownRef} setFocusInput={setFocusInput} />}
                {(focusInput && searchVal?.length > 0) && <div className='inner_searchh' ref={dropdownRef}>
                  {searchData?.data
                    // .filter((data)=>!hideCategories.includes(data.slug))
                    .map((item, i) => {
                      if (hideCategories.includes(item?.slug)) {
                        const itemData = hideCategoriesData?.[item?.slug]
                        return (
                          <Link key={i} href={itemData?.completeSlug}>
                            <div className='search_productt' key={i}>
                              <div className='search_imgg'>
                                <img style={{ width: "40px", height: "40px" }} src={itemData?.searchThumbnail || item?.photo?.[0]} alt="product photo" />
                              </div>
                              <div className='search_namee'>
                                <p>{item?.type === "product" ? `${item?.title} (Product)` : item?.type === "category" ? `${item?.title} (Category)` : item.title}</p>
                              </div>
                            </div>
                          </Link>
                        )
                      } else if (item?.type === "product" && item?.slug?.includes("political")) {
                        return (
                          <Link key={i} href={`/political-campaign-supplies/${item?.slug}`}>
                            <div className='search_productt' key={i}>
                              <div className='search_imgg'>
                                <img style={{ width: "40px", height: "40px" }} src={item?.type === "product" ? item?.photo?.[0] : item?.type === "category" ? item?.photo : item?.photo?.[0]} alt="product photo" />
                              </div>
                              <div className='search_namee'>
                                <p>{item?.type === "product" ? `${item?.title} (Product)` : item?.type === "category" ? `${item?.title} (Category)` : item.title}</p>
                              </div>
                            </div>
                          </Link>
                        )
                      } else {
                        return (
                          <Link key={i} href={`${item?.type === "product" ? `/${item?.slug}` : item?.type === "category" ? `/category/${item?.page}-${item?.slug}` : `/${item?.slug}`}`}>
                            <div className='search_productt' key={i}>
                              <div className='search_imgg'>
                                <img style={{ width: "40px", height: "40px" }} src={item?.type === "product" ? item?.photo?.[0] : item?.type === "category" ? item?.photo : item?.photo?.[0]} alt="product photo" />
                              </div>
                              <div className='search_namee'>
                                <p>{item?.type === "product" ? `${item?.title} (Product)` : item?.type === "category" ? `${item?.title} (Category)` : item.title}</p>
                              </div>
                            </div>
                          </Link>
                        )
                      }

                    })}
                  {searchData?.data?.length === 0 && <h5>Not Found</h5>}
                </div>}
              </div>
            </div>

            <div className="left_menus">
              <div>
                <Image className="input-search-mobile" onClick={() => { setShowresSearch(true); setFocusInput2(true) }} src={isWhiteColor ? "/image/searchwhite.png" : "/image/searchh.svg"} width={17} height={17} alt="search icon" />
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
                                  <img style={{ width: "40px", height: "40px" }} src={item?.photo?.[0]} alt="search image" />
                                </div>
                                <div className='search_namee'>
                                  <span style={{ marginBottom: "0px" }}>{item.title}</span>
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

              <a id="lets-talk2" className="main_call" href="tel:13462461639">
                <div className={isWhiteColor ? "talk_btnTwo" : "talk_btn"}>
                  <div id="container">
                    <button className="learn-more">
                      <span className="circle" aria-hidden="true">
                        <img className="icon arrow" src="/images/phoneicon.png" alt="phone icon" />
                      </span>
                      <span className="button-text">Let's talk</span>
                    </button>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </Container >
        <MenuBar isWhiteColor={isWhiteColor} />

        <div className={`styling-header-mobile side_menu_res ${showMenu ? "show_menu" : "hidden_menu"}`} >
          <div className="mobile-ham-menu">
            <Link href="/">
              <Image className="Print247-Logo" src="/image/logow.png" width={115} height={30} alt="logo icon" />
            </Link>

            <div onClick={handleClose} className="main-close-header">
              <span>Close<img className="close-header" src="/image/close_menu_w.png" alt="close icon" /></span>
            </div>
          </div>

          <div>
            <div>
              <Faq data={faqData} />
              <hr style={{ color: "white" }} />
            </div>
          </div>

          {Array.isArray(header?.pages) &&
            header?.pages
              .filter((item) => item.slug !== "cloth-bags")
              .map((item, i) => {
                return (
                  <div style={{ padding: "12px 0" }} key={i}>
                    <Link style={{ display: "flex", flexDirection: "column" }} href={`/category/${item.slug}-${item?.categories[0]?.slug}`} >
                      <span style={{ color: "white", fontSize: "18px" }}>{item.title}</span>
                      {des[i] && (
                        <span style={{ color: "#f1f1f1", fontSize: "9px", fontWeight: "300", paddingTop: "5px" }}>{des[i]}</span>
                      )}
                    </Link>
                  </div>
                );
              })}

          <div className="office_data">
            <span style={{ textDecoration: "none" }}>OFFICE</span>
            <a href="https://www.google.com/maps/place/1631+Cottonwood+School+Rd,+Rosenberg,+TX+77471,+USA/@29.5243243,-95.8307941,867m/data=!3m2!1e3!4b1!4m6!3m5!1s0x86411b9dbaf843bf:0xb87f9d80c5990d5e!8m2!3d29.5243197!4d-95.8282138!16s%2Fg%2F11b8z01lhk!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer">
              <span style={{ display: "block", textAlign: "left", textDecoration: "none" }}>1631 Cottonwood School Rd Rosenberg, <br />TX 77471,USA</span>
            </a>
            <div className="info_contact">
              <Link id="lets-talk3" className="info_num" href="tel: 13462461639">+1 (346) 246-1639</Link> <br />
              <a className="info_mail" href="mailto: Support@print247.us">Support@print247.us</a>
            </div>
            <Link target="_blank" href="https://www.instagram.com/print247.us/"> <span style={{ display: "block" }}>Watch our showreel</span></Link>
          </div>

        </div>

      </div >
    </div >
  );
}

export default PoliticalHeader;

