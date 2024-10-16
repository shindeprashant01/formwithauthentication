// // SignupForm.js
// import React, { useState } from 'react';
// import './signUpForms.css'

// const SignupForm = () => {
//   const [formData, setFormData] = useState({ email: '', phone: '' });
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.email.includes('@')) newErrors.email = 'Invalid email address';
//     if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = 'Phone number must be 10 digits';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       // Submit the form
//       console.log('Form submitted:', formData);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
//       {errors.email && <p>{errors.email}</p>}

//       <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
//       {errors.phone && <p>{errors.phone}</p>}

//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignupForm;

import React, { useState } from "react";
// import './FormComponent.css'
import './signUpForms.css'
import Button from "../Button/button";
import Navbar from "../Navbar/navbar";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Regular expressions for email and phone number validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.name) {
      validationErrors.name = "Name is required.";
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      validationErrors.email = "Please enter a valid email.";
    }

    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      validationErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.subject) {
      validationErrors.subject = "Subject is required.";
    }

    if (!formData.message) {
      validationErrors.message = "Message is required.";
    }

    // If there are validation errors, set them
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // No errors - process the form data
    alert("Form submitted successfully!");
    console.log("form sumbited successfully", formData);
    

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <Navbar/>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            className="text-area-form"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <Button/>

        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
};

export default FormComponent;

