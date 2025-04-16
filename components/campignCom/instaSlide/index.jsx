import { instaData } from "@/data";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

function InstaSlides() {

    const [playing, setPlaying] = useState(new Array(instaData.length).fill(false));

    const handleMouseEnter = (index, videoElement) => {
        if (!playing[index]) {
            videoElement.play();
        }
        else if (playing[index]) {
            videoElement.play();
        }
    };

    const handleMouseLeave = (index, videoElement) => {
        if (!playing[index]) {
            videoElement.pause();
        }
        else if (playing[index]) {
            videoElement.pause();
        }
    };

    const handleClick = (index, videoElement) => {
        if (videoElement.paused) {
            videoElement.play();
            setPlaying(prevState => {
                const newState = [...prevState];
                newState[index] = true;
                return newState;
            });
        } else {
            videoElement.pause();
            setPlaying(prevState => {
                const newState = [...prevState];
                newState[index] = false;
                return newState;
            });
        }
    };

    return (
        <div className="main_creating_campign">
            <Marquee>
                <h2 style={{ marginRight: "20px" }}>Let{"'"}em See Your Products and Say, "Wow"</h2>
                <h2 style={{ marginRight: "20px" }}>Let{"'"}em See Your Products and Say, "Wow"</h2>
            </Marquee>
            <div className="print247">

                <div>
                    <h3>Set the Trends</h3>
                    <p>Indeed, you are just a call away from us. Hence, you set the new trends of packaging products with us. Because we think “Beautiful”. We think “Revolutionary”. For You!</p>
                </div>

                <div className="main_boxes">
                    <Marquee pauseOnHover direction="right">
                        {instaData.map((vid, i) => (
                            <div key={i}>
                                <video poster={vid?.thumbnail} className="video_player" src={vid?.path} loop muted
                                    onMouseEnter={e => handleMouseEnter(i, e.target)}
                                    onMouseLeave={e => handleMouseLeave(i, e.target)}
                                    onClick={e => handleClick(i, e.target)}
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>

            </div>
        </div>
    );
}

export default InstaSlides;