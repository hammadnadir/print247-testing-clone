import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EstimatedModal from "../../common/EstimatedModal";
import Link from "next/link";
import Image from "next/image";
import ShareModal from "../../common/ShareModal";
import ReactStars from "react-rating-stars-component";
import { editCartRequest } from "@/redux/cart";
import { useRouter } from "next/router";
import RequestMessage from "@/components/common/RequestMessage";
import { toast } from "react-toastify";
import Loader from "@/components/common/loaders";
import DetailSelect from "@/components/common/detailSelect";
import { Checkbox } from "antd";
import { Tooltip } from "antd";
import { updatedPriceRequest } from "@/redux/price";
// import { useSession } from "next-auth/react";
import ProductArtwork from "@/components/common/artworkupload";
import { capitalizeAllWords } from "@/utils";
import HelpModal from "@/components/common/helpModal";

function EditProductAttributes({ loader, setLoader }) {
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
  // const [loader, setLoader] = useState(false);
  const [dimension, setDimension] = useState({});
  const [newOptions, setNewOptions] = useState({});
  const [micronData, setMicronData] = useState({});
  const [discountedPrices, setDiscountedPrices] = useState(0);
  const [apiPrice, setApiPrice] = useState({});
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [depth, setDepth] = useState(0);
  const [formulArea, setFormulArea] = useState(0);
  const [snapArea, setSnapArea] = useState(0);
  const [glueFlap, setGlueFlap] = useState(1);
  const [tuckFlap, setTuckFlap] = useState(1.2);
  const [priceChange2, setPriceChange2] = useState(0);
  const [requirements, setRequirements] = useState("");
  const [showRequirements, setShowRequirements] = useState([]);
  const [mainFile, setMainFile] = useState([]);
  const [helpModal, setIsHelpModal] = useState(false);
  const [materialDetail, setMaterialDetail] = useState([]);

  const { viewDieline } = useSelector((state) => state.cart);
  const { priceChange } = useSelector((state) => state.price);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setPriceChange2(priceChange);
  }, [priceChange]);

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

  const { detailData } = useSelector((state) => state.detail);
  const { attributes } = detailData;
  const attributesOption = viewDieline?.cart_data?.cartattributes;

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

  useEffect(() => {
    const filteredData = attributes?.filter(
      (item) => !slugToFilter?.includes(item?.slug)
    );
    setData(filteredData);
    const attributeSize = attributes?.filter((item) => item.slug === "size");
    if (attributeSize && attributeSize[0]) {
      setSize(attributeSize[0]);
    } else {
      setCustomSize(true);
    }

    const attributeCheckoxes = attributes?.filter(
      (item) => item.type === "checkbox"
    );
    if (attributeCheckoxes && attributeCheckoxes[0]) {
      setCheckboxAttributes(attributeCheckoxes);
    }
    const attributeNote = attributes?.filter((item) => item.type === "text");
    if (attributeNote && attributeNote[0]) {
      setShowRequirements(attributeNote);
    } else {
      setShowRequirements([]);
    }

    const attributeRadios = attributes?.filter((item) => item.type === "radio");
    if (attributeRadios && attributeRadios[0]) {
      setRadioAttributes(attributeRadios);
    }

    const attributeDimension = attributes?.filter(
      (item) => item.slug === "dimension"
    );
    if (attributeDimension && attributeDimension[0]) {
      setDimension(attributeDimension);
    }

    const attributemicron = attributes?.filter(
      (item) => item.slug === "thickness"
    );
    if (attributemicron && attributemicron[0]) {
      setMicronData(attributemicron[0]);
    }
  }, [attributes, router?.asPath]);

  const handleChange = (e) => {
    if (customSize) {
      setPageData({ ...pageData, [e.main]: e.value, size: "" });
    } else {
      setPageData({
        ...pageData,
        [e.main]: e.value,
      });
    }
  };

  useEffect(() => {
    const randomValue = Math.random();
    const minValue = 2.7;
    const maxValue = 3.2;
    const randomInRange = minValue + randomValue * (maxValue - minValue);

    const price =
      priceChange2?.data?.total_amount > 0
        ? priceChange2?.data?.total_amount
        : 0;
    const discountedPrices = +price + price * (randomInRange / 100);
    setDiscountedPrices(discountedPrices);
  }, [mainAttributes, pageData, priceChange2]);

  const handleChange2 = (e) => {
    if (e.target.name === "quantity") {
      const quantity = { [e.target.name]: e.target.value };
      setPageData({ ...pageData, ...quantity });
      setApiPrice({ ...apiPrice, ...quantity, area: formulArea });
      // dispatch(updatedPriceRequest({ ...apiPrice, ...quantity, area: formulArea }))
    } else {
      setPageData({ ...pageData, [e.target.name]: e.target.value });
    }
  };
  const handleRadioSubInput = (e, item, items, data) => {
    // const { slug } = data
    const { slug } = items;
    setNewOptions({
      ...newOptions,
      [slug]: e.target.value,
    });
  };
  const handleChangeAttributes = (e, slug) => {
    const value = { [e.main]: e.value };
    if (e.main === "material") {
      setMainAttributes({ ...mainAttributes, ...value });
      const pricePayload = {
        ...apiPrice,
        ...value,
        product_slug: router?.query?.id,
      };
      setApiPrice(pricePayload);
      // dispatch(updatedPriceRequest(pricePayload)).then((res) => {
      // })
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    let err = {};
    // if (!pageData?.quantity) {
    //   err.quantity = "Required";
    // }
    // if (showRequirements) {
    //   const description = showRequirements.find(
    //     (item) => item.slug === "description"
    //   );
    //   if (description) {
    //     if (!mainAttributes?.description) {
    //       err.description = "Required";
    //     }
    //   }
    // }
    // if (dimension[0]?.attribute_option && customSize) {
    //   for (let i = 0; i < dimension[0]?.attribute_option?.length; i++) {
    //     let option = dimension[0]?.attribute_option[i]?.slug;
    //     if (
    //       !pageData?.dimensions?.[option] ||
    //       pageData.dimensions[option] === ""
    //     ) {
    //       err[option] = "Required";
    //     }
    //   }
    // }
    // if (!pageData.size && !customSize) {
    //   err.size = "Required";
    // }

    // for (let i = 0; i < data.length; i++) {
    //   const slug = data[i]?.slug;
    //   if (!mainAttributes?.[slug]) {
    //     err[slug] = "Required";
    //   }
    // }

    // if (Object.keys(micronData)?.length > 0) {
    //   if (!newOptions?.[micronData?.attribute_option?.[0].slug]) {
    //     err[micronData?.attribute_option?.[0].slug] = "Required";
    //   }
    // }
    // if (materialDetail?.option_details?.length > 0) {
    //   if (!newOptions?.material) {
    //     err.material_detail = "Required";
    //   }
    // }
    // if (radioAttributes) {
    //   for (let i = 0; i < radioAttributes.length; i++) {
    //     const slug = radioAttributes?.[i]?.slug;
    //     if (!mainAttributes?.[slug]) {
    //       err[slug] = "Required";
    //     }

    //     if (mainAttributes?.[slug]) {
    //       const filtered = radioAttributes?.filter(
    //         (item) => item?.slug === slug
    //       );
    //       const filter2 = filtered?.[0]?.attribute_option?.filter(
    //         (items) => items?.slug === mainAttributes?.[slug]
    //       );
    //       if (mainAttributes?.[slug] === "hanghole_yes") {
    //         if (filter2?.[0]?.option_details?.length > 0) {
    //           if (!newOptions?.hanghole_yes ? true : false) {
    //             err.hanghole_yes = "Required";
    //           }
    //         }
    //       }

    //       if (mainAttributes?.[slug].includes("panton_colour")) {
    //         const filter3 = filtered?.[0]?.attribute_option?.filter(
    //           (items) => items?.slug === "panton_colour"
    //         );
    //         if (filter3?.[0]?.option_details?.length > 0) {
    //           if (!newOptions?.panton_colour ? true : false) {
    //             err.panton_colour = "Required";
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // if (checkboxAttributes) {
    //   for (let i = 0; i < checkboxAttributes.length; i++) {
    //     const slug = checkboxAttributes?.[i]?.slug;
    //     if (!mainAttributes?.[slug]) {
    //       err[slug] = "Required";
    //     }
    //   }
    // }

    if (Object.keys(err).length > 0) {
      setError(err);
      toast(
        <RequestMessage
          image="/icons/error.png"
          color="red"
          message="Please fill all the required fields"
        />
      );
      setLoader(false);
    } else {
      setError({});
      setLoader(false);
      const user_id = localStorage.getItem("user_id")
        ? localStorage.getItem("user_id")
        : null;
      const data = {
        product_slug: router?.query?.id,
        quantity: pageData?.quantity,
        artwork: mainFile,
        name: detailData?.page_title,
        user_id: user_id,
        code: router?.query?.code,
        attributes: {
          ...mainAttributes,
          ...(customSize
            ? { dimensions: pageData?.dimensions }
            : { size: pageData?.size }),
          options: newOptions,
        },
      };
      try {
        dispatch(editCartRequest(data)).then((res) => {
          if (res?.payload?.code) {
            setLoader(false);
            // router.push(`/artwork/${res?.payload?.code?.apicode}`);
            // if (session) {
            //     router.push("/user/cart")
            // } else {
            router.push("/shopping-cart");
            // }
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
                  message="Something went wrong"
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
            message={error}
          />
        );
      }
    }
  };

  // For Area
  useEffect(() => {
    const length2 = length * 2.54;
    const width2 = width * 2.54;
    const depth2 = depth * 2.54;
    const tuckFlapNew = tuckFlap * 10;

    const baseArea2 =
      depth2 * ((parseFloat(length2) + parseFloat(width2)) * 2) +
      depth2 * glueFlap;

    const tuckFlap2 = (
      parseFloat(length) *
      (parseFloat(width) + parseFloat(tuckFlapNew) / 25.4) *
      6.4512
    ).toFixed(2);

    const sideFlap2 = (
      ((parseFloat(tuckFlap) + parseFloat(width2)) / 2) *
      (width2 - 0.7)
    ).toFixed(2);

    const simpleArea = (
      parseFloat(baseArea2) +
      parseFloat(tuckFlap2 * 2) +
      parseFloat(sideFlap2 * 4)
    ).toFixed(2);

    setFormulArea(simpleArea);

    const snapArea2 = (
      parseFloat(baseArea2) +
      parseFloat(tuckFlap2 * 2) +
      parseFloat(sideFlap2 * 4)
    ).toFixed(2);
    setSnapArea(snapArea2);
  }, [length, width, depth]);

  function isValidJson(jsonString) {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (error) {
      return false;
    }
  }

  useEffect(() => {
    if (viewDieline && viewDieline.code) {
      const dataToFilter = ["size", "dimension"];
      const filteredData2 = attributesOption?.filter(
        (item) => !dataToFilter.includes(item?.attr_slug)
      );
      if (viewDieline.cart_data.quantity) {
        setPageData((prevData) => ({
          ...prevData,
          quantity: viewDieline.cart_data.quantity,
        }));
      }

      const attributeSize = attributesOption?.find(
        (item) => item.attr_slug === "size"
      );
      const attributeCustomSize = attributesOption?.find(
        (item) => item.attr_slug === "dimensions"
      );
      const attributeThickness = attributesOption?.find(
        (item) => item.attr_slug === "thickness"
      );
      const attributeMaterial = attributesOption?.find(
        (item) => item.attr_slug === "material"
      );
      setApiPrice((prevData) => ({
        ...prevData,
        product_slug: router?.query?.id,
        quantity: viewDieline?.cart_data?.quantity,
      }));

      if (attributeMaterial && attributeMaterial.attr_value) {
        setApiPrice((prevData) => ({
          ...prevData,
          [attributeMaterial.attr_slug]: attributeMaterial.attr_value,
        }));
      }
      if (attributeThickness && attributeThickness.attr_value) {
        setNewOptions((prevData) => ({
          ...prevData,
          [attributeThickness.attr_slug]: attributeThickness.attr_value,
        }));
      }

      if (attributeSize && attributeSize.attr_value) {
        setPageData((prevData) => ({
          ...prevData,
          size: attributeSize.attr_value,
          quantity: viewDieline.cart_data.quantity,
        }));
      }
      if (
        attributeCustomSize &&
        attributeCustomSize.attr_value &&
        dimension?.[0]?.attribute_option
      ) {
        setCustomSize(true);
        const value = JSON.parse(
          attributeCustomSize.attr_value.split("&")?.[0]
        );
        if (value?.length) {
          setLength(value?.length);
        }
        if (value?.width) {
          setWidth(value?.width);
        }
        if (value?.height) {
          setDepth(value?.height);
        }

        setPageData((prevData) => ({
          ...prevData,
          dimensions: value,
          quantity: viewDieline.cart_data.quantity,
        }));
      }

      let data = {};
      for (let i = 0; i < filteredData2?.length; i++) {
        let ItemValue = filteredData2[i]?.attr_value;

        if (isValidJson(ItemValue)) {
          ItemValue = JSON.parse(ItemValue);
        }

        if (typeof ItemValue === "string" && ItemValue.includes("&")) {
          data[filteredData2[i]?.attr_slug] = ItemValue.split("&");
        } else {
          data[filteredData2[i]?.attr_slug] = ItemValue;
        }
      }

      setMainAttributes(data);
    }

    const attributesOptionDetail = viewDieline?.cart_data?.cartattributes?.map(
      (item) => item?.cartattributesdetails
    );
    const combinedObject = attributesOptionDetail?.reduce((result, current) => {
      if (Array.isArray(current) && current.length > 0) {
        current.forEach((item) => {
          if (item.attr_slug && item.attr_value) {
            result[item.attr_slug] = item.attr_value;
          }
        });
      }
      return result;
    }, {});
    if (combinedObject) {
      setNewOptions(combinedObject);
    }
  }, [viewDieline, dimension, attributesOption, router?.asPath]);

  // useEffect(() => {
  //     if (apiPrice?.material && formulArea > 0) {
  //         dispatch(updatedPriceRequest({ ...apiPrice, area: formulArea }))
  //     }
  // }, [apiPrice, formulArea])

  const handleMultiChangeAttributes = (e, slug) => {
    const name = slug?.name;
    const standartValues = e.map((item) => item.value);
    setMainAttributes({ ...mainAttributes, [name]: standartValues });
  };

  const handleChangeCustom = (e) => {
    if (customSize) {
      const dimensionVal = {
        ...pageData?.dimensions,
        [e.target.name]: e.target.value,
      };
      setPageData({ ...pageData, dimensions: dimensionVal });
    }
  };

  // const handleRadioAttributes = (item, items) => {
  //     alert("hi")
  //     const slug = item?.slug;
  //     const slug2 = items?.slug;
  //     if (newOptions && newOptions[slug2]) {
  //       delete newOptions[slug2]
  //     }
  //     // if (newOptions && newOptions[slug]) {
  //     //     delete newOptions[slug]
  //     // }

  //     if (item?.selection_type === "single") {
  //         setMainAttributes({
  //             ...mainAttributes,
  //             [slug]: items.slug
  //         });
  //     } else {
  //         if (mainAttributes[slug] && mainAttributes[slug].includes(items.slug)) {
  //             const updatedAttributes = {
  //                 ...mainAttributes,
  //                 [slug]: mainAttributes[slug].filter(attrSlug => attrSlug !== items.slug)
  //             };
  //             setMainAttributes(updatedAttributes);
  //         } else {
  //             setMainAttributes({
  //                 ...mainAttributes,
  //                 [slug]: mainAttributes[slug] ? [...mainAttributes[slug], items.slug] : [items.slug]
  //             });
  //         }
  //     }
  // }
  const handleRadioAttributes = (item, items) => {
    const slug = item?.slug;
    const slug2 = items?.slug;
    if (newOptions && newOptions[slug2]) {
      delete newOptions[slug2];
    }
    // if (newOptions && newOptions?.panton_color) {
    //   delete newOptions?.panton_color
    // }

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

  // const handleRadioSubAttributes = (item, items, data) => {
  //     const slug = item?.slug;
  //     if (item?.selection_type === "single") {
  //         setNewOptions({
  //             ...newOptions,
  //             hanghole_detail: data.slug
  //         });
  //     } else {
  //         if (newOptions[slug] && newOptions[slug].includes(data.slug)) {
  //             const updatedAttributes = {
  //                 ...newOptions,
  //                 [slug]: newOptions[slug].filter(attrSlug => attrSlug !== data.slug)
  //             };
  //             setNewOptions(updatedAttributes);
  //         } else {
  //             setNewOptions({
  //                 ...newOptions,
  //                 [slug]: newOptions[slug] ? [...newOptions[slug], data.slug] : [data.slug]
  //             });
  //         }
  //     }
  // }

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
    // alert(slug)
    // setNewOptions({ ...newOptions, [slug]: e.value, mil: thicknessOptionData?.[e.value] })
    setNewOptions({ ...newOptions, [slug]: e.value });
    setMainAttributes({ ...mainAttributes, [slug2]: slug });
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

  return (
    <div className="all_main_attributes">
      {/* {loader && <Loader />} */}
      <form onSubmit={handleSubmit}>
        <div className="custom_products">
          <Image
            src="/image/instockk.png"
            className="stock_img"
            width={105}
            height={57}
            alt="stock image"
          />
          <h2>{detailData?.title}</h2>
          <div className="call_me_btn">
            <div
              onClick={() => setIsHelpModal(true)}
              className={`inner_btn_styles`}
            >
              Quick Support
            </div>
          </div>
          <div className="star_rating">
            <ReactStars
              number={5}
              size={28}
              activeColor="#ffd700"
              value={detailData?.rating}
              edit={false}
            />
            <div>
              <p>{detailData?.rating && (detailData?.rating).toFixed(1)} Rating</p>
            </div>
          </div>
          {/* <p
                        dangerouslySetInnerHTML={{ __html: detailData?.summary }}
                        className="summary"
                    ></p> */}
        </div>
        <div className="product_attributes">
          <div className="main_select">
            {size?.attribute_option && !dimension?.[0]?.attribute_option && (
              <div className="name_select">
                <h3>
                  Size
                  {/* <span className={`staric_sign ${error.size ? "error_color" : ""}`}>*</span> */}
                  :
                </h3>
              </div>
            )}
            {!size?.attribute_option && dimension?.[0]?.attribute_option && (
              <div className="name_select">
                <h3>
                  Dimension (inches)
                  {/* <span className={`staric_sign`}>*</span> */}:
                </h3>
              </div>
            )}

            <div style={{ width: "100%" }}>
              {!customSize && (
                <DetailSelect
                  name="size"
                  error={error.size ? true : false}
                  defaultSelected={pageData?.size}
                  options={size}
                  onChange={handleChange}
                />
              )}
              {size?.attribute_option && (
                <div
                  style={{ marginTop: "10px", cursor: "pointer" }}
                  onClick={() => setCustomSize(!customSize)}
                >
                  {dimension &&
                    Array.isArray(dimension[0]?.attribute_option) &&
                    dimension[0]?.attribute_option?.length > 0 &&
                    dimension[0]?.attribute_option?.length > 0 && (
                      <>
                        <input
                          checked={customSize}
                          style={{ marginRight: "10px" }}
                          type="checkbox"
                        />
                        <label style={{ cursor: "pointer" }}>
                          Add Custom Size
                        </label>
                      </>
                    )}
                </div>
              )}
              {customSize && (
                <div className="weight-section">
                  {Array.isArray(dimension) &&
                    dimension?.[0]?.attribute_option?.map((item, i) => {
                      name = item?.slug;
                      return (
                        <div className="inner-weight-section" key={i}>
                          <label>{item?.title}</label>
                          <br />
                          <input
                            name={name}
                            className={`${error?.[name] && "error_border"}`}
                            value={pageData?.dimensions?.[item.slug]}
                            onChange={handleChangeCustom}
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
              // .filter((item,i)=>item.slug !== "material")
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
                        multi={false}
                        options={item}
                        onChange={handleChangeAttributes}
                        defaultSelected={mainAttributes[slug]}
                      />
                    ) : (
                      <DetailSelect
                        name={slug}
                        multi={true}
                        error={error[slug] ? true : false}
                        options={item}
                        onChange={handleMultiChangeAttributes}
                        defaultSelected={mainAttributes[slug]}
                      />
                    )}
                  </div>
                );
              })}
          {/* Material Sub Options Field */}
          {/* {materialDetail && materialDetail?.option_details?.length > 0 && (
            <div className="main_select">
              <div className="name_select">
                <h3>{materialDetail?.title}:</h3>{" "}
               
              </div>
              <DetailSelect
                name="material"
                error={error?.material_detail ? true : false}
                multi={false}
                defaultSelected={newOptions?.material}
                options={{ attribute_option: materialDetail?.option_details }}
                onChange={handleMaterialSubattribute}
              />
            </div>
          )} */}

          {micronData && Object.keys(micronData)?.length > 0 && (
            <div
              className="main_select"
              style={{ marginTop: "20px", width: "100%" }}
            >
              <div className="name_select">
                <h3>
                  {capitalizeAllWords(micronData?.title)}
                  {/* <span className={`staric_sign ${error?.thickness ? "error_color" : ""}`}>*</span> */}
                  :
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
                      <div  key={i}
                        style={{ width: "100%", display: "flex", gap: "20px" }}
                      >
                        <div style={{ width: "100%", marginTop: "10px" }}>
                          <DetailSelect
                            name={items?.slug}
                            error={error?.[items?.slug] ? true : false}
                            multi={false}
                            defaultSelected={newOptions?.[items?.slug]}
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
                            name={items?.slug}
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
                            }
                            style={{
                              outline: "none",
                              background: "transparent",
                              border: "none",
                              borderBottom: "1px solid black",
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
            radioAttributes?.length > 0 &&
            radioAttributes?.map((item, i) => {
              const mainSlug = item?.slug;
              return (
                <div className="main_select"  key={i}>
                  <div className="name_select">
                    <h3>
                      {item?.title}
                      {/* <span className={`staric_sign ${error?.[mainSlug] ? "error_color" : ""}`}>*</span> */}
                      :
                    </h3>
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
                    {item?.attribute_option?.map((items, i) => {
                      const isChecked = mainAttributes[item?.slug]?.includes(
                        items?.slug
                      );
                      return (
                        <>
                          <div style={{ display: "flex", gap: "40px" }}  key={i}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                cursor: "pointer",
                              }}
                              onClick={() => handleRadioAttributes(item, items)}
                            >
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
                                <div style={{ display: "flex", gap: "40px" }}  key={i}>
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
                                          border: "none",
                                          borderRadius: "10px",
                                        }}
                                        value={newOptions?.[items?.slug]}
                                        name={items?.slug}
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
            checkboxAttributes?.length > 0 &&
            checkboxAttributes
              .filter((item, i) => item.slug !== "thickness")
              ?.map((item, i) => {
                const mainSlug = item?.slug;
                return (
                  <div className="main_select"  key={i}>
                    <div className="name_select">
                      <h3>
                        {item?.title}
                        {/* <span className={`staric_sign ${error?.[mainSlug] ? "error_color" : ""}`}>*</span> */}
                        :
                      </h3>
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
                      {item?.attribute_option?.map((items, i) => {
                        const isChecked = mainAttributes[item?.slug]?.includes(
                          items?.slug
                        );
                        return (
                          <div style={{ display: "flex", gap: "40px" }}  key={i}>
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

          <div>
            <div className="sixth-row-detail">
              <div className="sixth-detail">
                <h3>
                  Quantity
                  {/* <span className={`staric_sign ${error?.quantity ? "error_color" : ""}`}>*</span> */}
                  :
                </h3>
              </div>
              <div
                className="sixth-checkbox"
                style={{ display: "flex", alignItems: "center" }}
              >
                <input
                  type="number"
                  name="quantity"
                  placeholder="1000"
                  value={pageData.quantity}
                  className={`${error?.quantity && "error_border"}`}
                  onChange={handleChange2}
                />
                &nbsp;&nbsp;&nbsp;
                {error?.less_quantity && (
                  <pre style={{ marginBottom: "0px", color: "red" }}>
                    minimum 1000 required
                  </pre>
                )}
              </div>
            </div>
            {/* {showRequirements?.type && <div className="textarea-row-detail">
                            <div className="textarea-detail">
                                <h3>{showRequirements?.title}
                                    :</h3>
                            </div>
                            <div className="main-textarea"
                            >
                                <textarea
                                    name={showRequirements?.slug}
                                    value={mainAttributes?.[showRequirements?.slug]}
                                    onChange={(e) => setMainAttributes({ ...mainAttributes, [showRequirements?.slug]: e.target.value })}
                                />&nbsp;&nbsp;&nbsp;
                            </div>
                        </div>
                        } */}
            {/* {showRequirements.map((requirement, index) => (
                            <div className="textarea-row-detail" key={index}>
                                <div className="textarea-detail">
                                    <h3>{requirement.title}:</h3>
                                    {requirement.info ? (
                                        <Tooltip placement="top" title={requirement.info} arrow={mergedArrow}>
                                            <img src="/icons/question.png" alt="?" />
                                        </Tooltip>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="main-textarea">
                                    <textarea
                                        name={requirement.slug}
                                        value={mainAttributes?.[requirement.slug]}
                                        className={`${error?.[requirement.slug] ? "error_border" : ""}`}
                                        onChange={(e) =>
                                            setMainAttributes({
                                                ...mainAttributes,
                                                [requirement.slug]: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        ))} */}
            {Array.isArray(showRequirements) &&
              showRequirements?.map((requirement, index) => (
                <div className="textarea-row-detail" key={index}>
                  <div className="textarea-detail">
                    <h3>{requirement.title}:</h3>
                    {requirement.info ? (
                      <Tooltip
                        placement="top"
                        title={requirement.info}
                        arrow={mergedArrow}
                      >
                        <img src="/icons/question.png" alt="question mark icon" />
                      </Tooltip>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="main-textarea">
                    <textarea
                      name={requirement.slug}
                      value={mainAttributes?.[requirement.slug]}
                      className={`${
                        error?.[requirement.slug]
                          ? "error_border"
                          : "error_border222"
                      }`}
                      onChange={(e) =>
                        setMainAttributes({
                          ...mainAttributes,
                          [requirement.slug]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              ))}
            <div className="textarea-row-detail">
              <div className="textarea-detail">
                <h3>Artwork (Optional) :</h3>
              </div>
              <div className="main-textarea">
                <ProductArtwork
                  loader={loader}
                  setLoader={setLoader}
                  mainFile={mainFile}
                  setMainFile={setMainFile}
                />
              </div>
            </div>
            {/* <div className="price_per_unit">
                            <div className="seventh-detail">
                                <h3>Price per unit:</h3>
                            </div>
                            <div className="seventh-checkbox">
                                <p>${priceChange2?.data?.single_unit_amount ? priceChange2?.data?.single_unit_amount : 0.00}</p>
                            </div>
                        </div> */}
            {/* <div className="price_per_unit" style={{ marginBottom: "20px" }}>
                            <div className="seventh-detail">
                                <h3>Area:</h3>
                            </div>
                            <div className="seventh-checkbox">
                                <p>{parseFloat(formulArea) > 0 ? parseFloat(formulArea)?.toFixed(2) : 0} cm2</p>
                            </div>
                        </div> */}
          </div>
          {/* <div className="artwork-button">
                        <div className="discount-button">
                            <div className="button-upload1">
                                <button className="btn_data" type="submit" disabled={loader}>Update Cart</button>
                            </div>
                        </div>
                        <div className="share" onClick={() => setShareModal(true)}>
                            <Image src="/image/share.png" width={35} height={38} />
                        </div>
                    </div> */}
          <div className="artwork-button">
            <div className="discount-button">
              <button className="btn_data" type="submit" disabled={loader}>
                Update Cart
              </button>
              {/* <div className="help_btn" onClick={() => setIsHelpModal(true)}>
                Need Help
              </div> */}
            </div>
            <div className="share" onClick={() => setShareModal(true)}>
              <Image src="/image/share.png" width={35} height={38} alt="share icon"/>
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

          {/* <div className="Shipping-Delivery" onClick={() => setModalOpen(true)}>
                        <div>
                            <Image src="/image/car.png" width={46} height={28} />
                        </div>
                        <div>
                            <p>Estimate Shipping & Delivery</p>
                        </div>
                    </div> */}
          <div className="get_custom">
            <p>
              Can{"'"}t find what you{"'"}re looking for? Get a{" "}
              <Link href="/contact-us">
                <span style={{ color: "#00A1ED", textDecoration: "underline" }}>
                  Custom Quote
                </span>
              </Link>
            </p>
          </div>
        </div>
      </form>
      <EstimatedModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <ShareModal shareModal={shareModal} setShareModal={setShareModal} />
      <HelpModal helpModal={helpModal} setIsHelpModal={setIsHelpModal} />
    </div>
  );
}

export default EditProductAttributes;
