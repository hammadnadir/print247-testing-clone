import { useRouter } from "next/router";
import React from "react";
import Select from "react-select";

function DetailSelect({ isAbbr = false,iconColor= "blue" ,placeholder, defaultSelected, options, multi = false, error, name, disabled = false, ...props }) {

  const router = useRouter();

  // Map options to selectOptions array
  const selectOptions = isAbbr ? 
  options?.attribute_option?.map((option, i) => {
    return {
      value: option?.slug,
      label: option?.title,
      abbr: option?.abbr,
      main: name
    };
  })
  :
  options?.attribute_option?.map((option, i) => {
    return {
      value: option?.slug,
      label: option?.title,
      main: name
    };
  });

  // Find and remove "Need Consultation" from the array
  const needConsultationOption = selectOptions?.find(option => option.label === "Need Consultation");
  const filteredOptions = selectOptions?.filter(option => option.label !== "Need Consultation");
  const filteredOptions2 = selectOptions?.filter(option => option.label !== "Need Consultation");

  // Add "Need Consultation" to the beginning of the array if it exists
  if (needConsultationOption) {
    filteredOptions.unshift(needConsultationOption);
  }

  const selected = multi ? [] : options?.attribute_option?.find((item) => item?.slug === defaultSelected);

  const multiSelected = multi
    ? typeof defaultSelected === "object"
      ? defaultSelected.map((slug) => {
          const selected = options?.attribute_option.find((material) => material.slug === slug);
          return {
            value: slug,
          
            label: selected ? selected.title : "",
            main: name,
          };
        })
      : [defaultSelected].map((slug) => {
          const selected = options?.attribute_option.find((material) => material.slug === slug);
          return {
            value: slug,
            label: selected ? selected.title : "",
            main: name,
          };
        })
    : {};

  const defaultVal = {
    value: selected?.slug,
    label: selected?.title,
    main: name
  };

  // Custom components for React Select
  const customComponents = {
    MultiValueLabel: ({ data }) => <div>{data.abbr}</div>
  }
  return (
    <div className="detail_select">
      <div className="select_main">
        {router?.pathname === "/[id]" || router?.pathname === "/product/[id]" || router?.pathname === "/boxes-campaign/[id]" || router?.pathname === "/mylar/[id]" || router?.pathname === "/stickers/[id]" ? (
          <Select
            isMulti={multi}
            isDisabled={disabled}
            name={name}
            placeholder={placeholder ? placeholder :  "Select..."}
            options={isAbbr ? filteredOptions2 : filteredOptions}
            components={isAbbr ? customComponents : null}
            {...props}
            className={`${error ? "error_border_field" : "border_field"}`}
          />
        ) : (
          <Select
            defaultValue={multi ? multiSelected : defaultVal}
            isDisabled={disabled}
            isMulti={multi}
            name={name}
            options={filteredOptions}
            {...props}
            className={`${error ? "error_border_field" : "border_field"}`}
          />
        )}
        {
          iconColor === "black" ?
          <img className="drop_img_gray" src="/icons/arrow-gray.svg" alt="dropdown icon" />
          :
          <img className="drop_img" src="/image/drop_icon.png" alt="dropdown icon" />
        }
      </div>
    </div>
  );
}

export default DetailSelect;
