import { CalendarDays, Clock, MapPin } from "lucide-react";

const Program = () => {
  return (
    <div className="min-h-screen pt-24 bg-wedding-rose/10">
      <div className="page-container">
        <h1 className="section-title">Programma</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Friday */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div 
              className="md:w-1/2 h-48 md:h-auto bg-cover bg-center"
              style={{
                backgroundImage: "url('/lovable-uploads/64d3dca6-fc2b-4fcb-a25a-f39e45b53df5.png')"
              }}
            />
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-display mb-4">Venerdì 4 Luglio 2025</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarDays className="text-wedding-gold" />
                  <span>Aperitivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-wedding-gold" />
                  <span className="italic">TBD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Saturday */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div 
              className="md:w-1/2 h-48 md:h-auto bg-cover bg-center"
              style={{
                backgroundImage: "url('/lovable-uploads/a7be54d1-fb14-4b22-8f9c-da22a7c42199.png')"
              }}
            />
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-display mb-4">Sabato 5 Luglio 2025</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="text-wedding-gold" />
                    <span>16:00 - Messa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-wedding-gold" />
                    <div className="flex flex-col">
                      <span>Santuario di Santa Lucia al Sepolcro</span>
                      <span className="text-gray-600">Piazza Santa Lucia, 1, 96100 Siracusa SR, Italia</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="text-wedding-gold" />
                    <span>18:00 - Cerimonia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-wedding-gold" />
                    <div className="flex flex-col">
                      <span>Donna Coraly</span>
                      <span className="text-gray-600">Contrada, Traversa S. Michele, 96100 Siracusa SR, Italia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sunday */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div 
              className="md:w-1/2 h-48 md:h-auto bg-cover bg-center"
              style={{
                backgroundImage: "url('/lovable-uploads/97df5096-0ab3-464e-be21-a3f2965b7511.png')"
              }}
            />
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-display mb-4">Domenica 6 Luglio 2025</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarDays className="text-wedding-gold" />
                  <span>Hangover Brunch</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-wedding-gold" />
                  <span className="italic">TBD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;