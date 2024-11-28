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
    "/lovable-uploads/6ddb2525-2462-41a9-8a54-027f971821c7.png",
    "/lovable-uploads/25ae3e07-a690-4837-bacb-33b0b58fb994.png",
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
    "/lovable-uploads/d0d57ed9-fcaf-4e8a-b715-ca16eea762cb.png",
    "/lovable-uploads/d2071883-5d10-4d6d-bec2-a95cca2ddb9f.png"
  ];

  return (
    <div className="min-h-screen">
      <div 
        className="h-[80vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/lovable-uploads/751e266e-8301-41c6-b28e-4d291cc3ba88.png')",
          backgroundPosition: "center center",
          backgroundSize: "100% auto"
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