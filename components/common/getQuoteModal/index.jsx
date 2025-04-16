import React, { useEffect, useState } from "react";
import { Alert, Modal } from "antd";
import { useRef } from "react";
import TextField from "../TextField";
import PhoneInput from "react-phone-input-2";
import RequestMessage from "../RequestMessage";
import { toast } from "react-toastify";
import { capitalizeFirstWord, getUserIdFromLocalStorage, slugToWords } from "@/utils";
import { HelpSubmitRequest } from "@/redux/order";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { checkoutDataRequest } from "@/redux/payment";
import Image from "next/image";
import { postLeadsRequest } from "@/redux/zohoLeads";

function QuoteFormSubmitModal({
  formSubmitModal,
  setFormSubmitModal,
  productCartId,
  pageData,
  mainAttributes,
  artwork
}) {
  const quoteLocalData =
    localStorage !== undefined && localStorage.getItem("quoteDetail")
      ? JSON.parse(localStorage.getItem("quoteDetail"))
      : {};
  const [contactData, setContactData] = useState(quoteLocalData);
  const [contactError, setContactError] = useState({});
  const [loader, setLoader] = useState(false);
  const [queryLink, setQueryLink] = useState("");
  const { detailData } = useSelector((state) => state.detail);
  const { ip } = useSelector((state) => state.getCountry);

  const ref = useRef(null);
  const userId = getUserIdFromLocalStorage();
  const router = useRouter();
  const dispatch = useDispatch();

  const handlePhoneChange = async (phone) => {
    const newContactData = { ...contactData, phone_no: phone };
    setContactData(newContactData);
    localStorage.setItem("quoteDetail", JSON.stringify(newContactData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    validate(contactData);
  };

  const validate = (data) => {
    let err = {};
    const NumberRegex = /^\+?[1-9][0-9]{7,14}$/;

    if (data.phone_no && !NumberRegex.test(data.phone_no)) {
      err.phone_no = "Invalid Phone No.";
    }
    if (!data.email) {
      err.email = "Required";
    }
    if (!data.phone_no) {
      err.phone_no = "Required";
    }
    if (Object.keys(err).length > 0) {
      setContactError(err);
      setLoader(false);
    } else {
      try {
        const email = contactData?.email;
        const phone_no = contactData?.phone_no;
        const userId = getUserIdFromLocalStorage();
        const payload = {
          customer_id: userId,
          cartid: [productCartId],
          email: email,
          phone: phone_no,
          whatsapp_no: null,
          ip: ip
        };
        setContactError({
          email: "",
          phone_no: "",
        });
        try {

          dispatch(
            postLeadsRequest({
              First_Name: "Print247",
              Last_Name: "Quote",
              Email: data?.email,
              Phone: data.phone_no,
              Lead_Source: "Ecommerce",
              // Lead_Source: "Website Quote",
              tags: ["Website Quote"],
              Description: JSON.stringify({...pageData,...mainAttributes,artwork: artwork})
           
            }))
          dispatch(checkoutDataRequest(payload)).then((res) => {
            setQueryLink(res?.payload?.id);
            const formData = ref.current
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
                    "service_ktc2isj",
                    "template_28p65jh",
                    formData.current,
                    "eKeAE09PqlRljmUv2"
                  )
                  .then((res) => {
                    if (res?.payload?.status) {
                      if (detailData?.page_slug) {
                        router.push({
                          pathname: `/${router?.query?.id}/quote-submitted`,
                          query: {
                            category: `${detailData?.page_slug}-${detailData?.cat_slug}`
                          }
                        })
                      } else {
                        router.push({
                          pathname: `/${router?.query?.id}/quote-submitted`,
                          query: {
                            category: detailData?.cat_slug
                          }
                        })
                      }
                      setLoader(false)
                    } else {
                      router.push({
                        pathname: `/${router?.query?.id}/quote-submitted`,
                        query: {
                          category: detailData?.cat_slug
                        }
                      })
                      setLoader(false)
                      setFormSubmitModal(false);
                    }
                  });
                
                })
                .catch((error) => {
                  if (res?.payload?.status) {
                    router.push({
                      pathname: `/${router?.query?.id}/quote-submitted`,
                      query: {
                        category: detailData?.cat_slug
                      }
                    })
                    setLoader(false)
                  } else {
                    toast(
                      <RequestMessage
                        image="/icons/error.png"
                        color="red"
                        message={res?.payload?.message || "Something went wrong."}
                      />
                    );
                    setFormSubmitModal(false);
                    setLoader(false)
                  }
                });
            });
          });
        } catch (error) {
          toast(
            <RequestMessage image="/icons/error.png"
              color="red"
              message={error || "Something went wrong."} />
          );
          setLoader(false)
          console.error("error", error);
        }

      } catch (error) {
        setLoader(false);
        toast(
          <RequestMessage
            image="/icons/error.png"
            color="red"
            message="Something went wrong."
          />
        );
      }
    }
  };

  const handleChange = (e) => {
    const data = { ...contactData, [e.target.name]: e.target.value };
    setContactData(data);
    localStorage.setItem("quoteDetail", JSON.stringify(data));
  };

  const handleCLose = () => {
    setFormSubmitModal(false)
  }

  const [selectedButton, setSelectedButton] = useState(1); // Default to 'yes'

  const handleClick = (button) => {
    setSelectedButton(button);
  };


  const handleCancel = () => {
    if (!loader) {
      setFormSubmitModal(false)
    }
  }

  return (
    <div className="dieline_modal">
      <Modal
        centered
        open={formSubmitModal}
        onOk={() => setFormSubmitModal(false)}
        onCancel={handleCancel}
      >
        <div className="Callback_Request">
          <div>
            <h2 style={{ textAlign: "left", paddingBottom: "8px" }}>Enter your details</h2>
            {/* <Image onClick={handleCLose} style={{ cursor: "pointer" }} src='/image/closemodal.png' width={25} height={25} /> */}
          </div>
          <form ref={ref} onSubmit={handleSubmit} className={`${router?.query?.id} main-contact-inp2`}>
            <input type="text" style={{ display: "none" }} name="isnfc" value={selectedButton === 1 ? "Yes" : "No"} />
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}></div>
            <div style={{ marginTop: "5px" }}>
              <div className="quote_detail_label">
                <label style={{ fontWeight: "600", paddingBottom: "15px" }}>Enter your Email <span style={{ color: "red" }}>*</span></label>
                <pre style={{ color: "red", marginBottom: "8px" }}>
                  {contactError.email ? contactError.email : ""}
                </pre>
              </div>
              <TextField name="email" onChange={handleChange} value={contactData.email} placeholder="Email" type="email" />
            </div>
            <input type="text" name="phone_no" value={contactData?.phone_no} style={{ display: "none" }} />
            {/* <input type="text" name="query_link" value={queryLink} style={{ display: "none" }} 
            /> */}

            <div style={{ marginTop: "8px" }}>
              <div className="quote_detail_label">
                <label style={{ fontWeight: "600", paddingBottom: "15px" }}>Enter your Phone no. <span style={{ color: "red" }}>*</span></label>
                <pre style={{ color: "red", marginBottom: "8px" }}>
                  {contactError.phone_no ? contactError.phone_no : ""}
                </pre>
              </div>
              <PhoneInput country={"us"} name="phone_no" value={contactData.phone_no} onChange={(phone) => handlePhoneChange(phone)} />
            </div>
            <div className="nfc_para">
              {/* <p>Do you need NFC tag for your packaging?</p> */}
      
              {/* <div className="interested_button">
                <div className={`inner_interested1 ${selectedButton === 1 ? 'selected' : ''}`}
                  onClick={() => handleClick(1)}>
                  Yes, I am interested
                </div>
                <div className={`inner_interested2 ${selectedButton === 0 ? 'selected' : ''}`}
                  onClick={() => handleClick(0)}>
                  No, thanks
                </div>
              </div> */}

              <div className="custom_mailer_data">
                <hr />
                <h2>{detailData?.title}</h2>

                <div className="custom_mailer_detail">
                  <div className="data_custom_mailer">
                    {pageData?.dimensions && Object.keys(pageData?.dimensions)?.length > 0 &&
                      Object.keys(pageData?.dimensions)?.map((key,i) => {
                        if (pageData?.dimensions?.[key]) {
                          return (
                            <h4 key={i}>{capitalizeFirstWord(key)} (inch): {pageData?.dimensions?.[key]}</h4>
                          )
                        }
                      })
                    }
                  </div>

                  <div className="material_custom_mailer">
                    {Object.keys(mainAttributes)?.length > 0 &&
                      Object.keys(mainAttributes)?.map((key,i) => {
                        if (mainAttributes?.[key]?.length > 0) {
                          return (
                            <div className="material_data" key={i}>
                              <span>{slugToWords(capitalizeFirstWord(key))}:</span>
                              <h4>{slugToWords(mainAttributes?.[key])}</h4>
                            </div>
                          )
                        }
                      })
                    }
                  </div>



                  <div className="material_data">
                    <span>Quantity:</span>
                    <h4>{pageData?.quantity} </h4>
                  </div>
                </div>

                <hr />
              </div>
              <div className="back_button" style={{ justifyContent: loader ? "end" : "space-between" }}>
                {!loader && <div onClick={handleCLose} style={{ cursor: "pointer" }}>
                  <h5 style={{ gap: "10px", alignItems: "center", marginBottom: "0px" }}><img src="/image/quote_arrow.png" alt="quote arrow" /> Back</h5>
                </div>}
                <div style={{ paddingBottom: "10px" }}>
                  {/* {loader ? (
                    <div className="">
                      <div className="loader_btn">
                        <div className="custom-loader"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="">
                      <button type="submit">Submit</button>
                    </div>
                  )} */}
                  <div className="" style={{ display: "flex", justifyContent: "end" }}>
                    {loader ?
                      <div className="quote_submit_btn disabled" type="submit">Submitting...</div>
                      :
                      <button id="quote-submit" className="quote_submit_btn" type="submit">Submit</button>

                    }
                  </div>
                </div>
              </div>

            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default QuoteFormSubmitModal;