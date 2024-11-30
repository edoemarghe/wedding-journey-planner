import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Program = () => {
  return (
    <div className="min-h-screen pt-24 bg-wedding-cream">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-display text-gray-800 mb-12 text-center">Programma</h1>
        
        <div className="space-y-16">
          {/* Friday */}
          <div className="relative">
            <div className="absolute left-0 w-0.5 h-full bg-wedding-sage/30" />
            <div className="ml-6">
              <h2 className="text-2xl font-display text-wedding-sage mb-4">Venerdì 4 Luglio 2025</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="text-wedding-sage" />
                      <span>Aperitivo di Benvenuto</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-wedding-sage" />
                      <span className="italic">Location da definire</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Saturday */}
          <div className="relative">
            <div className="absolute left-0 w-0.5 h-full bg-wedding-sage/30" />
            <div className="ml-6">
              <h2 className="text-2xl font-display text-wedding-sage mb-4">Sabato 5 Luglio 2025</h2>
              
              {/* Ceremony */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <img 
                  src="/lovable-uploads/c72aabd6-bd2c-4eb3-882d-c6551aafb902.png"
                  alt="Santa Lucia al Sepolcro"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-display mb-4">Cerimonia</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Clock className="text-wedding-sage" />
                      <span>16:00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-wedding-sage" />
                      <div className="flex flex-col">
                        <span>Santuario di Santa Lucia al Sepolcro</span>
                        <span className="text-gray-600">Piazza Santa Lucia, 1, 96100 Siracusa SR, Italia</span>
                      </div>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.940762606543!2d15.292446776316787!3d37.06670667231091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313cdd7804c0f79%3A0xb42e36432c75b8d0!2sSantuario%20Santa%20Lucia%20al%20Sepolcro!5e0!3m2!1sen!2sit!4v1709913433411!5m2!1sen!2sit"
                      className="w-full h-64 rounded-lg mt-4"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              {/* Reception */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/d0cf54d8-0431-415b-95b8-01bc791423b0.png"
                  alt="Donna Coraly"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-display mb-4">Ricevimento</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Clock className="text-wedding-sage" />
                      <span>18:00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-wedding-sage" />
                      <div className="flex flex-col">
                        <span>Donna Coraly</span>
                        <span className="text-gray-600">Contrada, Traversa S. Michele, 96100 Siracusa SR, Italia</span>
                      </div>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.5876486862387!2d15.255799376316126!3d37.05273567231798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313cd505a3845cd%3A0x6e2e0ce7a7c4100e!2sDonna%20Coraly!5e0!3m2!1sen!2sit!4v1709913461436!5m2!1sen!2sit"
                      className="w-full h-64 rounded-lg mt-4"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sunday */}
          <div className="relative">
            <div className="absolute left-0 w-0.5 h-full bg-wedding-sage/30" />
            <div className="ml-6">
              <h2 className="text-2xl font-display text-wedding-sage mb-4">Domenica 6 Luglio 2025</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="text-wedding-sage" />
                      <span>Hangover Brunch</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-wedding-sage" />
                      <span className="italic">Location da definire</span>
                    </div>
                  </div>
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