import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MMH Digital – Nettsider og apper for bedrifter",
  description:
    "MMH Digital leverer profesjonelle nettsider og mobilapper tilpasset din bedrift. Vi hjelper deg med å vokse digitalt.",
  metadataBase: new URL("https://mmhdigital.no"),
  openGraph: {
    title: "MMH Digital – Nettsider og apper for bedrifter",
    description:
      "Vi bygger profesjonelle digitale løsninger for norske bedrifter.",
    url: "https://mmhdigital.no",
    siteName: "MMH Digital",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
