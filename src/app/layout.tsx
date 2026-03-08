import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "MAPL Health | The Platform That Powers Independent Healthcare",
  description: "Connecting collection sites, pharmacies, labs, telehealth, imaging & DPC through one diagnostics marketplace. A subsidiary of ARCpoint Inc. (TSXV: ARC).",
  keywords: "healthcare marketplace, diagnostics, lab testing, telehealth, DPC, pharmacy, MAPL Health, ARCpoint",
  openGraph: {
    title: "MAPL Health | The Platform That Powers Independent Healthcare",
    description: "Connecting collection sites, pharmacies, labs, telehealth, imaging & DPC through one diagnostics marketplace.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
