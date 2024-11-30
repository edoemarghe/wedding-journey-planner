import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flower2 } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-wedding-cream">
      <div 
        className="h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/lovable-uploads/751e266e-8301-41c6-b28e-4d291cc3ba88.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
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
          <Button
            asChild
            className="bg-wedding-sage text-gray-800 hover:bg-wedding-sage/90"
          >
            <Link to="/rsvp" className="flex items-center gap-2">
              <span>Conferma la tua presenza</span>
              <Flower2 className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="page-container">
        <h2 className="section-title">La Nostra Storia</h2>
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Tutto è iniziato in una sera di settembre 2018, durante una cena tra amici organizzata da un'amica in comune. Quella sera eravamo seduti uno di fronte all'altro, senza sapere che quello sarebbe stato l'inizio di un'avventura indimenticabile.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Ci è voluto qualche mese per scoprire davvero quanto fossimo fatti l'uno per l'altra, ma a gennaio 2019 la nostra storia ha preso il via. Fin dall'inizio, abbiamo scoperto di condividere le stesse passioni: l'amore per i viaggi e la buona cucina ci ha portato a esplorare il mondo insieme. Ma la cosa più bella è sempre stata condividere ogni momento con i nostri amici, che hanno reso ogni avventura ancora più speciale.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Oggi siamo qui, pronti a scrivere il prossimo capitolo della nostra vita insieme, con lo stesso entusiasmo di quella sera in cui tutto è iniziato.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto space-y-6">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-lg break-inside-avoid mb-6"
            >
              <div className="aspect-[3/4] relative">
                <img 
                  src={photo} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;