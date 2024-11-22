import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const weddingDate = new Date("2025-07-05T16:00:00");
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();
      
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  const photos = [
    {
      url: "/lovable-uploads/64d3dca6-fc2b-4fcb-a25a-f39e45b53df5.png",
      caption: "Safari in Africa"
    },
    {
      url: "/lovable-uploads/0ba48ebd-1618-46c5-9227-3f99a0cf60c2.png",
      caption: "Avventure sulla neve in Finlandia"
    },
    {
      url: "/lovable-uploads/a7be54d1-fb14-4b22-8f9c-da22a7c42199.png",
      caption: "Aurora boreale in Lapponia"
    },
    {
      url: "/lovable-uploads/a743b6b1-cfa0-43a2-9587-edd1cb50e3f1.png",
      caption: "In barca nella baia di Ha Long"
    },
    {
      url: "/lovable-uploads/b7395aea-e2c0-4deb-8560-5f8f1b2261c8.png",
      caption: "Tra le risaie del Vietnam"
    },
    {
      url: "/lovable-uploads/18c18510-bdcd-46ee-837a-14ae0d48cc4f.png",
      caption: "Il nostro viaggio in Vietnam"
    },
    {
      url: "/lovable-uploads/d0d57ed9-fcaf-4e8a-b715-ca16eea762cb.png",
      caption: "La nostra avventura in Marocco"
    },
    {
      url: "/lovable-uploads/d2071883-5d10-4d6d-bec2-a95cca2ddb9f.png",
      caption: "Esplorando il Sudafrica"
    },
    {
      url: "/lovable-uploads/97df5096-0ab3-464e-be21-a3f2965b7511.png",
      caption: "Il nostro volo in elicottero"
    }
  ];

  return (
    <div className="min-h-screen">
      <div 
        className="h-[80vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display mb-6 text-white">
            Edoardo & Margherita
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light text-white">
            5 Luglio 2025
          </p>
          <div className="flex justify-center gap-8 text-white mb-12">
            <div>
              <div className="text-4xl font-display">{days}</div>
              <div className="text-sm">GIORNI</div>
            </div>
            <div>
              <div className="text-4xl font-display">{hours}</div>
              <div className="text-sm">ORE</div>
            </div>
            <div>
              <div className="text-4xl font-display">{minutes}</div>
              <div className="text-sm">MINUTI</div>
            </div>
          </div>
          <Link
            to="/rsvp"
            className="inline-block bg-wedding-gold text-white px-8 py-3 rounded-md hover:bg-wedding-gold/90 transition-colors duration-200"
          >
            Conferma la tua presenza
          </Link>
        </div>
      </div>

      <div className="page-container">
        <h2 className="section-title">La Nostra Storia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-display text-lg">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;