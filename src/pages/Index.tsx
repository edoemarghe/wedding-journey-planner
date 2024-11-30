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

  const photos = [
    "/lovable-uploads/9efb74b7-d57d-4e82-8e05-f04bec30c50f.png",
    "/lovable-uploads/39d1d4fc-4122-40d4-b1b9-ee4e161d2644.png",
    "/lovable-uploads/cd9cd6ef-a568-4ff6-83a7-27e1c017d8d2.png",
    "/lovable-uploads/7515f790-3edd-47be-be84-5affa4853a3c.png",
    "/lovable-uploads/d7ba74dd-f09f-4750-92d0-765eb799f706.png",
    "/lovable-uploads/e0346628-c9e9-4033-83db-7f68e5e84c6f.png",
    "/lovable-uploads/866793c3-40ce-4a5e-a844-60ca31416467.png",
    "/lovable-uploads/03f523f2-cdb0-4b39-9845-84d58cec285a.png",
    "/lovable-uploads/e157fa51-2e55-4728-9834-3971d86b0b27.png",
    "/lovable-uploads/6cdf466a-63bb-47c1-a69f-d990c03db6ce.png",
    "/lovable-uploads/96f87037-13d6-4c48-9d6d-13c867861cad.png",
    "/lovable-uploads/2cbdfd49-43a4-405a-a967-06e3e718e607.png",
    "/lovable-uploads/0ba48ebd-1618-46c5-9227-3f99a0cf60c2.png",
    "/lovable-uploads/18c18510-bdcd-46ee-837a-14ae0d48cc4f.png",
    "/lovable-uploads/3b0a2e20-3852-4b65-812f-7fedc6b46c0a.png",
    "/lovable-uploads/64d3dca6-fc2b-4fcb-a25a-f39e45b53df5.png",
    "/lovable-uploads/6b4ecc9c-ed22-4edd-8017-f8d413e86368.png",
    "/lovable-uploads/97df5096-0ab3-464e-be21-a3f2965b7511.png",
    "/lovable-uploads/a743b6b1-cfa0-43a2-9587-edd1cb50e3f1.png",
    "/lovable-uploads/a7be54d1-fb14-4b22-8f9c-da22a7c42199.png",
    "/lovable-uploads/b7395aea-e2c0-4deb-8560-5f8f1b2261c8.png",
    "/lovable-uploads/c21a8106-a13a-467b-ad08-f40710950a50.png",
    "/lovable-uploads/d0d57ed9-fcaf-4e8a-b715-ca16eea762cb.png"
  ];

  return (
    <div className="min-h-screen bg-wedding-cream">
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center lg:justify-end px-8 lg:px-16 relative z-10 bg-wedding-cream">
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
        <div className="absolute lg:relative inset-0 lg:inset-auto z-0 lg:z-10 bg-wedding-cream" />
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
