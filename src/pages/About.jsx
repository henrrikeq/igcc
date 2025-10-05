import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import irish from "../assets/images/irish.jpg";
import ghana from "../assets/images/ghana.jpg";
import arch from "../assets/images/arch.jpg";
import { Shield, Leaf, Lock, Heart, TrendingUp } from "lucide-react";

const About = () => {
  const images = [irish, ghana];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const values = [
    {
      icon: Shield,
      title: "COMPLIANCE",
      description:
        "We uphold high ethical standards and best practices in our operations. We ensure compliance, where all members abide by all relevant laws and requirements within the regulatory environments of both Ireland and Ghana.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Leaf,
      title: "ENVIRONMENT",
      description:
        "Sustainably green and clean environmental protocols are encouraged as part-and-parcel of industry's work ethic at all levels along the value chain in all sectors.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Lock,
      title: "SECURITY",
      description:
        "We are sincere in our work to minimize risks occurring between member businesses and their investment partners or agencies. Strict background inquiry is therefore made to ensure maximum security.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Heart,
      title: "TRUST",
      description:
        "We require members to constantly live up to the expectations of citizenship, and work with honesty and integrity in both communication and conduct.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: TrendingUp,
      title: "GROWTH",
      description:
        "Our coordinated services between Ireland and Ghana will focus principally on ensuring competitiveness and real time growth in the interests of member businesses and in Foreign Direct Investments to both Ireland and Ghana.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        {/* Background Slider Section */}
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
            <p className="text-xl uppercase tracking-wide">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              I-GCC: The Ireland - Ghana Chamber of Commerce
            </h1>
            <p className="text-lg md:text-xl max-w-3xl opacity-90">
              Connecting Ghana and Ireland through trade, investment, and
              culture.
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

        {/* INTRODUCTION SECTION */}
        <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                INTRODUCTION
              </h2>
              <div className="mt-6 w-32 mx-auto rounded-full border-[0.5px] border-green-600"></div>
            </div>

            {/* FLEX ROW 50/50 SPLIT */}
            <div className="flex flex-col md:flex-row w-full gap-8">
              {/* LEFT SIDE (TEXT) */}
              <div className="md:w-1/2 space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  The{" "}
                  <span className="font-semibold text-gray-900">
                    Ireland-Ghana Chamber of Commerce (I-GCC)
                  </span>{" "}
                  exists as a bilateral chamber, trade and cultural support
                  organization, committed to creating the enabling platform that
                  facilitates trade, investment and cultural exchange between
                  the Republic of Ireland and the Republic of Ghana.
                </p>

                <p className="text-lg">
                  Our principal objective is to strengthen trade and investment
                  between Ghana and Ireland by identifying both existing and
                  potential trade and cultural exchange opportunities in both
                  countries that businesses and corporate entities could
                  maximize for real time growth.
                </p>

                <p className="text-lg">
                  Our prime focus is the development and expansion of the
                  private sector as the engine of economic and social growth for
                  our two countries.
                </p>

                <p className="text-lg">
                  We envision that the chamber will be the trusted business and
                  investment facilitator of choice, powering Irish trade and
                  investments in Ghana, and vice versa.
                </p>
              </div>

              
              {/* RIGHT SIDE (IMAGES WITH HOVER EFFECT) */}
              <div className="md:w-1/2 flex flex-col gap-4 justify-start items-center">
                <div className="flex gap-4 w-full">
                  <img
                    src={irish}
                    alt="Irish Landscape"
                    className="w-1/2 h-[200px] object-cover rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
                  />
                  <img
                    src={ghana}
                    alt="Ghana Landscape"
                    className="w-1/2 h-[200px] object-cover rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
                  />
                </div>
                <img
                  src={arch}
                  alt="Architecture"
                  className="w-full h-[200px] object-cover rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* VALUES SECTION */}
        <div className="bg-[#E6F9E6] py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                CORE WORKING VALUES
              </h2>
              <div className="mt-6 w-32 mx-auto rounded-full border-[0.5px] border-green-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    <div className="relative z-10 p-8 flex flex-col items-center text-center">
                      <div
                        className={`${value.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                      >
                        <Icon className={`${value.iconColor} w-8 h-8`} />
                      </div>
                      <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base ">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="bg-gray-900 text-white py-16 mt-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  150+
                </div>
                <div className="text-gray-300">Active Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  €2M+
                </div>
                <div className="text-gray-300">Trade Facilitated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  50+
                </div>
                <div className="text-gray-300">Partnerships</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  10+
                </div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
