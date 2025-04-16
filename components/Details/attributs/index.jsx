import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EstimatedModal from "../../common/EstimatedModal";
import Link from "next/link";
import ShareModal from "../../common/ShareModal";
import ReactStars from "react-rating-stars-component";
import { addtoCartRequest } from "@/redux/cart";
import { useRouter } from "next/router";
import RequestMessage from "@/components/common/RequestMessage";
import { toast } from "react-toastify";
import DetailSelect from "@/components/common/detailSelect";
import { Checkbox } from "antd";
import { capitalizeAllWords, getUserIdFromLocalStorage } from "@/utils";
import { Tooltip } from "antd";
import CartProcessingModal from "@/components/common/cartModal";
import ProductArtwork from "@/components/common/artworkupload";
import HelpModal from "@/components/common/helpModal";
import QuoteFormSubmitModal from "@/components/common/getQuoteModal";
import { makeProductReview } from "@/utils";
import AnimatedButton from "@/components/common/animatedbtn";
import { industries } from "@/data/industries";
import TextField from "@/components/common/TextField";
import PhoneInput from "react-phone-input-2";
import emailjs from "@emailjs/browser";
import { postLeadsRequest } from "@/redux/zohoLeads";
import { checkoutDataRequest } from "@/redux/payment";

function ProductAttributes({ loader, setLoader }) {

  const [modalOpen, setModalOpen] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [data, setData] = useState({});
  const [pageData, setPageData] = useState({});
  const [mainAttributes, setMainAttributes] = useState({});
  const [customSize, setCustomSize] = useState(false);
  const [size, setSize] = useState(null);
  const [checkboxAttributes, setCheckboxAttributes] = useState([]);
  const [radioAttributes, setRadioAttributes] = useState([]);
  const [error, setError] = useState({});
  const [dimension, setDimension] = useState({});
  const [micronData, setMicronData] = useState({});
  const [newOptions, setNewOptions] = useState({});
  const [discountedPrices, setDiscountedPrices] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [depth, setDepth] = useState(0);
  const [formulArea, setFormulArea] = useState(0);
  const [snapArea, setSnapArea] = useState(0);
  const [glueFlap, setGlueFlap] = useState(1);
  const [tuckFlap, setTuckFlap] = useState(1.2);
  const [isMoveCart, setIsMoveCart] = useState(false);
  const [requirements, setRequirements] = useState("");
  const [showRequirements, setShowRequirements] = useState([]);
  const [mainFile, setMainFile] = useState([]);
  const [helpModal, setIsHelpModal] = useState(false);
  const [materialDetail, setMaterialDetail] = useState([]);
  const [formSubmitModal, setFormSubmitModal] = useState(false);
  const [productCartId, setProductCartId] = useState("");
  const [apiPrice, setApiPrice] = useState({});
  const { priceChange } = useSelector((state) => state.price);
  const { detailData } = useSelector((state) => state.detail);
  const [contactError, setContactError] = useState({});
  const { ip } = useSelector((state) => state.getCountry);

  const quoteLocalData =
    localStorage !== undefined && localStorage.getItem("quoteDetail")
      ? JSON.parse(localStorage.getItem("quoteDetail"))
      : {};
  const [contactData, setContactData] = useState(quoteLocalData);

  const router = useRouter();
  const dispatch = useDispatch();
  const formRef = useRef();
  const ref = useRef(null);

  const totalPrice = priceChange?.data?.total_amount
    ? (priceChange?.data?.total_amount).toFixed(2)
    : 0;

  const user_id = getUserIdFromLocalStorage();


  const values = Object.values(industries).map(value => value?.title?.toLowerCase());

  /// Tooltip
  const [arrow, setArrow] = useState("Show");
  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }
    if (arrow === "Show") {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  const { attributes } = detailData;
  useEffect(() => {
    const buisnessCards = detailData?.page_slug === "business-cards";
    if (buisnessCards) {
      setPageData({
        ...pageData,
        dimensions: { height: 2, length: 3.5 },
        quantity: "",
      });
      // alert("hi")
    } else {
      setPageData({ ...pageData, quantity: "" });
    }
  }, [detailData]);

  useEffect(() => {
    setApiPrice({ quantity: "" });
    const slugToFilter = ["size", "dimension", "thickness", "note"];

    attributes?.forEach((attribute) => {
      if (
        attribute.type === "checkbox" ||
        attribute.type === "radio" ||
        attribute.type === "text"
      ) {
        slugToFilter.push(attribute.slug);
      }
    });
    const filteredData = attributes?.filter(
      (item) => !slugToFilter?.includes(item?.slug)
    );
    setData(filteredData);
    const attributeSize = attributes?.filter((item) => item.slug === "size");
    if (attributeSize && attributeSize[0]) {
      setCustomSize(false);
      setSize(attributeSize[0]);
    } else {
      setCustomSize(true);
      setSize(null);
    }

    const attributeCheckoxes = attributes?.filter(
      (item) => item.type === "checkbox"
    );
    if (attributeCheckoxes && attributeCheckoxes[0]) {
      setCheckboxAttributes(attributeCheckoxes);
    } else {
      setCheckboxAttributes([]);
    }

    const attributeRadios = attributes?.filter((item) => item.type === "radio");
    if (attributeRadios && attributeRadios[0]) {
      setRadioAttributes(attributeRadios);
    } else {
      setRadioAttributes([]);
    }

    const attributeDimension = attributes?.filter(
      (item) => item.slug === "dimension"
    );
    if (attributeDimension && attributeDimension[0]) {
      setDimension(attributeDimension);
    } else {
      setDimension({});
    }
    const attributeNote = attributes?.filter((item) => item.type === "text");
    if (attributeNote && attributeNote[0]) {
      setShowRequirements(attributeNote);
    } else {
      setShowRequirements([]);
    }
    const attributemicron = attributes?.filter(
      (item) => item.slug === "thickness"
    );
    if (attributemicron && attributemicron[0]) {
      setMicronData(attributemicron[0]);
    } else {
      setMicronData({});
    }
  }, [detailData]);

  const handleChange = (e) => {
    if (customSize) {
      setPageData({ ...pageData, [e.main]: e.value });
    } else {
      setPageData({
        ...pageData,
        [e.main]: e.value,
      });
    }
  };

  const handleChangeCustom = (e) => {
    if (customSize) {
      const name = e.target.name;
      const dimensionVal = { ...pageData?.dimensions, [name]: e.target.value };
      setPageData({ ...pageData, dimensions: dimensionVal });
      if (name === "length") {
        setLength(e.target.value);
      }
      if (name === "width") {
        setWidth(e.target.value);
      }
      if (name === "height") {
        setDepth(e.target.value);
      }
    }
  };

  const handlePhoneChange = async (phone) => {
    const newContactData = { ...contactData, phone_no: phone };
    setContactData(newContactData);
    localStorage.setItem("quoteDetail", JSON.stringify(newContactData));
  };


  useEffect(() => {
    const length2 = length * 2.54;
    const width2 = width * 2.54;
    const depth2 = depth * 2.54;
    const tuckFlapNew = tuckFlap * 10;

    const baseArea2 =
      depth2 * ((parseFloat(length2) + parseFloat(width2)) * 2) +
      depth2 * glueFlap;
    // Calculate the tuck flap area
    const tuckFlap2 = (
      parseFloat(length) *
      (parseFloat(width) + parseFloat(tuckFlapNew) / 25.4) *
      6.4512
    ).toFixed(2);

    // Calculate the side flap area
    const sideFlap2 = (
      ((parseFloat(tuckFlap) + parseFloat(width2)) / 2) *
      (width2 - 0.7)
    ).toFixed(2);

    // Calculate the total area
    const simpleArea = (
      parseFloat(baseArea2) +
      parseFloat(tuckFlap2 * 2) +
      parseFloat(sideFlap2 * 4)
    ).toFixed(2);

    // Set the formula area state
    setFormulArea(simpleArea);

    // Calculate and set the snap area
    const snapArea2 = (
      parseFloat(baseArea2) +
      parseFloat(tuckFlap2 * 2) +
      parseFloat(sideFlap2 * 4)
    ).toFixed(2);
    setSnapArea(snapArea2);
  }, [length, width, depth]);

  const handleChange2 = (e) => {
    if (e.target.name === "quantity") {
      const quantity = { [e.target.name]: e.target.value };
      setPageData({ ...pageData, ...quantity });
      setApiPrice({ ...apiPrice, ...quantity });
      // dispatch(updatedPriceRequest({ ...apiPrice, ...quantity, area: formulArea }))
    } else {
      setPageData({ ...pageData, [e.target.name]: e.target.value });
    }
  };

  const handleChangeAttributes = (e, slug) => {
    const value = { [e.main]: e.value };

    if (e.main === "material") {
      setMainAttributes({ ...mainAttributes, ...value });
      const pricePayload = {
        ...apiPrice,
        ...value,
        product_slug: router?.query?.id,
        area: formulArea,
      };
      setApiPrice(pricePayload);
      if (newOptions && newOptions?.material) {
        const filteredMaterialObject = Object.keys(newOptions)
          .filter((key) => key !== "material")
          .reduce((obj, key) => {
            obj[key] = newOptions[key];
            return obj;
          }, {});
        setNewOptions(filteredMaterialObject);
      }
    } else {
      setMainAttributes({ ...mainAttributes, ...value });
    }
  };
  const thicknessOptionData = micronData?.attribute_option?.[0]?.data
    ? JSON.parse(micronData?.attribute_option?.[0]?.data)
    : "";
  const thicknessOptions = {
    attribute_option: Object.keys(thicknessOptionData).map((key) => ({
      title: key + " " + "Micron",
      slug: key,
    })),
  };

  const handleThicknessChange = (e, items) => {
    const slug = items?.slug;
    const slug2 = micronData?.slug;
    setNewOptions({ ...newOptions, [slug]: e.value });
    setMainAttributes({ ...mainAttributes, [slug2]: slug });
  };

  const handleMultiChangeAttributes = (e, slug) => {
    const name = slug?.name;
    if (e && Array.isArray(e)) {
      const standartValues = e.map((item) => item.value);
      setMainAttributes({ ...mainAttributes, [name]: standartValues });
    }
  };


  const categoryMinQuantities = {
    "cosmetic-boxes": 500,
    "cbd-packaging": 500,
    "custom-boxes": 250,
    "display-boxes": 250,
    shapes: 1000,
    "digital-card": 1000,
    "premium-business-cards": 1000,
    "special-cards": 1000,
    "special-stickers": 500,
    "bussiness-labels": 500,
    "product-labels": 500,
    "Specialty Labels": 500,
    "mylar-pouch": 1000,
    "custom-sticker": 1000,
    "print-products": 1000,
    "food-beverage-boxes": 500,
    "metal-boxes": 500,
    "rigid-boxes": 500,
  };

  const minQuantity = categoryMinQuantities[detailData?.cat_slug]
    ? categoryMinQuantities[detailData?.cat_slug]
    : 1000;

  const validate = ({ data, cart_id }) => {
    // let err = {};

    // if (Object.keys(err).length > 0) {
    //   setContactError(err);
    //   setLoader(false);
    // } else {
    // }

    try {
      const email = contactData?.email;
      const phone_no = contactData?.phone_no;
      const userId = getUserIdFromLocalStorage();
      const payload = {
        customer_id: userId,
        cartid: [cart_id],
        email: email,
        phone: phone_no,
        whatsapp_no: null,
        ip: ip
      };
      // setContactError({
      //   email: "",
      //   phone_no: "",
      // });
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
            Description: JSON.stringify({ ...pageData, ...mainAttributes, artwork: mainFile })

          }))
        dispatch(checkoutDataRequest(payload)).then((res) => {
          // setQueryLink(res?.payload?.id);
          const formData = formRef.current
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
                      // setFormSubmitModal(false);
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
                  // setFormSubmitModal(false);
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
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    toast.dismiss();
    setLoader(true);
    let err = {};
    if (!pageData?.quantity) {
      err.quantity = "Quantity Required";
    }
    const quantity = parseInt(pageData?.quantity);
    if (quantity < 500) {
      if (minQuantity !== undefined) {
        if (quantity < minQuantity) {
          err.quantity = "Quantity Required";
          toast(
            <RequestMessage
              image="/icons/error.png"
              color="red"
              message={`Minimum ${minQuantity} Quantity Required`}
            />
          );
          setLoader(false);
          return;
        }
      }
    }
    const NumberRegex = /^\+?[1-9][0-9]{7,14}$/;

    if (contactData.phone_no && !NumberRegex.test(contactData.phone_no)) {
      err.phone_no = "Invalid Phone No.";
    }
    if (!contactData.email) {
      err.email = "Email Required";
    }
    if (!contactData.phone_no) {
      err.phone_no = "Phone no. Required";
    }

    if (Object.keys(err).length > 0) {
      setError(err);
      toast(
        <RequestMessage
          image="/icons/error.png"
          color="red"
          message={err?.email || err?.phone_no || err?.quantity}
        />
      );
      setLoader(false);
    } else {
      setError({});
      // setLoader(false);
      const payloadData = {
        product_slug: router?.query?.id,
        quantity: pageData?.quantity,
        name: detailData?.page_title,
        user_id: user_id,
        product_amount: totalPrice,
        artwork: mainFile,
        attributes: {
          ...mainAttributes,
          ...(customSize
            ? { dimensions: pageData?.dimensions }
            : { size: pageData?.size }),
          options: newOptions,
        },
      };
      try {
        dispatch(addtoCartRequest(payloadData)).then((res) => {
          if (res?.payload?.code) {
            // setLoader(false);
            validate({ data: contactData, cart_id: res?.payload?.cart_id })
            // setProductCartId(res?.payload?.cart_id);
            // setFormSubmitModal(true);
          } else {
            if (res?.payload?.message) {
              toast(
                <RequestMessage
                  image="/icons/error.png"
                  color="red"
                  message={res?.payload?.message}
                />
              );
            } else {
              toast(
                <RequestMessage
                  image="/icons/error.png"
                  color="red"
                  message={`Something went wrong`}
                />
              );
            }
          }
        });
      } catch (error) {
        toast(
          <RequestMessage
            image="/icons/error.png"
            color="red"
            message={`"error_message",${error}`}
          />
        );
      }
    }
  };
  useEffect(() => {
    const randomValue = Math.random();

    const minValue = 2.7;
    const maxValue = 3.2;
    const randomInRange = minValue + randomValue * (maxValue - minValue);

    const price =
      priceChange?.data?.total_amount > 0 ? priceChange?.data?.total_amount : 0;
    const discountedPrices = +price + price * (randomInRange / 100);
    setDiscountedPrices(discountedPrices);
  }, [mainAttributes, pageData, priceChange]);

  const handleModalOpen = () => {
    let err = {};
    if (!mainAttributes?.material) {
      err.material = "Required";
    }
    if (!pageData?.quantity) {
      err.quantity = "Required";
    }
    if (Object.keys(err).length > 0) {
      setError(err);
      toast(
        <RequestMessage
          image="/icons/error.png"
          color="red"
          message="Please fill all the required fields"
        />
      );
    } else {
      setModalOpen(true);
    }
  };

  const handleRadioAttributes = (item, items) => {
    const slug = item?.slug;
    const slug2 = items?.slug;
    if (newOptions && newOptions[slug2]) {
      delete newOptions[slug2];
    }

    if (item?.selection_type === "single") {
      setMainAttributes({
        ...mainAttributes,
        [slug]: items.slug,
      });
    } else {
      if (mainAttributes[slug] && mainAttributes[slug].includes(items.slug)) {
        const updatedAttributes = {
          ...mainAttributes,
          [slug]: mainAttributes[slug].filter(
            (attrSlug) => attrSlug !== items.slug
          ),
        };
        setMainAttributes(updatedAttributes);
      } else {
        setMainAttributes({
          ...mainAttributes,
          [slug]: mainAttributes[slug]
            ? [...mainAttributes[slug], items.slug]
            : [items.slug],
        });
      }
    }
  };

  const handleRadioSubAttributes = (item, items, data) => {
    const slug = items?.slug;

    if (item?.selection_type === "single") {
      setNewOptions({
        ...newOptions,
        [slug]: data.slug,
      });
    } else {
      if (newOptions[slug] && newOptions[slug].includes(data.slug)) {
        const updatedAttributes = {
          ...newOptions,
          [slug]: newOptions[slug].filter((attrSlug) => attrSlug !== data.slug),
        };
        setNewOptions(updatedAttributes);
      } else {
        setNewOptions({
          ...newOptions,
          [slug]: newOptions[slug]
            ? [...newOptions[slug], data.slug]
            : [data.slug],
        });
      }
    }
  };

  const handleRadioSubInput = (e, item, items, data) => {
    const { slug } = items;
    setNewOptions({
      ...newOptions,
      [slug]: e.target.value,
    });
  };

  const handleCheckboxesChange = (item, items) => {
    const slug = item?.slug;

    if (item?.selection_type === "single") {
      setMainAttributes({
        ...mainAttributes,
        [slug]: items.slug,
      });
    } else {
      const slugRelationships = {
        embossing: "deepembossing",
        deepembossing: "embossing",
        die_cutting: "gallutation",
        gallutation: "die_cutting",
      };

      if (mainAttributes[slug]) {
        let updatedSlugArray = [...mainAttributes[slug]]; // Create a copy of the existing array

        if (
          slugRelationships[items.slug] &&
          updatedSlugArray.includes(slugRelationships[items.slug])
        ) {
          updatedSlugArray = updatedSlugArray.filter(
            (attrSlug) => attrSlug !== slugRelationships[items.slug]
          );
        }

        if (updatedSlugArray?.includes(items.slug)) {
          updatedSlugArray = updatedSlugArray.filter(
            (attrSlug) => attrSlug !== items?.slug
          );
        } else {
          updatedSlugArray.push(items.slug);
        }

        const updatedAttributes = {
          ...mainAttributes,
          [slug]: updatedSlugArray,
        };

        setMainAttributes(updatedAttributes);
      } else {
        setMainAttributes({
          ...mainAttributes,
          [slug]: [items.slug],
        });
      }
    }
  };

  useEffect(() => {
    // Filter the data when the component mounts
    if (Array.isArray(data)) {
      const filteredData = data?.filter((item) => item.slug === "material");
      const filteredSubData = filteredData?.[0]?.attribute_option?.filter(
        (item) => item.slug === mainAttributes?.material
      );
      setMaterialDetail(filteredSubData?.[0]);
    }
  }, [data, mainAttributes?.material]);

  const handleMaterialSubattribute = (e, slug) => {
    const value = { [e.main]: e.value };
    setNewOptions({
      ...newOptions,
      ...value,
    });
  };

  const userFormData =
    localStorage !== undefined && localStorage.getItem("quoteDetail")
      ? JSON.parse(localStorage.getItem("quoteDetail"))
      : {};

  // BASED REVIEW START
  const { id: slug } = router.query;

  if (!slug) {
    return;
  }

  const reviewNumber = makeProductReview(slug);
  // BASED REVIEW END

  const industryProduct = [
    "food-packaging",
    "pharmaceutical-packaging",
    "vape-and-gummy-packaging",
    "apparel-and-fashion-packaging",
    "coffee-and-tea-packaging",
  ];

  const handleChangeEmail = (e) => {
    const data = { ...contactData, [e.target.name]: e.target.value };
    setContactData(data);
    localStorage.setItem("quoteDetail", JSON.stringify(data));
  };

  return (
    <div className="main_all_attributes">
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="custom_products">
          <div className="main_title_attribute">
            <h1>{capitalizeAllWords(detailData?.title)}</h1>
          </div>
          <div className="star_rating">
            <div className="inner_star1">
              <ReactStars number={5} size={24} activeColor="#ffd700" value={detailData?.rating} edit={false} />
              <div>
                <p> {detailData?.rating && (detailData?.rating).toFixed(1)} Rating</p>
              </div>
              <div className="pole">|</div>
              <div className="star_reviews">
                <p>Based on {reviewNumber} reviews</p>
              </div>
            </div>
            <div className="inner_star2">
              <div className="main_stock">
                {values.includes(detailData?.cat_title?.toLowerCase()) && (
                  <div className="new_stock">
                    <p>New</p>
                  </div>
                )}
                <div className="in_stock">
                  <p>
                    <img src="/image/greendot.png" alt="In Stock" /> In Stock
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p dangerouslySetInnerHTML={{ __html: detailData?.summary }} className="summary"></p>
        </div>
        <div className="product_attributes">
          <div className="main_select">
            {size?.attribute_option && !dimension?.[0]?.attribute_option && (
              <div className="name_select">
                <h3>
                  Size
                  :
                </h3>
              </div>
            )}

            {!size?.attribute_option && dimension?.[0]?.attribute_option ? (
              <div className="name_select">
                <h3>Dimension (inches):</h3>
              </div>
            ) : (
              ""
            )}
            {size?.attribute_option && dimension?.[0]?.attribute_option ? (
              <div className="name_select">
                <h3>Dimension (inches):</h3>
              </div>
            ) : (
              ""
            )}

            {/* DIMENSION OF LENGTH WIDTH HEIGHT */}
            <div className="len_width_height">
              {!customSize && (
                <DetailSelect
                  name="size"
                  error={error.size ? true : false}
                  options={size}
                  onChange={handleChange}
                />
              )}
              {size?.attribute_option && (
                <div
                  style={{ marginTop: "10px", cursor: "pointer" }}
                  onClick={() => setCustomSize(!customSize)}
                >
                  {dimension && dimension[0]?.attribute_option?.length > 0 ? (
                    <div className="" style={{ marginBottom: "15px" }}>
                      <input
                        checked={customSize}
                        style={{ marginRight: "10px" }}
                        type="checkbox"
                      />
                      <label style={{ cursor: "pointer" }}>
                        Add Custom Size
                      </label>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              )}
              {customSize && (
                <div className="weight-section">
                  {Array.isArray(dimension) &&
                    dimension?.[0]?.attribute_option?.map((item, i) => {
                      const name = item.slug;

                      return (
                        <div className="inner-weight-section" key={i}>
                          <label>{item?.title}:</label>
                          <br />
                          <input
                            onWheel={(e) => e.target.blur()}
                            name={name}
                            className={`${error?.[name] ? "error_border" : ""}`}
                            value={pageData?.dimensions?.[name] || ""}
                            onChange={handleChangeCustom}
                            type="number"
                            step="any"
                          />
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>

          {/* Select and multiselect fields */}
          {data &&
            Array.isArray(data) &&
            data
              // .filter((item, i) => item.slug !== "material")
              .map((item, i) => {
                const { slug } = item;

                return (
                  <div key={i} className="main_select">
                    <div className="name_select">
                      <h3>{item?.title}:</h3>{" "}
                      {item?.info ? (
                        <Tooltip
                          placement="top"
                          title={item?.info}
                          arrow={mergedArrow}
                        >
                          <img src="/icons/question.png" alt="question mark icon" />
                        </Tooltip>
                      ) : (
                        ""
                      )}
                    </div>
                    {item?.selection_type === "single" ? (
                      <DetailSelect
                        name={slug}
                        error={error[slug] ? true : false}
                        value={mainAttributes?.slug}
                        multi={false}
                        options={item}
                        onChange={handleChangeAttributes}
                      />
                    ) : (
                      <DetailSelect
                        name={slug}
                        error={error[slug] ? true : false}
                        isMulti={true}
                        value={mainAttributes?.slug}
                        options={item}
                        onChange={handleMultiChangeAttributes}
                      />
                    )}
                  </div>
                );
              })}

          {micronData && Object.keys(micronData)?.length > 0 && (
            <div
              className="main_select"
              style={{ marginTop: "20px", width: "100%" }}
            >
              <div className="name_select">
                <h3>
                  {capitalizeAllWords(micronData?.title)}
                  {/* <span className={`staric_sign`}>*</span> */}:
                </h3>
                {micronData?.info ? (
                  <Tooltip
                    placement="top"
                    title={micronData?.info}
                    arrow={mergedArrow}
                  >
                    <img src="/icons/question.png" alt="question mark icon" />
                  </Tooltip>
                ) : (
                  ""
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "40px",
                  rowGap: "10px",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                {Array.isArray(micronData?.attribute_option) &&
                  micronData?.attribute_option?.map((items, i) => {
                    return (
                      <div
                        key={i}
                        style={{ width: "100%", display: "flex", gap: "20px" }}
                      >
                        <div style={{ width: "100%", marginTop: "10px" }}>
                          <DetailSelect
                            error={error?.[items?.slug] ? true : false}
                            multi={false}
                            options={thicknessOptions}
                            onChange={(e) => handleThicknessChange(e, items)}
                          />
                        </div>
                        <div
                          style={{
                            width: "100%",
                            marginTop: "10px",
                            alignItems: "end",
                            display: "flex",
                          }}
                        >
                          <input
                            onChange={(e) => handleThicknessChange(e, items)}
                            disabled
                            placeholder="Select..."
                            value={
                              newOptions?.[items?.slug]
                                ? thicknessOptionData?.[
                                newOptions?.[items?.slug]
                                ] +
                                " " +
                                "Mil"
                                : ""
                                || ""
                            }
                            style={{
                              outline: "none",
                              background: "transparent",
                              border: "none",
                              borderBottom: error?.[items?.slug]
                                ? "1px solid red"
                                : "1px solid black",
                              marginTop: "10px",
                              lineHeight: "1.5",
                              padding: "0px 5px 5px",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
          {radioAttributes &&
            Array.isArray(radioAttributes) &&
            radioAttributes?.map((item, i) => {
              const mainSlug = item?.slug;

              const needConsultationOption = item?.attribute_option?.filter(
                (option) => option.title === "Need Consultation"
              );

              // Get the rest of the options excluding "Need Consultation"
              const otherOptions = item?.attribute_option?.filter(
                (option) => option.title !== "Need Consultation"
              );

              // Combine the options, placing "Need Consultation" first
              const sortedOptions = needConsultationOption.concat(otherOptions);
              return (
                <div className="main_select2" key={i}>
                  <div className="name_select">
                    <h3>{item?.title}:</h3>
                    {item?.info ? (
                      <Tooltip
                        placement="top"
                        title={item?.info}
                        arrow={mergedArrow}
                      >
                        <img src="/icons/question.png" alt="question mark icon" />
                      </Tooltip>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "40px",
                      rowGap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    {sortedOptions.map((items, i) => {
                      const isChecked = mainAttributes[item?.slug]?.includes(
                        items?.slug
                      );
                      return (
                        <>
                          <div style={{ display: "flex", gap: "40px" }} key={i}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
                              onClick={() => handleRadioAttributes(item, items)}>
                              <Checkbox checked={isChecked} />
                              <span>{items?.title}</span>
                            </div>
                          </div>
                          {isChecked &&
                            Array.isArray(items?.option_details) &&
                            items?.option_details?.map((data, i) => {
                              const isChecked2 = newOptions?.[
                                items?.slug
                              ]?.includes(data?.slug);
                              return (
                                <div style={{ display: "flex", gap: "40px" }} key={i}>
                                  {data?.type === "checkbox" ? (
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        cursor: "pointer",
                                      }}
                                      onClick={() =>
                                        handleRadioSubAttributes(
                                          item,
                                          items,
                                          data
                                        )
                                      }
                                    >
                                      <Checkbox checked={isChecked2} />
                                      <span>
                                        {capitalizeAllWords(data?.title)}
                                      </span>
                                    </div>
                                  ) : data?.type === "input" ? (
                                    <div>
                                      <input
                                        style={{
                                          padding: "7px 8px",
                                          outline: "none",
                                          border: error?.[data?.slug]
                                            ? "1px solid red"
                                            : "none",
                                          borderRadius: "10px",
                                        }}
                                        value={newOptions?.[items?.slug] || ""}
                                        onChange={(e) =>
                                          handleRadioSubInput(
                                            e,
                                            item,
                                            items,
                                            data
                                          )
                                        }
                                        placeholder={capitalizeAllWords(
                                          data?.title
                                        )}
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              );
                            })}
                        </>
                      );
                    })}
                  </div>
                </div>
              );
            })}

          {checkboxAttributes &&
            Array.isArray(checkboxAttributes) &&
            checkboxAttributes?.map((item, i) => {
              const mainSlug = item?.slug;
              const needConsultationOption = item?.attribute_option?.filter(
                (option) => option.title === "Need Consultation"
              );
              const otherOptions = item?.attribute_option?.filter(
                (option) => option.title !== "Need Consultation"
              );
              const sortedOption = needConsultationOption.concat(otherOptions);

              return (
                <div className="main_select2" key={i}>
                  <div className="name_select">
                    <h3>{item?.title}:</h3>
                    {item?.info ? (
                      <Tooltip
                        placement="top"
                        title={item?.info}
                        arrow={mergedArrow}
                      >
                        <img src="/icons/question.png" alt="question mark icon" />
                      </Tooltip>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="upper_extra_finishes">
                    {Array.isArray(item?.attribute_option) &&
                      sortedOption.map((items, i) => {
                        const isChecked = mainAttributes[item?.slug]?.includes(
                          items?.slug
                        );
                        return (
                          <div className="extra_finishes" key={i}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                handleCheckboxesChange(item, items)
                              }
                            >
                              <Checkbox checked={isChecked} />
                              <span>{items?.title}</span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}

          {/* QUANTITY + NOTE + ARTWORK */}
          <div>
            <div className="sixth-row-detail">
              <div className="sixth-detail">
                <h3>Quantity:</h3>
              </div>
              <div className="sixth-checkbox" style={{ display: "flex", alignItems: "center" }}>
                <input type="number" name="quantity" min={minQuantity ? minQuantity : 1} onWheel={(e) => e.target.blur()}
                  placeholder={`Minimum order quantity ${minQuantity ? minQuantity : 1000}`}
                  value={pageData.quantity || ""} className={`${error?.quantity && "error_border"}`} onChange={handleChange2} />
                {error?.less_quantity && (
                  <pre style={{ marginBottom: "0px", color: "red" }}>
                    minimum 1000 required
                  </pre>
                )}
              </div>
            </div>
            {Array.isArray(showRequirements) &&
              showRequirements?.map((requirement, index) => (
                <div className="textarea-row-detail" key={index}>
                  <div className="textarea-detail">
                    <h3>{requirement.title}:</h3>
                    {requirement.info ? (
                      <Tooltip placement="top" title={requirement.info} arrow={mergedArrow}>
                        <img src="/icons/question.png" alt="question mark icon" />
                      </Tooltip>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="main-textarea">
                    <textarea name={requirement.slug} value={mainAttributes?.[requirement.slug]}
                      className={`${error?.[requirement.slug] ? "error_border" : "error_border222"}`}
                      onChange={(e) =>
                        setMainAttributes({
                          ...mainAttributes,
                          [requirement.slug]: e.target.value,
                        })
                      }
                      placeholder="Please add your note here"
                    />
                  </div>
                </div>
              ))}
            <div className="textarea-row-detail">
              <div className="textarea-detail">
                <h3>Artwork (Optional) :</h3>
              </div>
              <div className="main-textarea uploader_fields">
                <ProductArtwork
                  loader={loader}
                  setLoader={setLoader}
                  mainFile={mainFile}
                  setMainFile={setMainFile}
                />
              </div>
            </div>
          </div>

          <div className="new_bg_linear_email">
            {/* EMAIL */}
            <div className="main_email_field">
              <div className="data_email_field">
                <h3>Email: </h3>
              </div>
              <div className={`email_text_field ${error?.email ? 'error_border_new' : ''}`}>
                <TextField
                  name="email"
                  onChange={handleChangeEmail}
                  value={contactData.email}
                  placeholder="Example@gmail.com"
                  type="email"
                  error={error?.email}
                />
              </div>
            </div>

            {/* PHONE */}
            <input type="text" name="phone_no" value={contactData?.phone_no} style={{ display: "none" }} />
            <div className="main_phone_field">
              <div className="data_phone_field">
                <h3>Phone No: </h3>
              </div>
              <div className="phone_text_field">
                <PhoneInput className={`${error.phone_no ? "error_border_new" : ""}`} country={"us"} name="phone_no" value={contactData.phone_no} onChange={(phone) => handlePhoneChange(phone)} />
              </div>
            </div>

            <div className={` ${detailData?.slug === "custom-mylar-bags" || detailData?.slug === "coffee-bags" || detailData?.slug === "stand-up-pouch" ? "" : "artwork-button"}`}>
              <div className="discount-button">
                <button id="formsubmit-btn" className="btn_data" type="submit" disabled={loader}>{loader ? "Submitting..." : "Get a Quote"}</button>
              </div>
              {detailData?.slug === "custom-mylar-bags" || detailData?.slug === "coffee-bags" || detailData?.slug === "stand-up-pouch" ? "" : <AnimatedButton openModal={() => setIsHelpModal(true)} />}
              {detailData?.slug === "custom-mylar-bags" || detailData?.slug === "coffee-bags" || detailData?.slug === "stand-up-pouch" ? "" : <div className="share" onClick={() => setShareModal(true)}>
                <img src="/image/share.png" width={35} height={38} alt="share icon" />
              </div>}
            </div>
          </div>

          {detailData?.page_slug === "boxes_packaging" && (
            <div className="dieline-template">
              <p>
                Need a custom{" "}
                <Link href={`/dieline/${router?.query?.id}`}>
                  <span
                    style={{ color: "#00A1ED", textDecoration: "underline" }}
                  >
                    dieline template?
                  </span>
                </Link>
              </p>
            </div>
          )}

          {detailData?.slug === "custom-mylar-bags" || detailData?.slug === "coffee-bags" || detailData?.slug === "stand-up-pouch" ? "" : <div className="get_custom">
            <p>
              Can{"'"}t find what you{"'"}re looking for? Get a{" "}

              <Link href="/contact-us">
                <span style={{ color: "#00A1ED", textDecoration: "underline" }}>
                  Custom Quote
                </span>
              </Link>

            </p>
          </div>}
          <ShareModal shareModal={shareModal} setShareModal={setShareModal} />
          <EstimatedModal
            area={
              parseFloat(formulArea) > 0
                ? parseFloat(formulArea)?.toFixed(2)
                : 0
            }
            material={mainAttributes?.material}
            quantity={pageData?.quantity}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        </div>
      </form>

      <HelpModal helpModal={helpModal} setIsHelpModal={setIsHelpModal} />
      <CartProcessingModal
        isMoveCart={isMoveCart}
        setIsMoveCart={setIsMoveCart}
      />
      <QuoteFormSubmitModal
        formSubmitModal={formSubmitModal}
        setFormSubmitModal={setFormSubmitModal}
        productCartId={productCartId}
        pageData={pageData}
        mainAttributes={mainAttributes}
        artwork={mainFile}
      />
    </div>
  );
}

export default ProductAttributes;
