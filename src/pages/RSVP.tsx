const RSVP = () => {
  return (
    <div className="min-h-screen pt-24 bg-wedding-sage/10">
      <div className="page-container">
        <h1 className="section-title">Conferma la tua presenza</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div 
              className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
              style={{
                backgroundImage: "url('/lovable-uploads/d2071883-5d10-4d6d-bec2-a95cca2ddb9f.png')"
              }}
            />
            <div className="md:w-1/2 p-8">
              <div className="prose max-w-none space-y-4">
                <p>La nostra giornata speciale non sarebbe completa senza di te! Ti chiediamo di confermare la tua presenza per aiutarci a organizzare tutto al meglio.</p>
                
                <p>Puoi compilare il modulo qui sotto e farci sapere se sarai con noi, se verrai accompagnato/a e se hai esigenze particolari (intolleranze alimentari, allergie, ecc.).</p>
                
                <p>Non vediamo l'ora di festeggiare insieme a te!</p>

                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfQXfQzbzEbfLe9JiUxhJf_WzoJ_vGdEkueB16acC54hoaI4w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-wedding-sage text-gray-800 px-6 py-3 rounded-md hover:bg-wedding-sage/90 transition-colors duration-200 mt-4"
                >
                  Compila il modulo RSVP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;