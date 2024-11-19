import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink to="/" className="font-display text-2xl text-wedding-gold">
            E&M
          </NavLink>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/program" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Programma
            </NavLink>
            <NavLink to="/accommodation" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Alloggi
            </NavLink>
            <NavLink to="/registry" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Lista Nozze
            </NavLink>
            <NavLink to="/rsvp" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              RSVP
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;