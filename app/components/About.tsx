const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Kvalitet i alt vi gjør",
    description:
      "Vi setter faglig stolthet i hvert prosjekt. Koden er ren, designet er gjennomtenkt og løsningen er solid.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Tett samarbeid",
    description:
      "Du er alltid med i prosessen. Vi kommuniserer åpent og holder deg oppdatert gjennom hele prosjektet.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Rask leveranse",
    description:
      "Vi jobber effektivt og holder tidsfrister. Du får det du bestilte, til rett tid og til avtalt pris.",
  },
];

export default function About() {
  return (
    <section id="om-oss" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200 mb-4">
          Om oss
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Vi er din digitale
          <br />
          <span className="text-blue-600">samarbeidspartner</span>
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed mb-6">
          MMH Digital er en norsk aktør som hjelper bedrifter med å lykkes
          digitalt. Vi kombinerer moderne teknologi med et sterkt fokus på
          brukeropplevelse og forretningsresultater.
        </p>
        <p className="text-slate-500 leading-relaxed mb-10">
          Uansett om du starter fra scratch eller vil fornye en eksisterende
          løsning – vi tilpasser oss ditt behov og leverer noe som faktisk
          gjør en forskjell.
        </p>

        <div className="space-y-4">
          {values.map((value) => (
            <div key={value.title} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                {value.icon}
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-0.5">
                  {value.title}
                </h4>
                <p className="text-sm text-slate-500">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
