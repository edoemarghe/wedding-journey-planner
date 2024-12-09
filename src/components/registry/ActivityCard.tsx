import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ActivityCardProps {
  activity: {
    title: string;
    description: string;
    image: string;
    price: string;
  };
  isExpanded: boolean;
  onToggleExpand: () => void;
  onCopyToClipboard: (text: string, label: string) => void;
}

export const ActivityCard = ({ 
  activity, 
  isExpanded, 
  onToggleExpand, 
  onCopyToClipboard 
}: ActivityCardProps) => {
  const { title, description, image, price } = activity;
  const IBAN = "IT20T0329601601000067676058";
  const INTESTATARIO = "Lamacchia Edoardo Maria Beretta Zanoni Margherita";

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
        width={800}
        height={400}
      />
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <p className="mt-2 text-lg font-semibold text-wedding-gold">{price}</p>
      </CardHeader>
      
      <CardFooter className="flex flex-col gap-4">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={onToggleExpand}
        >
          {isExpanded ? "Nascondi dettagli" : "Mostra dettagli bonifico"}
        </Button>
        
        {isExpanded && (
          <div className="w-full space-y-4 p-4 bg-gray-50 rounded-lg">
            <div className="space-y-2">
              <p className="text-sm font-medium">IBAN:</p>
              <div className="flex items-center gap-2">
                <code className="bg-gray-100 px-2 py-1 rounded flex-1">{IBAN}</code>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onCopyToClipboard(IBAN, "IBAN")}
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
                  onClick={() => onCopyToClipboard(INTESTATARIO, "Intestatario")}
                >
                  Copia
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Causale:</p>
              <div className="flex items-center gap-2">
                <code className="bg-gray-100 px-2 py-1 rounded flex-1">
                  Regalo di nozze - {title}
                </code>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onCopyToClipboard(`Regalo di nozze - ${title}`, "Causale")}
                >
                  Copia
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};