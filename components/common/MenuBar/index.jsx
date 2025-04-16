import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Flex } from '@radix-ui/themes';
import { industries } from "@/data/industries";
import { newIndusries } from "@/data/newIndustrues";


function MenuBar({ isWhiteColor = false }) {
  const { header } = useSelector((state) => state.home);

  const [visible, setVisible] = useState(false);
  const [visibleNew, setVisibleNew] = useState("");
  const [show, setShow] = useState(true);
  const [visible2, setVisible2] = useState("");
  const [hoverInfo, setHoverInfo] = useState({ x: null, y: null });
  const router = useRouter();

  const handleMouseEnter = (event, index) => {
    setVisibleNew(index);
    const element = document.getElementById(`product${index}`);
    const mainDiv = document.getElementById('section2');
    const rect = element.getBoundingClientRect();
    const mainRect = mainDiv.getBoundingClientRect();
    const xRelativeToMainDiv = (rect.left + rect.width / 2) - mainRect.left + mainDiv.scrollLeft;
    const y = event.clientY - rect.top;
    setHoverInfo({ x: xRelativeToMainDiv, y });
  };

  const handleMouseLeave = () => {
    setVisibleNew("")
    setHoverInfo({ x: null, y: null });
  };


  useEffect(() => {
    const handleRouteChange = () => {
      setVisible(false);
      setVisible2("");
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  // Api Data
  const data = header?.pages?.[0]?.categories?.[0]?.title;
  const content = (
    <div className="menuStyle" style={{
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "20px",
      marginTop: "20px"
    }}>
      {Array.isArray(header?.pages) &&
        header?.pages?.map((item, index) => {
          return (
            <div key={index} className="menuBar-icon">
              <div>
                <img
                  className="product_image"
                  src={item.icon_image}
                  width={19}
                  height={19}
                  alt="product image"
                />
              </div>
              <div>
                <Link href={`/category/${item?.slug}-${item?.categories[0]?.slug}`}>
                  {" "}
                  <p>{item.title}</p>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );

  const handlePopoverChange = (item) => {
    router.push(`/category/${item.slug}-${item?.categories[0]?.slug}`);
  };

  const selectedItem = router?.query.id && router?.query?.id?.split("-").splice(0, 2).join("-");

  useEffect(() => {
    AOS.init();
  }, [])

  const des = [
    "Durable Custom, Quality Packaging",
    "Airtight Durable, Versatile Protection",
    "Custom Durable, Eye-Catching Labels",
    "Bold Custom, High-Impact Displays",
    "Professional, Custom, Eye-Catching Cards",
    "Vibrant, High-Quality, Custom Prints",
    "Creative, Brand-Focused, Designs",
  ]

  return (
    <div className="header_page_menu">
      <div className="main_bottom">
        <Row className="section2" id="section2">
          <div className="inner_bottom">

            {/* CHRISTMAS */}

            <div>
              <Link href="/custom-christmas-boxes">
                <span className={`span_data hover_text_blue  
                  ${router.pathname === "/custom-christmas-boxes" ? "selectedItem" : ""} 
                  ${isWhiteColor ? "text-color" : ""}`}
                >
                  Christmas Boxes
                </span>
              </Link>
            </div>

            {/* CHRISTMAS */}

            {/* <div onMouseEnter={(e) => handleMouseEnter(e, 20)} onMouseLeave={handleMouseLeave}>
              <div className="card_hover_menu_ind">
                <div className="">
                  <span id={`product20`} className={`span_data ${isWhiteColor ? "text-color" : ""}`}>
                    Shop by Industry
                  </span>
                </div>
                {visibleNew === 20 && <div style={{ position: "absolute", left: hoverInfo?.x - 15 }} className="arrow_top"><span>.</span></div>}
                <div className="HoverCardContent" style={{ display: visibleNew === 20 ? "block" : "none" }}>
                  <div className="main_menuStyle">
                    <div>
                      <summary className="ind_title">Industries</summary>
                      <div className="menuStyle" style={{ backgroundColor: "white" }}>
                        {Object.entries(industries).map(([key, industry]) => (
                          <Link className="industry_title" key={key} href={industry?.links}>
                            <Flex className="img_section_Ind" gap="4" >
                              <img className="ind_image" src={industry?.iconImg} alt="image of industry" />
                              {industry?.title}
                            </Flex>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="ind_side_menu_img">
                      <img src="/image/Industries/industryIcons/industryMenuSide.webp" alt="industry side icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div onMouseEnter={(e) => handleMouseEnter(e, 20)} onMouseLeave={handleMouseLeave}>
              <div className="card_hover_menu_ind">
                <div className="">
                  <span id={`product20`} className={`span_data ${isWhiteColor ? "text-color" : ""}`}>
                    Shop by Industry
                  </span>
                </div>
                {visibleNew === 20 && <div style={{ position: "absolute", left: hoverInfo?.x - 15 }} className="arrow_top"><span>.</span></div>}
                <div className="HoverCardContent" style={{ display: visibleNew === 20 ? "block" : "none" }}>
                  <div className="main_menuStyle">
                    <div>
                      <summary className="ind_title">Industries</summary>
                      <div className="menuStyle" style={{ backgroundColor: "white" }}>
                        <div className="new_indus_grid">
                          {newIndusries.map((industry, index) => (
                            industry.links ? (
                              <Link href={industry.links} key={index}>
                                <div className="inner_new_indus_grid">
                                  <img src={industry.img} alt={`industries product image for ${industry.title}`} />
                                  <p>{industry.title}</p>
                                </div>
                              </Link>
                            ) : (
                              <div className="inner_new_indus_grid" key={index}>
                                <img src={industry.img} alt={`industries product image for ${industry.title}`} />
                                <p>{industry.title}</p>
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div onMouseEnter={(e) => handleMouseEnter(e, 0)} onMouseLeave={handleMouseLeave}>
              <div className="card_hover_menu" >
                <div>
                  <span id={`product0`} className={`span_data ${isWhiteColor ? "text-color" : ""}`}>
                    All Products
                  </span>
                </div>
                {visibleNew === 0 && <div style={{ position: "absolute", left: hoverInfo?.x - 15 }} className="arrow_top"><span>.</span></div>}
                <div className="HoverCardContent" style={{ display: visibleNew === 0 ? "block" : "none" }}>
                  <div className="prod_main_menuStyle">
                    <div>
                      <summary className="pro_title">Products</summary>
                      <div className="menuStyle" style={{ backgroundColor: "white" }}>
                        {Array.isArray(header?.pages) &&
                          header?.pages
                            .filter((item) => item.slug !== "cloth-bags")
                            .map((item, index) => {
                              return (
                                <Link style={{ cursor: "pointer" }} key={index} href={`/category/${item?.slug}-${item?.categories[0]?.slug}`}>
                                  <Flex className="img_section_product" gap="4" >
                                    <img className="pro_image" src={item.icon_image} alt="product image of industry" />
                                    <div>
                                      <span className="title" >{item.title}</span> <br />
                                      {des[index] && (
                                        <span style={{ color: "black", fontSize: "9px", fontWeight: "400", }}>{des[index]}</span>
                                      )}
                                    </div>
                                  </Flex>
                                </Link>
                              );
                            })}
                      </div>
                    </div>
                    <div className="pro_side_menu_img">
                      <img src="/image/AllProdSideImg.webp" alt="Product Side Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {Array.isArray(header?.pages) &&
              header?.pages
                .filter((item) => item.slug !== "cloth-bags")
                .map((item, index) => {
                  return (
                    <div key={index} onMouseEnter={(e) => handleMouseEnter(e, index + 1)} onMouseLeave={handleMouseLeave} >
                      <div >
                        <div>
                          <span id={`product${index + 1}`} onClick={() => handlePopoverChange(item)} className={`span_data ${selectedItem === item?.slug ? "selectedItem" : ""} ${isWhiteColor ? "text-color" : ""}`}>
                            {item?.title}
                          </span>
                        </div>
                        {visibleNew === index + 1 && index !== 6 && <div style={{ position: "absolute", left: hoverInfo?.x - 15 }} className="arrow_top"><span>.</span></div>}
                        <div className={index !== 6 ? "HoverCardContent2" : ""} style={{ display: visibleNew === index + 1 ? "block" : "none" }}>
                          {index === 0 && (
                            <div className="main_popup">
                              <div className="nav_sections" style={{ paddingLeft: "10px" }}>
                                {item?.categories[0] && (
                                  <div className="menudata_width nav_col2">
                                    <Link href={`/category/${item?.slug}-${item?.categories[0]?.slug}`}>
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[0].title}
                                      </span>
                                    </Link>
                                    <hr className="line_width" />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[0]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link key={i} className="product_title" href={`/${itemm.slug}`}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                                {item?.categories[1] && (
                                  <div className="menudata_width nav_col2">
                                    <Link href={`/category/${item.slug}-${item?.categories[1]?.slug}`}>
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[1].title}
                                      </span>
                                    </Link>
                                    <hr className="line_width" />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[1]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.categories[2] && (
                                  <div className="menudata_width nav_col2">
                                    <Link href={`/category/${item.slug}-${item?.categories[2]?.slug}`}>
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[2].title}
                                      </span>
                                    </Link>
                                    <hr className="line_width" />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[2]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                                {item?.categories[3] && (
                                  <div className="menudata_width nav_col2">
                                    <Link href={`/category/${item.slug}-${item?.categories[3]?.slug}`}>
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[3].title}
                                      </span>
                                    </Link>
                                    <hr className="line_width" />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[3]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.categories[4] && (
                                  <div className="menudata_width nav_col2">
                                    <Link href={`/category/${item.slug}-${item?.categories[4]?.slug}`} >
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[4].title}
                                      </span>
                                    </Link>
                                    <hr className="line_width" />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[4]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                                {item?.categories[5] && (
                                  <div className="menudata_width nav_col2">
                                    <Link href={`/category/${item.slug}-${item?.categories[5]?.slug}`}>
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[5].title}
                                      </span>
                                    </Link>
                                    <hr className="line_width" />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[5]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.categories[7] && (
                                  <div className="menudata_width nav_col1">
                                    <Link href={`/category/${item.slug}-display-boxes`}>
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[7].title}
                                      </span>
                                    </Link>
                                    <hr className="line_width" />
                                    <div className="product_data2 nav_col1_scroll">
                                      {item?.categories?.[7]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[0] && (
                                  <div className="menudata_width nav_col_img" style={{ display: "flex", justifyContent: "center" }}>
                                    <Link href={item?.asset_image[0]?.asset_slug ? `/${item?.asset_image[0]?.asset_slug}` : ""}>
                                      <img className="product_image" src={item?.asset_image?.[0]?.asset_image} alt="product image" />
                                    </Link>
                                  </div>
                                )}
                                {item?.asset_image[1] && (
                                  <div className="menudata_width nav_col_img" style={{ display: "flex", justifyContent: "center", }}>
                                    <Link href={item?.asset_image[1]?.asset_slug ? `/${item?.asset_image[1]?.asset_slug}` : ""}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[1]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {index === 1 && (
                            <div className="main_popup" >
                              <div className="nav_sections ">
                                {item?.categories[0] && (
                                  <div className="menudata_width nav_col1" >
                                    <Link href={`/category/${item.slug}-${item?.categories[0]?.slug}`}>
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[0].title}
                                      </span>
                                    </Link>
                                    <hr className="line_width" />
                                    <div className="product_data2 nav_col1_scroll">
                                      {item?.categories?.[0]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div className="nav_sections">
                                {item?.asset_image[0] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{ display: "flex", justifyContent: "center" }} >
                                    <Link href={item?.asset_image[0]?.asset_slug ? `/${item?.asset_image[0]?.asset_slug}` : ""}>
                                      <img className="product_image" src={item?.asset_image?.[0]?.asset_image} alt="product image" />
                                    </Link>
                                  </div>
                                )}
                                {item?.asset_image[1] && (
                                  <div className="menudata_width nav_col_img" style={{ display: "flex", justifyContent: "center", margin: "20px  0px" }} >
                                    <Link href={`/${item?.asset_image?.[1]?.asset_slug}`}>
                                      <img className="product_image" src={item?.asset_image?.[1]?.asset_image} alt="product image" />
                                    </Link>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[2] && (
                                  <div className="menudata_width nav_col_img" style={{ display: "flex", justifyContent: "center", }} >
                                    <Link href={`/${item?.asset_image?.[2]?.asset_slug}`}>
                                      <img className="product_image" src={item?.asset_image?.[2]?.asset_image} alt="product image" />
                                    </Link>
                                  </div>
                                )}
                                {item?.asset_image[3] && (
                                  <div className="menudata_width nav_col_img" style={{ display: "flex", justifyContent: "center", margin: "20px  0px" }} >
                                    <Link href={`/${item?.asset_image?.[3]?.asset_slug}`}>
                                      <img className="product_image" src={item?.asset_image?.[3]?.asset_image} alt="product image" />
                                    </Link>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[4] && (
                                  <div className="menudata_width nav_col_img" style={{ display: "flex", justifyContent: "center" }} >
                                    <Link href={`/${item?.asset_image?.[4]?.asset_slug}`}>
                                      <img className="product_image" src={item?.asset_image?.[4]?.asset_image} alt="product image" />
                                    </Link>
                                  </div>
                                )}
                                {item?.asset_image[5] && (
                                  <div className="menudata_width nav_col_img" style={{ display: "flex", justifyContent: "center", margin: "20px  0px" }} >
                                    <Link href={`/${item?.asset_image?.[5]?.asset_slug}`}>
                                      <img className="product_image" src={item?.asset_image?.[5]?.asset_image} alt="product image" />
                                    </Link>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[6] && (
                                  <div className="menudata_width nav_col_img" style={{ display: "flex", justifyContent: "center" }} >
                                    <Link href={`/${item?.asset_image?.[6]?.asset_slug}`}>
                                      <img className="product_image" src={item?.asset_image?.[6]?.asset_image} alt="product image" />
                                    </Link>
                                  </div>
                                )}
                                {item?.asset_image[7] && (
                                  <div className="menudata_width nav_col_img" style={{ display: "flex", justifyContent: "center", margin: "20px  0px" }} >
                                    <Link href={`/${item?.asset_image?.[7]?.asset_slug}`}>
                                      <img className="product_image" src={item?.asset_image?.[7]?.asset_image} alt="product image" />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {index === 2 && (
                            <div className="main_popup" >
                              <div className="nav_sections" style={{ paddingLeft: "10px" }}>
                                {item?.categories[6] && (
                                  <div className="menudata_width nav_col1" >
                                    <Link href={`/category/${item.slug}-${item?.categories[0]?.slug}`}>
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[6].title}
                                      </span>
                                    </Link>
                                    <hr className="line_width" />
                                    <div className="product_data2 nav_col1_scroll">
                                      {item?.categories?.[6]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.categories[1] && (
                                  <div className="menudata_width nav_col2">
                                    <Link href={`/category/${item.slug}-${item?.categories[1]?.slug}`}>
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[1].title}
                                      </span>
                                    </Link>
                                    <hr className="line_width" />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[1]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                                {item?.categories[2] && (
                                  <div className="menudata_width nav_col2" style={{ marginTop: "10px" }}>
                                    <Link href={`/category/${item.slug}-${item?.categories[2]?.slug}`}>
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[2].title}
                                      </span>
                                    </Link>
                                    <hr className="line_width" />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[2]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.categories[3] && (
                                  <div className="menudata_width nav_col1" >
                                    <Link href={`/category/${item.slug}-${item?.categories[3]?.slug}`}>
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[3].title}
                                      </span>
                                    </Link>
                                    <hr className="line_width" />
                                    <div className="product_data2 nav_col1_scroll">
                                      {item?.categories?.[3]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[2] && (
                                  <div className="menudata_width nav_col_img1" style={{ display: "flex", justifyContent: "center" }}>
                                    <Link href={`/${item?.asset_image?.[2]?.asset_slug}`}>
                                      <img className="product_images" src={item?.asset_image?.[2]?.asset_image} alt="product image" />
                                    </Link>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[1] && (
                                  <div className="menudata_width nav_col_img" style={{ display: "flex", justifyContent: "center" }} >
                                    <Link href={`/${item?.asset_image?.[1]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[1]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                                {item?.asset_image[0] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      margin: "20px  0px",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[0]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[0]?.asset_image}
                                        alt="product image" />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {index === 3 && (
                            <div className="main_popup"
                            >
                              <div className="nav_sections" style={{ paddingLeft: "10px" }}>
                                {item?.categories[0] && (
                                  <div
                                    className="menudata_width nav_col1"
                                  // style={{ width: "250px" }}
                                  >
                                    <Link
                                      href={`/category/${item.slug}-${item?.categories[0]?.slug}`}
                                    >
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[0].title}
                                      </span>
                                    </Link>
                                    <hr
                                      className="line_width"
                                    />
                                    <div className="product_data2 nav_col1_scroll">
                                      {item?.categories?.[0]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.categories[1] && (
                                  <div
                                    className="menudata_width nav_col2"
                                  // style={{ width: "250px" }}
                                  >
                                    <Link
                                      href={`/category/${item.slug}-${item?.categories[1]?.slug}`}
                                    >
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[1].title}
                                      </span>
                                    </Link>
                                    <hr
                                      className="line_width"
                                    />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[1]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                                {item?.categories[2] && (
                                  <div
                                    className="menudata_width nav_col2"
                                  >
                                    <Link
                                      href={`/category/${item.slug}-${item?.categories[2]?.slug}`}
                                    >
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[2].title}
                                      </span>
                                    </Link>
                                    <hr
                                      className="line_width"
                                    />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[2]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.categories[3] && (
                                  <div
                                    className="menudata_width nav_col1"
                                  // style={{ width: "250px" }}
                                  >
                                    <Link
                                      href={`/category/${item.slug}-${item?.categories[3]?.slug}`}
                                    >
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[3].title}
                                      </span>
                                    </Link>
                                    <hr
                                      className="line_width"
                                    />
                                    <div className="product_data2 nav_col1_scroll">
                                      {item?.categories?.[3]?.category_products?.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[0] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[0]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[0]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                                {item?.asset_image[1] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      margin: "20px 0px",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[1]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[1]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[2] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[2]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[2]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                                {item?.asset_image[3] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      margin: "20px 0px",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[3]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[3]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {index === 4 && (
                            <div
                              className="main_popup"
                            >
                              <div className="nav_sections" style={{ paddingLeft: "10px" }}>
                                {item?.categories[0] && (
                                  <div
                                    className="menudata_width nav_col2"
                                  // style={{ width: "250px" }}
                                  >
                                    <Link
                                      href={`/category/${item.slug}-${item?.categories[0]?.slug}`}
                                    >
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[0].title}
                                      </span>
                                    </Link>
                                    <hr
                                      className="line_width"
                                    />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[0]?.category_products.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                                {item?.categories[1] && (
                                  <div
                                    className="menudata_width nav_col2"
                                  // style={{ width: "250px" }}
                                  >
                                    <Link
                                      href={`/category/${item.slug}-${item?.categories[1]?.slug}`}
                                    >
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[1].title}
                                      </span>
                                    </Link>
                                    <hr
                                      className="line_width"
                                    />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[1]?.category_products.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.categories[2] && (
                                  <div
                                    className="menudata_width nav_col2"
                                  // style={{ width: "250px" }}
                                  >
                                    <Link
                                      href={`/category/${item.slug}-${item?.categories[2]?.slug}`}
                                    >
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[2].title}
                                      </span>
                                    </Link>
                                    <hr
                                      className="line_width"
                                    />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[2]?.category_products.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                                {item?.categories[3] && (
                                  <div
                                    className="menudata_width nav_col2"
                                  // style={{ width: "250px" }}
                                  >
                                    <Link
                                      href={`/category/${item.slug}-${item?.categories[3]?.slug}`}
                                    >
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[3].title}
                                      </span>
                                    </Link>
                                    <hr
                                      className="line_width"
                                    />
                                    <div className="product_data nav_col2_scroll">
                                      {item?.categories?.[3]?.category_products.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[3] && (
                                  <div
                                    className="menudata_width nav_col_img1"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[3]?.asset_slug}`}>
                                      <img
                                        className="product_images"
                                        src={item?.asset_image?.[3]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[1] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[1]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[1]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                                {item?.asset_image[2] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      margin: "20px  0px",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[2]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[2]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[0] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[0]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[0]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                                {item?.asset_image[4] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      margin: "20px  0px",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[4]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[4]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {index === 5 && (
                            <div
                              className="main_popup"
                            >
                              <div className="nav_sections" style={{ paddingLeft: "10px" }}>
                                {item?.categories[0] && (
                                  <div
                                    className="menudata_width nav_col1"
                                  // style={{ width: "250px" }}
                                  >
                                    <Link
                                      href={`/category/${item.slug}-${item?.categories[0]?.slug}`}
                                    >
                                      {" "}
                                      <span style={{ color: "#00A1ED" }}>
                                        {item?.categories[0].title}
                                      </span>
                                    </Link>
                                    <hr
                                      className="line_width"
                                    />
                                    <div className="product_data2 nav_col1_scroll">
                                      {item?.categories?.[0]?.category_products.map(
                                        (itemm, i) => {
                                          return (
                                            <Link className="product_title" href={`/${itemm.slug}`} key={i}>
                                              {itemm?.title}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div className="nav_sections">
                                {item?.asset_image[0] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[0]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[0]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                                {item?.asset_image[1] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      margin: "20px  0px",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[1]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[1]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[5] && (
                                  <div
                                    className="menudata_width nav_col_img1"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[5]?.asset_slug}`}>
                                      <img
                                        className="product_images"
                                        src={item?.asset_image?.[5]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[3] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[3]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[3]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                                {item?.asset_image[4] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      margin: "20px  0px",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[4]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[4]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                              </div>
                              <div className="nav_sections">
                                {item?.asset_image[2] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[2]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[2]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                                {item?.asset_image[6] && (
                                  <div
                                    className="menudata_width nav_col_img"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      margin: "20px  0px",
                                    }}
                                  >
                                    <Link href={`/${item?.asset_image?.[6]?.asset_slug}`}>
                                      <img
                                        className="product_image"
                                        src={item?.asset_image?.[6]?.asset_image}
                                        alt="product image"
                                      />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {index < 6 && <>
                            <hr />
                            <div className="popup_description">
                              Looking for something else? <Link href={`/category/${item?.slug}-${item?.categories[0]?.slug}`} >View all {item?.title}.</Link>
                            </div>
                          </>}

                        </div>
                      </div>
                    </div>
                  )
                })}
          </div>
        </Row>
      </div>
      <hr className="boder_line" />
    </div>
  );
}

export default MenuBar;
