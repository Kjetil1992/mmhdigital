const reasons = [
  "Skreddersydde digitale løsninger",
  "Moderne design med premium følelse",
  "Fokus på vekst, synlighet og resultater",
  "Høy ytelse og mobiloptimalisering",
  "Teknologi som skalerer med bedriften din",
  "Personlig oppfølging og tett samarbeid",
];

export default function About() {
  return (
    <section id="om-oss" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200 mb-4">
              Hvorfor velge MHHDigital?
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Din digitale
              <br />
              <span className="text-blue-600">partner</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-4">
              Vi bygger mer enn bare nettsider og apper — vi bygger digitale
              opplevelser som styrker merkevaren din og gir bedriften din et
              profesjonelt løft.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Enten du er en startup, lokal bedrift eller etablert selskap,
              hjelper MHHDigital deg med å ta steget videre digitalt.
            </p>

            <ul className="space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white">
            <h3 className="text-2xl font-extrabold mb-4">
              Klar for å bygge noe stort?
            </h3>
            <p className="text-blue-100 leading-relaxed mb-8">
              La oss skape en løsning som gjør inntrykk — og leverer resultater.
            </p>
            <a
              href="#kontakt"
              className="inline-block bg-white text-blue-700 font-semibold px-7 py-3 rounded-xl hover:bg-blue-50 active:scale-95 transition-all"
            >
              Ta kontakt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
