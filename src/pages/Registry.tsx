import { Gift } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ActivityCard } from "@/components/registry/ActivityCard";
import { activities } from "@/data/registryActivities";

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
            <ActivityCard
              key={index}
              activity={activity}
              isExpanded={expandedCard === index}
              onToggleExpand={() => setExpandedCard(expandedCard === index ? null : index)}
              onCopyToClipboard={copyToClipboard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Registry;