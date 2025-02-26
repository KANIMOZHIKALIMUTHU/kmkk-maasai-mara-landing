import React from "react";
import "./index.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-container">
      <h2 className="pricing-title">Costs</h2>
      <div className="pricing-details">
        <div className="pricing-card">
          <h3>Standard Pricing</h3>
          <p><strong>Cost per adult (Ex Nairobi):</strong> USD 1582 (Incl. local taxes)</p>
          <p><strong>Cost per child (4 to 9 years, Ex Nairobi):</strong> USD 1400 (Incl. taxes)</p>
        </div>

        <div className="pricing-card offer">
          <h3>Special Independence Day Offer 🎉</h3>
          <p>Valid for bookings made on or before August 14th, 2023</p>
          <p><strong>Cost per adult:</strong> USD 1322</p>
          <p><strong>Cost per child:</strong> USD 1127</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
