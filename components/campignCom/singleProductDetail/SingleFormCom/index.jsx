import { Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";
import { campignObj } from "@/data/compaignData";
import ArtworkCom from "../../ArtwokCom";
import { getUserIdFromLocalStorage } from "@/utils";
import { addtoCartRequest } from "@/redux/cart";
import { postLeadsRequest } from "@/redux/zohoLeads";
import { checkoutDataRequest } from "@/redux/payment";
import { useDispatch } from "react-redux";
import DetailSelect from "@/components/common/detailSelect";

function SingleFormCom({ minQuantity }) {
  const fields = {
    // length: "",
    // width: "",
    // depth: "",
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
  const userId = getUserIdFromLocalStorage();
  const dispatch = useDispatch()
  const ref = useRef();
  const reftwo = useRef();
  const router = useRouter();
  const id = router.query.id;
  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;


    if (name === "quantity") {
      if (parseInt(value.length) <= 6) {
        setInputData({ ...inputData, [name]: value });
      }
      // else if (name === "length" || name === "width" || name === "depth") {
      //   if (parseInt(value.length) <= 4) {
      //     setInputData({ ...inputData, [name]: value });
      //   }
    } else {
      if (parseInt(value.trim().length) <= 40) {
        setInputData({ ...inputData, [name]: value.trim() });
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
        const payload = {
          name: inputData.fullname,
          product_slug: router.query.id,
          attributes: { material: inputData.material, finishes: inputData.finishes, length: inputData.length, width: inputData.width, depth: inputData.depth, unit: inputData.unit },
          quantity: inputData.quantity,
          user_id: userId,
          artwork: mainFile
        }
        try {
          dispatch(addtoCartRequest(payload)).then((res) => {
            const { phone_no, email, ...filteredInputData } = inputData;
            const payload2 = {
              customer_id: userId,
              cartid: [res?.payload?.cart_id],
              email: inputData.email,
              phone: inputData.phone_no,
              whatsapp_no: null
            };
            dispatch(
              postLeadsRequest({
                First_Name: "Print247",
                Last_Name: "Compaign Quote",
                Email: inputData?.email,
                Phone: inputData.phone_no,
                Lead_Source: "Ecommerce",
                tags: ["Website Quote"],
                Description: JSON.stringify({ ...filteredInputData })
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
                  .then((res) => {
                    emailjs
                      .sendForm(
                        "service_ktc2isj",
                        "template_28p65jh",
                        reftwo.current,
                        "eKeAE09PqlRljmUv2"
                      )
                      .then((res) => {
                        setInputError(fields);
                        setInputData(fields);
                        setMainFile([]);

                        router.push(`/thank-you`);
                        setIsSubmitted(false);
                      });
                  });
              })
            })
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


  // FINISHING + MATERIAL 

  const materialData = [
    { slug: 'plain-white', title: 'Plain White', abbr: "PW" },
    { slug: 'metalized', title: 'Metalized', abbr: "MET" },
    { slug: 'clear-bags', title: 'Clear Bags', abbr: "CB" },
    { slug: 'foil-pouche', title: 'Foil Pouche', abbr: "FP" },
    { slug: 'kraft-bags', title: 'Kraft Bags', abbr: "KB" },
    { slug: 'metalized-clear', title: 'Metalized+Clear', abbr: "MC" },
  ]

  const finishData = [
    { slug: 'drip-off', title: 'Drip Off', abbr: "DF" },
    { slug: 'gloss', title: 'Gloss', abbr: "GL" },
    { slug: 'matte', title: 'Matte', abbr: "MATT" },
    { slug: 'softtouch', title: 'Softtouch', abbr: "ST" },
    { slug: 'matte-spotuv', title: 'Matte + Spot UV', abbr: "MSuv" },
    { slug: 'softtouch-spotuv', title: 'Softtouch + SpotUv', abbr: "SSuv" },
    { slug: 'inside-printing', title: 'Inside Printing', abbr: "IP" },
    { slug: 'window', title: 'Window', abbr: "WIN" },
    { slug: 'spot-foil', title: 'Spot Foil', abbr: "SF" },
    { slug: 'spot-matte', title: 'Spot Matte', abbr: "SM" },
    { slug: 'tactile-feel', title: 'Tactile Feel', abbr: "TF" },
  ]

  const handleChangeAttributes = (val, data) => {

    const value = { [data?.name]: val?.map((data) => data.value) };

    setInputData({ ...inputData, ...value });
  };


  return (
    <div className="single_form_Section">
      <form
        style={{ display: "none" }}
        ref={reftwo}
        className="form"
        onSubmit={handleSubmit}
      >
        <input value={inputData?.email} name="customer_email" type="text" />
        <input value={campignObj?.[id]?.title} name="product" type="text" />
        <input value={inputData?.quantity} name="quantity" type="number" />
      </form>

      <form ref={ref} className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="artwork"
          value={artworkData.join("      ,      ")}
          style={{ display: "none" }}
        />
        <input
          type="text"
          name="phone_no"
          value={inputData.phone_no}
          style={{ display: "none" }}
        />
        <input
          type="text"
          name="unit"
          value={inputData.unit}
          style={{ display: "none" }}
        />
        <div className="formGroup">
          <input
            type="number"
            name="length"
            // onChange={handleChange}
            // value={inputData.length}
            placeholder="Length"
            className="input"
          // style={{ borderColor: inputError.length ? "red" : "" }}
          />
          <input
            type="number"
            name="width"
            // onChange={handleChange}
            // value={inputData.width}
            placeholder="Width"
            className="input"
          // style={{ borderColor: inputError.width ? "red" : "" }}
          />
          <input
            type="number"
            name="depth"
            // onChange={handleChange}
            // value={inputData.depth}
            placeholder="Depth"
            className="input"
          // style={{ borderColor: inputError.depth ? "red" : "" }}
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
              iconColor={"black"}
              onChange={handleChangeAttributes}
              classNamePrefix="material"
            />
          </div>
          <div className="finish_dropdown">
            <DetailSelect
              name="finishes"
              error={inputError?.finishes}
              multi={true}
              isAbbr={true}
              iconColor={"black"}
              placeholder="Finishes"
              options={{ attribute_option: finishData }}
              onChange={handleChangeAttributes}
              classNamePrefix="finish"
            />
          </div>
        </div>

        {/* QUANTITY */}
        <input
          name="quantity"
          value={inputData.quantity}
          onChange={handleChange}
          min={minQuantity}
          type="number"
          placeholder="Quantity"
          className="input"
          style={{ borderColor: inputError.quantity ? "red" : "" }}
        />

        {/* FULL NAME + COMPANY */}
        <div className="formGroup">
          <input
            name="fullname"
            value={inputData.fullname}
            onChange={handleChange}
            type="text"
            placeholder="Full name"
            className="input"
            style={{ borderColor: inputError.fullname ? "red" : "" }}
          />
          <input
            name="company"
            value={inputData.company}
            onChange={handleChange}
            type="text"
            placeholder="Company"
            className="input"
          />
        </div>

        {/* EMAIL */}
        <input
          name="email"
          style={{ borderColor: inputError.email ? "red" : "" }}
          value={inputData.email}
          id="email-input"
          onChange={handleChange}
          type="email"
          placeholder="Enter your Email"
          className="input"
        />
        <div className="formGroup">
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
        {/* {<ArtworkCom
          loader={loader}
          setLoader={setLoader}
          mainFile={mainFile}
          setMainFile={setMainFile}
        />} */}

        {isSubmitted ? (
          <button disabled type="submit" className="submitButton">
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="loading-overlay"
            >
              <Spinner tip="Uploading..." />
            </div>
          </button>
        ) : (
          <button id="quote-submit" disabled={loader} type="submit" className="submitButton">
            Get a Free Quote
          </button>
        )}
      </form>
    </div>
  );
}

export default SingleFormCom;
