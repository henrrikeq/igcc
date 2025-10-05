import React, { useState } from "react";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    membershipPlan: "",
    structure: "",
    registrationNumber: "",
    employees: "",
    productService: "",
    telephone: "",
    email: "",
    website: "",
    streetAddress: "",
    digitalAddress: "",
    postalAddress: "",
    region: "",
    country: "",
    title: "",
    repName: "",
    position: "",
    repTelephone: "",
    declarationName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-8">
          MEMBERSHIP REGISTRATION FORM
        </h2>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* COMPANY INFORMATION */}
          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY INFORMATION</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium">Full name of company</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                  required
                />
              </div>

              <div>
                <label className="block font-medium">Choose membership plan</label>
                <select
                  name="membershipPlan"
                  value={formData.membershipPlan}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                  required
                >
                  <option value="">Select Plan</option>
                  <option value="Sole">Sole</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                  <option value="Platinum">Platinum</option>
                </select>
              </div>

              <div>
                <label className="block font-medium">Structure of company</label>
                <select
                  name="structure"
                  value={formData.structure}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                  required
                >
                  <option value="">Select Structure</option>
                  <option value="Sole Proprietor">Sole Proprietor</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Limited Liability">Limited Liability</option>
                  <option value="Corporation">Corporation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-medium">
                  Company registration/Incorporation Number
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label className="block font-medium">Number of employees</label>
                <input
                  type="number"
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label className="block font-medium">Main Product/Services</label>
                <select
                  name="productService"
                  value={formData.productService}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                >
                  <option value="">Select Category</option>
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

              <div>
                <label className="block font-medium">Office telephone</label>
                <input
                  type="text"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label className="block font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label className="block font-medium">Company Website</label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
            </div>
          </div>

          {/* BUSINESS ADDRESS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">BUSINESS ADDRESS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium">Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label className="block font-medium">Digital Address</label>
                <input
                  type="text"
                  name="digitalAddress"
                  value={formData.digitalAddress}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label className="block font-medium">Postal Address</label>
                <input
                  type="text"
                  name="postalAddress"
                  value={formData.postalAddress}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label className="block font-medium">State/Region</label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label className="block font-medium">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
            </div>
          </div>

          {/* CEO/COMPANY REP DETAILS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CEO/COMPANY REP DETAILS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label className="block font-medium">Full Name</label>
                <input
                  type="text"
                  name="repName"
                  value={formData.repName}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label className="block font-medium">Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              <div>
                <label className="block font-medium">Telephone</label>
                <input
                  type="text"
                  name="repTelephone"
                  value={formData.repTelephone}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
            </div>
          </div>

          {/* DECLARATION */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DECLARATION</h3>
            <ul className="text-gray-700 list-disc pl-5 space-y-2 mb-4">
              <li>
                I/We acknowledge that the information provided is true and accurate
              </li>
              <li>
                I/We acknowledge that the Ireland-Ghana Chamber of Commerce reserves the right to carry out a background check on our company
              </li>
              <li>
                I/We agree to be bound by the chamber’s Regulations and Code of Conduct
              </li>
            </ul>

            <label className="block font-medium">
              Kindly provide your full name in lieu of signature
            </label>
            <input
              type="text"
              name="declarationName"
              value={formData.declarationName}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              required
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MembershipForm;
