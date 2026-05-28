const stats = [
  { value: "50+", label: "Prosjekter levert" },
  { value: "5★", label: "Gjennomsnittlig vurdering" },
  { value: "100%", label: "Norsk eierskap" },
  { value: "24/7", label: "Support tilgjengelig" },
];

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
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200 mb-4">
              Om oss
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Vi er din digitale
              <br />
              <span className="text-blue-600">samarbeidspartner</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              MMH Digital er et norsk teknologiselskap som spesialiserer seg på
              å hjelpe bedrifter med å lykkes digitalt. Vi kombinerer moderne
              teknologi med et sterkt fokus på brukeropplevelse og forretningsresultater.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Fra startups til etablerte bedrifter – vi tilpasser oss ditt
              behov og leverer løsninger som faktisk gjør en forskjell. Vi er
              stolt norske, og du kan alltid nå oss på telefon eller e-post.
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

          {/* Stats & visual */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center"
                >
                  <div className="text-4xl font-extrabold text-blue-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <p className="text-lg font-semibold mb-2">
                &ldquo;Vi lager ikke bare nettsider. Vi lager løsninger som skaper vekst.&rdquo;
              </p>
              <p className="text-blue-200 text-sm">— MMH Digital-teamet</p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-3">
                Teknologier vi bruker
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js", "React", "TypeScript", "Node.js",
                  "React Native", "Tailwind CSS", "PostgreSQL", "Figma",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
