export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#hjem" className="font-bold text-xl text-white tracking-tight">
              MHH<span className="text-blue-400">digital</span>
            </a>
            <p className="text-sm mt-1">Nettsider og apper for norske bedrifter</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#hjem" className="hover:text-white transition-colors">Hjem</a>
            <a href="#tjenester" className="hover:text-white transition-colors">Tjenester</a>
            <a href="#om-oss" className="hover:text-white transition-colors">Om oss</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
          </nav>

          <p className="text-sm">
            &copy; {year} MHH Digital. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
