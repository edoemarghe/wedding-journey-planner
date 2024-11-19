import { CalendarDays, Clock, MapPin } from "lucide-react";

const Program = () => {
  return (
    <div className="min-h-screen pt-24 bg-wedding-rose/10">
      <div className="page-container">
        <h1 className="section-title">Programma</h1>
        
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-display mb-4">Cerimonia</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CalendarDays className="text-wedding-gold" />
                <span>Sabato 5 Luglio 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-wedding-gold" />
                <span>16:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-wedding-gold" />
                <span>Chiesa di [Nome Chiesa]</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-display mb-4">Ricevimento</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="text-wedding-gold" />
                <span>18:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-wedding-gold" />
                <span>Location del ricevimento</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-display mb-4">Festa</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="text-wedding-gold" />
                <span>23:00</span>
              </div>
              <p className="text-gray-600 mt-2">
                Dopo cena, continueremo i festeggiamenti con musica e balli!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;