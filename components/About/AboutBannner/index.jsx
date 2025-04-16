

import React from "react";

function AboutBanner() {

  return (
    <div className="newabout_main">
      <div className="about_video">
        <video autoPlay muted loop>
          <source src="/videos/homeVideos.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default AboutBanner;