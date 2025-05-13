import React from 'react';

type Testimonial = {
  name: string;
  initials: string;
  role: string;
  location: string;
  rating: number;
  content: string;
  delay?: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Ahmed Khan",
    initials: "AK",
    role: "Business Owner",
    location: "Karachi",
    rating: 5,
    content: "I've been renting the classic Mehran for my business operations for years. The reliability and cost-effectiveness are unmatched. Mehran Shah Autos provides exceptional service and the vehicles are always well-maintained."
  },
  {
    name: "Sana Ali",
    initials: "SA",
    role: "Corporate Executive",
    location: "Lahore",
    rating: 4.5,
    content: "Our company leases a fleet of vehicles from Mehran Shah Autos. Their corporate solutions are comprehensive, and the dedicated account manager makes everything seamless. Highly recommended for businesses!",
    delay: 100
  },
  {
    name: "Malik Hassan",
    initials: "MH",
    role: "Family Man",
    location: "Islamabad",
    rating: 5,
    content: "Rented an SUV for our family trip to northern areas. The vehicle was in perfect condition, and the child seats were a great addition. The service was prompt, and the rates were very reasonable. Will definitely use again!",
    delay: 200
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Customer Testimonials</h2>
          <p className="text-lg max-w-2xl mx-auto">What our clients say about our services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-secondary-light p-6 rounded-lg animate-on-scroll"
              data-delay={testimonial.delay || 0}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="font-medium text-secondary">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <div className="text-sm opacity-80">{testimonial.role}, {testimonial.location}</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-3">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <i className="fas fa-star-half-alt"></i>
                )}
              </div>
              <p className="italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
