import React from "react";
import "./ServiceSection.css";

function ServicesSection() {
  const services = [
    {
      id: "1",
      img: "../Images/learning-skills.svg",
      heading: "Academic Skill Analysis",
      description:
        "Get in-depth subject wise analysis and analysis of aptitude and reasoning skills.",
    },

    {
      id: "2",
      img: "../Images/scorecard.svg",
      heading: "Scorecard",
      description:
        "Get your all-India percentile, state percentile, city percentile and percentage score.",
    },

    {
      id: "3",
      img: "../Images/personalised-counselling.svg",
      heading: "Personalised Counselling",
      description:
        "After the test, you will also receive personalised counselling from experts on how to work and improve your focus areas.",
    },
  ];
  return (
    <>
      <h2>Services</h2>
      <section className="services">
        {services.map((ser, id) => {
          return (
            <div className="service-box" key={id}>
              <img src={ser.img} alt="Service 1" />
              <h2>{ser.heading}</h2>
              <p>{ser.description}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default ServicesSection;
