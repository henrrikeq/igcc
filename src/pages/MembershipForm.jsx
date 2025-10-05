import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MembershipRegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    membershipPlan: "",
    companyStructure: "",
    registrationNumber: "",
    employees: "",
    mainProduct: "",
    officePhone: "",
    email: "",
    website: "",
    streetAddress: "",
    digitalAddress: "",
    postalAddress: "",
    region: "",
    country: "",
    title: "",
    fullName: "",
    position: "",
    telephone: "",
    declarationName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center mb-6 uppercase text-gray-800">
          Membership Registration Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* COMPANY INFORMATION */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Company Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-1">
                  Full name of company:
                </label>
                <input
                  type="text"
                  name="companyName"
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">
                  Choose membership plan:
                </label>
                <select
                  name="membershipPlan"
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  required
                >
                  <option value="">Select</option>
                  <option>Sole</option>
                  <option>Silver</option>
                  <option>Gold</option>
                  <option>Platinum</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-600 mb-1">
                  Structure of company:
                </label>
                <select
                  name="companyStructure"
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">Select</option>
                  <option>Sole Proprietor</option>
                  <option>Partnership</option>
                  <option>Limited Liability</option>
                  <option>Corporation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-600 mb-1">
                  Company registration/Incorporation Number:
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">
                  Number of employees:
                </label>
                <input
                  type="number"
                  name="employees"
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">
                  Main Product/Services:
                </label>
                <select
                  name="mainProduct"
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">Select</option>
                  <option>Food & Beverages</option>
                  <option>Administration Support</option>
                  <option>Agriculture, Forestry & Fishing</option>
                  <option>Art and Recreation</option>
                  <option>Construction</option>
                  <option>Education & Training</option>
                  <option>Electricity, Gas & Water</option>
                  <option>Financial Services</option>
                  <option>Healthcare & Medical Supplies</option>
                  <option>Telecommunications & Media</option>
                  <option>Manufacturing</option>
                  <option>Mining</option>
                  <option>Scientific & Technical</option>
                  <option>Public Safety</option>
                  <option>Real Estate</option>
                  <option>Transport</option>
                  <option>Warehousing</option>
                  <option>Wholesale Trade</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* BUSINESS ADDRESS */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Business Address
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="digitalAddress"
                placeholder="Digital Address"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="postalAddress"
                placeholder="Postal Address"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="region"
                placeholder="State/Region"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          {/* CEO/COMPANY REP DETAILS */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              CEO/Company Rep Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="position"
                placeholder="Position"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="telephone"
                placeholder="Telephone"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          {/* DECLARATION */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Declaration
            </h2>
            <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
              <li>
                I/We acknowledge that the information provided is true and
                accurate.
              </li>
              <li>
                I/We acknowledge that the Ireland-Ghana Chamber of Commerce
                reserves the right to carry out a background check on our
                company.
              </li>
              <li>
                I/We agree to be bound by the chamber’s Regulations and Code of
                Conduct.
              </li>
            </ul>

            <div className="mt-4">
              <label className="block text-gray-600 mb-1">
                Kindly provide your full name in lieu of signature:
              </label>
              <input
                type="text"
                name="declarationName"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            {/* 👇 Small Button for Rules & Regulations Page */}
            <button
              type="button"
              onClick={() => navigate("/rules-and-regulations")}
              className="mt-6 text-blue-600 underline text-sm hover:text-blue-800"
            >
              View Rules & Regulations
            </button>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg mt-6"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipRegistrationForm;
