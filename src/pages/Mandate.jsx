import React, { useState, useEffect } from "react";
import irish from "../assets/images/irish.jpg";
import ghana from "../assets/images/ghana.jpg";
import Navbar from "./Navbar";
import { Handshake, Briefcase, Hammer, Shield, Sprout, Megaphone } from "lucide-react";


const Mandate = () => {
  const images = [irish, ghana];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const mandates = [
    {
      title: "Create",
      description: "The enabling platform and networking with all stakeholders to promote trade and investment between Ireland and Ghana",
      icon: <Handshake className="w-12 h-12 text-green-600" />
    },
    {
      title: "Provide",
      description: "Professional and in-demand business and international trade advice as well as support services for our members to grow their interests",
      icon: <Briefcase className="w-12 h-12 text-green-600" />
    },
    {
      title: "Build",
      description: "The capacity of member businesses to leverage on the trade policy frameworks offered by Ireland and Ghana to be competitive in the bilateral space of trade and investment",
       icon: <Hammer className="w-12 h-12 text-green-600" />
    },
    {
      title: "Safeguard",
      description: "The investments and business interests of our members through risk advice and the adoption of high ethical standards and best practices",
       icon: <Shield className="w-12 h-12 text-green-600" />
    },
    {
      title: "Foster",
      description: "Stronger collaboration and networking with the respective Governments and their various agencies in order to deliver on our mandate",
      icon: <Sprout className="w-12 h-12 text-green-600" />
    },
    {
      title: "Advocate",
      description: "And represent our members to industry players, government agencies and other stakeholders, and to promote their interests",
    icon: <Megaphone className="w-12 h-12 text-green-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Image Slider */}
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
          <p className="text-xl uppercase tracking-wide">Our Foundation</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Core Mandate
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            Bridging Ireland and Ghana through strategic partnerships and sustainable growth
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

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Mandate
          </h2>
          <div className="w-24 bg-green-600 mx-auto mb-6 border-[0.5px] border-green-600"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Ireland-Ghana Chamber of Commerce is committed to fostering bilateral trade relationships, 
            supporting business growth, and creating lasting partnerships between our two nations.
          </p>
        </div>

        {/* Mandate Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mandates.map((mandate, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="text-5xl mb-4">{mandate.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                To {mandate.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {mandate.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-2xl p-12 text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            Join Us in Building Bridges
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Become part of a dynamic community dedicated to strengthening Ireland-Ghana trade relations 
            and creating opportunities for sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Become a Member
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section (Optional - you can add real statistics) */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">150+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">€2M+</div>
              <div className="text-gray-300">Trade Facilitated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
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

export default Mandate;