import { ArrowLeft, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BankDetails = () => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copiato negli appunti`);
  };

  return (
    <div className="min-h-screen pt-24 bg-wedding-rose/10">
      <div className="page-container">
        <Link to="/registry" className="inline-flex items-center text-wedding-gold hover:text-wedding-gold/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Torna alla Lista Nozze
        </Link>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Dettagli Bonifico</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">IBAN</h3>
                  <p className="font-mono">IT60X0542811101000000123456</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard("IT60X0542811101000000123456", "IBAN")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Intestatario</h3>
                  <p>Edoardo e Margherita</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard("Edoardo e Margherita", "Intestatario")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Causale</h3>
                  <p>Regalo di nozze - [Il tuo nome]</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard("Regalo di nozze", "Causale")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BankDetails;