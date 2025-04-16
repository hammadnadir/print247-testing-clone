import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

function SocialMarquee() {
  const router = useRouter();
  const [data, setData] = useState("");
  const changeDirection = router?.pathname === "/about-us";

  return (
    <div className="main_marquee_social">
      <Container>
        <div className="marquee_social">
          <div className="social-marquee1">
            <div>
              <p>Follow</p>
            </div>
            <div className="inner_social_marquee">
            <a href="https://www.facebook.com/officialprint247.us" onMouseEnter={() => setData("1")} onMouseLeave={() => setData("")} target="_blank">
              <img src="/image/fac-cam.png" width="13px" height="24px" alt="facebook icon" />
              </a>
              <a href="https://www.instagram.com/print247.us/" onMouseEnter={() => setData("2")} onMouseLeave={() => setData("")} target="_blank">
              <img src="/image/lin-cam.png" width="24px" height="24px" alt="instagram icon" />
              </a>
              <a href="https://www.linkedin.com/company/print247-us" onMouseEnter={() => setData("4")} onMouseLeave={() => setData("")} target="_blank">
              <div className="linkdin-cam">
                <img src="/image/lin-white.png" alt="linkedin icon" />
              </div>
              </a>
            </div>
          </div>
          <div className="social_marquee2">
            <Marquee direction={changeDirection ? "right" : "left"}>
              <img src="/image/Logos/logo1.png" alt="Logo images" />
              <img src="/image/Logos/logo2.png" alt="Logo images" />
              <img src="/image/Logos/logo3.png" alt="Logo images" />
              <img src="/image/Logos/logo4.png" alt="Logo images" />
              <img src="/image/Logos/logo5.png" alt="Logo images" />
              <img src="/image/Logos/logo6.png" alt="Logo images" />
              <img src="/image/Logos/logo7.png" alt="Logo images" />
              <img src="/image/Logos/logo8.png" alt="Logo images" />
              <img src="/image/Logos/logo9.png" alt="Logo images" />
            </Marquee>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SocialMarquee;
