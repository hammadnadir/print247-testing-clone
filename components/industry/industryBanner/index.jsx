import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

function IndustryBanner({isWhiteHeading = false}) {

  const { mainIndustries } = useSelector((state) => state.industry)
  const router = useRouter();

  const isBigScreen = useMediaQuery({ query: '(min-width: 576px)' })
  const isRetina = useMediaQuery({ query: '(max-width: 575px)' })

  return (
    <div className="main-banner2">
      {isBigScreen &&
        <div className="back_image"><img src={mainIndustries?.banner} alt="back icon" /></div>
      }
      {isRetina && <div className="back_image"><img src={mainIndustries?.banner2} alt="back icon" /></div>
      }

      <div className="top_sectionb">
        <Container>
          {/* <div className="main_industry_banner">
            <h1 className={` ${isWhiteHeading ? "white_color1" : ""}`}>Create your</h1>
            <h6 className={` ${isWhiteHeading ? "white_color" : ""}`}>{mainIndustries?.title}</h6>
          </div> */}
          <div className="main_industry_banner">
            <h1 className={` ${isWhiteHeading ? "white_color" : ""}`}><span className={` ${isWhiteHeading ? "white_color1" : ""}`}>Create your </span> <br /> {mainIndustries?.title}</h1>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default IndustryBanner;
