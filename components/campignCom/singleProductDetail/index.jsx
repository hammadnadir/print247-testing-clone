import React, { useEffect, useRef, useState } from "react";
import SingleFormCom from "./SingleFormCom";
import ReactStars from "react-rating-stars-component";
import { useRouter } from "next/router";
import { campignObj } from "@/data/compaignData";
import { useMediaQuery } from "react-responsive";
import useSlide from "@/utils/useSlide";

function SingleProductDetail({
  isSlideUpHeight,
  setIsSlideUpHeight,
  isSlideUp,
  setIsSlideUp,
  isDesktopBelow,
  minQuantity
}) {
  const router = useRouter();
  const { id } = router.query;
  const iconRef = useRef(null);
  const [loader, setLoader] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleSlideUp = () => {
    // setIsSlideUp(true);
    setTimeout(() => {
      setIsSlideUpHeight(true);
    }, 1000);
  };

  const handleSlideDown = (e) => {
    if (e) {
      e.preventDefault();
    }
    // setIsSlideUp(false);
    // setTimeout(() => {
    //   setIsSlideUpHeight(false);
    // }, 1000);
  };

  // useSlide(iconRef, handleSlideUp, handleSlideDown);

  useEffect(() => {
    // Apply the overscroll-behavior-y style to the body element
    document.body.style.overscrollBehaviorY = 'contain';

    // Cleanup function to reset the style when the component unmounts
    return () => {
      document.body.style.overscrollBehaviorY = '';
    };
  }, []);

  // useEffect(() => {
  //   const disablePullToRefresh = (e) => {
  //     if (e.touches.length > 1 || e.touches[0].clientY > 0) {
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener('touchmove', disablePullToRefresh, { passive: false });

  //   return () => {
  //     document.removeEventListener('touchmove', disablePullToRefresh);
  //   };
  // }, []);

  return (
    <div className="single_form_com_css" >
      <div className="Single_product_detail_campign">
        <div className="containers">
          <div className="flex_Section_single" >
            <div className="product_detail_slider">
              <div style={{ position: "relative" }}>
                <img src={campignObj?.[id]?.image} alt="Slide 3" />
                {/* <div
                  className=""
                  style={{ position: "absolute", top: "-30px", right: "30px" }}
                >
                  <img
                    style={{ width: "120px", height: "120px" }}
                    src="/image/Group 4316.png"
                    alt="icon"
                  />
                </div> */}
              </div>
            </div>
            {/* ${isSlideUp ? "afterScroll_form" : "beforeScroll_form"}`} */}
            <div

              className={`form_Section_main afterScroll_form`}>
              <div className="form_section_data">
                <div
                  className="slide_icon"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="/image/Rectangle 29409.png"
                    //  onClick={handleIconClick}
                    // onTouchStart={handleTouchStart}
                    // onTouchMove={handleTouchMove}
                    // onTouchEnd={handleTouchEnd}

                    alt="icon"
                  />
                </div>
                <div className="inner_star1">
                  <ReactStars
                    number={5}
                    size={24}
                    activeColor="#ffd700"
                    value={campignObj?.[id]?.rating}
                    edit={false}
                    isHalf={true}
                  />
                  <div className="star_reviews">
                    <p>{campignObj?.[id]?.rating} Rating</p>
                  </div>
                  <div className="pole">|</div>
                  <div className="star_reviews">
                    <p style={{ backgroundColor: "#679A66", color: "white", padding: "3px 9px", borderRadius: "15px", fontSize: "10px" }}>
                      Based on {campignObj?.[id]?.reviews} reviews
                    </p>
                  </div>
                </div>
                <h2>{campignObj?.[id]?.title}</h2>
                <p>{campignObj?.[id]?.description}</p>
                <div className="main_form">
                  <SingleFormCom minQuantity={minQuantity} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductDetail;
