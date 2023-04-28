import React from 'react';
import './TestimonialsSection.css';
function TestimonialsSection() {
  return (
    <section className="testimonials">
      <div className="testimonial-box">
        <img src="path/to/testimonial-image-1.jpg" alt="Testimonial 1" />
        <h2>Testimonial 1 Name</h2>
        <p>Testimonial 1 Title</p>
        <blockquote>Testimonial 1 Quote</blockquote>
      </div>
      <div className="testimonial-box">
        <img src="path/to/testimonial-image-2.jpg" alt="Testimonial 2" />
        <h2>Testimonial 2 Name</h2>
        <p>Testimonial 2 Title</p>
        <blockquote>Testimonial 2 Quote</blockquote>
      </div>
      <div className="testimonial-box">
        <img src="path/to/testimonial-image-3.jpg" alt="Testimonial 3" />
        <h2>Testimonial 3 Name</h2>
        <p>Testimonial 3 Title</p>
        <blockquote>Testimonial 3 Quote</blockquote>
      </div>
    </section>
  );
}

export default TestimonialsSection;
