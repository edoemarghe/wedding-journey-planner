import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "1",
    dietaryRestrictions: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui andrebbe implementata la logica per inviare i dati
    toast({
      title: "Grazie per la conferma!",
      description: "Abbiamo ricevuto la tua risposta.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen pt-24 bg-wedding-sage/10">
      <div className="page-container">
        <h1 className="section-title">Conferma la tua presenza</h1>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome e Cognome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wedding-gold focus:border-wedding-gold"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wedding-gold focus:border-wedding-gold"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="attending" className="block text-sm font-medium text-gray-700 mb-1">
                Parteciparai?
              </label>
              <select
                id="attending"
                name="attending"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wedding-gold focus:border-wedding-gold"
                value={formData.attending}
                onChange={handleChange}
              >
                <option value="yes">Sì, ci sarò</option>
                <option value="no">Mi dispiace, non potrò esserci</option>
              </select>
            </div>

            {formData.attending === "yes" && (
              <>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Numero di persone
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wedding-gold focus:border-wedding-gold"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-1">
                    Restrizioni alimentari
                  </label>
                  <input
                    type="text"
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wedding-gold focus:border-wedding-gold"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    placeholder="Vegetariano, vegano, allergie, etc."
                  />
                </div>
              </>
            )}

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Note
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wedding-gold focus:border-wedding-gold"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Eventuali messaggi per gli sposi"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-wedding-gold text-white py-3 rounded-md hover:bg-wedding-gold/90 transition-colors duration-200"
            >
              Invia risposta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RSVP;