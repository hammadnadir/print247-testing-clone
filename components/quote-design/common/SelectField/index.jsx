import React, { useState } from 'react';
import Select from "react-select";

function SelectField({ error, placeholder = "Select an option", height, options, type, width, ...props }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsOpen(true);
    };

    const handleMenuClose = () => {
        setIsOpen(false);
    };

    // Custom styles object for react-select
    const customStyles = {
        placeholder: (provided) => ({
            ...provided,
            paddingLeft: '30px',
        }),
        input: (provided) => ({
            ...provided,
            paddingLeft: '0px',
            margin: '0px',
            width: '100%',
            cursor: "pointer",
        }),
        control: (provided) => ({
            ...provided,
            paddingLeft: '0px',
            width: "100%",
            backgroundColor: "transparent",
            outline: "none",
            border: "none",
            boxShadow: 'none',
        }),
        singleValue: (provided) => ({
            ...provided,
            // paddingLeft: '30px',
        }),
    };

    return (
        <div className="detail_select">
            <div className={`select_main cursor-pointer type_${type}`} style={{width: width}}>
                <Select
                    isMulti={false}
                    isDisabled={false}
                    // name="staticSelect"
                    {...props}
                    placeholder={placeholder}
                    options={options}
                    className={`border_field2 ${error ? "border_field_red" : "" } ${height}`}
                    onMenuOpen={handleMenuOpen}
                    onMenuClose={handleMenuClose}
                    styles={customStyles}
                />

                {parseInt(type) === 1 ? 
                <img
                    className="drop_img2"
                    style={{
                        transform: `rotate(${isOpen ? 90 : 0}deg)`,
                        transition: 'transform 300ms',
                    }}
                    src="/customQuote/Icons/greater.svg"
                    alt="dropdown icon"
                />
                    :
                    <img
                        className="drop_img2"
                        style={{
                            // transform: `rotate(${isOpen ? 90 : 0}deg)`,
                            transition: 'transform 300ms',
                        }}
                        src="/customQuote/Icons/play.svg"
                        alt="dropdown icon"
                    />
                }

            </div>
        </div>
    );
}

export default SelectField;