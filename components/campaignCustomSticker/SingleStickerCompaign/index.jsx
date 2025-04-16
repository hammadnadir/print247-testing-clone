import React, { useState, useEffect} from "react";
import { useRouter } from "next/router";
import { boxCompaignData } from "@/data/boxCompaignData";
import ReactStars from "react-rating-stars-component";
import SingleFormSticker from "./SingleFormSticker";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

function SingleStickerCompaign({minQuantity, sectionRef, scrollToSection, setIsSlideUpHeight, isSlideUp, setIsSlideUp }) {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  const isMobile = useMediaQuery("(max-width: 768px)"); // Mobile ke liye 768px tak consider karein

  const images = isMobile
    ? boxCompaignData?.[id]?.mainPic?.galleryMobImg?.map((data) => data?.img)
    : boxCompaignData?.[id]?.mainPic?.galleryMainImg?.map((data) => data?.img);

  useEffect(() => {
    if (!images) return;
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="linear_bg_color">
      <div className="image_container_sticker" >
        {/* Form Section */}
        <div className="width_set_form">
          <div className="form_bg_color">
            {/* <div className={`form_Section_foldTwo ${isSlideUp ? "afterScroll_formTwo" : "beforeScroll_formTwo"}`}> */}
            <div className="form_Section_foldTwo">
              <div className="form_section_fold">
                <div className="inner_star1">
                  <ReactStars number={5} size={24} activeColor="#ffd700" value={boxCompaignData?.[id]?.rating} edit={false} isHalf={true} />
                  <div className="star_reviews">
                    <p>{(boxCompaignData?.[id]?.rating)?.toFixed(1)} Rating</p>
                  </div>
                  <div className="pole">|</div>
                  <div className="star_reviewsTwo">
                    <p>Based on {boxCompaignData?.[id]?.reviews} reviews</p>
                  </div>
                </div>
                {/* <div className="slide_icon" style={{ display: "flex", justifyContent: "center" }}>
                  <img src="/image/Rectangle 29409.png" alt="icon" />
                </div> */}
                <div className="custom_name">
                  <h2>{boxCompaignData?.[id]?.title}</h2>
                </div>
                <div className="starting_price">
                  <p>Starting at just $0.10 per unit</p>
                </div>
                <div className="terms_cond">
                  <p>{"(Terms and conditions apply)"}</p>
                </div>
                <div className="text_description">
                  {/* <p className="text_para">{boxCompaignData?.[id]?.description}.&nbsp;<span href="/" onClick={scrollToSection} style={{ color: "black", cursor: "pointer", fontWeight: "600", fontSize: "13px" }}>Learn More</span></p> */}
                  <p className="text_para">{boxCompaignData?.[id]?.description}.&nbsp;<span onClick={scrollToSection} style={{ color: "black", cursor: "pointer", fontWeight: "600", fontSize: "13px" }}>Learn More</span></p>
                </div>
                <div>
                  <SingleFormSticker minQuantity={minQuantity}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Slider Section */}
        <div className="width_set_gallery">
          <div className="image-slider-fold">
            <div className="image-slider">
              <div className="thumbnails_fold">
                {images?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index}`}
                    onClick={() => handleImageClick(index)}
                    className={`thumbnail ${currentImage === index ? 'active' : ''}`}
                  />
                ))}
              </div>
              <img src={images?.[currentImage]} alt="Product" className="main-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleStickerCompaign;