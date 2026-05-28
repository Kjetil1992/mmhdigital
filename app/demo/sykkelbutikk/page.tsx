import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fjord Sykler – Demo",
  description: "Demo-nettside for sykkelbutikk laget av MHH Digital",
  robots: "noindex",
};

const bikes = [
  {
    name: "Trek Marlin 7 Gen 3",
    category: "Terrengsykkel",
    price: "8 999",
    tag: "Bestselger",
    tagColor: "bg-green-500",
    img: "https://www.sefiles.net/images/library/large/trek-marlin-7-gen-3--2024-iv-676694-1.png",
    desc: "29-tommers hjul, Shimano Deore 10-trinns gir og hydrauliske skivebremser. Perfekt for norske stier.",
  },
  {
    name: "Giant Escape 3",
    category: "Bysykkel",
    price: "4 999",
    tag: null,
    tagColor: "",
    img: "https://images2.giant-bicycles.com/b_white%2Cc_fill%2Cg_north%2Ch_400%2Cq_90%2Cw_600/jrgcqwan6iavei7arwfx/MY24-Escape-3_Color-A-Cold-Iron_B.jpg",
    desc: "Allsidig og lett hybridkkel med Shimano 21-trinns gir. Ideell for pendling og fritid.",
  },
  {
    name: "Trek Checkpoint ALR 5",
    category: "Grusykkel",
    price: "16 999",
    tag: "Nyhet",
    tagColor: "bg-blue-500",
    img: "https://spokesandsports.com/cdn/shop/files/CheckpointALR5-24-41640-B-Primary.webp?v=1752956430&width=1500",
    desc: "Aluminium-ramme med karbongaffel, GRX 1x11-trinns gir og hydrauliske bremser. Takler alt terreng.",
  },
  {
    name: "Specialized Turbo Vado 4.0",
    category: "El-sykkel",
    price: "39 990",
    tag: "Populær",
    tagColor: "bg-orange-500",
    img: "https://www.sefiles.net/images/library/large/specialized-turbo-vado-4.0-1194281-11.png",
    desc: "130 Nm Specialized-motor, 710 Wh batteri og opptil 130 km rekkevidde. Norges mest solgte el-sykkel.",
  },
  {
    name: "Woom Original 4",
    category: "Barnesykkel",
    price: "3 990",
    tag: null,
    tagColor: "",
    img: "https://assets.woom.com/cdn-cgi/image/w=2528,f=png/products/100885-0000-5007-side.png",
    desc: "Ultralett aluminiumsykkel for barn 6–9 år (110–125 cm). 7-trinns gir og ergonomiske håndtak.",
  },
  {
    name: "Trek Domane AL 4 Disc",
    category: "Landeveissykkel",
    price: "11 999",
    tag: null,
    tagColor: "",
    img: "https://www.sefiles.net/images/library/large/trek-domane-al-3-disc-copy-380928-110.jpg",
    desc: "IsoSpeed-dempingsteknologi, Shimano Tiagra 20-trinns gir og hydrauliske skivebremser. Komfort på lang distanse.",
  },
];

const services = [
  { icon: "🔧", title: "Sykkelverksted", desc: "Vi reparerer og vedlikeholder alle typer sykler. Rask service og fast pris." },
  { icon: "🎽", title: "Utstyr & klær", desc: "Et bredt utvalg av hjelmer, klær, lys og tilbehør fra ledende merker." },
  { icon: "🗺️", title: "Prøvetur", desc: "Test sykkelen på vår prøverute før du kjøper. Ingen forpliktelser." },
  { icon: "💳", title: "Leie & avbetaling", desc: "Lei sykkel for ferien eller betal over tid med vår fleksible finansiering." },
];

export default function SykkelbutikkDemo() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* DEMO banner */}
      <div className="bg-amber-400 text-amber-900 text-center py-2 text-sm font-bold tracking-wider uppercase">
        ⚠ Dette er en demo-nettside laget av{" "}
        <a href="/" className="underline hover:text-amber-950">MHH Digital</a>
        {" "}– ikke en ekte butikk
      </div>

      {/* Navbar */}
      <header className="bg-white border-b border-slate-100 px-6 py-4 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚵</span>
            <div>
              <span className="font-extrabold text-slate-900 text-lg tracking-tight">Fjord</span>
              <span className="font-extrabold text-green-600 text-lg tracking-tight">Sykler</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#sykler" className="text-slate-600 hover:text-green-600 transition-colors">Sykler</a>
            <a href="#tjenester" className="text-slate-600 hover:text-green-600 transition-colors">Tjenester</a>
            <a href="#om-oss" className="text-slate-600 hover:text-green-600 transition-colors">Om oss</a>
            <a href="#kontakt" className="text-slate-600 hover:text-green-600 transition-colors">Kontakt</a>
            <a href="#kontakt" className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Finn din sykkel
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-950 to-slate-900 text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #16a34a 0%, transparent 50%), radial-gradient(circle at 80% 20%, #15803d 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full border border-green-500/30 mb-6 uppercase tracking-wider">
              Norges beste sykkelutvalg
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-5">
              Finn sykkelen<br />
              <span className="text-green-400">du elsker</span><br />
              å sykle
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
              Fra terrengsykkel til el-sykkel – vi har noe for alle. Besøk oss
              i butikken eller bestill online med gratis frakt over 5 000 kr.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#sykler" className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition-colors text-center shadow-lg shadow-green-900/40">
                Se alle sykler
              </a>
              <a href="#tjenester" className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors text-center">
                Verksted & service
              </a>
            </div>
            <div className="mt-8 flex gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Gratis frakt over 5 000 kr</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> 30 dagers retur</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-8xl mb-3">🚵</div>
              <div className="font-bold text-lg">Fjord Trail 29</div>
              <div className="text-green-400 font-extrabold text-2xl mt-1">12 990 kr</div>
              <div className="mt-3 bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg inline-block">Bestselger</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-5xl mb-2">⚡</div>
              <div className="text-sm font-semibold">El-sykler</div>
              <div className="text-slate-400 text-xs mt-0.5">fra 19 990 kr</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-5xl mb-2">🏆</div>
              <div className="text-sm font-semibold">Landevei</div>
              <div className="text-slate-400 text-xs mt-0.5">fra 8 990 kr</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category pills */}
      <section className="bg-slate-50 border-b border-slate-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex gap-3 flex-wrap">
          {["Alle", "Terrengsykkel", "Bysykkel", "El-sykkel", "Grusykkel", "Landeveissykkel", "Barnesykkel"].map((cat, i) => (
            <button key={cat} className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${i === 0 ? "bg-green-600 text-white border-green-600" : "bg-white text-slate-600 border-slate-200 hover:border-green-400 hover:text-green-600"}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Bikes grid */}
      <section id="sykler" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900">Våre sykler</h2>
              <p className="text-slate-500 mt-1">Håndplukket utvalg for alle nivåer og behov</p>
            </div>
            <span className="text-slate-400 text-sm">{bikes.length} sykler</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bikes.map((bike) => (
              <div key={bike.name} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                <div className="bg-slate-50 relative h-48">
                  <Image
                    src={bike.img}
                    alt={bike.name}
                    fill
                    className="object-contain p-4"
                  />
                  {bike.tag && (
                    <span className={`absolute top-3 right-3 ${bike.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                      {bike.tag}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">{bike.category}</div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2">{bike.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{bike.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-slate-900">{bike.price} <span className="text-base font-normal text-slate-400">kr</span></span>
                    <button className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Kjøp nå
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-green-200 mb-4">Mer enn bare sykler</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Tjenester</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Vi hjelper deg hele veien – fra kjøp til vedlikehold.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-md hover:border-green-200 transition-all">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + CTA */}
      <section id="om-oss" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-green-200 mb-4">Om Fjord Sykler</span>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                Din lokale<br />
                <span className="text-green-600">sykkelekspert</span><br />
                siden 2008
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-5">
                Fjord Sykler startet som en liten garasjebutikk med én lidenskap:
                sykkel. I dag er vi byens største spesialistbutikk med over 200 modeller på lager.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                Alle ansatte er sykkelentusiaster som bruker produktene vi selger.
                Kom innom for en uforpliktende prat – vi hjelper deg å finne riktig sykkel.
              </p>
              <div className="flex gap-8">
                {[["200+", "Modeller på lager"], ["4.9★", "Google-vurdering"], ["16 år", "Erfaring"]].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div className="text-2xl font-extrabold text-green-600">{val}</div>
                    <div className="text-slate-500 text-sm">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-3xl p-10">
              <h3 className="text-2xl font-extrabold mb-2">Usikker på hvilken sykkel?</h3>
              <p className="text-green-100 mb-6 leading-relaxed">Book en gratis rådgivningstime med en av våre eksperter. Vi hjelper deg å finne den perfekte sykkelen for ditt bruk og budsjett.</p>
              <a href="#kontakt" className="inline-block bg-white text-green-700 font-bold px-6 py-3.5 rounded-xl hover:bg-green-50 transition-colors w-full text-center mb-3">
                Book gratis rådgivning
              </a>
              <p className="text-green-200 text-sm text-center">📍 Storgata 12, Oslo · Man–Lør 10–18</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-20 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-3">Ta kontakt</h2>
          <p className="text-slate-400 mb-10">Spørsmål om en sykkel, verkstedtime eller noe annet? Vi svarer raskt.</p>
          <form className="space-y-4 text-left">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Navn" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 w-full" />
              <input type="email" placeholder="E-post" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 w-full" />
            </div>
            <textarea rows={4} placeholder="Hva kan vi hjelpe deg med?" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
            <button type="submit" className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors text-lg">
              Send melding
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm">
        <p>© 2026 Fjord Sykler · Demo laget av <a href="/" className="text-green-400 hover:text-green-300">MHH Digital</a></p>
      </footer>
    </div>
  );
}
