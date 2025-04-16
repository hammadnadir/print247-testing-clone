import React, { useEffect, useMemo, useRef, useState } from "react";
import QuoteDesignArtwork from "../artwork";
import SelectField from "../common/SelectField";
import { Tooltip } from "antd";
import { customQuoteData } from "@/data/customQuote";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Accordion from 'react-bootstrap/Accordion';
import { setCustomerDetails, setErrors, setLoader, setMainFile, setQuantity, setSelectedData, setSelectedProduct, setSelectedSubProduct } from "@/redux/quote";
import { addtoCartRequest } from "@/redux/cart";
import emailjs from "@emailjs/browser";
import { getUserIdFromLocalStorage } from "@/utils";
import { useRouter } from "next/router";
import { postLeadsRequest } from "@/redux/zohoLeads";
import RequestMessage from "@/components/common/RequestMessage";
import { checkoutDataRequest } from "@/redux/payment";

const ProductDetails = ({ activeKey, setActiveKey, activeKey2, setActiveKey2, activeKeyOptions, setActiveKeyOptions }) => {
  const [quoteData, setQuoteData] = useState(customQuoteData);
  const [loading2, setLoading2] = useState(false);
  const router = useRouter()

  const dispatch = useDispatch();

  const ref = useRef(null);

  const userId = getUserIdFromLocalStorage();

  const { loader, customerDetails, mainFile, quantity, selectedData, errors } = useSelector((state) => state.quote);


  const { selectedProduct, selectedSubProduct } = useSelector(
    (state) => state.quote
  );

  function doesSecondObjectContainFields(firstObj, secondObj) {
    // Get all the 'value' fields from the first object
    const requiredFields = firstObj.map(item => item.value.toLowerCase());
    // Check if every required field exists in the second object
    return requiredFields.every(field => field in secondObj);
  }
  const handleCustomerDetailsChange = (e) => {
    const { name, value } = e.target
    const updatedDetails = { ...customerDetails, [name]: value };
    dispatch(setCustomerDetails(updatedDetails))
    const allFieldsFilled = Object.values(updatedDetails).every((field) => field.trim() !== "");
    if (allFieldsFilled) {
      setActiveKeyOptions([0, 1]);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.dismiss();
    let err = {}
    // if (!customerDetails.fullName) {
    //   err.fullName = "required";
    // }
    // if (quoteData?.[selectedProduct]?.isContents && !selectedData?.contents) {
    //   err.contents = "required"
    // }
    if (!customerDetails.email) {
      err.email = "required";
    }
    if (!customerDetails.phone_no) {
      err.phone_no = "required";
    }
    // if (!customerDetails.company) {
    //   err.company = "Required";
    // }
    // if (quoteData?.[selectedProduct]?.artwork && mainFile?.length === 0) {
    //   err.artwork = "required"
    // }
    // if (quoteData?.[selectedProduct]?.isName && !selectedData?.name) {
    //   err.name = "required"
    // }
    if (!quantity) {
      err.quantity = "required";
    }

    // if (Object.keys(quoteData?.[selectedProduct]?.types)?.length > 0) {
    //   const details = quoteData?.[selectedProduct]?.types?.[selectedSubProduct]?.product_details
    //   if (Object.keys(details).length > 0) {
    //     for (const key in details) {
    //       if (Object.prototype.hasOwnProperty.call(details, key)) {
    //         const element = details[key];
    //         if (element.type === 2) {
    //           if (element.isMultiple) {
    //             if (!selectedData?.[element?.slug]) {
    //               err[element?.slug] = "required"
    //             } else if (selectedData?.[element?.slug] && selectedData?.[element?.slug]?.length === 0) {
    //               err[element?.slug] = "required"
    //             }
    //           } else {
    //             if (!selectedData?.[element?.slug]) {
    //               err[element?.slug] = "required"
    //             }
    //           }
    //         }
    //       }
    //     }
    //     const options = details?.Dimension?.options
    //     if (options) {
    //       for (let i = 0; i < options.length; i++) {
    //         const element = options[i];
    //         const { slug } = element
    //         if (!selectedData?.dimensions?.[slug]) {
    //           err[element?.slug] = "required"
    //         }
    //       }
    //     }
    //   }
    // } else {
    //   const options = quoteData?.[selectedProduct]?.product_details?.Dimension?.options
    //   const details = quoteData?.[selectedProduct]?.product_details
    //   if (Object.keys(details).length > 0) {
    //     for (const key in details) {
    //       if (Object.prototype.hasOwnProperty.call(details, key)) {
    //         const element = details[key];
    //         if (element.type === 2) {
    //           if (element.isMultiple) {
    //             if (!selectedData?.[element?.slug]) {
    //               err[element?.slug] = "required"
    //             } else if (selectedData?.[element?.slug] && selectedData?.[element?.slug]?.length === 0) {
    //               err[element?.slug] = "required"
    //             }
    //           } else {
    //             if (!selectedData?.[element?.slug]) {
    //               err[element?.slug] = "required"
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (options) {
    //     for (let i = 0; i < options.length; i++) {
    //       const element = options[i];
    //       const { slug } = element
    //       if (!selectedData?.dimensions?.[slug]) {
    //         err[slug] = "required"
    //       }
    //     }
    //   }
    // }
    // if (quoteData?.[selectedProduct]?.instructions && !selectedData?.note) {
    //   err.note = "required"
    // }

    if (Object.keys(err).length > 0) {
      dispatch(setErrors(err))
      toast(
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            style={{ width: "40px" }}
            className="img"
            src="/icons/error.png"
            alt="message"
          />
          <p style={{ color: "red", margin: "0", fontWeight: "600" }}>
            Please fill all the required fields.
          </p>
        </div>
      );
    } else {
      const payload = {
        name: selectedProduct,
        product_slug: customQuoteData?.[selectedProduct]?.slug,
        attributes: { ...selectedData },
        quantity: quantity,
        user_id: userId,
        artwork: mainFile
      }
      dispatch(setErrors({}))
      dispatch(setLoader(true))
      setLoading2(true)
      dispatch(addtoCartRequest(payload)).then((res) => {
        const payload2 = {
          customer_id: userId,
          cartid: [res?.payload?.cart_id],
          email: customerDetails.email,
          phone: customerDetails.phone_no,
          whatsapp_no: null
        };
        dispatch(
          postLeadsRequest({
            First_Name: "Print247",
            Last_Name: "Quote",
            Email: customerDetails?.email,
            Phone: customerDetails.phone_no,
            Lead_Source: "Ecommerce",
            tags: ["Website Quote"],
            Description: JSON.stringify({ ...selectedData, artwork: mainFile, Name: selectedSubProduct })
          }))

        dispatch(checkoutDataRequest(payload2)).then((res) => {
          // setQueryLink(res?.payload?.id);
          const formData = ref.current;
          const queryLinkInput = document.createElement('input');
          queryLinkInput.type = 'hidden';
          queryLinkInput.name = 'query_link';
          queryLinkInput.value = res?.payload?.id ? res?.payload?.id : "123456";

          formData.appendChild(queryLinkInput);
          setTimeout(() => {
            emailjs
              .sendForm(
                "service_ktc2isj",
                "template_1wyfzuo",
                formData,
                "eKeAE09PqlRljmUv2"
              )
              .then((response) => {
                emailjs
                  .sendForm(
                    "service_vi0e16o",
                    "template_28p65jh",
                    formData.current,
                    "eKeAE09PqlRljmUv2"
                  ).then(() => {
                    if (res?.payload?.status) {
                      if (detailData?.page_slug) {
                        dispatch(setSelectedProduct(""))
                        dispatch(setSelectedSubProduct(""))
                        dispatch(setQuantity(""))
                        setActiveKey("0")
                        dispatch(setSelectedData({}))
                        dispatch(setCustomerDetails({
                          fullName: "",
                          email: "",
                          phone_no: "",
                          company: "",
                        }))
                        dispatch(setMainFile([]))
                        router.push(`/custom-quote/thank-you`)
                        // toast(
                        //   <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        //     <img
                        //       style={{ width: "40px" }}
                        //       className="img"
                        //       src="/icons/tick.png"
                        //       alt="message"
                        //     />
                        //     <p style={{ color: "green", margin: "0", fontWeight: "600" }}>
                        //       Quote Submitted Successfully.
                        //     </p>
                        //   </div>
                        // );
                      } else {
                        dispatch(setSelectedProduct(""))
                        dispatch(setSelectedSubProduct(""))
                        dispatch(setQuantity(""))
                        dispatch(setSelectedData({}))
                        setActiveKey("0")
                        dispatch(setCustomerDetails({
                          fullName: "",
                          email: "",
                          phone_no: "",
                          company: "",
                        }))
                        dispatch(setErrors({}))
                        dispatch(setMainFile([]))
                        router.push(`/custom-quote/thank-you`)
                        // toast(
                        //   <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        //     <img
                        //       style={{ width: "40px" }}
                        //       className="img"
                        //       src="/icons/tick.png"
                        //       alt="message"
                        //     />
                        //     <p style={{ color: "green", margin: "0", fontWeight: "600" }}>
                        //       Quote Submitted Successfully.
                        //     </p>
                        //   </div>
                        // );
                      }
                      dispatch(setLoader(false))
                      setLoading2(false)
                    } else {
                      dispatch(setSelectedProduct(""))
                      dispatch(setSelectedSubProduct(""))
                      dispatch(setQuantity(""))
                      dispatch(setSelectedData({}))
                      setActiveKey("0")
                      dispatch(setCustomerDetails({
                        fullName: "",
                        email: "",
                        phone_no: "",
                        company: "",
                      }))
                      dispatch(setErrors({}))
                      dispatch(setMainFile([]))
                      // toast(
                      //   <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      //     <img
                      //       style={{ width: "40px" }}
                      //       className="img"
                      //       src="/icons/tick.png"
                      //       alt="message"
                      //     />
                      //     <p style={{ color: "green", margin: "0", fontWeight: "600" }}>
                      //       Quote Submitted Successfully.
                      //     </p>
                      //   </div>
                      // );
                      router.push(`/custom-quote/thank-you`)
                      dispatch(setLoader(false))
                      setLoading2(false)
                    }
                  })

              })
              .catch((error) => {
                if (res?.payload?.status) {
                  dispatch(setSelectedProduct(""))
                  dispatch(setSelectedSubProduct(""))
                  setActiveKey("0")
                  dispatch(setQuantity(""))
                  dispatch(setSelectedData({}))
                  dispatch(setCustomerDetails({
                    fullName: "",
                    email: "",
                    phone_no: "",
                    company: "",
                  }))
                  dispatch(setErrors({}))
                  dispatch(setMainFile([]))
                  // toast(
                  //   <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  //     <img
                  //       style={{ width: "40px" }}
                  //       className="img"
                  //       src="/icons/tick.png"
                  //       alt="message"
                  //     />
                  //     <p style={{ color: "green", margin: "0", fontWeight: "600" }}>
                  //       Quote Submitted Successfully.
                  //     </p>
                  //   </div>
                  // );
                  router.push(`/custom-quote/thank-you`)
                  dispatch(setLoader(false))
                  setLoading2(false)
                } else {
                  toast(
                    <RequestMessage
                      image="/icons/error.png"
                      color="red"
                      message={res?.payload?.message || "Something went wrong."}
                    />
                  );
                  dispatch(setLoader(false))
                  setLoading2(false)
                }
              });
          });
        });

      })
    }
  };

  const handleChangeDimensions = (e, id) => {
    const { name, value } = e.target;
    const updatedData = { ...selectedData, dimensions: selectedData?.dimensions ? { ...selectedData?.dimensions, [name]: value } : { [name]: value } }
    dispatch(setSelectedData(updatedData))
    if (Object.keys(quoteData?.[selectedProduct]?.types)?.length > 0) {
      if (quoteData?.[selectedProduct]?.types?.[selectedSubProduct]?.product_details) {
        const options = quoteData?.[selectedProduct]?.types?.[selectedSubProduct]?.product_details?.Dimension?.options
        if (options) {
          const isAllAvalible = doesSecondObjectContainFields(options, updatedData?.dimensions)
          if (isAllAvalible) {
            setActiveKeyOptions([1, 2]);
          }
        }
      }
    } else {
      const options = quoteData?.[selectedProduct]?.product_details?.Dimension?.options
      if (options) {
        const isAllAvalible = doesSecondObjectContainFields(options, updatedData?.dimensions)
        if (isAllAvalible) {
          setActiveKeyOptions([1, 2]);
        }
      }
    }

  };

  const toggleAccordionOptions = (i) => {
    if (activeKeyOptions?.includes(i)) {
      setActiveKeyOptions((prevKey) => prevKey.filter((data) => data !== i));
    } else {
      setActiveKeyOptions([...activeKeyOptions, i]);
    }
  };

  const handleReset = () => {
    dispatch(setSelectedProduct(""))
    dispatch(setSelectedSubProduct(""))
    setActiveKey("0")
    dispatch(setQuantity(""))
    dispatch(setSelectedData({}))
    dispatch(setCustomerDetails({
      fullName: "",
      email: "",
      phone_no: "",
      company: "",
    }))
    dispatch(setErrors({}))
    dispatch(setMainFile([]))
  }

  const handleChange = (data, optionValue, id, isMultiple, index) => {
    const name = data?.slug
    const value = optionValue?.value
    setActiveKeyOptions([index, index + 1]);
    if (isMultiple) {
      if (selectedData?.[name]?.includes(value)) {
        const filteredData = selectedData?.[name]?.filter((data) => data !== value)
        dispatch(setSelectedData({ ...selectedData, [name]: filteredData }));
      } else {
        dispatch(setSelectedData({ ...selectedData, [name]: selectedData?.[name] ? [...selectedData?.[name], value] : [value] }));
      }
    } else {
      dispatch(setSelectedData({ ...selectedData, [name]: value }));
    }
  };

  const handleChangeQuantity = (val, index) => {
    dispatch(setQuantity(val));
    setActiveKeyOptions([index, index + 1]);
  };

  function renderProductDetails(key, val, i) {
    // if (selectedData?.length > 0) {
    // const isExistsVal = selectedData?.find((item) => item.slug === val.slug);
    return (
      <div key={key}>
        <div className="detail_p_div">
          <Accordion defaultActiveKey={i} activeKey={activeKeyOptions.includes(i) ? i : null}>
            {val?.type === 1 ? (
              <Accordion.Item eventKey={i}>
                <Accordion.Header onClick={() => toggleAccordionOptions(i)}>
                  <div className="product-category-header">
                    <div className="text_field">
                      <h3>{key}:</h3>
                      {val?.info && <Tooltip placement="top" title={val?.info}>
                        <img src="/customQuote/Icons/info.svg" alt="info icon" />
                      </Tooltip>}
                    </div>
                  </div>
                </Accordion.Header>
                <div className="divider"></div>
                <Accordion.Body>
                  <div>
                    <div className={`product-category-content`}>
                      <div className="grid-container">
                        {val?.options?.map((item, index) => (
                          <input
                            onChange={handleChangeDimensions}
                            key={index}
                            value={selectedData?.dimensions?.[item?.slug] || ""}
                            // id={isExistsVal?.id}
                            className={`time_input ${errors?.[item?.slug] ? "in_border_red" : ""}`}
                            type="number"
                            name={item?.slug}
                            placeholder={item?.label}
                          />
                        ))}
                        <div>
                          <SelectField
                            name="unit"
                            onChange={handleChangeSelect}
                            width={"53px"}
                            type="2"
                            options={val?.units}
                            placeholder="in"
                            height="quote_height2"
                          />
                        </div>
                      </div>
                      {!quoteData?.[selectedProduct]?.isName &&
                        quoteData?.[selectedProduct]?.isContents ? (
                        <div className="select-field">
                          <SelectField
                            name="contents"
                            onChange={handleChangeSelect}
                            error={errors.contents}
                            type="1"
                            width={"100%"}
                            options={quoteData?.[selectedProduct]?.contentsData}
                            placeholder="Contents"
                            height="quote_height1"
                            className={`${errors?.contents ? "in_border_red" : ""}`}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ) : val?.type === 2 ? (
              <Accordion.Item eventKey={i}>
                <Accordion.Header onClick={() => toggleAccordionOptions(i)}>
                  <div className="product-category-header">
                    <div className="text_field">
                      <h3>{key}:</h3>
                      {val?.info && <Tooltip placement="top" title={val?.info}>
                        <img src="/customQuote/Icons/info.svg" alt="info icon" />
                      </Tooltip>}
                      {val?.isMultiple ? selectedData?.[val?.slug]?.length > 0 && <img src="/image/correct.png" alt="" /> : selectedData?.[val?.slug] && <img src="/image/correct.png" alt="" />}
                    </div>
                    {errors?.[val?.slug] && <span className={`${errors?.[val?.slug] ? "steric_color" : ""}`}>*</span>}
                  </div>
                </Accordion.Header>
                <div className="divider"></div>
                <Accordion.Body>
                  <div className={`product-category-content`}>
                    <div className="grid-direction">
                      {val?.options?.map((direction, index) => (
                        <div key={index}
                          onClick={() => handleChange(val, direction, val?.id, val?.isMultiple, i)}
                          className={`direction-item ${selectedData?.[val?.slug]?.includes(direction?.value) ? "selected" : ""}`}
                        >
                          <h3 style={{ marginTop: direction?.des ? "0" : "20px", }}>
                            {direction?.title}
                          </h3>
                          <p>{direction?.des}</p>
                        </div>
                      ))}
                    </div>

                  </div>
                </Accordion.Body>
                <div key={i} style={{ display: "flex", flexFlow: "row wrap", gap: "10px" }}>
                  {
                    activeKeyOptions.includes(i) ?
                      ""
                      :
                      val?.isMultiple ?
                        selectedData?.[val?.slug]?.length > 0 ?
                          selectedData?.[val?.slug]?.map((data, i) => (
                            <div className="tags_div">
                              <p>{data}</p>
                            </div>
                          ))
                          : ""
                        :
                        selectedData?.[val?.slug] ?
                          <div className="tags_div">
                            <p>{selectedData?.[val?.slug]}</p>
                          </div>
                          : ""
                  }
                </div>

              </Accordion.Item>
            ) : val?.type === 3 ? (
              <Accordion.Item eventKey={i}>
                <Accordion.Header onClick={() => toggleAccordionOptions(i)}>
                  <div className="product-category-header">
                    <div className="text_field">
                      <h3>Quantity:</h3>
                      {val?.info && <Tooltip placement="top" title={val?.info}>
                        <img src="/customQuote/Icons/info.svg" alt="info icon" />
                      </Tooltip>}
                      {quantity ? <img src="/image/correct.png" alt="" /> : ""}
                    </div>
                    {errors?.[val?.slug] && <span className={`${errors?.[val?.slug] ? "steric_color" : ""}`}>*</span>}
                  </div>
                </Accordion.Header>
                <div className="divider"></div>
                <Accordion.Body>
                  <div className={`product-category-content`}>
                    <div className="grid-direction-quantity">
                      {val?.options?.map((option, index) => (
                        <div
                          key={index}
                          className={`direction-item ${quantity == option?.value ? "selected" : ""}`}
                          // ${selectedValue?.value === option.value ? "selected" : ""}
                          onClick={() => handleChangeQuantity(option.value, i)}
                        >
                          <p>{option?.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Accordion.Body>
                <div key={i} style={{ display: "flex", flexFlow: "row wrap", gap: "10px" }}>
                  {
                    activeKeyOptions.includes(i) ?
                      ""
                      :
                      quantity ?
                        <div className="tags_div">
                          <p>{quantity}</p>
                        </div>
                        : ""
                  }
                </div>
              </Accordion.Item>
            ) : val?.type === 0 ? (
              <Accordion.Item eventKey={i}>
                <Accordion.Header onClick={() => toggleAccordionOptions(i)}>
                  <div className="product-category-header">
                    <div className="text_field">
                      <h3>{key}:</h3>
                      {val?.info && <Tooltip placement="top" title={val?.info}>
                        <img src="/customQuote/Icons/info.svg" alt="info icon" />
                      </Tooltip>}
                    </div>
                  </div>
                </Accordion.Header>
                <div className="divider"></div>
                <Accordion.Body>
                  <div className="main_name_div">
                    <div className="new_inputs">
                      <input onChange={handleCustomerDetailsChange} name="fullName" value={customerDetails?.fullName || ""} className={`name_inp ${errors.fullName ? "in_border_red" : ""}`} type="text" placeholder="Your FullName" />
                    </div>
                    <div className="new_inputs">
                      <input onChange={handleCustomerDetailsChange} name="email" value={customerDetails?.email || ""} className={`name_inp ${errors.email ? "in_border_red" : ""}`} type="email" placeholder="Your Email" />
                    </div>
                    <div className="new_inputs">
                      <input onChange={handleCustomerDetailsChange} name="phone_no" value={customerDetails?.phone_no || ""} className={`name_inp ${errors.phone_no ? "in_border_red" : ""}`} type="number" placeholder="Phone no" />
                    </div>
                    <div className="new_inputs">
                      <input onChange={handleCustomerDetailsChange} name="company" value={customerDetails?.company || ""} className={`name_inp ${errors.company ? "in_border_red" : ""}`} type="text" placeholder="Your Company" />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ) : ""}
          </Accordion>
        </div>
      </div >
    );
  }



  const handleChangeSelect = (data, obj) => {
    dispatch(setSelectedData({ ...selectedData, [obj.name]: data?.value }))
  };

  const handleChangeField = (e) => {
    const { name, value } = e.target;
    if (name == "note") {
      setActiveKeyOptions([]);
    }
    dispatch(setSelectedData({ ...selectedData, [name]: value }))
  };

  const artworkData =
    selectedData?.length > 0 &&
    selectedData?.find((item) => item.slug === "artwork");

  return (
    <div className="product-category">
      <div className="product-category-child" id="product_details">
        <div className="text_hr">
          <p>Product Details</p>
          <hr />
        </div>
        <div className="product_detail">
          <form ref={ref} onSubmit={handleSubmit} className="detail_portion">
            {quoteData?.[selectedProduct]?.isName && (
              <input
                className={`time-frame-input ${errors?.name ? "in_border_red" : ""}`}
                type="text"
                name="name"
                value={selectedData.name || ""}
                onChange={handleChangeField}
                placeholder="Your Product Name"
              />
            )}
            {quoteData?.[selectedProduct]?.isName &&
              quoteData?.[selectedProduct]?.isContents && (
                <div className="select-field">
                  <SelectField
                    name="contents"
                    onChange={handleChangeSelect}
                    // value={selectedData?.contents || {}}
                    type="1"
                    width={"100%"}
                    error={errors?.contents}
                    options={quoteData?.[selectedProduct]?.contentsData}
                    placeholder="Contents"
                    height="quote_height1"
                  />
                </div>
              )}

            {
              Object.keys(quoteData?.[selectedProduct]?.types)?.length > 0
                ? quoteData?.[selectedProduct]?.types?.[selectedSubProduct]
                  ?.product_details &&
                Object.entries(
                  quoteData?.[selectedProduct]?.types?.[selectedSubProduct]
                    ?.product_details
                ).map(([key, val], i) => renderProductDetails(key, val, i))
                : quoteData?.[selectedProduct]?.product_details &&
                Object.entries(
                  quoteData?.[selectedProduct]?.product_details
                ).map(([key, val], i) => renderProductDetails(key, val, i))
            }


            <div>
              <div className="text_ins">
                <h3>Instruction:</h3>
                {/* <Tooltip placement="top" title={val?.info}> */}
                {/* <img src="/customQuote/Icons/info.svg" alt="info icon" /> */}
                {/* </Tooltip> */}
              </div>
              {quoteData?.[selectedProduct]?.instructions && (
                <textarea
                  className={`description-textarea ${errors.note ? "in_border_red" : ""}`}
                  placeholder="Please enter your instructions here"
                  name="note"
                  value={selectedData?.note || ""}
                  onChange={handleChangeField}
                ></textarea>
              )}
            </div>


            <div>
              <div className="text_art">
                <h3>Upload your artwork:</h3>
                {errors?.artwork && <span className={`${errors?.artwork ? "steric_color" : ""}`}>*</span>}
              </div>
              {quoteData?.[selectedProduct]?.artwork && (
                <QuoteDesignArtwork
                  id={artworkData?.id}
                />
              )}
            </div>

            <div className="button-container">
              <button disabled={loader} type="submit" className="submit-button">{loading2 ? "Submitting..." : "SUBMIT"}</button>
              <div className="reset-button" onClick={handleReset}>
                <img src="/customQuote/Icons/undo.svg" alt="reset img" />

                RESET
              </div>
            </div>

          </form>
          <div className="image_portion">
            <img
              className="product_image"
              src={quoteData?.[selectedProduct]?.main_image}
              alt="Product Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
