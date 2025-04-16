// import Lottie from "lottie-react";
import React, { useRef } from "react";
import animation from "../../../public/tickanimation.json";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function QuoteSubmittedCam() {
  const animationRef = useRef();
  const router = useRouter();

  const handleClick = (url) => {
    router.push(url)
  }

  return (
    <div className="quote_submitted_cam">
      <div className="container">
        <div className="quote_submitted_data">
          <Lottie
            animationData={animation}
            width={30}
            style={{ width: "200px", margin: "auto" }}
            loop={false}
            autoplay
            renderer="svg" // You can choose 'svg', 'canvas', or 'html'
            ref={animationRef}
          />
          <h2>Quote submitted!</h2>
          <p>
            Thank you! Your Quote Request has been submitted successfully. One
            of our Representatives will be in touch with your Quote shortly.
          </p>
          {/* <Link href={`/category/${router?.query?.category}`}> */}
          <div onClick={() => handleClick(`/`)} className="continue_shopping_btn">
            <button>Continue Shopping</button>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default QuoteSubmittedCam;
