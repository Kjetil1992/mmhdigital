const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Nettsider",
    description:
      "Vi designer og utvikler moderne, responsive nettsider optimalisert for søkemotorer og brukeropplevelse. Fra enkle landingssider til komplekse løsninger.",
    tags: ["Next.js", "React", "SEO", "CMS"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobilapper",
    description:
      "Native og cross-platform apper for iOS og Android. Vi bygger intuitive apper som brukerne dine elsker å bruke.",
    tags: ["React Native", "iOS", "Android", "UX/UI"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "Nettbutikk",
    description:
      "Profesjonelle e-handelsløsninger som konverterer besøkende til kunder. Enkel administrasjon og trygg betaling.",
    tags: ["E-handel", "Shopify", "WooCommerce", "Betaling"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Design & branding",
    description:
      "Vi hjelper deg med å bygge en sterk merkevare. Logo, designprofil og visuelle elementer som skaper tillit hos kundene dine.",
    tags: ["Logo", "Designprofil", "Figma", "Branding"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Vedlikehold & support",
    description:
      "Vi er her etter lansering. Løpende vedlikehold, oppdateringer og teknisk support slik at løsningen din alltid fungerer optimalt.",
    tags: ["Support", "Oppdateringer", "Sikkerhet", "Hosting"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Optimalisering",
    description:
      "Vi analyserer og forbedrer eksisterende løsninger. Bedre ytelse, høyere konverteringsrate og lavere kostnader.",
    tags: ["Ytelse", "Analytics", "Konvertering", "SEO"],
  },
];

export default function Services() {
  return (
    <section id="tjenester" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200 mb-4">
            Hva vi tilbyr
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Våre tjenester
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Alt din bedrift trenger for en sterk digital tilstedeværelse – fra
            design til utvikling og løpende support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-slate-50 border border-slate-100 rounded-2xl p-7 hover:bg-white hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-white text-slate-600 border border-slate-200 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
