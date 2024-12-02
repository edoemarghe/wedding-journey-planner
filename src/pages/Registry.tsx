import { Gift } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ActivityCard } from "@/components/registry/ActivityCard";
import { activities } from "@/data/activities";

const IBAN = "IT60X0542811101000000123456";
const INTESTATARIO = "Mario Rossi e Maria Bianchi";

const Registry = () => {
  const { toast } = useToast();

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
            Il vostro affetto e la vostra presenza renderanno indimenticabile il nostro giorno speciale.
            Per chi desiderasse contribuire alla realizzazione del nostro sogno di viaggio di nozze, abbiamo selezionato alcune esperienze uniche:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              activity={activity}
              onCopyToClipboard={copyToClipboard}
              IBAN={IBAN}
              INTESTATARIO={INTESTATARIO}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Registry;