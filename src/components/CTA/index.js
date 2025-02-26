import React, { useState } from "react";
import BookingModal from "../BookingModal";
import "./index.css";

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="cta-container">
      <div className="cta-content">
        <h2>Big Cats Week at Maasai Mara</h2>
        <p>Join us for an unforgettable wildlife experience!</p>
        <button className="btn book-btn" onClick={handleBookingClick}>
          Book Now
        </button>
      </div>

      {/* Booking Modal */}
      {isModalOpen && <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </section>
  );
};

export default CTA;
