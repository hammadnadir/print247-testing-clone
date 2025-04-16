import { Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import emailjs from "@emailjs/browser";
import { campignObj } from "@/data/compaignData";;
import { Spinner } from "react-bootstrap";
// import ArtworkCom from "@/components/campignCom/ArtwokCom";
// import ArtworkCom from "@/components/campignCom/ArtwokCom";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addtoCartRequest } from "@/redux/cart";
import { postLeadsRequest } from "@/redux/zohoLeads";
import { checkoutDataRequest } from "@/redux/payment";
import { getUserIdFromLocalStorage } from "@/utils";
import { toast } from "react-toastify";
import ArtwokComFolding from "../../ArtwokComFolding";
import DetailSelect from "@/components/common/detailSelect";
import { components } from 'react-select';

function SingleFormFoldTwo({ minQuantity }) {
  const fields = {
    length: "",
    width: "",
    depth: "",
    quantity: "",
    fullname: "",
    company: "",
    phone_no: "",
    unit: "inch",
    artwork: [],
    email: "",
    material: [],
    finishes: [],
  };
  const [mainFile, setMainFile] = useState([]);
  const [loader, setLoader] = useState(false);
  const [inputData, setInputData] = useState(fields);
  const [inputError, setInputError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ref = useRef();
  const reftwo = useRef();
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch()
  const userId = getUserIdFromLocalStorage();

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;

    if (name === "quantity") {
      if (parseInt(value.length) <= 6) {
        setInputData({ ...inputData, [name]: value });
      }
    } else if (name === "length" || name === "width" || name === "depth") {
      if (parseInt(value.length) <= 4) {
        setInputData({ ...inputData, [name]: value });
      }
    } else {
      if (parseInt(value.length) <= 40) {
        setInputData({ ...inputData, [name]: value });
      }
    }
  };

  const handlePhoneChange = (phone) => {
    const inputDataVal = { ...inputData, phone_no: phone };
    setInputData(inputDataVal);
  };

  const handleChangeUnit = (unit) => {
    setInputData({ ...inputData, unit: unit });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validate(inputData);
  };

  const validate = (data) => {

    let err = {};
    // if (!inputData.length) {
    //   err.length = "Required";
    // }
    // if (!inputData.width) {
    //   err.width = "Required";
    // }
    // if (!inputData.depth) {
    //   err.depth = "Required";
    // }
    if (!inputData.fullname) {

      err.fullname = "Required";
    }
    if (!inputData.quantity) {
      err.quantity = "Required";
    }
    if (!inputData.phone_no) {
      err.phone_no = "Required";
    }
    if (!inputData.email) {
      err.email = "Required";
    }
    if (!inputData.material?.length > 0) {
      err.material = "Required";
    }
    if (!inputData.finishes?.length > 0) {
      err.finishes = "Required";
    }
    if (Object.keys(err).length > 0) {
      setInputError(err);
    } else {
      if (ref.current) {
        setIsSubmitted(true);
        try {
          const payload = {
            name: "Custom Boxes",
            product_slug: "custom-boxes",
            attributes: { material: inputData.material, finishes: inputData.finishes, length: inputData?.length, width: inputData?.width, depth: inputData?.depth },
            quantity: inputData?.quantity,
            user_id: userId,
            artwork: mainFile
          }
          setInputError({})
          setLoader(true)
          dispatch(addtoCartRequest(payload)).then((res) => {
            const payload2 = {
              customer_id: userId,
              cartid: [res?.payload?.cart_id],
              email: inputData?.email,
              phone: inputData?.phone_no,
              whatsapp_no: null
            };
            dispatch(
              postLeadsRequest({
                First_Name: "Print247",
                Last_Name: "Quote",
                Email: inputData?.email,
                Phone: inputData?.phone_no,
                Lead_Source: "Ecommerce",
                tags: ["Website Quote"],
                Description: JSON.stringify({ ...inputData, artwork: mainFile })
              }))

            dispatch(checkoutDataRequest(payload2)).then((res) => {
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
                            setInputData(fields)
                            setMainFile([])
                            router.push(`/thank-you`)
                            setIsSubmitted(false);
                            setLoader(false)
                          } else {
                            setInputData(fields)
                            setMainFile([])
                            router.push(`/thank-you`)
                            setLoader(false)
                            setIsSubmitted(false);
                          }
                          dispatch(setLoader(false))
                        } else {
                          setInputData(fields)
                          setMainFile([])
                          router.push(`/thank-you`)
                          setLoader(false)
                          setIsSubmitted(false);
                        }
                      })

                  })
                  .catch((error) => {
                    if (res?.payload?.status) {
                      setInputData(fields)
                      setMainFile([])
                      router.push(`/thank-you`)
                      setLoader(false)
                      setIsSubmitted(false);
                    } else {
                      toast(
                        <RequestMessage
                          image="/icons/error.png"
                          color="red"
                          message={res?.payload?.message || "Something went wrong."}
                        />
                      );
                      setLoader(false)
                      setIsSubmitted(false);
                    }
                  });
              });
            });

          })
        } catch (error) {
          console.log(error);
          setIsSubmitted(false);
        }
      }
    }
  };

  useEffect(() => {
    setInputData({ ...inputData, artwork: mainFile });
  }, [mainFile]);

  const artworkData = mainFile.map((data) => data.url);
  // const styleBorder =  "red !important"


  // FINISHING + MATERIAL 

  const materialData = [
    { slug: 'white-cardboard', title: 'White Cardboard', abbr: "WC" },
    { slug: 'silver-cardboard', title: 'Silver Cardboard', abbr: "SC" },
    { slug: 'holographic-cardboard', title: 'Holographic Cardboard', abbr: "HC" },
    { slug: 'rigid-cardboard', title: 'Rigid Cardboard', abbr: "RC" },
  ]

  const finishData = [
    { slug: 'gloss-laminated', title: 'Gloss Laminated', abbr: "GL" },
    { slug: 'drip-off', title: 'Drip Off', abbr: "DF" },
    { slug: 'softouch-lamination', title: 'Softouch Lamination', abbr: "SL" },
    { slug: 'matte-lamination', title: 'Matte Lamination', abbr: "ML" },
    { slug: 'spot-gloss', title: 'Spot Gloss', abbr: "SG" },
    { slug: 'embossing', title: 'Embossing', abbr: "EMB" },
    { slug: 'deep-embossing', title: 'Deep Embossing', abbr: "DE" },
    { slug: '3d-raised-uv', title: '3D Raised UV', abbr: "3Duv" },
    { slug: 'window', title: 'Window', abbr: "WIN" },
    { slug: 'inside-printing', title: 'Inside Printing', abbr: "IP" },
    { slug: 'hot-stamp-foil', title: 'Hot Stamp Foil', abbr: "HSF" },
    { slug: 'debossing', title: 'Debossing', abbr: "DEB" },
  ];


  const handleChangeAttributes = (val, data) => {
    const value = { [data?.name]: val?.map((data) => data.value) };
    setInputData({ ...inputData, ...value });
  };


  const handleNone = () => { }


  return (
    <div className="single_form_Section_fold">
      <form
        style={{ display: "none" }}
        ref={reftwo}
        className="form"
        onSubmit={handleSubmit}
      >
        <input value={inputData?.email || ""} onChange={handleNone} name="customer_email" type="text" />
        <input value={campignObj?.[id]?.title || ""} onChange={handleNone} name="product" type="text" />
        <input value={inputData?.quantity || ""} onChange={handleNone} name="quantity" type="number" />
      </form>

      <form ref={ref} className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="artwork"
          onChange={handleNone}
          value={artworkData.join("      ,      ") || ""}
          style={{ display: "none" }}
        />
        <input
          type="text"
          name="phone_no"
          onChange={handleNone}
          value={inputData.phone_no || ""}
          style={{ display: "none" }}
        />
        <input
          type="text"
          name="unit"
          onChange={handleNone}
          value={inputData.unit || ""}
          style={{ display: "none" }}
        />
        <div className="formGroupTwo">
          <input
            type="number"
            name="length"
            onChange={handleChange}
            onWheel={(e) => e.target.blur()}
            value={inputData.length || ""}
            placeholder="Length"
            className="input"
            style={{ borderColor: inputError.length ? "red" : "" }}
          />
          <input
            type="number"
            name="width"
            onChange={handleChange}
            onWheel={(e) => e.target.blur()}
            value={inputData.width || ""}
            placeholder="Width"
            className="input"
            style={{ borderColor: inputError.width ? "red" : "" }}
          />
          <input
            type="number"
            name="depth"
            onChange={handleChange}
            onWheel={(e) => e.target.blur()}
            placeholder="Depth"
            value={inputData.depth || ""}
            className="input"
            style={{ borderColor: inputError.depth ? "red" : "" }}
          />
          <Select
            style={{
              backgroundColor: "transparent",
              minWidth: "80px",
            }}
            className="select inchSelect"
            showSearch
            placeholder="inch"
            defaultValue={{
              value: "inch",
              label: "inch",
            }}
            onChange={handleChangeUnit}
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "inch",
                label: "inch",
              },
              {
                value: "cm",
                label: "cm",
              },
              {
                value: "mm",
                label: "mm",
              },
            ]}
          />
        </div>

        {/* MATERIAL + FINISHING */}
        <div className="material_finishing">
          <div className="material_dropdown">
            <DetailSelect
              name="material"
              error={inputError?.material}
              multi={true}
              isAbbr={true}
              placeholder="Material"
              options={{ attribute_option: materialData }}
              onChange={handleChangeAttributes}
              classNamePrefix="material"
              iconColor={"black"}
            />
          </div>
          <div className="finish_dropdown">
            <DetailSelect
              name="finishes"
              error={inputError?.finishes}
              multi={true}
              isAbbr={true}
              placeholder="Finishes"
              options={{ attribute_option: finishData }}
              onChange={handleChangeAttributes}
              classNamePrefix="finish"
              iconColor={"black"}
            />
          </div>
        </div>

        {/* QUANTITY */}
        <input
          name="quantity"
          value={inputData.quantity || ""}
          onChange={handleChange}
          onWheel={(e) => e.target.blur()}
          type="number"
          placeholder="Quantity"
          min={minQuantity}
          // style={{ borderColor: inputError.quantity ? "red" : "" }}
          className={`input ${inputError.quantity ? "borderColorError" : ""}`}
        />

        {/* FULL NAME + COMPANY */}
        <div className="formGroupTwo">
          <input
            name="fullname"
            value={inputData.fullname || ""}
            onChange={handleChange}
            type="text"
            placeholder="Full name"
            className={`input ${inputError.fullname ? "borderColorError" : ""}`}
          />
          <input
            name="company"
            value={inputData.company || ""}
            onChange={handleChange}
            type="text"
            placeholder="Company"
            className="input"
          />
        </div>

        {/* EMAIl */}
        <input
          name="email"
          // style={{ borderColor: inputError.email ? "red" : "" }}
          value={inputData.email || ""}
          onChange={handleChange}
          id="email-input"
          type="email"
          placeholder="Enter your Email"
          className={`input ${inputError.email ? "borderColorError" : ""}`}
        />

        {/* PHONE */}
        <div className="formGroupTwo">
          <PhoneInput
            // countryCodeEditable={false}
            style={{ marginBottom: "10px" }}
            inputStyle={{
              borderColor: inputError.phone_no ? "red" : "",
            }}
            country={"us"}
            onChange={(phone) => handlePhoneChange(phone)}
            name="phone_no"
            value={inputData.phone_no}
            placeholder="Enter your Phone no."
          />
        </div>
        <ArtwokComFolding
          loader={loader}
          setLoader={setLoader}
          mainFile={mainFile}
          setMainFile={setMainFile}
        />

        <div className="main_get_offers">
          <p className="get_upto">GET UPTO</p>
          <p className="get_off">20% off</p>
          <p className="get_first_order">ON YOUR FIRST ORDER</p>
        </div>

        {isSubmitted ? (
          <button disabled type="submit" className="submitButtonFold">
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="loading-overlay"
            >
              <Spinner tip="Uploading..." />
            </div>
          </button>
        ) : (
          <button id="quote-submit" disabled={loader} type="submit" className="submitButtonFold">
            Get a Quote
          </button>
        )}
      </form>
    </div>
  );
}

export default SingleFormFoldTwo;
