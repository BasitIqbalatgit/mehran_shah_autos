import { cn } from "@/lib/utils";

type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  link: string;
  delay?: number;
};

const services: ServiceItem[] = [
  {
    title: "Car Rental",
    description: "Flexible daily, weekly and monthly rental options for all your transportation needs.",
    icon: "fas fa-car",
    link: "#vehicles"
  },
  {
    title: "Car Leasing",
    description: "Long-term leasing solutions for individuals and businesses with maintenance included.",
    icon: "fas fa-chart-line",
    link: "#pricing",
    delay: 100
  },
  {
    title: "Maintenance",
    description: "Professional maintenance services with genuine Suzuki parts to keep your vehicle performing at its best.",
    icon: "fas fa-tools",
    link: "#contact",
    delay: 200
  },
  {
    title: "Corporate Solutions",
    description: "Tailored fleet management and transportation solutions for businesses of all sizes.",
    icon: "fas fa-handshake",
    link: "#contact",
    delay: 300
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary mb-3">Our Premium Services</h2>
          <p className="text-lg text-neutral-800 max-w-2xl mx-auto">Comprehensive automotive solutions tailored to your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover transition duration-300 service-card animate-on-scroll"
              data-delay={service.delay || 0}
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4 mx-auto service-icon transition duration-300">
                  <i className={cn(service.icon, "text-2xl text-secondary")}></i>
                </div>
                <h3 className="font-heading font-semibold text-xl text-secondary text-center mb-3">{service.title}</h3>
                <p className="text-neutral-800 text-center">{service.description}</p>
              </div>
              <div className="px-6 pb-6 pt-2 text-center">
                <a href={service.link} className="inline-block text-accent hover:text-accent-dark font-medium transition">
                  Learn More <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
