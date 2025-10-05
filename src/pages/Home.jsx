import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import irish from "../assets/images/irish.jpg"; // replace with actual path
import ghana from "../assets/images/ghana.jpg"; // replace with actual path

const Home = () => {
  const images = [irish, ghana];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // changes every 5s
      return () => clearInterval(interval);
    }, [images.length]);

  return (
    <div>
        <Navbar />
        <div className="relative overflow-hidden shadow-lg h-[400px] mt-20">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
           I-GCC: The Ireland - Ghana Chamber of Commerce
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            Bridging Ireland and Ghana through strategic partnerships and businesses
          </p>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white w-8" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;