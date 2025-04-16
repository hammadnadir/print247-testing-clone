import { useEffect, useState } from "react";
import SingleFormSticker from "../SingleMylarCompaign/SingleFormMylar";
import ReactStars from "react-rating-stars-component";
import { useRouter } from "next/router";
import { boxCompaignData } from "@/data/boxCompaignData";

const images = [
    "/campaignMylar/sliderImage/mylar1.webp",
    "/campaignMylar/sliderImage/mylar2.webp",
    "/campaignMylar/sliderImage/mylar3.webp",
    "/campaignMylar/sliderImage/mylar4.webp",
];

const MainSliderMylar = ({ minQuantity, scrollToSection, sectionRef = { sectionRef } }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="carouselMylar">

            <div className="width_set_form_mylar">
                <div className="form_bg_color_mylar">
                    <div className="form_Section_mylarTwo">
                        <div className="form_section_mylar">
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
                            <div className="custom_name">
                                <h2>{boxCompaignData?.[id]?.title}</h2>
                            </div>
                            {/* <div className="starting_price">
                                <p>Starting at just $0.10 per unit</p>
                            </div> */}
                            {/* <div className="terms_cond">
                                <p>{"(Terms and conditions apply)"}</p>
                            </div> */}
                            <div className="text_description">
                                <p className="text_para">{boxCompaignData?.[id]?.description}.&nbsp;<span onClick={scrollToSection} style={{ color: "black", cursor: "pointer", fontWeight: "600", fontSize: "13px" }}>Learn More</span></p>
                            </div>
                            <div>
                                <SingleFormSticker minQuantity={minQuantity} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* IMAGE SLIDER */}
            <div className="sliderWrapper_mylar">
                <div className="carouselTrack_mylar" style={{ transform: `translateX(${-(currentIndex * 100)}%)` }}>
                    {images.map((src, index) => (
                        <div key={index} className="slide_mylar">
                            <img src={src} alt={`Slide ${index + 1}`} className="image" />
                        </div>
                    ))}
                </div>
                {/* Thumbnails */}
                <div className="thumbnails_new_mylar">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            className={`thumbnail ${currentIndex === index ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainSliderMylar;