import ServiceCard from "@/components/ServiceCard";
import customsImg from "@/assets/service-customs.jpg";
import consultancyImg from "@/assets/service-consultancy.jpg";
import freightImg from "@/assets/service-freight.jpg";
import transportImg from "@/assets/service-transport.jpg";
import projectImg from "@/assets/service-project.jpg";
import ecommerceImg from "@/assets/service-ecommerce.jpg";
import valueImg from "@/assets/service-value.jpg";

const Services = () => {
  const services = [
    {
      title: "Customs Clearing & Compliance",
      image: customsImg,
      features: [
        "Preparation and submission of customs documentation",
        "HS Code classification and tariff advice",
        "Duty and VAT calculation and payment assistance",
        "Handling of import/export permits, licenses, and certificates",
        "Advance rulings and customs valuation support",
      ],
    },
    {
      title: "Import & Export Consultancy",
      image: consultancyImg,
      features: [
        "Trade documentation advisory",
        "Assistance with import/export registration and compliance",
        "Guidance on regional and continental trade agreements (SADC, AfCFTA, SACU)",
        "Training and advisory on customs procedures",
        "Assistance with documentation and shipment preparation",
      ],
    },
    {
      title: "Freight Forwarding",
      image: freightImg,
      features: [
        "Coordination of international and domestic shipments (air, sea, road)",
        "Booking and tracking of cargo",
        "Consolidation and deconsolidation of shipments",
        "Route and carrier selection for cost-effective transport",
      ],
    },
    {
      title: "Transportation & Distribution",
      image: transportImg,
      features: [
        "Local and cross-border trucking",
        "Door-to-door delivery and collection",
        "Warehousing and inventory management",
      ],
    },
    {
      title: "Project Cargo & Special Handling",
      image: projectImg,
      features: [
        "Oversized, heavy-lift, or sensitive cargo handling",
        "Coordination of special permits and escorts",
      ],
    },
    {
      title: "E-Commerce & Digital Trade Support",
      image: ecommerceImg,
      features: [
        "Integration with platforms like TradeCFTA to help MSMEs list and move products",
        "Affordable shipping options for small online business",
      ],
    },
    {
      title: "Value-Added Services",
      image: valueImg,
      features: [
        "Capacity building to private sector on AfCFTA opportunities",
        "Procurement logistics coordination",
        "Insurance arrangement",
        "Real-time shipment updates",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive logistics and clearing solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
