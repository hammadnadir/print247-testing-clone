import React, { useState, useEffect, useRef } from "react";
import SingleFormComTwo from "./SingleFormComTwo";
import { useRouter } from "next/router";
import { boxCompaignData } from "@/data/boxCompaignData";
import ReactStars from "react-rating-stars-component";
import useSlide from "@/utils/useSlide";
import Link from "next/link";

function SingleProductCompaign({ minQuantity, sectionRef, scrollToSection, setIsSlideUpHeight, isSlideUp, setIsSlideUp }) {
  const [currentImage, setCurrentImage] = useState(0);

  const router = useRouter();
  const { id } = router.query;

  const images = boxCompaignData?.[id]?.mainPic?.galleryMainImg?.map((data) => data?.img)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  const checkItems = [
    { text: 'Live Chat Support', imgSrc: '/image/check.png' },
    { text: 'Sustainable Packaging', imgSrc: '/image/check.png' },
    { text: 'Free Design Services', imgSrc: '/image/check.png' },
    { text: 'Competitive Pricing', imgSrc: '/image/check.png' },
  ];

  const iconRef = useRef(null);

  const handleSlideUp = () => {
    // setIsSlideUp(true);
    setTimeout(() => {
      // setIsSlideUpHeight(true);
    }, 1000);
  };

  const handleSlideDown = (e) => {
    if (e) {
      e.preventDefault();
    }
    // setIsSlideUp(false);
    setTimeout(() => {
      // setIsSlideUpHeight(false);
    }, 1000);
  };

  useSlide(iconRef, handleSlideUp, handleSlideDown);

  useEffect(() => {
    document.body.style.overscrollBehaviorY = 'contain';

    return () => {
      document.body.style.overscrollBehaviorY = '';
    };
  }, []);

  const contentFolding = router.asPath === "/boxes-campaign/folding-carton"

  return (
    <div className="image_container" ref={iconRef} >
      {/* Image Slider Section */}
      <div className="image-slider">
        <div className="thumbnails">
          {boxCompaignData?.[id]?.mainPic?.galleryMainImg?.map((itemThumb, index) => (
            <img
              key={index}
              src={itemThumb?.img}
              alt={`Thumbnail ${index}`}
              onClick={() => handleImageClick(index)}
              className={`thumbnail ${currentImage === index ? 'active' : ''}`}
            />
          ))}
        </div>
        <img src={images[currentImage]} alt="Product" className="main-image" />
      </div>

      {/* Form Section */}
      <div className={`form_Section_mainTwo ${isSlideUp ? "afterScroll_formTwo" : "beforeScroll_formTwo"}`}>
        <div className="form-section">
          <div className="slide_icon" style={{ display: "flex", justifyContent: "center" }}>
            <img src="/image/Rectangle 29409.png" alt="icon" />
          </div>
          <div className="custom_name">
            <h2>{boxCompaignData?.[id]?.title}</h2>
          </div>
          {contentFolding ?
            <div className="folding_cart_campaign_price">
              <h2>Starting at just $0.10 per unit</h2>
              <p>{"(Terms and conditions apply)"}</p>
            </div> : ""
          }
          <div className="inner_star1">
            <ReactStars
              number={5}
              size={24}
              activeColor="#ffd700"
              value={boxCompaignData?.[id]?.rating}
              edit={false}
              isHalf={true}
            />
            <div className="star_reviews">
              <p>{(boxCompaignData?.[id]?.rating).toFixed(1)} Rating</p>
            </div>
            <div className="pole">|</div>
            <div className="star_reviewsTwo">
              <p>Based on {boxCompaignData?.[id]?.reviews} reviews</p>
            </div>
          </div>
          <div className="text_description">
            <p className="text_para">{boxCompaignData?.[id]?.description} &nbsp;&nbsp;&nbsp;&nbsp;<span href="/" onClick={scrollToSection} style={{ textDecoration: "underline", color: "black", cursor: "pointer" }}>Learn More</span></p>
            <h6 className="text_dis">{boxCompaignData?.[id]?.sales}</h6>
          </div>
          <div>
            <SingleFormComTwo minQuantity={minQuantity} />
          </div>
          {/* <div className="check_items_main">
            {checkItems.map((item, index) => (
              <div className="check_items" key={index}>
                <img src={item?.imgSrc} alt="check icon" />
                <p>{item?.text}</p>
              </div>
            ))}
          </div> */}
          <div className="check_items_main">
            <div className="grid_check_items_main">
              <div className="check_items">
                <img src="/image/check.png" alt="check icon" />
                <p>Live Chat Support</p>
              </div>
              <div className="check_items">
                <img src="/image/check.png" alt="check icon" />
                <p>Sustainable Packaging</p>
              </div>
            </div>
            <div className="grid_check_items_main">
              <div className="check_items">
                <img src="/image/check.png" alt="check icon" />
                <p>Free Design Services</p>
              </div>
              <div className="check_items">
                <img src="/image/check.png" alt="check icon" />
                <p>Competitive Pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductCompaign;