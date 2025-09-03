import React from "react";

const AdmissionInfo = () => {
  return (
    <section 
      id="admission" 
      className="p-8 bg-transparent text-center"
    >
      <h2 className="text-2xl font-bold text-red-600">Special Offer</h2>
      <p className="mt-3 text-lg">
        Pay only <span className="font-bold text-green-700">₹100</span> and get admission free with 
        <span className="font-bold"> Bag & Books FREE</span>
      </p>
    </section>
  );
};

export default AdmissionInfo;
