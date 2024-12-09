import { ExternalLink } from "lucide-react";

const Accommodation = () => {
  const accommodations = [
    {
      name: "Agriturismo Antica Gebbia",
      description: "Per prenotazioni, vi preghiamo di contattare Laura Cannizzo al numero 339 727 2105. Menzionando che state prenotando per il matrimonio del 5 Luglio, avrete diritto ad uno sconto del 10%.",
      distance: "8 minuti dalla location",
      link: "https://anticagebbia.it/"
    },
    {
      name: "B&B Example 2",
      description: "Caratteristico B&B con vista panoramica",
      distance: "10 minuti dalla location",
      price: "da €80/notte",
      link: "#"
    },
    {
      name: "Resort Example 3",
      description: "Resort di lusso con spa",
      distance: "15 minuti dalla location",
      price: "da €200/notte",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-wedding-sage/10">
      <div className="page-container">
        <h1 className="section-title">Dove Alloggiare</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-display mb-2">{accommodation.name}</h2>
              <p className="text-gray-600 mb-4">{accommodation.description}</p>
              <div className="space-y-2 mb-4">
                <p className="text-sm">{accommodation.distance}</p>
                {accommodation.price && <p className="font-semibold">{accommodation.price}</p>}
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