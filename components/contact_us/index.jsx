import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import TextField from "../common/TextField";
import ContactModal from "@/components/common/ContactModal";
import { toast } from "react-toastify";
import RequestMessage from "../common/RequestMessage";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from "react-redux";
import { postLeadsRequest } from "@/redux/zohoLeads";

function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [contactData, setContactData] = useState({
    checked: false,
  });
  const [contactError, setContactError] = useState({});
  const [loader, setLoader] = useState(false);
  const { showConsole } = useSelector((state) => state.global);

  const ref = useRef(null);

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
    if (!data.message) {
      err.message = "Message is Required";
    }
    if (!data.phone) {
      err.phone = "Phone Number is Required";
    }
    // if(!data.che)

    const NumberRegex = /^\+?[1-9][0-9]{7,14}$/;
    if (data.phone && data?.phone?.length < 10) {
      err.phone = "Invalid Phone No.";
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
              Phone: data?.phone,
              Lead_Source: "Ecommerce",
              // Lead_Source: "Website Contact us Quote",
              Email_Opt_Out: contactData?.checked,
              Description: data?.message,
              tags: ["Website Contact us Quote"]
            })
          );
          // biztek apps emailjs
          emailjs
            .sendForm(
              "service_ktc2isj",
              "template_a1crb6r",
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
                  message: "",
                });
                setContactData({
                  first_name: "",
                  last_name: "",
                  email: "",
                  message: "",
                  company: "",
                  phone: "",
                  issue: "",
                  subject: "",
                  checked: false, // Reset the checkbox state
                });
                toast(
                  <RequestMessage
                    toastClass="contact-us-toast"
                    image="/icons/tick.png"
                    color="green"
                    message="Form Submit Successfully."
                  />
                );
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

  // const handleChange = (e) => {
  //   setContactData({ ...contactData, [e.target.name]: e.target.value });
  // };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div className="padding_headd contact_main">
      <Container>
        <div className="inputdata-connect">
          <form ref={ref} onSubmit={handleSubmit} className="fresh-perspective">
            <h2>Looking For Fresh Perspective?</h2>

            <div className="main-perspective-inp">
              <div className="two_fields">
                <TextField
                  placeholder="First Name"
                  type="text"
                  name="first_name"
                  onChange={handleChange}
                  value={contactData.first_name}
                  error={contactError.first_name}
                />
                <TextField
                  placeholder="Last Name"
                  type="text"
                  name="last_name"
                  onChange={handleChange}
                  value={contactData.last_name}
                  error={contactError.last_name}
                />
              </div>
              <TextField
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                value={contactData.email}
                error={contactError.email}
              />
              <TextField
                placeholder="Phone No."
                type="number"
                name="phone"
                onChange={handleChange}
                value={contactData.phone}
                error={contactError.phone}
              />
              {/* <div className="main_sms_option">
                <div className="sms_option">
                  <input
                    className="checkd"
                    type="checkbox"
                    name="checked"
                    checked={contactData.checked}
                    onChange={handleChange}
                  />
                  <p className="para">
                    Opt In to Receive SMS Notifications, Alerts & Occasional
                    Marketing Communication
                  </p>
                </div>
              </div> */}
              <div className="main_sms_option">
                <label className="sms_option">
                  <input
                    className="checkd"
                    type="checkbox"
                    name="checked"
                    checked={contactData.checked}
                    onChange={handleChange}
                  />
                  Opt In to Receive SMS Notifications, Alerts & Occasional Marketing Communication
                </label>
              </div>

              <textarea
                placeholder="Message"
                style={{
                  width: "100%",
                  height: "200px",
                  border: contactError.message
                    ? "1px solid red"
                    : "1px solid #c2c2c2 ",
                }}
                name="message"
                onChange={handleChange}
                value={contactData.message}
              />

              {loader ? (
                <div className="contact-send">
                  <span>
                    <div className="custom-loader"></div>
                  </span>
                </div>
              ) : (
                <div className="contact-send">
                  <button id="email-us" type="submit">
                    Email us
                  </button>
                </div>
              )}

              <p className="last_para">
                By signing up via text, you agree to receive recurring automated
                marketing messages, including cart reminders, at the phone
                number provided. Consent is not a condition of purchase. Reply
                STOP to unsubscribe. Message frequency varies. Msg & data rates
                may apply. Your Privacy is our priority. Your information will
                not be shared.
              </p>
            </div>
          </form>

          <div className="Connect-us">
            <h2>Connect With Us?</h2>

            <div className="phone">
              <h3>Phone</h3>
              <div className="phone_no_field">
                <span>
                  Direct No:{" "}
                  <a id="lets-talk" href="tel:13462461639">
                    +1 (346) 246-1639
                  </a>
                </span>
              </div>
            </div>

            <div className="email">
              <h3>Email</h3>
              <span>
                <a href="mailto: Support@print247-testing-clone.vercel.app">Support@print247-testing-clone.vercel.app</a>
              </span>
            </div>

            <div className="address">
              <h3>Address</h3>
              <a
                href="https://www.google.com/maps/place/1631+Cottonwood+School+Rd,+Rosenberg,+TX+77471,+USA/@29.5243243,-95.8307941,867m/data=!3m2!1e3!4b1!4m6!3m5!1s0x86411b9dbaf843bf:0xb87f9d80c5990d5e!8m2!3d29.5243197!4d-95.8282138!16s%2Fg%2F11b8z01lhk!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="about-add">
                  1631 Cottonwood School Rd Rosenberg, <br />TX 77471,USA
                </span>
              </a>
            </div>

            <p>
              Please fill out a call request. We will typically call you back in
              less than a minute.
            </p>

            <div className="Request-Callback">
              <button id="callback-request" onClick={() => setModalOpen(true)}>
                Request Callback
              </button>
            </div>
            <ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
