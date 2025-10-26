import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const TopNav = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
          <a 
            href="tel:+264811444465" 
            className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105 group"
          >
            <Phone className="h-4 w-4 animate-pulse" />
            <span className="text-sm">+264 81 144 4465</span>
          </a>
          <a 
            href="mailto:info@titaniumclearing.africa" 
            className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105 group"
          >
            <Mail className="h-4 w-4 animate-pulse" />
            <span className="text-sm">info@titaniumclearing.africa</span>
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="#" className="hover:scale-110 transition-transform duration-300" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-300" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-300" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-300" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
