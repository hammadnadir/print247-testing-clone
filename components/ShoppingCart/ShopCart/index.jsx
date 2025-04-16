import Loader from "@/components/common/loaders";
import QuoteDetailModal from "@/components/common/quoteDetailModal";
import { deleteCartProductRequest, getCartRequest, setSelectedForShipping } from "@/redux/cart";
import { getUserIdFromLocalStorage } from "@/utils";
import { Checkbox } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function ShopCart({loader, setLoader}) {
  const [cartData, setCartData] = useState(null);
  // const [loader, setLoader] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [quoteModal, setQuoteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const { mainCart, selectedForShipping } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setSelectedData(selectedForShipping)
  }, [selectedForShipping])

  useEffect(() => {
    if (mainCart) {
      setCartData(mainCart?.cart_data);
    }
  }, [mainCart]);

  const calculateTotalPrice = (data) => {
    let totalPrice = 0;

    if (data && Array.isArray(data)) {
      data.forEach((item) => {
        const price = parseFloat(item?.product_amount);
        if (!isNaN(price)) {
          totalPrice += price;
        }
      });
    }

    return totalPrice.toFixed(2); // Return the total price rounded to 2 decimal places
  };

  const totalCartPrice = calculateTotalPrice(selectedForShipping);

  const Percentagewithtax = 20;
  const TotalWithTaxPrice = Percentagewithtax * (totalCartPrice / 100);

  const userId = getUserIdFromLocalStorage()
  const handleRemove = (data) => {
    // setLoader(true)
    try {
      dispatch(deleteCartProductRequest({ code: data?.apicode })).then((res) => {
        dispatch(getCartRequest({ user_id: userId })).then((response) => {
          // setLoader(false)
        })
      })
    } catch (error) {
      console.log(error)
      // setLoader(false)
    }
  };

  const handleEdit = (data) => {
    setIsEdit(true)
    setLoader(true)
    router.push(`/edit/${data?.product_slug}/${data?.apicode}`)
  };


  const handleSelected = (item) => {
    const isExist = selectedData.findIndex((cart) => cart.apicode === item.apicode);
    if (isExist > -1) {
      const filteredData = selectedData.filter((cart) => cart.apicode !== item.apicode);
      dispatch(setSelectedForShipping(filteredData));
    } else {
      const updatedSelectedForShipping = selectedData ? [...selectedData, item] : [item];
      dispatch(setSelectedForShipping(updatedSelectedForShipping));
    }
  };
  useEffect(() => {
    dispatch(setSelectedForShipping(cartData));
  }, [cartData])

  const handleCheckout = () => {
    setQuoteModal(true)
  }

  const apicodes = selectedData && selectedData?.length > 0 ? selectedData?.map(item => item.apicode) : []

  const getFileIcon = (fileName) => {
    // const fileExtension = file?.name?.split(".").pop().toLowerCase();
    switch (fileName) {
      case "zip":
        return <img src="/image/zip-icon.png" alt="ZIP" style={{ width: "113px", height: "113px" }} />;
      case "pdf":
        return <img src="/image/pdf-icon.png" alt="PDF" style={{ width: "113px", height: "113px" }} />;
      case "eps":
        return <img src="/image/eps-icon.png" alt="EPS" style={{ width: "113px", height: "113px" }} />;
      case "ai":
        return <img src="/image/ai-icon.png" alt="AI" style={{ width: "113px", height: "113px" }} />;
      default:
        return <img src="/image/zip-icon.png" alt="File" style={{ width: "113px", height: "113px" }} />;
    }
  };
  function formatAttributeSlug(attrSlug) {
    const words = attrSlug?.split('_') || [];
    const formattedWords = words.map(word => {
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      return capitalizedWord;
    });
    return formattedWords.join(' ');
  }


  function formatText(inputText) {
    if (!inputText) {
      return ""
    }
    // Replace underscores with spaces and split the string into words
    const val = Array.isArray(inputText) ? inputText.join(" , ") : inputText.replace(/,/g, " , ");
    const words = val.replace(/_/g, ' ').split(' ');

    // // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // // Join the words back together with spaces
    const formattedText = capitalizedWords.join(' ');

    return formattedText;
  }

  function renderAttributeDetails(datas) {
    const attrSlug = datas?.attr_slug;
    const attrValue = datas?.attr_value;
    const attrOptionDetail = datas?.cartattributesdetails;

    if (attrSlug === "dimensions") {
      return Object.keys(JSON.parse(attrValue)).map((objectdata) => (
        `${JSON.parse(attrValue)?.[objectdata]} inches`
      ));
    } else {
      const val = attrValue?.includes("[") ? JSON.parse(attrValue) : attrValue;

      const matchedOptions = attrOptionDetail?.map((optDetail) => {
        if (attrOptionDetail?.length > 0) {
          if (Array.isArray(val) && val.length > 0) {
            if (val.includes(optDetail.attr_slug)) {
              const indexToChange = val.findIndex((item) => item === optDetail.attr_slug)
              val[indexToChange] = `${optDetail.attr_slug} (${optDetail.attr_value})`
              return val;
            }
          } else {
            const valuesOptions = `${optDetail.attr_slug} (${optDetail.attr_value})`
            return valuesOptions;
          }
        }
        return optDetail.attr_slug;
      });

      const result = matchedOptions?.length > 0 ? matchedOptions.join(" , ") : val;
      return formatText(result)

    }
  }


  return (
    <div>
      {/* {loader && <Loader />} */}
      <div className="carts_page_main2">
        <div className="detail-carts">
          <Container>
            <h1 className="cart-heading">Shopping Cart</h1>
            {loader && !isEdit && !cartData && <h1 className="cart-heading">Loading...</h1>}
            <div>
              <div className="main-carttSection">
                <div>
                  {Array.isArray(cartData) && cartData?.length > 0 &&
                    cartData?.map((item, i) => {
                      return (
                        <div className="innerr-cartSection" key={i} style={{ width: "70%, width: height%" }}>
                          <div className="custom-mailer-boxx">
                            <div className="illustrate-img">
                              <div className="" style={{ width: "113px", height: "113px" }}>
                                <img src={item?.product?.photo?.[0]} alt="File" style={{ width: "113px", height: "113px" }} />
                              </div>
                              <Checkbox checked={apicodes?.includes(item?.apicode)} onChange={() => handleSelected(item)} />
                            </div>
                            <div className="inner-mailer-boxx">
                              <hr className="cart-line" />
                              <div style={{ minHeight: "240px" }}>
                                <h3>{item?.product?.title}</h3>
                                {
                                  item?.cartattributes?.map((items, i) => {
                                    const attributeTitle = items?.attr_slug
                                      .replace(/_/g, ' ')
                                      .replace(/\b\w/g, (c) => c.toUpperCase());
                                    const attributeValue = items?.attr_value?.includes("[")
                                      ? JSON.parse(items?.attr_value)?.join(", ")
                                      : items?.attr_value?.includes("{")
                                        ? ""
                                        : items?.attr_value;
                                    const attributeDimension = items?.attr_value?.includes("}")
                                      ? JSON.parse(items?.attr_value)
                                      : "";

                                    if (items?.attr_slug === "note") {
                                      return (
                                        <div
                                          key={i}
                                          style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: "28px",
                                            width: "100%, width: height%",
                                          }}
                                        >
                                          <div>
                                            <h5>{attributeTitle}:</h5>
                                          </div>
                                          <div>
                                            <h5>{attributeValue}</h5>
                                          </div>
                                        </div>
                                      );
                                    }

                                    return (
                                      attributeValue ? (
                                        <div>
                                          <div
                                            key={i}
                                            style={{
                                              display: "grid",
                                              gridTemplateColumns: "1fr 1fr",
                                              gap: "28px",
                                              width: "100%, width: height%",
                                            }}
                                          >
                                            <div>
                                              <h5>{attributeTitle}:</h5>
                                            </div>
                                            <div>
                                              <h5>{renderAttributeDetails(items)}</h5>
                                            </div>
                                          </div>
                                        </div>
                                      ) : (
                                        Object.keys(attributeDimension)?.map((item, i) => (
                                          <div
                                            key={i}
                                            style={{
                                              display: "grid",
                                              gridTemplateColumns: "1fr 1fr",
                                              gap: "28px",
                                              width: "100%, width: height%",
                                            }}
                                          >
                                            <div>
                                              <h5>{item}:</h5>
                                            </div>
                                            <div>
                                              <h5>{attributeDimension?.[item]}</h5>
                                            </div>
                                          </div>
                                        ))
                                      )
                                    );
                                  })
                                }
                                {item?.quantity && <div
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "28px",
                                    width: "100%, width: height%",
                                  }}
                                >
                                  <div>
                                    <h5>Quantity:</h5>
                                  </div>
                                  <div>
                                    <h5>{item?.quantity}</h5>
                                  </div>
                                </div>}
                              </div>

                              <hr className="cart-line" />

                              <div className="main-bin-edit">
                                <div
                                  className="bin-edit"
                                  onClick={() => handleRemove(item)}
                                >
                                  <div>
                                    <Image
                                      src="/image/bin.png"
                                      width={21}
                                      height={21}
                                      alt="bin icon"
                                    />
                                  </div>
                                  <div>
                                    <p>Remove</p>
                                  </div>
                                </div>

                                <div className="bin-edit">
                                  <div>
                                    <Image
                                      src="/image/cart-edit.png"
                                      width={21}
                                      height={21}
                                      alt="cart edit icon"
                                    />
                                  </div>
                                  <div>
                                    <p onClick={() => handleEdit(item)}>Edit Design</p>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>

                {Array.isArray(cartData) && cartData.length > 0 && (
                  <div className="edit-button-setting">
                    <div className="inner-subtotal">
                      <div className="shopping-button1">
                        {selectedData?.length > 0 ? <Button onClick={handleCheckout}>Continue to Quote</Button> : <Button disabled>Proceed to Checkout</Button>}

                      </div>
                      <div className="shopping-button2">
                        <Link href="/">
                          <Button>Shopping Continue</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {!cartData && !loader && (
                <div className="empty_cart">
                  <h2>Your Cart is Empty.</h2>
                  <Link href="/">
                    <button>View Products</button>
                  </Link>
                </div>
              )}
            </div>
          </Container>
        </div>
      </div>
      <QuoteDetailModal quoteModal={quoteModal} setQuoteModal={setQuoteModal} selectedData={selectedData} />
    </div>
  );
}

export default ShopCart;
