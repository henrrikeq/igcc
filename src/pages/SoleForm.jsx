import React, { useState } from 'react';

const SoleForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    occupation: '',
    otherOccupation: '',
    productInterest: '',
    otherProduct: '',
    telephone: '',
    email: '',
    website: '',
    streetAddress: '',
    digitalAddress: '',
    postalAddress: '',
    state: '',
    country: '',
    declarationName: ''
  });

  const occupations = [
    'Student',
    'Researcher',
    'Teacher/Lecturer/Professor',
    'Other'
  ];

  const products = [
    'Food & Beverages',
    'Administration Support',
    'Agriculture, Forestry & Fishing',
    'Art and Recreation',
    'Construction',
    'Education & Training',
    'Electricity, Gas & Water',
    'Financial Services',
    'Healthcare & Medical Supplies',
    'Telecommunications & Media',
    'Manufacturing',
    'Mining',
    'Scientific & Technical',
    'Public Safety',
    'Real Estate',
    'Transport',
    'Warehousing',
    'Wholesale Trade',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can integrate API submission logic
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">SOLE MEMBERSHIP REGISTRATION FORM</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block font-medium">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Occupation */}
        <div>
          <label className="block font-medium">Occupation:</label>
          <select
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select Occupation</option>
            {occupations.map((occ, idx) => (
              <option key={idx} value={occ}>{occ}</option>
            ))}
          </select>
          {formData.occupation === 'Other' && (
            <input
              type="text"
              name="otherOccupation"
              value={formData.otherOccupation}
              onChange={handleChange}
              placeholder="Specify Other"
              className="w-full border rounded p-2 mt-2"
            />
          )}
        </div>

        {/* Product/Service Interest */}
        <div>
          <label className="block font-medium">Main Product/Services of Interest:</label>
          <select
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select Product/Service</option>
            {products.map((prod, idx) => (
              <option key={idx} value={prod}>{prod}</option>
            ))}
          </select>
          {formData.productInterest === 'Other' && (
            <input
              type="text"
              name="otherProduct"
              value={formData.otherProduct}
              onChange={handleChange}
              placeholder="Specify Other"
              className="w-full border rounded p-2 mt-2"
            />
          )}
        </div>

        {/* Contact Info */}
        <div>
          <label className="block font-medium">Telephone:</label>
          <input
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Company Website:</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Business Address */}
        <h3 className="text-xl font-semibold mt-4">BUSINESS ADDRESS/LOCATION</h3>
        <div>
          <label className="block font-medium">Street Address:</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium">Digital Address:</label>
          <input
            type="text"
            name="digitalAddress"
            value={formData.digitalAddress}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium">Postal Address:</label>
          <input
            type="text"
            name="postalAddress"
            value={formData.postalAddress}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium">State/Region:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium">Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Declaration */}
        <h3 className="text-xl font-semibold mt-4">DECLARATION</h3>
        <p className="mb-2">
          I acknowledge that the information provided is true and accurate.<br/>
          I acknowledge that the Ireland-Ghana Chamber of Commerce reserves the right to carry out a background check on our company.<br/>
          I agree to be bound by the chamber’s Regulations and Code of Conduct.<br/>
          Kindly provide your full name in lieu of signature.
        </p>
        <input
          type="text"
          name="declarationName"
          value={formData.declarationName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border rounded p-2"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SoleForm;
