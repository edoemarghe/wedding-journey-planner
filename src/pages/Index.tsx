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

  // Selected the best 8 photos for a more focused gallery
  const photos = [
    "/lovable-uploads/6ddb2525-2462-41a9-8a54-027f971821c7.png",
    "/lovable-uploads/25ae3e07-a690-4837-bacb-33b0b58fb994.png",
    "/lovable-uploads/9efb74b7-d57d-4e82-8e05-f04bec30c50f.png",
    "/lovable-uploads/cd9cd6ef-a568-4ff6-83a7-27e1c017d8d2.png",
    "/lovable-uploads/7515f790-3edd-47be-be84-5affa4853a3c.png",
    "/lovable-uploads/d7ba74dd-f09f-4750-92d0-765eb799f706.png",
    "/lovable-uploads/e0346628-c9e9-4033-83db-7f68e5e84c6f.png",
    "/lovable-uploads/866793c3-40ce-4a5e-a844-60ca31416467.png"
  ];

  return (
    <div className="min-h-screen bg-wedding-cream">
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center lg:justify-end px-8 lg:px-16 relative z-10 bg-wedding-cream/90 lg:bg-wedding-cream">
          <div className="max-w-xl text-center lg:text-left py-20">
            <h1 className="text-6xl md:text-7xl font-display mb-6 text-gray-800 font-light">
              Edoardo & Margherita
            </h1>
            <p className="text-2xl md:text-3xl mb-12 font-light text-gray-600">
              5 Luglio 2025
            </p>
            <div className="flex justify-center lg:justify-start gap-12 text-gray-800 mb-12">
              <div className="text-center">
                <div className="text-4xl font-display">{days}</div>
                <div className="text-sm font-light">GIORNI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display">{hours}</div>
                <div className="text-sm font-light">ORE</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display">{minutes}</div>
                <div className="text-sm font-light">MINUTI</div>
              </div>
            </div>
            <Button
              asChild
              className="bg-wedding-sage text-white hover:bg-wedding-sage/90 text-lg px-8 py-6 h-auto"
            >
              <Link to="/rsvp" className="flex items-center gap-2">
                <span>Conferma la tua presenza</span>
                <Flower2 className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div 
          className="absolute lg:relative inset-0 lg:inset-auto z-0 lg:z-10"
          style={{
            backgroundImage: "url('/lovable-uploads/1045a460-c1ae-4444-8ab0-f9134ffb03a6.png')",
            backgroundPosition: "center top",
            backgroundSize: "cover"
          }}
        />
      </div>

      <div className="page-container">
        <h2 className="section-title">La Nostra Storia</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/751e266e-8301-41c6-b28e-4d291cc3ba88.png"
              alt="Coppia al tramonto sulla spiaggia" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display mb-4 text-wedding-sage">Come Ci Siamo Conosciuti</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Tutto è iniziato in una sera di settembre 2018, durante una cena tra amici organizzata da un'amica in comune. Quella sera eravamo seduti uno di fronte all'altro, senza sapere che quello sarebbe stato l'inizio di un'avventura indimenticabile.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-display mb-4 text-wedding-sage">I Primi Passi Insieme</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Ci è voluto qualche mese per scoprire davvero quanto fossimo fatti l'uno per l'altra, ma a gennaio 2019 la nostra storia ha preso il via. Fin dall'inizio, abbiamo scoperto di condividere le stesse passioni: l'amore per i viaggi e la buona cucina ci ha portato a esplorare il mondo insieme.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-display mb-4 text-wedding-sage">La Proposta</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                La cosa più bella è sempre stata condividere ogni momento con i nostri amici, che hanno reso ogni avventura ancora più speciale. Oggi siamo qui, pronti a scrivere il prossimo capitolo della nostra vita insieme, con lo stesso entusiasmo di quella sera in cui tutto è iniziato.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="section-title">I Momenti Più Belli</h2>
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
    </div>
  );
};

export default Index;