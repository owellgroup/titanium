import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Our Services" },
    { path: "/about", label: "Who we are" },
    { path: "/book", label: "Book Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Titanium Logistics" className="h-16 md:h-20 object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 ${
                  isActive(item.path)
                    ? "text-primary after:scale-x-100"
                    : "text-foreground hover:text-primary after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-primary bg-muted"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
