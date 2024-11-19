import { Gift } from "lucide-react";

const Registry = () => {
  return (
    <div className="min-h-screen pt-24 bg-wedding-rose/10">
      <div className="page-container">
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Mare cristallino"
            className="w-full h-[300px] object-cover rounded-lg shadow-lg mb-12"
          />
        </div>
        
        <h1 className="section-title">Lista Nozze</h1>
        
        <div className="max-w-2xl mx-auto text-center">
          <Gift className="mx-auto h-16 w-16 text-wedding-gold mb-6" />
          
          <p className="text-lg text-gray-600 mb-8">
            La vostra presenza è il regalo più grande che potremmo desiderare.
            Se desiderate farci un regalo, abbiamo creato una lista nozze presso:
          </p>

          <div className="space-y-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-2xl font-display mb-2">Nome Negozio 1</h2>
              <p className="text-gray-600">Riferimento: Lista Edoardo e Margherita</p>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-2xl font-display mb-2">Nome Negozio 2</h2>
              <p className="text-gray-600">Riferimento: Lista Edoardo e Margherita</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registry;