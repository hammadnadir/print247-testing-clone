import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function QuoteSubmitted() {
  const router = useRouter();

  return (
    <div className="quote_submitted_bg">
      <div className="container">
        <div className="quote_submitted_data">
          <Lottie
            animationData={require("../../public/tickanimation.json")}
            style={{ width: "200px", margin: "auto" }}
            loop={false}
            autoplay
          />
          <h2>Quote submitted!</h2>
          <p>
            Thank you! Your Quote Request has been submitted successfully. One
            of our Representatives will be in touch with your Quote shortly.
          </p>
          <Link href={`/`}>
            <div className="continue_shopping_btn">
              <button>BACK TO HOMEPAGE</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuoteSubmitted;