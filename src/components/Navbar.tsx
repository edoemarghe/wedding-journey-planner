import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  const navLinks = [
    { to: "/program", label: "Programma" },
    { to: "/accommodation", label: "Alloggi" },
    { to: "/registry", label: "Lista Nozze" },
    { to: "/rsvp", label: "RSVP" },
  ];

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => 
            `text-gray-600 hover:text-wedding-sage transition-colors duration-200 ${
              isActive ? 'text-wedding-sage' : ''
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );

  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink to="/" className="font-display text-2xl text-wedding-sage">
            <img 
              src="/lovable-uploads/c21a8106-a13a-467b-ad08-f40710950a50.png" 
              alt="Edo & Marghe"
              className="h-8"
            />
          </NavLink>
          
          <div className="hidden md:flex space-x-8">
            <NavLinks />
          </div>

          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="flex flex-col items-center space-y-4 py-6">
                  <NavLinks />
                  <DrawerClose asChild>
                    <Button variant="ghost">Chiudi</Button>
                  </DrawerClose>
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