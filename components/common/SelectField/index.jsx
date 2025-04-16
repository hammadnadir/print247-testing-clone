import React from "react";

function SelectField({ options,defauleSelected, customSelected, error, ...props }) {
  
  return (
    <div className="main_select">
      <select defauleSelected={defauleSelected} {...props} className= {`${error?.length > 0 ? "errors" : "" }`} >
        <option hidden>{customSelected}</option>
        {options?.map((option) => (
          <option selected={defauleSelected === option.name} key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
     
    </div>
  );
}

export default SelectField;
