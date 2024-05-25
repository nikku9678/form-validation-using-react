import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormInput.css';  

const FormInput = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'firstName':
        if (!value) error = 'First Name is required';
        break;
      case 'lastName':
        if (!value) error = 'Last Name is required';
        break;
        case 'username':
            if (!value) {
              error = 'Username is required';
            } else if (value.length < 5) {
              error = 'Username must be at least 5 characters long';
            }
            break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = 'Invalid email address';
        }
        break;
        case 'password':
            if (!value) {
              error = 'Password is required';
            } else if (
              !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
            ) {
              error =
                'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character';
            }
            break;
      case 'phoneNo':
        if (!value) {
          error = 'Phone Number is required';
        } else if (!/^\+\d{1,3}\s?\d{4,14}(?:x.+)?$/i.test(value)) {
          error = 'Invalid phone number';
        }
        break;
      case 'country':
        if (!value) error = 'Country is required';
        break;
      case 'city':
        if (!value) error = 'City is required';
        break;
      case 'panNo':
        if (!value) {
          error = 'Pan No. is required';
        } else if (!/[A-Z]{5}[0-9]{4}[A-Z]{1}/i.test(value)) {
          error = 'Invalid PAN number';
        }
        break;
      case 'aadharNo':
        if (!value) {
          error = 'Aadhar No. is required';
        } else if (!/^\d{12}$/i.test(value)) {
          error = 'Invalid Aadhar number';
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validate = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (errors[field]) {
        newErrors[field] = errors[field];
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success', { state: { formData } });
    }
  };

  return (
   <div className="form">
    <div className="header">
        <h2>Form Validation</h2>
    </div>
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group password-group">
        <label>Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <button type="button" className="show-hide-btn" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div className="form-group">
        <label>Phone No:</label>
        <input
          type="text"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
      </div>
      <div className="form-group">
        <label>Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        {errors.country && <span className="error">{errors.country}</span>}
      </div>
      <div className="form-group">
        <label>City:</label>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        >
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="New York">New York</option>
          required
        </select>
        {errors.city && <span className="error">{errors.city}</span>}
      </div>
      <div className="form-group">
        <label>Pan No:</label>
        <input
          type="text"
          name="panNo"
          value={formData.panNo}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.panNo && <span className="error">{errors.panNo}</span>}
      </div>
      <div className="form-group">
        <label>Aadhar No:</label>
        <input
          type="text"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.aadharNo && <span className="error">{errors.aadharNo}</span>}
      </div>
      <div className='btn'>
      <button className='submit' type="submit" disabled={Object.keys(errors).some((key) => errors[key])}>
        Submit
      </button>
      </div>
    </form>
   </div>
  );
};

export default FormInput;
