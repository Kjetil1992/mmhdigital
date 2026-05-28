export default function Hero() {
  return (
    <section
      id="hjem"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Blobs */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <span className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            MHH Digital
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Vi bygger digitale løsninger{" "}
            <span className="text-blue-600">som får bedrifter til å vokse</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
            MHHDigital utvikler moderne nettsider og kraftige apper for bedrifter
            som vil skille seg ut. Vi kombinerer design, teknologi og strategi
            for løsninger som faktisk leverer resultater.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200 text-center"
            >
              Start et prosjekt
            </a>
            <a
              href="#tjenester"
              className="bg-white text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 active:scale-95 transition-all text-center"
            >
              Se tjenester ↓
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
              Norsk selskap
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
              Skreddersydde løsninger
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
              Rask leveranse
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hidden lg:flex flex-col gap-4">
          {/* Browser mockup */}
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Browser bar */}
            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 border border-slate-200 ml-2">
                mhhdigital.no
              </div>
            </div>
            {/* Fake content */}
            <div className="p-5 space-y-3">
              <div className="h-5 bg-slate-900 rounded-lg w-2/3" />
              <div className="h-3 bg-slate-200 rounded w-full" />
              <div className="h-3 bg-slate-200 rounded w-5/6" />
              <div className="flex gap-2 mt-4">
                <div className="h-8 bg-blue-600 rounded-lg w-28" />
                <div className="h-8 bg-slate-100 rounded-lg w-24 border border-slate-200" />
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg mb-2" />
                    <div className="h-2.5 bg-slate-200 rounded w-3/4 mb-1.5" />
                    <div className="h-2 bg-slate-100 rounded w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating metric cards */}
          <div className="flex gap-4">
            <div className="flex-1 bg-white rounded-xl shadow-md border border-slate-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-bold text-lg">↑</div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Konvertering</div>
                <div className="text-lg font-extrabold text-slate-900">+38%</div>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-xl shadow-md border border-slate-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-lg">⚡</div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Lastetid</div>
                <div className="text-lg font-extrabold text-slate-900">&lt; 1s</div>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-xl shadow-md border border-slate-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 font-bold text-lg">★</div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Design</div>
                <div className="text-lg font-extrabold text-slate-900">Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
