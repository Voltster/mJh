import React from "react";
import SecondaryButton from "./SecondaryButton";

const Card = () => {
  const cards = [
    {
      title: "Contract Manufacturing",
      description:
        "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      image:
        "https://img.freepik.com/free-photo/examining-sample-with-microscope_1098-18424.jpg?t=st=1721333010~exp=1721336610~hmac=4f3ac3800c13f8109b56f9059b0659d3aac60d7f09d8d5a9d13c4feac65d54a6&w=996",
    },
    {
      title: "Accredited Contract ",
      description:
        "Professional business coach with advanced experience on growth and business scaling.",
      image:
        "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?t=st=1721332940~exp=1721336540~hmac=6504e3aae452e63e60c009b45d8856d61bdec45343b80d688874c92fc75f6b0a&w=996",
    },
    {
      title: "Highly Qualified Team",
      description:
        "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      image:
        "https://img.freepik.com/free-photo/lab-technician-mask-examines-test-tubes-utilizes-microscope-analysis_157027-2355.jpg?t=st=1721332986~exp=1721336586~hmac=285de4c4e1e2e27d04497a2b3279c63e8682083d441f1e68d0d976016227a69b&w=1060",
    },
  ];

  return (
    <section className="p-8 ">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className=" rounded-lg shadow-lg overflow-hidden group cursor-pointer"
            data-aos="zoom-in-up" data-aos-delay="200"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-700 mb-4">{card.description}</p>
              <SecondaryButton>Know More</SecondaryButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
