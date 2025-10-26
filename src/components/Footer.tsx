import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Titanium Logistics" className="h-24 mb-4 brightness-0 invert" />
            <p className="text-sm mb-4 opacity-90">
              At Titanium Logistics, we handle the logistics while you focus on growing your business.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline opacity-90 hover:opacity-100">Home</Link></li>
              <li><Link to="/services" className="hover:underline opacity-90 hover:opacity-100">Our Services</Link></li>
              <li><Link to="/about" className="hover:underline opacity-90 hover:opacity-100">Who we are</Link></li>
              <li><Link to="/book" className="hover:underline opacity-90 hover:opacity-100">Book Us</Link></li>
              <li><Link to="/contact" className="hover:underline opacity-90 hover:opacity-100">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Customs Clearing & Compliance</li>
              <li>Import & Export Consultancy</li>
              <li>Freight Forwarding</li>
              <li>Transportation & Distribution</li>
              <li>Project Cargo Handling</li>
              <li>E-Commerce Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="opacity-90">Erf 3553, Nangolo Mbumba Avenue, Walvis Bay, Namibia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+264811444465" className="opacity-90 hover:opacity-100">+264 81 144 4465</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@titaniumclearing.africa" className="opacity-90 hover:opacity-100">info@titaniumclearing.africa</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Titanium Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
