import './globals.css';
import { SITE } from '@/config/site';
import TopNav from '@/components/TopNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: SITE.name,
  description: 'RSD Whisky — Advisory, sourcing and prestige bottlings.',
  icons: { icon: '/images/brand/rsd-logo.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <TopNav />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
