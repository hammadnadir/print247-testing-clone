import React, { useState } from "react";
import { Alert, Modal } from "antd";
import { useRef } from "react";
import TextField from "../TextField";
import PhoneInput from "react-phone-input-2";
import RequestMessage from "../RequestMessage";
import { toast } from "react-toastify";
import { getUserIdFromLocalStorage } from "@/utils";
import { HelpSubmitRequest } from "@/redux/order";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import emailjs from '@emailjs/browser';
import Image from "next/image";
import { postLeadsRequest } from "@/redux/zohoLeads";

function HelpModal({ helpModal, setIsHelpModal }) {
  const [contactData, setContactData] = useState({});
  const [contactError, setContactError] = useState({});

  
  const [loader, setLoader] = useState(false);

  const ref = useRef(null);
  const userId = getUserIdFromLocalStorage();
  const router = useRouter();
  const dispatch = useDispatch();

  const handlePhoneChange = async (phone) => {
    const newContactData = { ...contactData, phone_no: phone };
    setContactData(newContactData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    validate(contactData);
  };

  // const validate = (data) => {
  //     let err = {};
  //     if (!data.first_name) {
  //         err.first_name = "First Name is Required";
  //     }
  //     if (!data.last_name) {
  //         err.last_name = "Last Name is Required";
  //     }
  //     if (!data.email) {
  //         err.email = "Email is Required";
  //     }
  //     if (!data.phone_no) {
  //         err.phone_no = "Phone No is Required";
  //     }
  //     if (!data.country) {
  //         err.country = "Country is Required";
  //     }
  //     if (Object.keys(err).length > 0) {
  //         setContactError(err);
  //     } else {
  //         setContactError({
  //             first_name: "",
  //             last_name: "",
  //             email: "",
  //             phone_no: "",
  //             country: "",
  //         });
  //         setContactData({
  //             first_name: "",
  //             last_name: "",
  //             email: "",
  //             phone_no: "",
  //             country: "",
  //         });
  //     }
  // };

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
        const payload = {
          email: data.email,
          phone: data.phone_no,
          product_slug: router?.query?.id,
        };
        setContactError({
          email: "",
          phone_no: "",
        });
        dispatch(
          postLeadsRequest({
            First_Name: "Quick",
            Last_Name: "Support",
            Email: data?.email,
            Phone: data.phone_no,
            Lead_Source: "Ecommerce",
            tags: ["Website Need Help Quote!"],
            // Lead_Source: "Website Need Help Quote!",
            Description: JSON.stringify({Interest: `https://print247-testing-clone.vercel.app/${router?.query?.id}`})
         
          }))
        dispatch(HelpSubmitRequest(payload)).then((res) => {
          emailjs.sendForm('service_ktc2isj', 'template_9rx905k', ref.current, 'eKeAE09PqlRljmUv2')
            .then((result) => {
              setLoader(false);
              if (res?.payload?.message) {
                toast(
                  // <RequestMessage toastClass="quick-toast" image="/icons/subscribe.png" color="green" message={res?.payload?.message}/>
                  <div className={`request-message quick-toast`}>
                    <img className="img" src="/icons/subscribe.png" alt="message" />
                    &nbsp;&nbsp;&nbsp;&nbsp;<p style={{ color: "green" }}>{res?.payload?.message}</p>
                  </div>
                );
                setIsHelpModal(false);
              } else {
                toast(
                  <RequestMessage
                    image="/icons/error.png"
                    color="red"
                    message={res?.payload?.message}
                  />
                );
              }
            }, (error) => {
              setLoader(false);
              if (res?.payload?.message) {
                toast(
                  <RequestMessage
                    image="/icons/subscribe.png"
                    color="green"
                    message={res?.payload?.message}
                  />
                );
                setIsHelpModal(false);
              } else {
                toast(
                  <RequestMessage
                    image="/icons/error.png"
                    color="red"
                    message={res?.payload?.message}
                  />
                );
              }
            });


        });
      } catch (error) {
        setLoader(false);
        toast(<RequestMessage image="/icons/error.png" color="red" message="Something went wrong." />)
      }
    }
  };

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const onClose = (e) => { };

  const handleClose = () => {
    setIsHelpModal(false)
  }

  return (
    <div className="dieline_modal">
      <Modal centered open={helpModal} onOk={() => setIsHelpModal(false)} onCancel={() => setIsHelpModal(false)}>
        <div className="Callback_Request">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2>Need Help!</h2>
            <Image onClick={handleClose} style={{ cursor: "pointer" }} src='/image/closemodal.png' width={25} height={25} alt="cross icon"/>
          </div>
          <hr />
          <form ref={ref} onSubmit={handleSubmit} className="quick-support-tag main-contact-inp2">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}></div>
            <input type="text" name="phone_no" value={contactData?.phone_no} style={{ display: "none" }} />
            <input type="text" name="product_slug" value={router?.query?.id} style={{ display: "none" }} />
            <div style={{ marginTop: "25px" }}>
              {/* <pre style={{ color: "red", marginBottom: "8px" }}>
                {contactError.email ? contactError.email : ""}
              </pre> */}
              <TextField   error={contactError.email} className={`${contactError.email ? "error_b" : ""}`} name="email" onChange={handleChange} value={contactData.email} placeholder="Email" type="email"/>
         
            </div>

            <div style={{ marginBottom: "40px", marginTop: "8px" }}>
              {/* <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <pre style={{ color: "red", marginBottom: "8px" }}>
                  {contactError.phone_no ? contactError.phone_no : ""}
                </pre>
              </div> */}
              <PhoneInput className={`${contactError.phone_no ? "error_b" : ""}`} country={"us"} value={contactData.phone_no} onChange={(phone) => handlePhoneChange(phone)}/>
            </div>

            {loader ? (
              <div className="contact-submitbth">
                <div className="loader_btn">
                  <div className="custom-loader"></div>
                </div>
              </div>
            ) : (
              <div className="contact-submitbth">
                <button id="need-help-submit" type="submit">Send</button>
              </div>
            )}
            <div className="exective_css">
              One of our executive will be shortly in touch with you!
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default HelpModal;
