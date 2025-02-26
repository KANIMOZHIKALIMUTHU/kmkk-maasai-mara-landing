import React from "react";
import "./index.css";

const Payment = () => {
  return (
    <section id="payment" className="payment-section">
      <div className="container">
        <h2 className="section-title">Secure Your Booking</h2>
        <p className="section-description">
          Choose a convenient payment option to confirm your Maasai Mara adventure.
        </p>

        <div className="payment-options">
          <div className="payment-box">
            <h3>Credit / Debit Card</h3>
            <p>Pay securely using Visa, MasterCard, or Amex.</p>
            <button className="pay-button">Proceed to Payment</button>
          </div>

          <div className="payment-box">
            <h3>Bank Transfer</h3>
            <p>Transfer directly to our official bank account.</p>
            <button className="pay-button">View Bank Details</button>
          </div>

          <div className="payment-box">
            <h3>Mobile Money</h3>
            <p>Use M-Pesa, Airtel Money, or other supported wallets.</p>
            <button className="pay-button">Pay via Mobile</button>
          </div>
        </div>

        {/* Payment Terms and Cancellation Policy */}
        <div className="payment-terms">
          <h3>Payment Terms & Cancellation Policy</h3>
          <ul>
            <li>💰 <strong>100%</strong> of the tour cost at the time of booking</li>
            <li>🔄 <strong>50%</strong> of the tour cost will be credited if canceled **60 days** before the travel date</li>
            <li>🚫 <strong>No refund</strong> if cancelled **within 30 days** of the travel date</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Payment;
