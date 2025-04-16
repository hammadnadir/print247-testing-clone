import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";

const bannerData = [
  {
    id: 1,
    imgSrcW: '/compaignPolitcal/politicalBanner/politicalbanner1.webp',
    imgSrcT: '/compaignPolitcal/politicalBanner/politicalbanneripad1.webp',
    imgSrcM: '/compaignPolitcal/politicalBanner/politicalbannerphone1.webp',
    title: 'The Prime of Political Campaign Signs',
    description: 'We print and produce political merchandise by vocalizing for every party.',
    shopNowText: 'Shop Now',
    shopNowIcon: '/image/arr_home.png',
  },
  {
    id: 2,
    imgSrcW: '/compaignPolitcal/politicalBanner/politicalbanner2.webp',
    imgSrcT: '/compaignPolitcal/politicalBanner/politicalbanneripad2.webp',
    imgSrcM: '/compaignPolitcal/politicalBanner/politicalbannerphone2.webp',
    title: 'Political Campaign Materials',
    description: 'Join us to fill your yards with our custom printed campaign products.',
    shopNowText: 'Shop Now',
    shopNowIcon: '/image/arr_home.png',
  },
];


function PoliticalBanner() {

  const [screenHeight, setScreenHeight] = useState(null);
  const [stateValue, setStateValue] = useState(0);
  const [intervalTime, setIntervalTime] = useState(0);
  useEffect(() => {
    const screenH = window.innerHeight;
    setScreenHeight(screenH);
  }, []);

  useEffect(() => {
    const stateInterval = setInterval(() => {
      setStateValue((prev) => {
        const nextIndex = (prev + 1) % bannerData.length;

        setIntervalTime(0);
        return nextIndex;
      });
    }, 7000);

    const timeInterval =
      setInterval(() => {
        setIntervalTime((prev) => {
          if (prev >= 1) {
            return prev;
          }
          return prev + 0.01;
        });
      }, 20);

    return () => {
      clearInterval(stateInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const isRetina = useMediaQuery({ query: "(max-width: 574px)" });
  const isTabView = useMediaQuery({ query: "(max-width: 912px) and (min-width: 575px)" });

  return (
    <div className='main_political_banner'>
      <Carousel activeIndex={stateValue} controls={false} pause={false} indicators={false}>
        {bannerData.map((banner, index) => (
          <Carousel.Item key={banner.id} >
            <div className='inner_political_banner'>
              {isRetina ? (
                <img className=" w-100" src={banner.imgSrcM} alt={`Slide ${banner.id}`} />
              ) : isTabView ? (
                <img className=" w-100" src={banner.imgSrcT} alt={`Slide ${banner.id}`} />
              ) : (
                <img className=" w-100" src={banner.imgSrcW} alt={`Slide ${banner.id}`} />
              )}
              {<Carousel.Caption>
                <div className='data_political_banner'>
                  {stateValue === index && <h1 style={{ opacity: intervalTime > 0.7 ? 1 : 0, transition: 'opacity 1.2s ease-in-out' }}>{banner.title}</h1>}
                  {stateValue === index && <p style={{ opacity: intervalTime > 0.7 ? 1 : 0, transition: 'opacity 1.2s ease-in-out' }}>{banner.description}</p>}

                  {/* Progress Bar */}
                  <div className='progress_bar_political'>
                    {
                      bannerData?.map((data, i) => (
                        <div key={i} className="hh-grayBox pt45 pb20">
                          <div className="lines_div">
                            <div className="main_lines_political"></div>
                            <div className="subchild_line_political"
                              style={{ width: stateValue === i ? `${intervalTime * 100}%` : stateValue > i ? "100%" : "0%" }}
                            ></div>
                          </div>
                        </div>
                      ))
                    }

                  </div>
                </div>
              </Carousel.Caption>}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default PoliticalBanner;