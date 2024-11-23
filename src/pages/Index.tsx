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
    "/lovable-uploads/2cbdfd49-43a4-405a-a967-06e3e718e607.png"
  ];

  return (
    <div className="min-h-screen">
      <div 
        className="h-[80vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/lovable-uploads/4e266d85-420f-4a18-961f-7d627a6e31be.png')",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {photos.map((photo, index) => {
            // Define if the image should be displayed in a vertical or horizontal format
            const isVertical = [2, 5, 8, 11].includes(index); // Adjust these indices based on your actual vertical photos
            const aspectRatio = isVertical ? 'aspect-[3/4]' : 'aspect-[4/3]';
            const spanClass = index === 0 ? 'md:col-span-2 lg:col-span-2' : '';
            
            return (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-lg shadow-lg ${spanClass}`}
              >
                <div className={aspectRatio + " relative"}>
                  <img 
                    src={photo} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: 'center 30%' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;