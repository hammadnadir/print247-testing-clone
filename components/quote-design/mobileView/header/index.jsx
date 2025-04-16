import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

function QuoteHeaderMobile() {
  return (
    <div className="custom_quote_header_mobile">
    

    
        <div className="text-field">
          <h6>Not Clear Yet..?</h6>
          <Link href="tel:13462461639">
            <h3>Quick Support</h3>
          </Link>
          <p>
            chat with our team to find best <br /> quote for your product{" "}
          </p>
        </div>
        <hr />
        <div className="logos">

        <Image
        className="Print247-Logo"
        src="/image/print247originallogo.svg"
        alt="print247 logo"
      />
      <div className="social-logo">
      <a rel="" target="_blank" href="https://www.facebook.com/officialprint247.us"  >
      <Image
        className="Print247-facebook"
        src="/customQuote/Icons/facebook.svg"
        alt="print247 logo"
      />
      </a>
       <a rel="" target="_blank" href="https://www.instagram.com/print247.us/" >
      <Image
        className="Print247-instagram"
        src="/customQuote/Icons/instagram.svg"
        alt="print247 logo"
      />
      </a>
      <a rel="" target="_blank" href="https://www.linkedin.com/company/print247-us" >
      <Image
        className="Print247-linkedin"
        src="/customQuote/Icons/linkedin.svg"
        alt="print247 logo"
      />
      </a>
      </div>
        </div>
        <div className="get_custom" >
          <h4>Get a Custom Quote</h4>
          <div className="mobile_para">
          <p>As we are Print247.us we are available 24/7 to assist  and guide you. You just have to inform us about the  packaging and we will create an instant quote for you.</p>
          </div>
        </div>
      
    </div>
  );
}

export default QuoteHeaderMobile;
