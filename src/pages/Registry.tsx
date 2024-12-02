import { Gift } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const activities = [
  // New Zealand - Queenstown
  {
    title: "Jet Boating sul fiume Shotover",
    description: "Adrenalina pura attraverso i canyon di Queenstown",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    price: "200"
  },
  {
    title: "Degustazione vini Central Otago",
    description: "Tour dei migliori vigneti della regione con degustazione",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: "180"
  },
  {
    title: "Cena gourmet vista Lago Wakatipu",
    description: "Esperienza culinaria con vista mozzafiato sul lago",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    price: "250"
  },
  // Milford Sound
  {
    title: "Crociera Milford Sound",
    description: "Navigazione tra fiordi spettacolari e cascate",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    price: "300"
  },
  {
    title: "Escursione Milford Track",
    description: "Trekking guidato in uno dei sentieri più belli al mondo",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    price: "220"
  },
  // Wanaka e Mount Cook
  {
    title: "Trekking a Roys Peak",
    description: "Escursione panoramica con vista su Wanaka",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    price: "150"
  },
  {
    title: "Osservazione stelle Dark Sky",
    description: "Tour astronomico guidato nel Mount Cook National Park",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    price: "180"
  },
  // Bora Bora
  {
    title: "Snorkeling con razze e squali",
    description: "Immersione nella laguna di Bora Bora",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    price: "250"
  },
  {
    title: "Crociera privata al tramonto",
    description: "Tour esclusivo nella laguna di Bora Bora",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    price: "300"
  },
  {
    title: "Giornata Spa in overwater bungalow",
    description: "Relax totale con trattamenti di lusso",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    price: "400"
  },
  // Hawaii
  {
    title: "Trekking Diamond Head Crater",
    description: "Escursione al cratere vulcanico di Oahu",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: "120"
  },
  {
    title: "Tour Volcanoes National Park",
    description: "Esplorazione dei vulcani attivi delle Hawaii",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    price: "280"
  },
  {
    title: "Crociera Na Pali Coast",
    description: "Navigazione lungo la costa spettacolare di Kauai",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    price: "350"
  }
];

const IBAN = "IT60X0542811101000000123456";
const INTESTATARIO = "Mario Rossi e Maria Bianchi";

const Registry = () => {
  const { toast } = useToast();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiato!",
      description: `${label} copiato negli appunti`,
    });
  };

  return (
    <div className="min-h-screen pt-24 bg-wedding-rose/10">
      <div className="page-container">
        <h1 className="section-title">Lista Nozze</h1>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Gift className="mx-auto h-16 w-16 text-wedding-sage mb-6" />
          
          <p className="text-lg text-gray-600 mb-8">
            La vostra presenza è il regalo più grande che potremmo desiderare.
            Se desiderate contribuire al nostro viaggio di nozze, ecco il nostro itinerario da sogno:
          </p>

          <div className="prose max-w-3xl mx-auto text-left mb-12 space-y-6">
            <div className="bg-white/80 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-display text-wedding-sage mb-4">Il Nostro Itinerario</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-display text-wedding-sage">Settimana 1: Nuova Zelanda</h4>
                  <p>Esploreremo l'Isola del Sud partendo da Queenstown, con le sue attività adrenaliniche e i suoi vigneti. 
                  Proseguiremo verso il maestoso Milford Sound per una crociera tra fiordi spettacolari, 
                  concludendo con il relax a Wanaka e l'osservazione delle stelle al Mount Cook.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-display text-wedding-sage">Settimana 2: Polinesia Francese</h4>
                  <p>Ci immergeremo nel lusso tropicale di Bora Bora, tra snorkeling nella laguna cristallina, 
                  crociere al tramonto e relax negli iconici overwater bungalow. Concluderemo con due giorni 
                  alla scoperta di Tahiti e della sua cultura locale.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-display text-wedding-sage">Settimana 3: Hawaii</h4>
                  <p>Il gran finale alle Hawaii, tra le spiagge di Waikiki, i vulcani attivi della Big Island 
                  e la natura incontaminata di Kauai, con la spettacolare Na Pali Coast e il Waimea Canyon.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl">{activity.title}</CardTitle>
                <CardDescription>{activity.description}</CardDescription>
                <p className="mt-2 text-lg font-semibold text-wedding-sage">€{activity.price}</p>
              </CardHeader>
              
              <CardFooter className="flex flex-col gap-4">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  {expandedCard === index ? "Nascondi dettagli" : "Mostra dettagli bonifico"}
                </Button>
                
                {expandedCard === index && (
                  <div className="w-full space-y-4 p-4 bg-gray-50 rounded-lg">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">IBAN:</p>
                      <div className="flex items-center gap-2">
                        <code className="bg-gray-100 px-2 py-1 rounded flex-1">{IBAN}</code>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => copyToClipboard(IBAN, "IBAN")}
                        >
                          Copia
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Intestatario:</p>
                      <div className="flex items-center gap-2">
                        <code className="bg-gray-100 px-2 py-1 rounded flex-1">{INTESTATARIO}</code>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => copyToClipboard(INTESTATARIO, "Intestatario")}
                        >
                          Copia
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Causale:</p>
                      <div className="flex items-center gap-2">
                        <code className="bg-gray-100 px-2 py-1 rounded flex-1">
                          Regalo di nozze - {activity.title}
                        </code>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => copyToClipboard(`Regalo di nozze - ${activity.title}`, "Causale")}
                        >
                          Copia
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Registry;