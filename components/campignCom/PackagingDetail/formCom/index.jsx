import { Select } from "antd";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

function FormCom() {
  return (
    <div className="form_Section">
      <form className="form">
        <div className="formGroup">
          <input type="text" placeholder="Full name" className="input" />
          <input type="text" placeholder="Company" className="input" />
        </div>
        <input type="email"   id="email-input" placeholder="Enter your Email" className="input" />
        <div className="formGroup">
          <PhoneInput
            countryCodeEditable={false}
            style={{ marginBottom: "10px" }}
            country={"us"}
            name="phone_no"
            placeholder="Enter your Phone no."
          />
        </div>
        <Select
          style={{ backgroundColor: "#D3DBE6", border: "none" }}
          className="select"
          showSearch
          placeholder="Select Your Product"
          optionFilterProp="label"
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Not Identified",
            },
            {
              value: "2",
              label: "Closed",
            },
            {
              value: "3",
              label: "Communicated",
            },
            {
              value: "4",
              label: "Identified",
            },
            {
              value: "5",
              label: "Resolved",
            },
            {
              value: "6",
              label: "Cancelled",
            },
          ]}
        />

        <div className="formGroup">
          <input type="number" placeholder="Length" className="input" />
          <input type="number" placeholder="Width" className="input" />
          <input type="number" placeholder="Depth" className="input" />
          <Select
            style={{
              backgroundColor: "#D3DBE6",
              border: "none",
              minWidth: "80px",
            }}
            className="select inchSelect"
            showSearch
            placeholder="Inch"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "21",
              },
              {
                value: "2",
                label: "11",
              },
              {
                value: "3",
                label: "34",
              },
              {
                value: "4",
                label: "32",
              },
              {
                value: "5",
                label: "2",
              },
              {
                value: "6",
                label: "32",
              },
            ]}
          />
        </div>
        <input type="number" placeholder="Quantity" className="input" />
        <div className="upload">
          <label
            className="uploadLabel"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <input type="file" className="uploadInput" />
              Upload Design{" "}
              <span style={{ fontSize: "10px", marginLeft: "10px" }}>
                {" "}
                (AI, PDF, EPS or ZIP)
              </span>
            </div>
            <div
              style={{ display: "flex", justifyContent: "end", width: "full" }}
            >
              <img src="/image/Icon feather-upload.png" alt="upload icon" />
            </div>
          </label>
        </div>
        <label className="mainUploadingFile">
          <div className="uploadingFile">
            <div className="icon">
             <img src="/image/file-file-type-svgrepo-com (1).svg" alt="file icon" />
             <div className="addText">
              <p>Added</p>
             </div>
             {/* <div className="addText">
              <p>Added</p>
             </div> */}
            </div>
            <div>
              <p className="fileName">bang n mushroom box,pdf</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <div>
              <div>
                <input
                  type="file"
                  className="uploadInput"
                  style={{ fontSize: "14px" }}
                />
                {/* Upload Design{" "} */}
              </div>
              <span style={{ fontSize: "10px" }}> (AI, PDF, EPS or ZIP)</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "end",
                width: "full",
                backgroundColor: "#E7E7E7",
                backgroundColor: "#E7E7E7",
                padding: "10px",
                border: "0.5px solid #707070",
                borderRadius: "100%",
                
                
              }}
            >
              <img src="/image/Icon feather-upload.png" alt="upload icon" />
            </div>
          </div>
        </label>
        <button type="submit" className="submitButton">
          Get a Quote
        </button>
      </form>
    </div>
  );
}

export default FormCom;
