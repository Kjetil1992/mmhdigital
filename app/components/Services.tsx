const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Profesjonelle nettsider",
    description:
      "Raske, moderne og responsive nettsider som gir bedriften din et profesjonelt uttrykk og bygger tillit fra første sekund.",
    accent: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "Nettbutikker som selger",
    description:
      "Kraftige nettbutikker med fokus på konvertering, ytelse og sømløs handleopplevelse. Målet er enkelt: flere kunder og økt omsetning.",
    accent: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Apputvikling",
    description:
      "Fra idé til ferdig løsning – vi utvikler moderne apper for mobil og web som effektiviserer arbeidsprosesser og styrker kundeopplevelsen.",
    accent: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
    text: "text-violet-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Design som skaper inntrykk",
    description:
      "Moderne og brukervennlige grensesnitt som gjør det enkelt for kundene dine å navigere, forstå og handle.",
    accent: "from-pink-500 to-pink-600",
    bg: "bg-pink-50",
    text: "text-pink-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Teknologi og ytelse",
    description:
      "Løsninger bygget for fart, sikkerhet og stabilitet – optimalisert for dagens krav og klare for morgendagens vekst.",
    accent: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    text: "text-orange-600",
  },
];

export default function Services() {
  return (
    <section id="tjenester" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200 mb-4">
            Dette leverer vi
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Tjenester
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            I en digital verden der førsteinntrykket betyr alt, hjelper vi
            bedrifter med å bygge sterke merkevarer og øke synlighet, salg og vekst.
          </p>
        </div>

        {/* Featured top card + 3 smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {/* Large featured card */}
          <div className="lg:col-span-2 group relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                {services[0].icon}
              </div>
              <h3 className="text-2xl font-extrabold mb-3">{services[0].title}</h3>
              <p className="text-blue-100 leading-relaxed max-w-md">
                Vi designer og utvikler raske, moderne og responsive nettsider som gir
                bedriften din et profesjonelt uttrykk og bygger tillit fra første sekund.
                Hver løsning er skreddersydd for å representere merkevaren din på best mulig måte.
              </p>
              <a href="#kontakt" className="inline-flex items-center gap-2 mt-6 bg-white text-blue-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm">
                Kom i gang →
              </a>
            </div>
          </div>

          {/* Small card */}
          <div className={`group ${services[1].bg} border border-slate-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}>
            <div className={`w-11 h-11 bg-white rounded-xl flex items-center justify-center mb-5 ${services[1].text} shadow-sm`}>
              {services[1].icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{services[1].title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{services[1].description}</p>
          </div>
        </div>

        {/* Bottom 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {services.slice(2).map((service) => (
            <div
              key={service.title}
              className={`group ${service.bg} border border-slate-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
            >
              <div className={`w-11 h-11 bg-white rounded-xl flex items-center justify-center mb-5 ${service.text} shadow-sm`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
