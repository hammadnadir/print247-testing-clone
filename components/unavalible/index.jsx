import React from "react";
import { Container } from "react-bootstrap";

const ErrorPrint = () => {
    
  return (
    <div>
      <div className="main-print247">
        <img className="print247-img" src="/image/logow.png" alt="image of print247" />
      </div>
      <div className="info-error">
        <Container>
          <h1 className="heading"> We’re sorry. </h1>
          <h2 className="sub-heading"> Print247 is currently unavailable in your Country. </h2>
          <p className="para"> We’re hard at work improving our site experience for Print247 all over the world. We hope to create world-changing impact together in the future. </p>
        </Container>
      </div>
    </div>
  );
};

export default ErrorPrint;
 