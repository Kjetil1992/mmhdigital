import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berge VVS & Rørlegging – Demo",
  description: "Demo-nettside laget av MHH Digital",
  robots: "noindex",
};

const services = [
  {
    icon: "🔧",
    title: "Rørlegging",
    description: "Installasjon, reparasjon og vedlikehold av rør og vannledninger i bolig og næring.",
  },
  {
    icon: "🚿",
    title: "Baderomsmontasje",
    description: "Vi monterer dusjer, badekar, toaletter og alt sanitærutstyr – raskt og ryddig.",
  },
  {
    icon: "🔥",
    title: "Varmeanlegg",
    description: "Gulvvarme, radiatorer og varmtvannsberedere. Vi finner den beste løsningen for ditt hjem.",
  },
  {
    icon: "🚨",
    title: "Akutt hjelp",
    description: "Vannskade, lekkasje eller stopp i avløpet? Vi rykker ut raskt – også på kveld og helg.",
  },
];

const testimonials = [
  {
    name: "Kari Johansen",
    location: "Oslo",
    text: "Fantastisk service! De kom samme dag og fikset lekkasjen på under en time. Veldig fornøyd.",
    stars: 5,
  },
  {
    name: "Lars Eriksen",
    location: "Bærum",
    text: "Profesjonelle og ryddige. Nytt baderom ble levert til avtalt tid og pris. Kan varmt anbefales!",
    stars: 5,
  },
  {
    name: "Tone Andersen",
    location: "Asker",
    text: "Ringte klokken 22 med vannlekkasje. De var her innen 45 minutter. Livreddere!",
    stars: 5,
  },
];

export default function RorleggerDemo() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* DEMO banner */}
      <div className="bg-amber-400 text-amber-900 text-center py-2 text-sm font-bold tracking-wider uppercase">
        ⚠ Dette er en demo-nettside laget av{" "}
        <a href="/" className="underline hover:text-amber-950">MHH Digital</a>
        {" "}– ikke en ekte bedrift
      </div>

      {/* Navbar */}
      <header className="bg-slate-900 text-white px-6 py-4 sticky top-0 z-40 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">VVS</div>
            <div>
              <div className="font-extrabold text-lg leading-none">Berge VVS</div>
              <div className="text-slate-400 text-xs">& Rørlegging</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#tjenester" className="text-slate-300 hover:text-white transition-colors">Tjenester</a>
            <a href="#om-oss" className="text-slate-300 hover:text-white transition-colors">Om oss</a>
            <a href="#anmeldelser" className="text-slate-300 hover:text-white transition-colors">Anmeldelser</a>
            <a href="#kontakt" className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
              Ring oss
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/30 mb-5 uppercase tracking-wider">
              Autorisert rørlegger
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-5">
              Din pålitelige<br />
              <span className="text-orange-500">rørlegger</span><br />
              i Oslo
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
              Vi løser alle typer rørleggeroppdrag – fra akutte lekkasjer til
              komplette baderomsmontasjer. Rask respons, fast pris og garanti på arbeidet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#kontakt"
                className="bg-orange-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-600 transition-colors text-center shadow-lg shadow-orange-900/30"
              >
                Få gratis tilbud
              </a>
              <a
                href="tel:+4790000000"
                className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors text-center"
              >
                📞 +47 900 00 000
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "15+", label: "År med erfaring" },
              { value: "2000+", label: "Fornøyde kunder" },
              { value: "24/7", label: "Akutt utrykning" },
              { value: "100%", label: "Garanti på arbeid" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-orange-500 mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Hva vi tilbyr
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-3">Våre tjenester</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Vi hjelper deg med alt innen rørlegging – stort og smått.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group bg-slate-50 border border-slate-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 hover:border-orange-200 transition-all">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="om-oss" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-200 mb-4">
                Om oss
              </span>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                Over 15 år med erfaring<br />
                <span className="text-orange-500">du kan stole på</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-5">
                Berge VVS & Rørlegging har siden 2009 hjulpet tusenvis av kunder i
                Oslo-regionen med alt fra enkle reparasjoner til store
                installasjonsprosjekter.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Vi er autoriserte rørleggere med fagbrev og bred erfaring. Hos oss
                får du alltid fast pris før oppstart, ryddig arbeid og full garanti.
              </p>
              <ul className="space-y-3">
                {["Autorisert og forsikret", "Fast pris – ingen overraskelser", "Garanti på alt arbeid", "Tilgjengelig 24/7 for akuttoppdrag"].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 text-white rounded-3xl p-10">
              <h3 className="text-2xl font-extrabold mb-2">Trenger du hjelp nå?</h3>
              <p className="text-slate-400 mb-6">Vi rykker ut raskt – også på kveld og helg.</p>
              <a
                href="tel:+4790000000"
                className="flex items-center gap-3 bg-orange-500 text-white font-bold px-6 py-4 rounded-xl hover:bg-orange-600 transition-colors text-lg w-full justify-center mb-4"
              >
                📞 Ring nå: +47 900 00 000
              </a>
              <a
                href="mailto:post@bergevvs.no"
                className="flex items-center gap-3 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/20 transition-colors w-full justify-center text-sm"
              >
                ✉ post@bergevvs.no
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="anmeldelser" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Kundeomtaler
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-3">Hva kundene sier</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-slate-50 border border-slate-100 rounded-2xl p-7">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-orange-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-slate-400 text-sm">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-24 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20 mb-4">
            Ta kontakt
          </span>
          <h2 className="text-4xl font-extrabold mb-4">Få et gratis tilbud</h2>
          <p className="text-slate-400 mb-10">Beskriv jobben, så tar vi kontakt innen én time på dagtid.</p>
          <form className="space-y-4 text-left">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Ditt navn" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <input type="tel" placeholder="Telefon" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <input type="email" placeholder="E-postadresse" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <textarea rows={4} placeholder="Beskriv jobben du trenger hjelp med..." className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none" />
            <button type="submit" className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors text-lg">
              Send forespørsel
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm">
        <p>© 2026 Berge VVS & Rørlegging · Demo laget av <a href="/" className="text-orange-400 hover:text-orange-300">MHH Digital</a></p>
      </footer>
    </div>
  );
}
