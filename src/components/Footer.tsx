import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/program", label: "Programma" },
    { to: "/accommodation", label: "Alloggi" },
    { to: "/registry", label: "Lista Nozze" },
    { to: "/rsvp", label: "RSVP" },
  ];

  return (
    <footer className="bg-wedding-cream border-t border-wedding-sage/10 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link 
            to="/" 
            className="font-display text-3xl text-gray-900 italic hover:text-wedding-sage transition-colors duration-300 mb-8 inline-block"
          >
            Edo & Marghe
          </Link>
          
          <nav className="mt-8">
            <ul className="flex flex-wrap justify-center gap-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-600 hover:text-wedding-sage transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-gray-500 mt-8 text-sm">
            © 2024 Edo & Marghe. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;