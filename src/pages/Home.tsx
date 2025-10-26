import HeroSlider from "@/components/HeroSlider";
import { Package, Globe, TruckIcon, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Package,
      title: "Customs Clearing",
      description: "Expert handling of all customs documentation and compliance requirements",
    },
    {
      icon: Globe,
      title: "International Trade",
      description: "Access to regional and global markets with specialized trade advisory",
    },
    {
      icon: TruckIcon,
      title: "Freight Services",
      description: "Seamless coordination of air, sea, and road transportation",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Professional service backed by extensive industry knowledge",
    },
  ];

  return (
    <div>
      <HeroSlider />

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Why Choose Titanium Logistics?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for all logistics and clearing needs in Namibia and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Logistics?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let us handle the complexity of customs and freight while you focus on what matters most - growing your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 transition-all hover:scale-105">
                Book Our Services
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10 transition-all hover:scale-105">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
