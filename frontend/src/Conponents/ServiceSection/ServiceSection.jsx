import React from 'react';
import './ServiceSection.css';

function ServicesSection() {
  return (
    <section className="services">
      <div className="service-box">
        <img src="path/to/service-image-1.jpg" alt="Service 1" />
        <h2>Service 1 Title</h2>
        <p>Service 1 Description</p>
      </div>
      <div className="service-box">
        <img src="path/to/service-image-2.jpg" alt="Service 2" />
        <h2>Service 2 Title</h2>
        <p>Service 2 Description</p>
      </div>
      <div className="service-box">
        <img src="path/to/service-image-3.jpg" alt="Service 3" />
        <h2>Service 3 Title</h2>
        <p>Service 3 Description</p>
      </div>
    </section>
  );
}

export default ServicesSection;
