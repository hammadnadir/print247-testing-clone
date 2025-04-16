import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const TopLine = () => {
  const [clicked, setClicked] = useState(false);
  var currentDate = new Date();

  // Add 25 days to the current date
  var futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 25);

  // Convert futureDate to a formatted string with the desired format
  var options = { day: "numeric", month: "long" };
  var formattedDate = futureDate.toLocaleDateString("en-US", options);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 10);
  };
  

  return (
    <div
      className="free_shipping_line" // style={{ backgroundColor: clicked ? "white" : "black" }}
      // style={{ backgroundImage: "url(/home/home.gif)" }}>
      style={{ backgroundColor: "black" }}
    >
      {/* <h2>Free Design Service</h2> */}
      <div className="glitch-wrapper">
        {/* <div className="arrows" onClick={handleClick}>
          <img src="/icons/arrow_chevon.svg" alt="" />
        </div> */}


        <div className="glitch" data-text="Free Design Service">
        🎃 Spooktacular Savings! Get Up to 20% Off Your First Order This Halloween! || Ends November 6th
          {/* Avail Upto 20% on&nbsp; */}
          {/* <Typewriter
            options={{

              strings: [
                "Custom Gift Boxes",
                "Sign & Banner",
                "Label & Sticker",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
            }}
          />{" "} */}
          {/* | Happy New Year! */}
        </div>
        {/* <div className="arrows2" onClick={handleClick}>
          <img src="/icons/arrow_chevon.svg" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default TopLine;
