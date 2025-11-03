import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "RSD Whisky",
  description: "Rutherford, Shirlaw & Denholm Ltd — whisky advisory and prestige bottlings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <TopNav />
        <main className="mx-auto max-w-6xl px-4 py-10">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
