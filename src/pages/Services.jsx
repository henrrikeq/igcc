import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import irish from "../assets/images/irish.jpg"; // replace with actual path
import ghana from "../assets/images/ghana.jpg"; // replace with actual path

const Services = () => {
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

      {/* Background Slider */}
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
          <p className="text-xl uppercase tracking-wide">Support</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
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

      {/* Services Section */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-24 w-[100%]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              KEY SUPPORT SERVICES
            </h2>
            <div className="w-32 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full border-[0.5px] border-green-600"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:gap-x-0 gap-5 ">
            {[
              {
                title: "BUSINESS DEVELOPMENT",
                description:
                  "We work to build the capacity of member businesses and groups to attract partners, grow, sustain their businesses and be competitive in the bilateral space of trade and investment, through series of high powered workshops and training.",
              },
              {
                title: "NETWORKING",
                description:
                  "We model interpersonal and corporate relationships of trust, cultural diplomacy and bilateral ties business meetings, trade forums, international expos and promotions.",
              },
              {
                title: "RISK ADVICE",
                description:
                  "We are committed to safeguarding the investments and business interests of our members through the adoption of high ethical standards, strict background checks and best practices in the international space.",
              },
              {
                title: "ADVOCACY",
                description:
                  "We serve as the mouthpiece of our members to industry players, governments, agencies and other stakeholders, and also promote the interests of our member businesses through publications, trade promotions, and information exchange.",
              },
              {
                title: "TECHNOLOGY EXCHANGE",
                description:
                  "We promote the transfer of technology and intensive, innovative skills for industry and allied sectors for business growth. Key and strategic technology strengths of both countries will be identified, highlighted, and promoted to enhance the growth of the businesses of members.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-7 transform opacity-0 slideIn lg:ml-14 lg:mr-14"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sliding Animation */}
        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .slideIn {
            animation: slideIn 0.6s ease-out forwards;
          }
        `}</style>

        
      </div>

      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">0+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">€0M+</div>
              <div className="text-gray-300">Trade Facilitated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">0+</div>
              <div className="text-gray-300">Partnerships</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">10+</div>
              <div className="text-gray-300">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
