import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useRouter } from "next/router";
import { boxCompaignData } from "@/data/boxCompaignData";
import SingleFormFoldTwo from "../SingleFoldingCompaign/SingleFormFoldTwo";

const images = [
    "/foldingCarton/newfoldGal/1.webp",
    "/foldingCarton/newfoldGal/2.webp",
    "/foldingCarton/newfoldGal/3.webp",
    "/foldingCarton/newfoldGal/4.webp",
];

const MainSlider = ({ minQuantity, scrollToSection, sectionRef={sectionRef} }) => {
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
        <div className="carouselContainer">
            <div className="width_set_form_sticker">
                <div className="form_bg_color_fold_cart">
                    <div className="form_Section_foldTwo">
                        <div className="form_section_fold">
                            {/* <div className="inner_star1">
                                <ReactStars number={5} size={24} activeColor="#ffd700" value={boxCompaignData?.[id]?.rating} edit={false} isHalf={true} />
                                <div className="star_reviews">
                                    <p>{(boxCompaignData?.[id]?.rating)?.toFixed(1)} Rating</p>
                                </div>
                                <div className="pole">|</div>
                                <div className="star_reviewsTwo">
                                    <p>Based on {boxCompaignData?.[id]?.reviews} reviews</p>
                                </div>
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
                                <p className="text_para">{boxCompaignData?.[id]?.description}.&nbsp;<span onClick={scrollToSection} style={{ color: "black", cursor: "pointer", fontWeight: "600", fontSize: "13px" }}>Learn More</span></p>
                            </div>
                            <div>
                                <SingleFormFoldTwo minQuantity={minQuantity} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* IMAGE SLIDER */}
            <div className="sliderWrapper">
                <div className="carouselTrack" style={{ transform: `translateX(${-(currentIndex * 100)}%)` }}>
                    {images.map((src, index) => (
                        <div key={index} className="slide">
                            <img src={src} alt={`Slide ${index + 1}`} className="image" />
                        </div>
                    ))}
                </div>
                {/* Thumbnails */}
                <div className="thumbnails_new">
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

export default MainSlider;