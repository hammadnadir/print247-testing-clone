import React, { useRef, useState } from "react";
import { Modal } from "antd";
import TextField from "../TextField";
import SelectField from "../SelectField";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import RequestMessage from "../RequestMessage";
import { useDispatch, useSelector } from "react-redux";
import { postLeadsRequest } from "@/redux/zohoLeads";

function ContactModal({ modalOpen, setModalOpen }) {
  const [contactData, setContactData] = useState({ country: "USA" });
  const [contactError, setContactError] = useState({});
  const [loader, setLoader] = useState(false);
  const [agree, setAgree] = useState(false);
  const { showConsole } = useSelector((state) => state.global);

  const ref = useRef(null);

  const handleClick = () => {};

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    validate(contactData);
  };

  const validate = (data) => {
    let err = {};
    if (!data.first_name) {
      err.first_name = "First Name is Required";
    }
    if (!data.last_name) {
      err.last_name = "Last Name is Required";
    }
    if (!data.email) {
      err.email = "Email is Required";
    }
    if (!data.phone_no) {
      err.phone_no = "Phone No is Required";
    }
    const NumberRegex = /^\+?[1-9][0-9]{7,14}$/;
    if (data.phone_no && data?.phone_no?.length < 10) {
      err.phone_no = "Invalid Phone No.";
    }
    if (!data.country) {
      err.country = "Country is Required";
    }
    if (!agree) {
      err.agree = "Required";
    }
    if (Object.keys(err).length > 0) {
      setContactError(err);
      setLoader(false);
    } else {
      if (ref.current) {
        try {
          dispatch(
            postLeadsRequest({
              First_Name: data?.first_name,
              Last_Name: data?.last_name,
              Email: data?.email,
              State: "USA",
              Phone: data?.phone_no,
              Company: data?.company,
              Lead_Source: "Ecommerce",
              tags: ["Website Callback Request"]
              // Lead_Source: "Website Callback Request",
            })
          );
          // biztekapps emailjs
          emailjs
            .sendForm(
              "service_4gc2hoi",
              "template_qsm6smj",
              ref.current,
              "eKeAE09PqlRljmUv2"
            )
            .then(
              (result) => {
                setLoader(false);
                setContactError({
                  first_name: "",
                  last_name: "",
                  email: "",
                  phone_no: "",
                  country: "",
                });
                setContactData({
                  first_name: "",
                  last_name: "",
                  email: "",
                  company: "",
                  country: "",
                  phone_no: "",
                });
                toast(
                  // <RequestMessage toastClass="callback-toast" image="/icons/tick.png" color="green" message="Form Submit Successfully." />
                  <div className={`request-message callback-toast`}>
                    <img className="img" src="/icons/tick.png" alt="message" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <p style={{ color: "green" }}>Form Submit Successfully.</p>
                  </div>
                );
                setModalOpen(false);
              },
              (error) => {
                if (showConsole === 1) {
                  console.log(error);
                }
                toast(
                  <RequestMessage
                    image="/icons/error.png"
                    color="red"
                    message="Something went wrong."
                  />
                );
                setLoader(false);
              }
            );
        } catch (error) {
          if (showConsole === 1) {
            console.log(error);
          }
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
    }
  };

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const dropOptions = [
    {
      name: "USA",
      value: "USA",
    },
  ];
  return (
    <div className="contact_modal">
      <Modal
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <div className="Callback_Request">
          <h2>Callback Request</h2>
          <hr />
          {contactError?.agree && (
            <pre style={{ color: "red" }}>
              You must agree our terms and conditions.
            </pre>
          )}
          <form
            ref={ref}
            onSubmit={handleSubmit}
            className="callback-request-tag main-contact-inp"
          >
            <div className="contact_two_fields">
              <TextField
                name="first_name"
                onChange={handleChange}
                value={contactData.first_name}
                error={contactError.first_name}
                placeholder="First Name"
                type="text"
              />

              <TextField
                name="last_name"
                onChange={handleChange}
                value={contactData.last_name}
                error={contactError.last_name}
                placeholder="Last Name"
                type="text"
              />
            </div>
            <TextField
              name="email"
              onChange={handleChange}
              value={contactData.email}
              error={contactError.email}
              placeholder="Email"
              type="email"
            />
            <div className="contact_two_fields">
              <SelectField
                style={{ height: "50px" }}
                name="country"
                customSelected="USA"
                onChange={handleChange}
                value={contactData.country}
                error={contactError.country}
                options={dropOptions}
              />
              <TextField
                name="phone_no"
                onChange={handleChange}
                value={contactData.phone_no}
                error={contactError.phone_no}
                placeholder="Phone No"
                type="number"
              />
            </div>
            <TextField
              name="company"
              onChange={handleChange}
              value={contactData.company}
              error={contactError.company}
              placeholder="Company (Optional)"
              type="text"
            />

            <div
              style={{ cursor: "pointer" }}
              onClick={() => setAgree(!agree)}
              className="contact-checkbox"
            >
              <input name="agree" checked={agree} type="checkbox" />

              <label>
                I agree to print247-testing-clone.vercel.app recording calls as described in their{" "}
                <Link href="/privacy-policy">
                  <span>Privacy</span>
                </Link>
                <span style={{ color: "black", margin: "0 5px" }}>and</span>
                <Link href="/privacy-policy">
                  <span>Cookie Policy</span>
                </Link>
              </label>
            </div>
            {loader ? (
              <div className="contact-submit">
                <div className="loader_btn">
                  <div className="custom-loader"></div>
                </div>
              </div>
            ) : (
              <div className="contact-submit">
                <button id="callback-submit" onClick={handleClick} type="submit">
                  Submit
                </button>
              </div>
            )}

            <p>We will typically call you back in less than a minute</p>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default ContactModal;
