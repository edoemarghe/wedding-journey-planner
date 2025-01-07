import { ExternalLink } from "lucide-react";

const Accommodation = () => {
  const accommodations = [
    {
      name: "Agriturismo Antica Gebbia",
      description: "Per prenotazioni, vi preghiamo di contattare Laura Cannizzo al numero 339 727 2105 oppure scrivere all'indirizzo **info@anticagebbia.it**. Menzionando che state prenotando per il matrimonio del 5 Luglio, avrete diritto ad uno sconto del 10%.",
      distance: "8 minuti dalla location",
      link: "https://anticagebbia.it/"
    },
    {
      name: "Albatros Hotel",
      description: "Per prenotazioni, vi preghiamo di scrivere all'indirizzo **booking@albatroshotel.siracusa.it**. Menzionando che siete ospiti all'\"evento sposalizio 4/6 Luglio\" avrete diritto ad uno sconto del 10%.",
      distance: "8 minuti dalla location",
      link: "https://www.albatroshotel.siracusa.it/en/index"
    },
    {
      name: "Eureka Palace Hotel",
      description: "Per prenotazioni chiamare Tel **+39 0931 710133** oppure scrivere all'indirizzo **info@eurekapalace.it** specificando \"Nozze Margherita Beretta Zanoni del 05 luglio 2025\" avrete diritto ad uno sconto del 15%.",
      distance: "13 minuti dalla location",
      link: "https://www.eurekapalace.it/"
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-wedding-sage/10">
      <div className="page-container">
        <h1 className="section-title">Dove Alloggiare</h1>
        
        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12 font-body italic">
          Siete naturalmente liberi di scegliere la sistemazione che preferite per il vostro soggiorno. Tuttavia, consigliamo le seguenti strutture.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-display mb-2">{accommodation.name}</h2>
              <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: accommodation.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              <div className="space-y-2 mb-4">
                <p className="text-sm">{accommodation.distance}</p>
              </div>
              <a
                href={accommodation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-wedding-gold hover:text-wedding-gold/80"
              >
                Visita il sito
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accommodation;