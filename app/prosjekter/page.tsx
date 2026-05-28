import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prosjekter – MHH Digital",
  description: "Se hva vi har bygget for våre kunder.",
};

export default function Prosjekter() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0">
        {/* Header */}
        <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 text-center px-6">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200 mb-4">
            Hva vi har laget
          </span>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Prosjekter</h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Her er et utvalg av løsninger vi har utviklet for våre kunder.
          </p>
        </section>

        {/* Pulse project */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Info */}
              <div className="lg:sticky lg:top-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                    <Image
                      src="/pulse/icon.png"
                      alt="Pulse app ikon"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Mobilapp</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Pulse</h2>
                  </div>
                </div>

                <p className="text-slate-500 text-lg leading-relaxed mb-6">
                  Denne appen laget vi for en kunde som ønsket en velfungerende
                  treningsapp tilpasset sine behov.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["React Native", "Mobilapp", "Treningstracker", "iOS & Android"].map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="/#kontakt"
                  className="inline-block bg-blue-600 text-white font-semibold px-7 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Vil du ha noe lignende?
                </a>
              </div>

              {/* Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-2 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                  <Image
                    src="/pulse/styrke-app.png"
                    alt="Pulse – logg økt styrketrening"
                    width={800}
                    height={900}
                    className="object-cover w-full"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-video">
                  <Image
                    src="/pulse/styrke.jpg"
                    alt="Pulse – styrketrening"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-video">
                  <Image
                    src="/pulse/loping.jpg"
                    alt="Pulse – løping"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="col-span-2 rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-video">
                  <Image
                    src="/pulse/sykkel.jpg"
                    alt="Pulse – sykling"
                    width={800}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo sites */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block bg-amber-50 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-amber-200 mb-4">
                Demo-nettsider
              </span>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-3">Inspirasjon</h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Her viser vi eksempler på nettsider vi kan lage for ulike bransjer.
                Dette er <strong>demoer</strong> – ikke ekte bedrifter.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Rørlegger demo */}
              <div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="bg-slate-900 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-slate-700 rounded px-3 py-1 text-xs text-slate-400">
                    bergevvs.no
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200 uppercase tracking-wide">Demo</span>
                    <span className="text-xs text-slate-400">Rørlegger / VVS</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-1">Berge VVS & Rørlegging</h3>
                  <p className="text-slate-500 text-sm mb-5">
                    Profesjonell nettside for rørleggerbedrift med tjenester, anmeldelser og kontaktskjema.
                  </p>
                  <a
                    href="/demo/rorlegger"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Se demo →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white text-center px-6">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Har du et prosjekt i tankene?
          </h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            Vi hjelper deg med å gå fra idé til ferdig løsning. Ta kontakt for en uforpliktende prat.
          </p>
          <a
            href="/#kontakt"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Ta kontakt
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
