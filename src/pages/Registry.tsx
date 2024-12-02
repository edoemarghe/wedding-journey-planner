import { Gift } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const activities = [
  {
    title: "Immersione nella barriera corallina di Bora Bora",
    description: "Esplora i fondali cristallini e la vita marina colorata",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    price: ""
  },
  {
    title: "Escursione al Monte Cook",
    description: "Trekking nel parco nazionale più alto della Nuova Zelanda",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    price: ""
  },
  {
    title: "Tour in elicottero sui ghiacciai",
    description: "Vista mozzafiato sui ghiacciai della Nuova Zelanda",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    price: ""
  },
  {
    title: "Relax negli overwater bungalow",
    description: "Soggiorno esclusivo nelle iconiche ville sull'acqua di Bora Bora",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    price: ""
  },
  {
    title: "Kayak nelle acque turchesi",
    description: "Esplora le lagune di Bora Bora in kayak",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    price: ""
  },
  {
    title: "Visita ai villaggi Maori",
    description: "Scopri la cultura e le tradizioni indigene della Nuova Zelanda",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    price: ""
  },
  {
    title: "Foresta di Redwoods",
    description: "Passeggiata tra gli alberi giganti di Rotorua",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    price: ""
  },
  {
    title: "Cena romantica sulla spiaggia",
    description: "Esperienza culinaria al tramonto a Bora Bora",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    price: ""
  },
  {
    title: "Hobbiton Movie Set",
    description: "Visita il set del Signore degli Anelli",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    price: ""
  },
  {
    title: "Crociera al tramonto",
    description: "Navigazione nelle acque cristalline di Bora Bora",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: ""
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
        
        <div className="max-w-2xl mx-auto text-center mb-12">
          <Gift className="mx-auto h-16 w-16 text-wedding-gold mb-6" />
          
          <p className="text-lg text-gray-600 mb-8">
            La vostra presenza è il regalo più grande che potremmo desiderare.
            Se desiderate contribuire al nostro viaggio di nozze in Nuova Zelanda e Bora Bora,
            potete scegliere una delle seguenti esperienze.
          </p>
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
                <p className="mt-2 text-lg font-semibold text-wedding-gold">{activity.price}</p>
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