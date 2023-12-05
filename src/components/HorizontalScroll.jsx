import React, { useState, useEffect } from "react";
import capital from '../assets/capital.jpeg'
import sher from '../assets/sher.jpeg'
import moti from '../assets/moti.jpeg'
import nism from '../assets/nism.jpeg'
import angle from '../assets/angle.jpeg'


const imageUrls = [
  capital,
  sher,
  moti,
  nism,
  angle
];

const HorizontalScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition(
        (prevPosition) => (prevPosition + 1) % (imageUrls.length * 100)
      );
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex gap-2 carousel"
        style={{
          transform: `translateX(-${scrollPosition}%)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index + 1}`} className="h-20 w-auto object-cover flex-shrink-0" />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
