import React, { useState } from 'react';
import './InnovationSupport.css';

const InnovationSupport = () => {
  // State to capture form data
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    funding: '',
    employees: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission and send data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend
      const response = await fetch('/api/startup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (response.ok) {
        console.log('Form data submitted successfully:', formData);
        // Optionally: you can display success message or update the UI with response data

        // Clear form after submission
        setFormData({
          companyName: '',
          industry: '',
          funding: '',
          employees: '',
        });
      } else {
        console.error('Error submitting form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="innovationsupport" style={{ marginLeft: '15px' }}>
      <h2>Innovation Support</h2>
      <p>Welcome to the Unified AYUSH Startup Registration System(UASRS) Support .</p>

      {/* Form for submitting startup data */}
      <form className="startup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="industry">Industry:</label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="funding">Funding:</label>
          <input
            type="number"
            id="funding"
            name="funding"
            value={formData.funding}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="employees">Number of Employees:</label>
          <input
            type="number"
            id="employees"
            name="employees"
            value={formData.employees}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InnovationSupport;
