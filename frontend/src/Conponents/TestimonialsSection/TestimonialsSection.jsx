import React from 'react';
import './TestimonialsSection.css';
function TestimonialsSection() {

  const Testimonials = [
    {
      id:'1',
      img:"https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg",
      name:"Daniel Clifford",
      titles:'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.'
    },

    {
      id:'2',
      img:"https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg",
      name:"Kira Whittle",
      titles:'The team was very supportive and kept me motivated'
    },

    {
      id:'3',
      img:"https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg",
      name:'Jeanette Harmon',
      titles:'Such a life-changing experience. Highly recommended!'
    }
  ]


  console.log(Testimonials)
  return (
    <>
    <h2>Testimonials</h2>
    <section className="testimonials">

      {
        Testimonials.map((ele, id)=>{
         return( <div className="testimonial-box" key={id}>
         <img src={ele.img} alt="Testimonial 1" />
         <h2>{ele.name}</h2>
         <p>{ele.titles}</p>
         {/* <blockquote>Testimonial 1 Quote</blockquote> */}
       </div>)
        })
      }
      {/* <div className="testimonial-box">
        <img src="path/to/testimonial-image-1.jpg" alt="Testimonial 1" />
        <h2>Testimonial 1 Name</h2>
        <p>Testimonial 1 Title</p>
        <blockquote>Testimonial 1 Quote</blockquote>
      </div> */}
      {/* <div className="testimonial-box">
        <img src="path/to/testimonial-image-2.jpg" alt="Testimonial 2" />
        <h2>Testimonial 2 Name</h2>
        <p>Testimonial 2 Title</p>
        <blockquote>Testimonial 2 Quote</blockquote>
      </div> */}
      {/* <div className="testimonial-box">
        <img src="path/to/testimonial-image-3.jpg" alt="Testimonial 3" />
        <h2>Testimonial 3 Name</h2>
        <p>Testimonial 3 Title</p>
        <blockquote>Testimonial 3 Quote</blockquote>
      </div> */}
    </section>
    </>
  );
}

export default TestimonialsSection;
