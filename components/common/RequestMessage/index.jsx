import React from "react";

function RequestMessage({ image , message ,color, toastClass }) {
  
  return (
    <div className={`request-message ${toastClass}`}>
      <img className="img" src={image} alt="message"/>
      &nbsp;&nbsp;&nbsp;&nbsp;<p style={{color: color ? color : "white"}}>{message}</p>
    </div>
  );
}
export default RequestMessage;