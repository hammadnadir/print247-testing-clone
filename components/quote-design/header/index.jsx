import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

function QuoteHeader() {
  return (
    <div className="custom_quote_header">
      <Link href="/"><Image
        className="Print247-Logo"
        src="/image/print247originallogo.svg"
        alt="print247 logo"
      /></Link>

      <div className="custom_quote_header_text">
        <Image
          className="quote-image"
          src="/customQuote/Icons/help.svg"
          alt="print247 logo"
        />
        <div className="text-field">
          <h6>Not Clear Yet..?</h6>
          <Link href="tel:13462461639">
            <h3>Quick Support</h3>
          </Link>
          <p>
            chat with our team to find best <br /> quote for your product{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuoteHeader;
