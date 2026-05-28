const steps = [
  {
    number: "01",
    title: "Prat",
    description: "Vi starter med en uforpliktende prat om dine behov, mål og ideer.",
    color: "bg-blue-600",
  },
  {
    number: "02",
    title: "Plan",
    description: "Vi lager en konkret plan med tidsramme, omfang og prisestimat.",
    color: "bg-indigo-600",
  },
  {
    number: "03",
    title: "Design",
    description: "Du godkjenner designet før vi skriver en linje kode.",
    color: "bg-violet-600",
  },
  {
    number: "04",
    title: "Utvikling",
    description: "Vi bygger løsningen med moderne teknologi og holder deg løpende oppdatert.",
    color: "bg-purple-600",
  },
  {
    number: "05",
    title: "Lansering",
    description: "Vi lanserer, tester og sørger for at alt fungerer som det skal.",
    color: "bg-fuchsia-600",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20 mb-4">
            Slik jobber vi
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Fra idé til ferdig løsning
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            En enkel og transparent prosess der du alltid vet hva som skjer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-8px)] w-full h-px bg-white/10 z-0" />
              )}
              <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center text-white font-extrabold text-sm mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
