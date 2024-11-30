import { useEffect, useState } from "react";
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

  const photos = [
    "/lovable-uploads/59d099a0-758a-4726-859c-dd3b7bf84265.png",
    "/lovable-uploads/d0cf54d8-0431-415b-95b8-01bc791423b0.png",
    "/lovable-uploads/d71580b5-ba72-4cc7-9560-34d00e7778d2.png",
    "/lovable-uploads/e30735cf-cf67-4823-8182-527229ed5d56.png",
    "/lovable-uploads/f8984e96-efc7-4680-8b2e-fe03bc654ea8.png"
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
            <div className="flex justify-center lg:justify-start gap-12 text-gray-800">
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
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 max-w-5xl mx-auto space-y-3">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-sm break-inside-avoid mb-3 transition-transform duration-300 hover:scale-105"
              >
                <div className="aspect-[3/4] relative">
                  <img 
                    src={photo} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover"
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