"use client";

import { useState } from "react";

const squad = [
  { number: 1,  name: "Kristian Berg",    pos: "Keeper",     goals: 0,  assists: 0  },
  { number: 3,  name: "Magnus Dahl",      pos: "Forsvar",    goals: 1,  assists: 2  },
  { number: 5,  name: "Tobias Lund",      pos: "Forsvar",    goals: 0,  assists: 1  },
  { number: 6,  name: "Emil Strand",      pos: "Forsvar",    goals: 2,  assists: 3  },
  { number: 8,  name: "Jonas Hagen",      pos: "Midtbane",   goals: 4,  assists: 6  },
  { number: 10, name: "Anders Moe",       pos: "Midtbane",   goals: 7,  assists: 5  },
  { number: 14, name: "Henrik Vold",      pos: "Midtbane",   goals: 3,  assists: 8  },
  { number: 7,  name: "Sander Eide",      pos: "Angrep",     goals: 9,  assists: 4  },
  { number: 9,  name: "Lars Bakke",       pos: "Angrep",     goals: 12, assists: 3  },
  { number: 11, name: "Ola Nygård",       pos: "Angrep",     goals: 6,  assists: 7  },
  { number: 17, name: "Fredrik Holm",     pos: "Angrep",     goals: 5,  assists: 2  },
];

const matches = [
  { date: "08.06", time: "15:00", home: "Fjord FK",      away: "Bjørn IL",      result: null,    location: "Fjord Stadion" },
  { date: "15.06", time: "13:00", home: "Solberg FK",    away: "Fjord FK",      result: null,    location: "Solberg Idrettspark" },
  { date: "22.06", time: "16:00", home: "Fjord FK",      away: "Ørn BK",        result: null,    location: "Fjord Stadion" },
  { date: "29.06", time: "14:00", home: "Viken FK",      away: "Fjord FK",      result: null,    location: "Viken Arena" },
];

const results = [
  { date: "25.05", home: "Fjord FK",   away: "Dal FK",      score: "3–1", won: true  },
  { date: "18.05", home: "Kvik IL",    away: "Fjord FK",    score: "0–2", won: true  },
  { date: "11.05", home: "Fjord FK",   away: "Lyn FK",      score: "1–2", won: false },
  { date: "04.05", home: "Fjord FK",   away: "Brage FK",    score: "4–0", won: true  },
  { date: "27.04", home: "Ravn IL",    away: "Fjord FK",    score: "1–1", won: null  },
];

const trainings = [
  { day: "Mandag",   time: "18:00–19:30", type: "Teknisk trening",     location: "Fjord Stadion" },
  { day: "Onsdag",   time: "18:00–19:30", type: "Taktikk og pasning",  location: "Fjord Stadion" },
  { day: "Fredag",   time: "17:00–18:30", type: "Kampforberedelse",    location: "Fjord Stadion" },
];

const posColors: Record<string, string> = {
  Keeper:   "bg-yellow-100 text-yellow-700",
  Forsvar:  "bg-blue-100 text-blue-700",
  Midtbane: "bg-green-100 text-green-700",
  Angrep:   "bg-red-100 text-red-700",
};

export default function LagApp() {
  const [activeTab, setActiveTab] = useState<"oversikt" | "spillere" | "kamper" | "trening">("oversikt");

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      {/* DEMO banner */}
      <div className="bg-amber-400 text-amber-900 text-center py-2 text-sm font-bold tracking-wider uppercase">
        ⚠ Dette er en demo-app laget av{" "}
        <a href="/" className="underline hover:text-amber-950">MHH Digital</a>
        {" "}– ikke et ekte lag
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-green-700 text-white shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
              <span className="text-green-700 font-extrabold text-lg">FK</span>
            </div>
            <div>
              <div className="font-extrabold text-xl leading-none">Fjord FK</div>
              <div className="text-green-200 text-xs mt-0.5">4. divisjon · Avdeling 3</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-green-200">Sesong 2026</div>
            <div className="font-bold text-lg">4. plass</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-2xl mx-auto px-4 flex gap-1 pb-0">
          {(["oversikt", "spillere", "kamper", "trening"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-semibold rounded-t-lg capitalize transition-colors ${
                activeTab === tab
                  ? "bg-slate-100 text-green-800"
                  : "text-green-100 hover:text-white hover:bg-green-600"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-5">

        {/* OVERSIKT */}
        {activeTab === "oversikt" && (
          <>
            {/* Tabell-posisjon */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-green-700 text-white px-5 py-3 font-bold text-sm uppercase tracking-wide">
                Seriestilling
              </div>
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
                  <tr>
                    <th className="px-4 py-2 text-left">#</th>
                    <th className="px-4 py-2 text-left">Lag</th>
                    <th className="px-3 py-2 text-center">K</th>
                    <th className="px-3 py-2 text-center">V</th>
                    <th className="px-3 py-2 text-center">U</th>
                    <th className="px-3 py-2 text-center">T</th>
                    <th className="px-3 py-2 text-center font-bold text-green-700">P</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { pos: 1, name: "Solberg FK",  k: 12, v: 9, u: 1, t: 2, p: 28 },
                    { pos: 2, name: "Ørn BK",      k: 12, v: 8, u: 2, t: 2, p: 26 },
                    { pos: 3, name: "Dal FK",       k: 12, v: 7, u: 2, t: 3, p: 23 },
                    { pos: 4, name: "Fjord FK",     k: 12, v: 6, u: 3, t: 3, p: 21, highlight: true },
                    { pos: 5, name: "Viken FK",     k: 12, v: 5, u: 2, t: 5, p: 17 },
                    { pos: 6, name: "Bjørn IL",     k: 12, v: 4, u: 1, t: 7, p: 13 },
                  ].map((row) => (
                    <tr key={row.pos} className={row.highlight ? "bg-green-50 font-semibold" : ""}>
                      <td className="px-4 py-2.5 text-slate-500">{row.pos}</td>
                      <td className="px-4 py-2.5 text-slate-900 flex items-center gap-2">
                        {row.highlight && <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />}
                        {row.name}
                      </td>
                      <td className="px-3 py-2.5 text-center text-slate-500">{row.k}</td>
                      <td className="px-3 py-2.5 text-center text-slate-500">{row.v}</td>
                      <td className="px-3 py-2.5 text-center text-slate-500">{row.u}</td>
                      <td className="px-3 py-2.5 text-center text-slate-500">{row.t}</td>
                      <td className="px-3 py-2.5 text-center font-bold text-green-700">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Neste kamp */}
            <div className="bg-gradient-to-br from-green-700 to-green-800 text-white rounded-2xl p-5 shadow-sm">
              <div className="text-green-200 text-xs font-bold uppercase tracking-wider mb-3">Neste kamp</div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-center flex-1">
                  <div className="font-extrabold text-lg">Fjord FK</div>
                  <div className="text-green-200 text-xs mt-0.5">Hjemme</div>
                </div>
                <div className="text-center px-4">
                  <div className="bg-white/20 rounded-xl px-4 py-2 font-extrabold text-2xl">VS</div>
                  <div className="text-green-200 text-xs mt-1">08.06 · 15:00</div>
                </div>
                <div className="text-center flex-1">
                  <div className="font-extrabold text-lg">Bjørn IL</div>
                  <div className="text-green-200 text-xs mt-0.5">Borte</div>
                </div>
              </div>
              <div className="text-center text-green-200 text-sm">📍 Fjord Stadion</div>
            </div>

            {/* Siste resultater */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-green-700 text-white px-5 py-3 font-bold text-sm uppercase tracking-wide">
                Siste resultater
              </div>
              <div className="divide-y divide-slate-50">
                {results.map((r, i) => (
                  <div key={i} className="px-5 py-3 flex items-center justify-between">
                    <div className="text-slate-400 text-xs w-12">{r.date}</div>
                    <div className="flex-1 text-sm text-right font-medium text-slate-700">{r.home}</div>
                    <div className={`mx-4 px-3 py-1 rounded-lg font-extrabold text-sm min-w-[60px] text-center ${
                      r.won === true ? "bg-green-100 text-green-700" :
                      r.won === false ? "bg-red-100 text-red-700" :
                      "bg-slate-100 text-slate-600"
                    }`}>
                      {r.score}
                    </div>
                    <div className="flex-1 text-sm font-medium text-slate-700">{r.away}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Toppscorere */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-green-700 text-white px-5 py-3 font-bold text-sm uppercase tracking-wide">
                Toppscorere
              </div>
              <div className="divide-y divide-slate-50">
                {[...squad].sort((a, b) => b.goals - a.goals).slice(0, 5).map((p, i) => (
                  <div key={p.name} className="px-5 py-3 flex items-center gap-4">
                    <div className="w-6 text-slate-400 font-bold text-sm">{i + 1}</div>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-sm flex-shrink-0">
                      {p.number}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 text-sm">{p.name}</div>
                      <div className="text-slate-400 text-xs">{p.pos}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-green-700">{p.goals} mål</div>
                      <div className="text-xs text-slate-400">{p.assists} assist</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* SPILLERE */}
        {activeTab === "spillere" && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-green-700 text-white px-5 py-3 font-bold text-sm uppercase tracking-wide">
              Spillertropp ({squad.length} spillere)
            </div>
            <div className="divide-y divide-slate-50">
              {squad.map((p) => (
                <div key={p.name} className="px-5 py-3.5 flex items-center gap-4">
                  <div className="w-9 h-9 bg-green-700 text-white rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                    {p.number}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900">{p.name}</div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${posColors[p.pos]}`}>
                      {p.pos}
                    </span>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-bold text-green-700">{p.goals} mål</div>
                    <div className="text-slate-400 text-xs">{p.assists} assist</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* KAMPER */}
        {activeTab === "kamper" && (
          <>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-green-700 text-white px-5 py-3 font-bold text-sm uppercase tracking-wide">
                Kommende kamper
              </div>
              <div className="divide-y divide-slate-50">
                {matches.map((m, i) => (
                  <div key={i} className="px-5 py-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400">{m.date} · {m.time}</span>
                      <span className="text-xs text-slate-400">📍 {m.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`font-bold text-sm ${m.home === "Fjord FK" ? "text-green-700" : "text-slate-700"}`}>
                        {m.home}
                      </span>
                      <span className="bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-lg">VS</span>
                      <span className={`font-bold text-sm ${m.away === "Fjord FK" ? "text-green-700" : "text-slate-700"}`}>
                        {m.away}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-slate-700 text-white px-5 py-3 font-bold text-sm uppercase tracking-wide">
                Resultater
              </div>
              <div className="divide-y divide-slate-50">
                {results.map((r, i) => (
                  <div key={i} className="px-5 py-4">
                    <div className="text-xs text-slate-400 mb-1">{r.date}</div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-700 text-sm">{r.home}</span>
                      <span className={`font-extrabold px-4 py-1.5 rounded-xl text-sm ${
                        r.won === true ? "bg-green-100 text-green-700" :
                        r.won === false ? "bg-red-100 text-red-700" :
                        "bg-slate-100 text-slate-600"
                      }`}>
                        {r.score}
                      </span>
                      <span className="font-semibold text-slate-700 text-sm">{r.away}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* TRENING */}
        {activeTab === "trening" && (
          <>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-green-700 text-white px-5 py-3 font-bold text-sm uppercase tracking-wide">
                Treningsplan – Juni 2026
              </div>
              <div className="divide-y divide-slate-50">
                {trainings.map((t) => (
                  <div key={t.day} className="px-5 py-4 flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-50 rounded-xl flex flex-col items-center justify-center flex-shrink-0 border border-green-100">
                      <span className="text-green-700 font-extrabold text-xs">{t.day.slice(0, 3).toUpperCase()}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-900">{t.type}</div>
                      <div className="text-slate-500 text-sm mt-0.5">⏰ {t.time}</div>
                      <div className="text-slate-400 text-xs mt-0.5">📍 {t.location}</div>
                    </div>
                    <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                      Bekreftet
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h3 className="font-bold text-slate-900 mb-3">Oppmøte denne uken</h3>
              <div className="space-y-2">
                {squad.slice(0, 6).map((p) => {
                  const attending = Math.random() > 0.25;
                  return (
                    <div key={p.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="w-6 h-6 bg-green-700 text-white rounded-full text-xs flex items-center justify-center font-bold">{p.number}</span>
                        {p.name}
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${attending ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                        {attending ? "✓ Kommer" : "✗ Melder forfall"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-400 py-8">
        Demo laget av <a href="/" className="text-green-600 hover:text-green-700">MHH Digital</a>
      </footer>
    </div>
  );
}
