import React from "react";
import cert1 from "../../assets/certificate-1.png";
import cert2 from "../../assets/certificate-2.png";
import cert3 from "../../assets/certificate-3.png";
import cert4 from "../../assets/certificate-4.png";

const certImages = [cert1, cert2, cert3, cert4];

const ResponsibleGamblingCerts: React.FC = () => (
  <section className="bg-[#181A29] py-16 px-2">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-2 uppercase tracking-wide">
        RESPONSIBLE GAMBLING
      </h2>
      <p className="text-white/80 text-center mb-10 max-w-3xl mx-auto text-sm md:text-base">
        BastaPlay Works Closely With Its Regulatory Bodies And Licensees To
        Deliver A World – Class Bingo Experience At All Times. As Part Of Its
        Commitment To Innovation And Excellence, BastaPlay Is Constantly
        Anticipating And Embracing Changes In Regulations And Licenses In Order
        To Deliver New Market Opportunities And Operate At The Highest Level.
      </p>
      <div className=" p-2 grid grid-cols-2 md:grid-cols-4 gap-6">
        {certImages.map((img, idx) => (
          <div
            key={idx}
            className=" rounded-lg flex items-center justify-center"
          >
            <img
              src={img}
              alt={`Certificate ${idx + 1}`}
              className="md:max-h-80 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResponsibleGamblingCerts;
