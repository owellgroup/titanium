import teamImg from "@/assets/about-team.jpg";
import operationsImg from "@/assets/about-operations.jpg";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    "Specialized knowledge in international trade law and policy",
    "Focus on empowering MSMEs to access regional markets",
    "Expertise in SACU, SADC-FTA, Tripartite-FTA, and AfCFTA",
    "Global market access through EPAs and China market",
    "Seamless coordination of all logistics operations",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Your Namibian logistics partner with specialized knowledge in international trade
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Titanium Logistics is a Namibian company with specialized knowledge in international trade law and policy, 
              logistics and freight services simplifying import and export processes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in customs clearing, trade advisory, freight forwarding, and supply chain coordination for 
              importers and exporters, with a special focus on empowering Micro, Small, and Medium Enterprises (MSMEs) 
              to access regional markets such as SACU, SADC-FTA, Tripartite-FTA, AfCFTA, and other global markets such 
              as European Economic Partnership Agreements (EPAs), China market. Our aim is to efficiently facilitate 
              compliance to unlock preferential trade benefits.
            </p>
          </div>

          {/* Image and Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl group">
              <img
                src={teamImg}
                alt="Our Team"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Expertise</h2>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Operations Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl mb-16 group">
            <img
              src={operationsImg}
              alt="Our Operations"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Commitment</h3>
                <p className="text-lg opacity-90">
                  We facilitate smooth, compliant, and cost-effective movement of goods by air, sea, or road, 
                  helping businesses operate with confidence. Whether it's coordinating container shipments, 
                  preparing customs documentation, or loading a truck for cross-border delivery, our team 
                  ensures every step runs seamlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Slogan Section removed per request */}
        </div>
      </section>
    </div>
  );
};

export default About;
