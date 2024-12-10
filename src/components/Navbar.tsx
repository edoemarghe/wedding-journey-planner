import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { to: "/program", label: "Programma" },
    { to: "/accommodation", label: "Alloggi" },
    { to: "/registry", label: "Lista Nozze" },
    { to: "/rsvp", label: "RSVP" },
  ];

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path);
    setIsOpen(false); // Close drawer after navigation
  };

  const NavLinks = ({ onNavigate }: { onNavigate?: (path: string) => void }) => (
    <>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(link.to);
            if (onNavigate) onNavigate(link.to);
          }}
          className={({ isActive }) => 
            `text-gray-600 hover:text-wedding-sage transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-wedding-sage after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
              isActive ? 'text-wedding-sage after:scale-x-100' : ''
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );

  return (
    <nav className="bg-wedding-cream/95 backdrop-blur-md fixed w-full z-50 border-b border-wedding-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <NavLink 
            to="/" 
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
            className="font-display text-3xl text-gray-900 italic hover:text-wedding-sage transition-colors duration-300"
          >
            <span>Edo & Marghe</span>
          </NavLink>
          
          <div className="hidden md:flex space-x-12">
            <NavLinks />
          </div>

          <div className="md:hidden">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-wedding-sage/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="flex flex-col items-center space-y-6 py-8 bg-wedding-cream">
                  <NavLinks />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;