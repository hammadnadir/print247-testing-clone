import React, { useState, useEffect } from "react";

const AnimatedButton = ({openModal}) => {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFilled(true);

      setTimeout(() => {
        setFilled(false);
      }, 2000); // This should match the transition duration
    }, 2100); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="outer" onClick={openModal}>
      <div
        className="button"
        style={{
          backgroundPosition: filled ? "left bottom" : "right bottom",
          transition: filled ? "background-position 2s ease-out" : "none",
        }}
      >
        <div className="text" style={{
            transition: filled ? "color 2s ease-out" : "none",
          }}>
          Quick Support
        </div>
      </div>
    </div>
  );
};

export default AnimatedButton;
