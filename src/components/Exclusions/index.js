import React from "react";
import "./index.css";

const Exclusions = () => {
  return (
    <section id="exclusions" className="exclusions-container">
      <h2 className="exclusions-title">Exclusions</h2>
      <ul className="exclusions-list">
        <li>International airfare and airport taxes.</li>
        <li>Visa fees and processing charges.</li>
        <li>Travel insurance (mandatory).</li>
        <li>Any personal expenses such as laundry, telephone calls, tips, etc.</li>
        <li>Any beverages (alcoholic/non-alcoholic) unless specified.</li>
        <li>Additional activities such as Maasai village visits, hot air balloon safaris, etc.</li>
        <li>Any meals not specified in the itinerary.</li>
        <li>Gratuities for guides and drivers.</li>
        <li>Anything not mentioned in the "Inclusions" section.</li>
      </ul>
    </section>
  );
};

export default Exclusions;
