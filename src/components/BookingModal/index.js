import React, { useState } from "react";
import "./index.css";

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: 1,
    checkIn: "",
    checkOut: "",
    accommodation: "Luxury Tent",
    specialRequests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Submitted! We'll contact you soon.");
    onClose(); // Close the modal after submitting
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>&times;</button>

        {/* Modal Heading */}
        <h2 className="modal-title">Book Your Maasai Mara Adventure</h2>
        <p className="modal-subtitle">
          Fill in your details and our team will get in touch with you.
        </p>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              placeholder="Enter your full name" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Enter your phone number" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Number of Guests</label>
            <input 
              type="number" 
              name="guests" 
              value={formData.guests} 
              onChange={handleChange} 
              min="1" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Check-in Date</label>
            <input 
              type="date" 
              name="checkIn" 
              value={formData.checkIn} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Check-out Date</label>
            <input 
              type="date" 
              name="checkOut" 
              value={formData.checkOut} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Preferred Accommodation</label>
            <select 
              name="accommodation" 
              value={formData.accommodation} 
              onChange={handleChange} 
              required
            >
              <option value="Luxury Tent">Luxury Tent</option>
              <option value="Safari Lodge">Safari Lodge</option>
              <option value="Budget Camp">Budget Camp</option>
            </select>
          </div>

          <div className="form-group">
            <label>Special Requests (Optional)</label>
            <textarea 
              name="specialRequests" 
              value={formData.specialRequests} 
              onChange={handleChange} 
              placeholder="Any special requirements?" 
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
