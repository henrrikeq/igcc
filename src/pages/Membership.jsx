import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import for navigation
import Navbar from "./Navbar";
import irish from "../assets/images/irish.jpg";
import ghana from "../assets/images/ghana.jpg";

const Membership = () => {
  const images = [irish, ghana];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // ✅ Initialize navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // ✅ Handle Join Button Navigation
  const handleJoinClick = (type) => {
    if (type === "sole") {
      navigate("/soleform");
    } else {
      navigate("/form");
    }
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Membership</h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            Bridging Ireland and Ghana through strategic partnerships and
            businesses
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

      {/* Membership Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">MEMBERSHIP</h2>
          <p className="text-gray-700 leading-relaxed">
            As a bilateral chamber, we are deeply committed to creating
            opportunities to enable member businesses to connect with potential
            partners across our two nations to grow and expand all trade
            interests and start-ups. Although our bilateral engagements are
            available to all potential investors and business entities, key
            support services and benefits are exclusive to our registered
            members. Familiarize yourself with our membership categories and
            join today.
          </p>
        </div>

        <div className="space-y-10">
          {/* SOLE MEMBERSHIP */}
          <div className="bg-white p-8 rounded-2xl shadow-md max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">SOLE MEMBERSHIP</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">₵100 PER ANNUM</span>
              <button
                onClick={() => handleJoinClick("sole")}
                className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
              >
                JOIN
              </button>
            </div>
            <ul className="text-gray-700 text-left list-disc pl-5 space-y-1">
              <li>
                Reserved for individual persons, students, researchers and
                individual investors
              </li>
              <li>
                Access to bilateral networking opportunities between Ghana and
                Ireland
              </li>
              <li>Enjoy special discounts on all annual chamber events.</li>
              <li>
                Provide reliable data on trade and investment trends that
                benefit business
              </li>
              <li>
                Benefit from safety and risk advice through background checks on
                prospective business partners
              </li>
            </ul>
          </div>

          {/* SILVER MEMBERSHIP */}
          <div className="bg-white p-8 rounded-2xl shadow-md max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">SILVER MEMBERSHIP</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">₵500 PER ANNUM</span>
              <button
                onClick={() => handleJoinClick("silver")}
                className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
              >
                JOIN
              </button>
            </div>
            <ul className="text-gray-700 text-left list-disc pl-5 space-y-1">
              <li>
                Access to bilateral networking opportunities between Ghana and
                Ireland
              </li>
              <li>
                Access to member-only platforms for sharing business ideas and
                information.
              </li>
              <li>
                Enjoy special member rate discounts to all chamber events.
              </li>
              <li>Advertise business on Member-only page on Chamber website</li>
              <li>
                Promote business through events, business newsletters and on
                social media channels
              </li>
              <li>
                Access to reliable data on trade and investment trends that
                benefit business
              </li>
              <li>
                Benefit from safety and risk advice through background checks on
                prospective business partners
              </li>
            </ul>
          </div>

          {/* GOLD MEMBERSHIP */}
          <div className="bg-white p-8 rounded-2xl shadow-md max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">GOLD MEMBERSHIP</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">₵1,000 PER ANNUM</span>
              <button
                onClick={() => handleJoinClick("gold")}
                className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
              >
                JOIN
              </button>
            </div>
            <ul className="text-gray-700 text-left list-disc pl-5 space-y-1">
              <li>
                <strong>INCLUDES ALL SILVER BENEFITS PLUS:</strong>
              </li>
              <li>Discounts on all trade and investment consultations</li>
              <li>Receive free advocacy services.</li>
              <li>Enjoy two free tickets to chamber events</li>
              <li>Enjoy exclusive invitation to receptions with businesses.</li>
              <li>Priority to Council Membership and Committees</li>
              <li>
                Eligible to join trade and investment missions of the chamber to
                Ireland/Ghana
              </li>
            </ul>
          </div>

          {/* PLATINUM MEMBERSHIP */}
          <div className="bg-white p-8 rounded-2xl shadow-md max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">PLATINUM MEMBERSHIP</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">₵3,000 PER ANNUM</span>
              <button
                onClick={() => handleJoinClick("platinum")}
                className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
              >
                JOIN
              </button>
            </div>
            <ul className="text-gray-700 text-left list-disc pl-5 space-y-1">
              <li>
                <strong>INCLUDES ALL GOLD BENEFITS PLUS:</strong>
              </li>
              <li>Top priority to Council Membership and Committees</li>
              <li>
                Enjoy priority in business referrals and networking opportunities
              </li>
              <li>Contribute to business publications and newsletter</li>
              <li>Discounted advertising in chamber’s newsletter</li>
              <li>Enjoy five free tickets to chamber events.</li>
              <li>
                Eligible to join trade and investment missions of the chamber to
                Ireland/Ghana
              </li>
              <li>
                Exclusive invitation to business reception with Irish/Ghanaian
                trade delegations
              </li>
              <li>
                Priority offer to event sponsorship and hosting of chamber
                events
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
