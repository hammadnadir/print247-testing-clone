import React, { useEffect, useRef, useState } from "react";
import { Modal } from "antd";
import TextField from "../TextField";
import { toast } from "react-toastify";
import RequestMessage from "../RequestMessage";
import PhoneInput from "react-phone-input-2";
import { getUserIdFromLocalStorage } from "@/utils";
import { checkoutDataRequest } from "@/redux/payment";
import { useDispatch, useSelector } from "react-redux";
import { getCartRequest } from "@/redux/cart";
import { useRouter } from "next/router";

function QuoteDetailModal({ quoteModal, setQuoteModal, selectedData }) {
    const quoteLocalData = localStorage !== undefined && localStorage.getItem("quoteDetail") ? JSON.parse(localStorage.getItem("quoteDetail")) : null
    const [contactData, setContactData] = useState({ country: "USA" });
    const [contactError, setContactError] = useState({});
    const [loader, setLoader] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const { showConsole } = useSelector((state) => state.global)

    const dispatch = useDispatch()
    const router = useRouter()

    const ref = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)
        validate(contactData);
    };
    useEffect(() => {
        if (quoteLocalData) {
            setContactData(quoteLocalData)
        }
    }, [])

    const validate = (data) => {
        let err = {};
        const NumberRegex = /^\+?[1-9][0-9]{7,14}$/

        if (data.phone_no && !NumberRegex.test(data.phone_no)) {
            err.phone_no = "Invalid Phone No.";
        }
        if (!data.email) {
            err.email = "Required";
        }
        if (!data.phone_no) {
            err.phone_no = "Required";
        }
        // if (!data.whatsapp_no) {
        //     err.whatsapp_no = "Required";
        // }
        // if (data.whatsapp_no && !NumberRegex.test(data.whatsapp_no)) {
        //     err.whatsapp_no = "Invalid Whatsapp No.";
        // }
        if (Object.keys(err).length > 0) {
            setContactError(err);
            setLoader(false)
        } else {
            if (localStorage !== undefined) {
                localStorage.setItem("quoteDetail", JSON.stringify(contactData))
            }
            try {
                const ids = selectedData?.map((item) => item.id)
                const userId = getUserIdFromLocalStorage()
                const payload = {
                    customer_id: userId,
                    cartid: ids,
                    email: data.email,
                    phone: data.phone_no,
                    whatsapp_no: data.whatsapp_no
                }
                setContactError({
                    email: "",
                    phone_no: "",
                    whatsapp_no: ""
                });
                dispatch(checkoutDataRequest(payload)).then((res) => {
                    // router.push(`/information/${res?.payload?.id}`)
                    if (res?.payload?.status) {
                        dispatch(getCartRequest({ user_id: userId }));
                        toast(<RequestMessage image="/icons/tick.png" color="green" message="Request Submit Successfully." />)
                        setQuoteModal(false)
                        setLoader(false)
                        router.push("/")
                    } else {
                        toast(<RequestMessage image="/icons/error.png" color="red" message={res?.payload?.message} />)
                        setQuoteModal(false)
                        setLoader(false)
                    }
                })
            } catch (error) {
                setLoader(false)
                if (showConsole === 1) {
                    console.log(error);
                  }
            }
        }
    };

    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    };
    const handlePhoneChange = async (phone) => {
        // Assuming contactData is a state variable
        const newContactData = { ...contactData, phone_no: phone };

        // if (phone?.length > 10) {
        //     try {
        //         const fetchIsOn = async () => {
        //             const response = await fetch(`https://wa-api.m33r.tech/v1/phone/${phone}/isOn`);
        //             const data = await response.json();
        //             setIsOn(data.isOn);
        //         };

        //         fetchIsOn();
        //     } catch (error) {
        //         // Handle network errors or exceptions here
        //     }
        // }

        // Update the state with the new contact data
        setContactData(newContactData);
    };

    const handleWatsappChange = (phone) => {
        const newContactData = { ...contactData, whatsapp_no: phone };
        setContactData(newContactData);
    }


    return (
        <div className="quote_detail_modaal">
            <Modal
                centered
                open={quoteModal}
                onOk={() => setQuoteModal(false)}
                onCancel={() => setQuoteModal(false)}
            >
                <div className="Callback_Request">
                    <form ref={ref} onSubmit={handleSubmit} className="main-contact-inp2">
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}><label style={{ paddingBottom: "10px", paddingLeft: "10px", fontWeight: "600" }}>Email:</label>{contactError.email && <pre style={{ color: "red", marginBottom: "8px" }}>{contactError.email}</pre>}</div>
                        <TextField name="email" onChange={handleChange} value={contactData.email}
                            // error={contactError.email} 
                            placeholder="Email" type="email" />
                        {/* <TextField
                            name="phone_no"
                            onChange={handleChange}
                            value={contactData.phone_no}
                            error={contactError.phone_no}
                            placeholder="Phone No"
                            type="number"
                        /> */}
                        <div style={{ marginBottom: "30px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}><label style={{ paddingBottom: "10px", paddingLeft: "10px", fontWeight: "600" }}>Phone No:</label>{contactError.phone_no && <pre style={{ color: "red", marginBottom: "8px" }}>{contactError.phone_no}</pre>}</div>
                            <PhoneInput country={'us'} value={contactData.phone_no} onChange={(phone) => handlePhoneChange(phone)} />
                        </div>
                        {/* <div style={{ display: "flex", alignItems: "center", gap: "10px" }}><label style={{ paddingBottom: "10px", paddingLeft: "10px", fontWeight: "600" }}>WhatsApp No:</label>{contactError.whatsapp_no && <pre style={{ color: "red", marginBottom: "8px" }}>{contactError.whatsapp_no}</pre>}</div>
                        <PhoneInput country={'us'} value={contactData.whatsapp_no} onChange={(phone) => handleWatsappChange(phone)} /> */}
                        {loader ?
                            <div className="contact-submitbth">
                                <div className="loader_btn"><div className="custom-loader"></div></div>
                            </div> : <div className="contact-submitbth">
                                <button id="request-quote-submit" type="submit">Request Quote</button>
                            </div>}
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default QuoteDetailModal;
