import React from 'react';

export default function About() {
  const milestones = [
    {
      year: "2000",
      title: "Foundation",
      description: "Founding of Mehran Shah Autos as a small rental service specializing in Suzuki Mehran vehicles.",
      icon: "fas fa-flag"
    },
    {
      year: "2010",
      title: "Expansion",
      description: "Expanded fleet to include luxury and commercial vehicles, becoming a full-service automotive provider.",
      icon: "fas fa-star"
    },
    {
      year: "2015",
      title: "Corporate Division",
      description: "Established corporate leasing division, partnering with major businesses across Pakistan.",
      icon: "fas fa-handshake"
    },
    {
      year: "Today",
      title: "Market Leader",
      description: "Leading automotive solutions provider with a nationwide presence, blending heritage with innovation.",
      icon: "fas fa-rocket",
      last: true
    }
  ];

  const stats = [
    { number: "300+", label: "Vehicles in Fleet", icon: "fas fa-car" },
    { number: "10,000+", label: "Happy Customers", icon: "fas fa-users" },
    { number: "20+", label: "Years of Service", icon: "fas fa-award" }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-on-scroll">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary mb-4">Our Legacy</h2>
            <div className="font-accent text-xl text-accent-dark italic mb-6">
              "Reviving Legacy, Driving Innovation"
            </div>
            <p className="text-neutral-800 mb-4">
              Mehran Shah Autos has been a trusted name in Pakistan's automotive industry for over two decades. Our journey began with the iconic Suzuki Mehran, a symbol of reliability and affordability that resonated with millions of Pakistanis.
            </p>
            <p className="text-neutral-800 mb-6">
              Today, we've expanded our services beyond the beloved Mehran to offer comprehensive automotive solutions including rentals, leasing, and maintenance services. We bridge the gap between nostalgic automotive heritage and modern innovation, providing you with vehicles that meet your needs while honoring our roots.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-3">
                    <i className={`${stat.icon} text-xl text-secondary`}></i>
                  </div>
                  <div>
                    <div className="font-semibold">{stat.number}</div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-on-scroll" data-delay="200">
            {/* Legacy Timeline */}
            <div className="bg-neutral-100 rounded-lg p-6 shadow-md">
              <h3 className="font-heading font-semibold text-xl text-secondary mb-4">Our Journey</h3>
              
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <i className={`${milestone.icon} text-white`}></i>
                      </div>
                      {!milestone.last && <div className="w-1 h-full bg-primary"></div>}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{milestone.year}</h4>
                      <p className="text-neutral-800">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
